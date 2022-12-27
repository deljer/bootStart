package com.pjw.bootStart.config.websocket;

import java.util.ArrayList;

import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@ServerEndpoint("/websocket")
public class Websocket {
	
	private static ArrayList<Session> webSessionList = new ArrayList<Session>();
	
	
	/**handleOpen
	 * 웹소켓 사용자 연결 성립하는 경우 호출
	 * */
	@OnOpen
	public void handleOpen(Session session) {		
		  if (session != null) {
	            String sessionId = session.getId();
	            webSessionList.add(session);
	            // 웹소켓 연결 성립되어 있는 모든 사용자에게 메시지 전송
	        }
		
	}
	
	/**
     * 웹소켓 연결 성립되어 있는 모든 사용자에게 메시지 전송
     */
    private boolean sendMessageToAll(String message) {
        if (webSessionList == null) {
            return false;
        }

        int sessionCount = webSessionList.size();
        if (sessionCount < 1) {
            return false;
        }

        Session singleSession = null;

        for (int i = 0; i < sessionCount; i++) {
            singleSession = webSessionList.get(i);
            
            if (singleSession == null) {
                continue;
            }

            if (!singleSession.isOpen()) {
                continue;
            }

            webSessionList.get(i).getAsyncRemote().sendText(message);
        }

        return true;
    }
	
	
	
	
	
	
}
