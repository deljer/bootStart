package com.pjw.bootStart.config.interceptor;

import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

/** interceptor 설정  </br>
 *  HandlerInterceptorAdapter - deprecated</br>
 *  --WebMvcConfig - addinterceptor 필요 
 * @author pjw
 * @version 1.0
 */

@Component
public class RequestLogInterceptor implements HandlerInterceptor{
	
	private static final Logger log = LoggerFactory.getLogger(RequestLogInterceptor.class);

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		   
		log.info("============================== REQUEST_START ==============================");
		log.info(" Request URI \t:  " + request.getRequestURI());
		Enumeration<String> paramNames = request.getParameterNames();
		
		while (paramNames.hasMoreElements()) {
			String key = (String) paramNames.nextElement();  
			String value = request.getParameter(key);
			log.info("# RequestParameter: " + key + "=" + value + "");
		}
		log.info("==================================================================== ");

		
		return true;
	}
	
	
	
	
	
	
	
	
}
