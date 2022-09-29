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

/*SUB-DB 연결 
 * 늘려가려면 패키지 구조 추가 필요 
 * */
@Configuration
//어떤 패키지에서 java mapper들을 scan할 것인가를 최상위에 annotation으로 정의하여 주고 있다. 
@MapperScan(basePackages="com.pjw.bootStart.*.mapper.sub" ,sqlSessionFactoryRef="subSessionFactory")
//TransactionManager를 적용할 것인지에 대해 설정하는 annotation 이다.
@EnableTransactionManagement
public class SubDbConfig {
	
	@Bean(name="subDataSource")
	@Primary
	@ConfigurationProperties(prefix="spring.datasource.sub")
	public DataSource mainDataSource() {
		return DataSourceBuilder.create().build();
	}
	
	@Bean(name="subSessionFactory")
	public SqlSessionFactory sqlSessionFactory(@Qualifier("subDataSource") DataSource subDataSource, ApplicationContext applicationContext) throws Exception{
		final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
		sessionFactory.setDataSource(subDataSource);
		//resouce의 어느 mapper.xml 을 가져올지 선언
		sessionFactory.setMapperLocations(applicationContext.getResources("classpath:/mapper/sub/**/*.xml"));
		//mybatis설정
		sessionFactory.setConfigLocation(applicationContext.getResource("classpath:/mapper/config/SubMibatisConfig.xml"));
		return sessionFactory.getObject();
	}
	
	@Bean(name="subSqlSessionTemplate")
	public SqlSessionTemplate sqlSessionTemplate(SqlSessionFactory subSessionFactory) throws Exception{
		return new SqlSessionTemplate(subSessionFactory);
	}
	
    @Bean(name = "subTransactionManager")
    public PlatformTransactionManager transactionManager(@Qualifier("subDataSource") DataSource subDataSource) {
        return new DataSourceTransactionManager(subDataSource);
    }
}