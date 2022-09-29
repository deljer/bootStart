package com.pjw.bootStart.common.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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
	
	
	
	
	
	
}
