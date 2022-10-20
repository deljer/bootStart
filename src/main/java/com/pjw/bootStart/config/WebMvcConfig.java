package com.pjw.bootStart.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.pjw.bootStart.config.interceptor.RequestLogInterceptor;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class WebMvcConfig implements WebMvcConfigurer {

	/** interceptor 추가 시  필요 **/
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(new RequestLogInterceptor())
	     		.addPathPatterns("/*"); // 해당 경로에 접근하기 전에 인터셉터가 가로챈다.
	     		//.excludePathPatterns("/boards"); // 해당 경로는 인터셉터가 가로채지 않는다.
	}
	
	public void addViewControllers(ViewControllerRegistry registry) {
		// /로 접속시 index.jsp 로 이동 
		registry.addViewController("/").setViewName("forward:/index.jsp");
	}

	/* default view 위치및 종류 설정 
	 * view 보낼때 prefix = /WEB-INF/views/ postfix .jsp
	 * 사용예 /업무폴더위치/화면파일명 => /WEB-INF/views/업무폴더위치/화면파일명.jsp 로 치환 
	 * */
	@Override
	public void configureViewResolvers( ViewResolverRegistry registry )	{
		registry.jsp( "/WEB-INF/views/", ".jsp" );
		WebMvcConfigurer.super.configureViewResolvers( registry );
	}
	
	
	
 /** xss 공격을 방어 하기 위한 설정 <br/>
  * @EnableWebMvc 를 사용할시 extendMessageConverters를 통해<br>
  * converter중 메세지 컨버터를 가져와 obejct mapper 를 MappingJackson2HttpMessageConverter에 적용
  */
	/*
	@Override
	public void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
		ObjectMapper objectMapper = mapper.copy();
        objectMapper.getFactory().setCharacterEscapes(new XssProtectSupport());
        MappingJackson2HttpMessageConverter a = new MappingJackson2HttpMessageConverter(objectMapper);
        for(HttpMessageConverter<?> conv : converters) {
        	if(conv.getClass() ==MappingJackson2HttpMessageConverter.class) {
        		((MappingJackson2HttpMessageConverter) conv).setObjectMapper(objectMapper);
        	}
        }
        WebMvcConfigurer.super.extendMessageConverters(converters);
	}
	*/
	
}
