package com.pjw.bootStart.config.datasource;


import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;



@Configuration

//어떤 패키지에서 java mapper들을 scan할 것인가를 최상위에 annotation으로 정의하여 주고 있다. 
@MapperScan(basePackages="com.pjw.bootStart.**.mapper" ,sqlSessionFactoryRef="mainSessionFactory")
//TransactionManager를 적용할 것인지에 대해 설정하는 annotation 이다.
@EnableTransactionManagement
public class MainDbConfig {
	
	@Bean(name="mainDataSource")
	@Primary
	@ConfigurationProperties(prefix="spring.datasource.main")
	DataSource mainDataSource() {
		return DataSourceBuilder.create().build();
	}
	
	@Bean(name="mainSessionFactory")
	@Primary
	SqlSessionFactory sqlSessionFactory(@Qualifier("mainDataSource") DataSource mainDataSource, ApplicationContext applicationContext) throws Exception{
		final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
		sessionFactory.setDataSource(mainDataSource);
		
		sessionFactory.setMapperLocations(applicationContext.getResources("classpath:/mapper/main/**/*.xml"));
		sessionFactory.setConfigLocation(applicationContext.getResource("classpath:/mapper/config/MainMibatisConfig.xml"));
		
		return sessionFactory.getObject();
	}
	
	@Bean(name="mainSqlSessionTemplate")
	@Primary
	SqlSessionTemplate sqlSessionTemplate(SqlSessionFactory mainSessionFactory) throws Exception{
		return new SqlSessionTemplate(mainSessionFactory);
	}
	
    @Bean(name = "mainTransactionManager")
	@Primary
    PlatformTransactionManager transactionManager(@Qualifier("mainDataSource") DataSource mainDataSource) {
        return new DataSourceTransactionManager(mainDataSource);
    }
}