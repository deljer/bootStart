package com.pjw.bootStart.config.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/** AOP 설정하기 위한 클래스 
 * springboot application.class 에서 @EnableAspectJAutoProxy 설정이 필요함 
 * @author pjw
 * @version 1.0
 */
@Aspect
@Component
public class AspectAop {
	private static final Logger log = LoggerFactory.getLogger(AspectAop.class);
	
	@Pointcut("execution(* com.pjw.bootStart.*.service.*.*(..))")
	private void serviceExecution() {}
	
	@Around("serviceExecution()")
	public Object logging(ProceedingJoinPoint joinPoint) throws Throwable {
		 Object obj =  joinPoint.proceed();
		 log.info(String.valueOf(obj) );
		return obj;
	}
	
	
}
