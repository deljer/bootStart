package com.pjw.bootStart.common.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

	
	@GetMapping(value = "/main.do")
	public String mainView(HttpServletResponse response) {
		PrintWriter w;
		try {
			w = response.getWriter();
			w.write("<script>alert('test');</script>");
			w.flush();
	        w.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
		
		return "index";
	}
	
	
	
}
