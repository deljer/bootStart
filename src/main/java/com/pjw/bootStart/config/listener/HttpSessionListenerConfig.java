package com.pjw.bootStart.config.listener;

import java.util.concurrent.atomic.AtomicInteger;

import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.pjw.bootStart.config.utill.ServletUtil;

import lombok.extern.slf4j.Slf4j;


/**.jar 파일이 아닌 war 등으로 실행시 인식이안될경우가 있어서 
 *  PROPERTIES 설정이 아닌 스프링 설정이 아닌 sestion listener 를 통해 사용한다. 
 * */
/**@Component 의 경우  클래스를 스프링 ioc 컨테이너에 스프링 구성 이라는걸 등록된다.*/
/**@Configurable의 경우  하위 @bean클래스를 스프링 ioc 컨테이너에 스프링 구성이라는걸 등록된다.*/
/*HttpSessionListener 세션 컨트롤 listner
 * */
@Component
@Slf4j
public class HttpSessionListenerConfig implements HttpSessionListener  {

	/* AtomicInteger
	 * synchronized 기법과 유사한 정수 래핑 클래스
	 * 다중 작업중에 쓰래드 락기법으로 안정적임
	 * */
    private final AtomicInteger activeSessions;
    
    @Value("${servlet.session.timeout}")
    private int  sessionTime;
    
    
    public HttpSessionListenerConfig() {
        super();
        activeSessions = new AtomicInteger();
    }


    /**
     * This method will be called when session created
     * @param sessionEvent
     */
    @Override
    public void sessionCreated(HttpSessionEvent sessionEvent) {
    	HttpSession session =  sessionEvent.getSession();
    	activeSessions.incrementAndGet();
        session.setMaxInactiveInterval(sessionTime);
        log.info("session_id = "+sessionEvent.getSession().getId().toString()+"이 시작 현재 세션 수 "+String.valueOf(activeSessions.get()) );
        
    }

    /*세션 종료시 실행 되는 event*/
    @Override
    public void sessionDestroyed(HttpSessionEvent sessionEvent) {
        activeSessions.decrementAndGet();
        log.info("session_id = "+sessionEvent.getSession().getId().toString()+"이 세션 만료됨 현재 세션 수 "+String.valueOf(activeSessions.get()));
    }
    
}
