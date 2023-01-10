package com.pjw.bootStart.config.utill;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpUtils;

import org.aspectj.weaver.patterns.ThisOrTargetAnnotationPointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.context.request.ServletWebRequest;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ServletUtil {
	public  static  HttpServletRequest getRequest(){
		HttpServletRequest request =null;
		ServletRequestAttributes servletRequestAttribute = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
		request = servletRequestAttribute.getRequest();
		return request;
	}
	
	public  static  HttpServletResponse getResponse(){
		HttpServletResponse response =null;
		ServletRequestAttributes servletRequestAttribute = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
		response = servletRequestAttribute.getResponse();
		System.out.println("sdaqqqqsd");
		return response;
	}

}
