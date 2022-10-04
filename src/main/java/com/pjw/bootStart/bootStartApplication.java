package com.pjw.bootStart;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class bootStartApplication {

	public static void main(String[] args) {
		SpringApplication.run(bootStartApplication.class, args);
	}

}
