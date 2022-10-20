package com.pjw.bootStart.common.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.pjw.bootStart.common.service.CommonService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class CommonController {
	
	
	
	
	@Autowired
	private CommonService commonService;
	
	@GetMapping( value = "/test" )
	@ResponseBody
	public void fileDownload() throws Exception{
		commonService.testInsert();
	}
	
	@GetMapping( value = "/test2" )
	public <T> ResponseEntity<T> test2() throws Exception{
		Map<String, Object> resultMap = new HashMap<>();
		resultMap.put("item","테스트");
		
		ResponseEntity<T> item = new ResponseEntity<>(null);
		return item ;
	}
	
	
	
	
}
