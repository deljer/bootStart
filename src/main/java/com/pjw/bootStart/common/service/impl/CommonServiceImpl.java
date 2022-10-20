package com.pjw.bootStart.common.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.pjw.bootStart.common.mapper.MainMapper;
import com.pjw.bootStart.common.mapper.sub.SubMapper;
import com.pjw.bootStart.common.service.CommonService;

@Service
@Transactional
public class CommonServiceImpl  implements CommonService{

	@Autowired
	private MainMapper mainMapper;
	
	@Autowired
	private SubMapper subMapper;
	
	
	@Override
	public int testInsert() throws Exception{
		
		try {
			mainMapper.insertEmp();
			mainMapper.insertEmp2();
			subMapper.insertEmp();
		}catch (Exception e) {
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
			System.out.println();
		}
		
		return 0;
	}

}
