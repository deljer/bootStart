package com.pjw.bootStart.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pjw.bootStart.config.utill.XssProtectSupportUtill;

import lombok.RequiredArgsConstructor;

/** Xss 공격을 방지하기 위한 설정 </br>
 * - @EnableWebMvc 이 설정 안됬을 경우 이 설정을 사용</br> 
 * - @EnableWebMvc 이 설정 됬을 경우 WebMvcConfigurer 클래스를 상속 받는 클래스에서 설정이 필요함 
 * @author pjw
 * @version 1.0
 */
@Configuration
@RequiredArgsConstructor
public class XssProtectConfig {

    private final ObjectMapper mapper;

    @Bean
    MappingJackson2HttpMessageConverter characterEscapeConverter() {
        ObjectMapper objectMapper = mapper.copy();
        objectMapper.getFactory().setCharacterEscapes(new XssProtectSupportUtill());
        return new MappingJackson2HttpMessageConverter(objectMapper);
    }
}

