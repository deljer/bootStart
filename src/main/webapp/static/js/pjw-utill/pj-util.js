//날짜 유틸 
import pjDateUtill from "./pj-date-utill.js";
import pjValidationUtill from "./pj-validation-utill.js";
import pjTestUtill from "./pj-test-utill.js";

 
 
 
 
const pjUtill =function(){
	this.version = '0.1';
	this.producer = 'PJW';
	this.date =pjDateUtill; 
	this.validation =pjValidationUtill; 
	this.test =pjTestUtill; 
}


window.pjUtill= new pjUtill();

debugger;


 
 
 
 /**
 * 메뉴 항목을 추가한다.
 * @param {string} id 항목에 대한 고유 식별자 
 * @param {string} url 항목 아이콘 
 * @param {string} title 항목 타이틀
 * @param {function} callback 실행에 대한 호출 함수
 * @@deprecated 는 말 그대로 과거에는 구현되었으나 지금은 지원하지 않는(혹은 삭제예정인) 프로퍼티 혹은 메소드/함수를 가리킵니다.
 * @exception 은 메소드/함수에서 일어날 수 있는 예외를
 * @returns {boolean} 성공 여부
 * @since 0.4  는 이 프로퍼티/속성/메소드가 지원되기 시작한 버전을 표기합니다.
 */
 
 
 
 
 
 
  