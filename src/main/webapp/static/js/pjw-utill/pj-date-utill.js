/** 
 * @file : PJ_날짜_유틸
 * @author : PJW
 * @since : 2022-10
 * @version : 0.1
 */
let pjwDateUtill  = (function (){
	
	/**
	 * string 형 date 로변경  
	 * @param {string} strDate - string 'YYYYMMdd' 
	 * @returns {date} - date형태로 변환  
	 * @since 0.1
	 */	
	 function strToDate(strDate){
		let dashStr = strDateToDash(strDate);
		let splitStr =dashStr.split('-');
		let returnDate = new Date(splitStr[0],splitStr[1]-1,splitStr[2]);
		return returnDate;	
	 }
	 
	/**
	 * date TO string으로 변경 
	 * @param {string} strDate - string 'YYYYMMdd' 
	 * @returns {date} - date형태로 변환  
	 * @since 0.1
	 */	
	function dateToStr(date){
		let returnStr = '';
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		returnStr = `${year}${month.toString().padStart(2,'0')}${day.toString().padStart(2,'0')}`;
		return returnStr;		
	}


	 /**
	 * YYYYMMDD 문자 열을 YYYY-MM-DD로 변환한다.
	 * @param {string} strDate - YYYYmmDD문자열 
	 * @returns {string} - YYYY-MM-DD형식 문자열 
	 * @since 0.1
	 */
	 function strDateToDash(strDate){
	 	let returnStr ='';
	 	returnStr = strDate.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
	 	return returnStr  ;
	 }

	/**
	 * YYYY-MM-DD 문자 열을 YYYYmmDD로 변환한다.
	 * @param {string} dashDate YYYY-mm-DD문자열 
	 * @returns {string} YYYYmmDD형식 문자열 
	 * @since 0.1
	 */
	 function dashStrTostrDate(dashStr){
	 	let returnStr ='';
	 	returnStr = dashStr.replaceAll('-',''); 
	 	return returnStr  ;
	 }
	 
	
	/**
	 * 오늘의 날짜를 가져온다
	 * @param {string} form - 형식 yyyymmdd, yyyy-mm-dd 두가지 지원 
	 * @returns {string} -form에 맞는 형식 
	 * @since 0.1
	 */	
	 function getTodate(form='yyyymmdd'){
		let returnStr = '';
		
		const date = new Date();
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
	
		if(form.toUpperCase() == 'YYYY-MM-DD'){
			returnStr = `${year}-${month.toString().padStart(2,0)}-${day.toString().padStart(2,0)}`;
		}else if(form.toUpperCase() == 'YYYYMMDD'){
			returnStr = `${year}${month.toString().padStart(2,0)}${day.toString().padStart(2,0)}`;
		}
		
		return returnStr;
	}
	
	/**
	 * 날짜를 더하거나 빼는 함수 
	 * @param {string} targetDt - 기준 DATE 문자형 YYYYMMDD 예) 20220101  
	 * @param {number} val      - 더하거나 뺄값
	 * @param {string} ymd      - 계산할 종류  Y 년 M 월 D 일 DEFALUT ='D'
	 * @returns {string} -      계산된 값  
	 * @since 0.1
	 */	
	 function dateAdd(targetDt,val,ymd='D'){
		let returnStr = '';
		let targetDate = strToDate(targetDt); 
		if(ymd.toUpperCase()=='D'){
			targetDate.setDate(targetDate.getDate() + val);
		}else if(ymd.toUpperCase()=='M'){
			targetDate.setMonth(targetDate.getMonth() + val);
		}else if(ymd.toUpperCase()=='Y'){
			targetDate.setFullYear(targetDate.getFullYear() + val);
		}
		returnStr  = dateToStr(targetDate);
		
		return returnStr;
	 }
	 
 	/**
	 * compareDate를 기준으로  compareDate2 의 차이를 계산한다.     
	 * @param {string} compareDate - yyyymmdd 문자형  
 	 * @param {string} compareDate2 - yyyymmdd문자형
	 * @param {string} form - {Y:년도,M:월,D:일자} defalut = 'D'
	 * @returns {number} - compareDate < compareDate2 일 경우 음수  compareDate > compareDate2 일 경우 양수
	 * @since 0.1
	 */	
	 function compareDate(compareDate,compareDate2,form='D'){
		
		compareDate = strToDate(compareDate);
		compareDate2 = strToDate(compareDate2);
		
		let compareRst;

		const diffDate = compareDate.getTime() - compareDate2.getTime();

		if(form=='D'){
			compareRst = Math.abs(diffDate / (1000 * 60 * 60 * 24)); 
		}else if(form=='M'){
			compareRst = Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30));
		}else if(form=='Y'){
			compareRst = Math.abs(diffDate / (1000 * 60 * 60 * 24 * 365));
		}
		
		if(compareDate<compareDate2){
			compareRst = Math.floor(compareRst)*-1;
		}
		
		return compareRst;
	 }
	return{
		 strToDate
		,dateToStr
		,strDateToDash
		,dashStrTostrDate
		,getTodate
		,dateAdd
		,compareDate
		
	}
})();
export default pjwDateUtill;
 
