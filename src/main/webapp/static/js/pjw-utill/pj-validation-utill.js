/** 
 * @file : PJ_정합성_유틸
 * @author : PJW
 * @since : 2022-10
 * @version : 0.1
 */
 let validUtill = (function(){
	let numberReg = /[^0-9]/g;
		
	/**
	 * 날짜 형식 체크   
	 * @param {string} strDate - yyyymmdd yyyy-mm-dd yyyy/mm/dd  
	 * @returns {boolean} - 날짜 형식이 맞을경우 TRUE 아닌경우 FALSE  
	 * @since 0.1
	 */	
	 function dateValidation(strDate){
		if(typeof strDate  == 'number'){
			strDate = strDate.toString();
		}
		strDate = strDate.replace(numberReg, "");
		let validReg = RegExp(/^\d{4}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/);
		return validReg.test(targetStr);
	 }
	 
	/**
	 * 사업자 번호  형식 체크
	 * @param {number or string} bizNo - number or str   
	 * @returns {boolean} - 사업자번호 형식이 맞을경우 TRUE 아닌경우 FALSE  
	 * @since 0.1
	 */	
	function bizNoValidation(bizNo){
		if(typeof bizNo  == 'number'){
			bizNo = bizNo.toString();
		}
		
		var numberMap = bizNo.replace(numberReg, '').split('').map(function (d){
        	return parseInt(d, 10);
    	});
    	
		if (numberMap.length == 10) {
	        var keyArr = [1, 3, 7, 1, 3, 7, 1, 3, 5];
	        var chk = 0;
	        
	        keyArr.forEach(function(d, i){
	            chk += d * numberMap[i];
	        });
	        
	        chk += parseInt((keyArr[8] * numberMap[8])/ 10, 10);
	        return Math.floor(numberMap[9]) === ( (10 - (chk % 10) ) % 10);
   		 }
   	 	return false;
	} 
	/**
	 * 주민등록번호 형식 체크 
	 * @param {number or string} juminNo - number or str   
	 * @returns {boolean} - 주민번호 형식이 맞을경우 TRUE 아닌경우 FALSE  
	 * @since 0.1
	 */	
	function juminNoValidation(juminNo){
		if(typeof juminNo  == 'number'){
			juminNo = juminNo.toString();
		}
	    
	   juminNo = juminNo.replace(numberReg, "");
	 
	    var arr_ssn = [];
	    var compare = [2,3,4,5,6,7,8,9,2,3,4,5];
	    var sum     = 0;
	 
	    // 입력값 체크
	    if (juminNo.match('[^0-9]')) {
	        return false; 
	    }
	 
	    // 자리수 체크
	    if (juminNo.length != 13) {
	        return false;
	    }    
	 
	    // 공식: M = (11 - ((2×A + 3×B + 4×C + 5×D + 6×E + 7×F + 8×G + 9×H + 2×I + 3×J + 4×K + 5×L) % 11)) % 10
	    for (var i = 0; i < 13; i++) { 
	        arr_ssn[i] = juminNo.substring(i,i+1); 
	    }
	    
	    for (var i = 0; i < 12; i++) {
	        sum = sum + (arr_ssn[i] * compare[i]); 
	    }
	 
	    sum = (11 - (sum % 11)) % 10;
	    
	    if (sum != arr_ssn[12]) { 
	        return false; 
	    }
	    return true;
	}

	/**
	 * 법인 번호 형식 체크
	 * @param {number or string} bubinNo - number or str   
	 * @returns {boolean} - 법인번호 형식이 맞을경우 TRUE 아닌경우 FALSE  
	 * @since 0.1
	 */	
	function bubinNoValidation(bubinNo){
		if(typeof bubinNo  == 'number'){
			bubinNo = bubinNo.toString();
		}
	 	bubinNo = bubinNo.replace(numberReg, "");
	 
	    var as_Biz_no = String(bubinNo);
	    var isNum = true;
	    var I_TEMP_SUM = 0 ;
	    var I_TEMP = 0;
	    var S_TEMP;
	    var I_CHK_DIGIT = 0;
	 
	    if (bubinNo.length != 13) {
	        return false;
	    }
	 
	    for (var index01 = 1; index01 < 13; index01++) {
	        var i = index01 % 2;
	        var j = 0;
	 
	        if(i == 1) j = 1;
	        else if( i == 0) j = 2;
	 
	        I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(index01-1, index01),10) * j;
	    }
	 
	    I_CHK_DIGIT= I_TEMP_SUM%10;
	    if (I_CHK_DIGIT != 0 ) I_CHK_DIGIT = 10 - I_CHK_DIGIT;
	 
	    if (as_Biz_no.substring(12, 13) != String(I_CHK_DIGIT)) return false;
	 
	    return true;
	}
	/**
	 * 이메일 형식 체크 
	 * @param {string} email - email   
	 * @returns {boolean} - 이메일 형식이 맞을경우 TRUE 아닌경우 FALSE  
	 * @since 0.1
	 */	
	function emailValidation(email){
		let emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		return emailReg.test(email);
	}
	
	/**
	 * 휴대폰 형식 체크 
	 * @param {string or number} celphone - 휴대폰 번호    
	 * @returns {boolean} - 휴대폰 형식이 맞을경우 TRUE 아닌경우 FALSE  
	 * @since 0.1
	 */	
	function celphoneValidation(celphone){
		if(typeof celphone  == 'number'){
			celphone = celphone.toString();
		}
	 	celphone = celphone.replace(numberReg, "");
		
			
		let celphoneRule = new RegExp(/(01[016789])([1-9]{1}[0-9]{2,3})([0-9]{4})$/);
		
		return celphoneRule.test(celphone);
	}


	
	return{
		 dateValidation
		,bizNoValidation
		,juminNoValidation
		,bubinNoValidation
		,emailValidation
		,celphoneValidation
	}
	
})();












export default validUtill; 