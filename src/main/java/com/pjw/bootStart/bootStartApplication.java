package com.pjw.bootStart;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
@ServletComponentScan
public class bootStartApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(bootStartApplication.class, args);
	}
	
   @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(bootStartApplication.class);
    }

}
