/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/js/pj-date-utill.js":
/*!*********************************!*\
  !*** ./app/js/pj-date-utill.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/** \r\n * @file : PJ_날짜_유틸\r\n * @author : PJW\r\n * @since : 2022-10\r\n * @version : 0.1\r\n */\r\nlet pjwDateUtill  = (function (){\r\n\t\r\n\t/**\r\n\t * string 형 date 로변경  \r\n\t * @param {string} strDate - string 'YYYYMMdd' \r\n\t * @returns {date} - date형태로 변환  \r\n\t * @since 0.1\r\n\t */\t\r\n\t function strToDate(strDate){\r\n\t\tlet dashStr = strDateToDash(strDate);\r\n\t\tlet splitStr =dashStr.split('-');\r\n\t\tlet returnDate = new Date(splitStr[0],splitStr[1]-1,splitStr[2]);\r\n\t\treturn returnDate;\t\r\n\t }\r\n\t \r\n\t/**\r\n\t * date TO string으로 변경 \r\n\t * @param {string} strDate - string 'YYYYMMdd' \r\n\t * @returns {date} - date형태로 변환  \r\n\t * @since 0.1\r\n\t */\t\r\n\tfunction dateToStr(date){\r\n\t\tlet returnStr = '';\r\n\t\tconst year = date.getFullYear();\r\n\t\tconst month = date.getMonth() + 1;\r\n\t\tconst day = date.getDate();\r\n\t\treturnStr = `${year}${month.toString().padStart(2,'0')}${day.toString().padStart(2,'0')}`;\r\n\t\treturn returnStr;\t\t\r\n\t}\r\n\r\n\r\n\t /**\r\n\t * YYYYMMDD 문자 열을 YYYY-MM-DD로 변환한다.\r\n\t * @param {string} strDate - YYYYmmDD문자열 \r\n\t * @returns {string} - YYYY-MM-DD형식 문자열 \r\n\t * @since 0.1\r\n\t */\r\n\t function strDateToDash(strDate){\r\n\t \tlet returnStr ='';\r\n\t \treturnStr = strDate.replace(/(\\d{4})(\\d{2})(\\d{2})/g, '$1-$2-$3');\r\n\t \treturn returnStr  ;\r\n\t }\r\n\r\n\t/**\r\n\t * YYYY-MM-DD 문자 열을 YYYYmmDD로 변환한다.\r\n\t * @param {string} dashDate YYYY-mm-DD문자열 \r\n\t * @returns {string} YYYYmmDD형식 문자열 \r\n\t * @since 0.1\r\n\t */\r\n\t function dashStrTostrDate(dashStr){\r\n\t \tlet returnStr ='';\r\n\t \treturnStr = dashStr.replaceAll('-',''); \r\n\t \treturn returnStr  ;\r\n\t }\r\n\t \r\n\t\r\n\t/**\r\n\t * 오늘의 날짜를 가져온다\r\n\t * @param {string} form - 형식 yyyymmdd, yyyy-mm-dd 두가지 지원 \r\n\t * @returns {string} -form에 맞는 형식 \r\n\t * @since 0.1\r\n\t */\t\r\n\t function getTodate(form='yyyymmdd'){\r\n\t\tlet returnStr = '';\r\n\t\t\r\n\t\tconst date = new Date();\r\n\t\tconst year = date.getFullYear();\r\n\t\tconst month = date.getMonth() + 1;\r\n\t\tconst day = date.getDate();\r\n\t\r\n\t\tif(form.toUpperCase() == 'YYYY-MM-DD'){\r\n\t\t\treturnStr = `${year}-${month.toString().padStart(2,0)}-${day.toString().padStart(2,0)}`;\r\n\t\t}else if(form.toUpperCase() == 'YYYYMMDD'){\r\n\t\t\treturnStr = `${year}${month.toString().padStart(2,0)}${day.toString().padStart(2,0)}`;\r\n\t\t}\r\n\t\t\r\n\t\treturn returnStr;\r\n\t}\r\n\t\r\n\t/**\r\n\t * 날짜를 더하거나 빼는 함수 \r\n\t * @param {string} targetDt - 기준 DATE 문자형 YYYYMMDD 예) 20220101  \r\n\t * @param {number} val      - 더하거나 뺄값\r\n\t * @param {string} ymd      - 계산할 종류  Y 년 M 월 D 일 DEFALUT ='D'\r\n\t * @returns {string} -      계산된 값  \r\n\t * @since 0.1\r\n\t */\t\r\n\t function dateAdd(targetDt,val,ymd='D'){\r\n\t\tlet returnStr = '';\r\n\t\tlet targetDate = strToDate(targetDt); \r\n\t\tif(ymd.toUpperCase()=='D'){\r\n\t\t\ttargetDate.setDate(targetDate.getDate() + val);\r\n\t\t}else if(ymd.toUpperCase()=='M'){\r\n\t\t\ttargetDate.setMonth(targetDate.getMonth() + val);\r\n\t\t}else if(ymd.toUpperCase()=='Y'){\r\n\t\t\ttargetDate.setFullYear(targetDate.getFullYear() + val);\r\n\t\t}\r\n\t\treturnStr  = dateToStr(targetDate);\r\n\t\t\r\n\t\treturn returnStr;\r\n\t }\r\n\t \r\n \t/**\r\n\t * compareDate를 기준으로  compareDate2 의 차이를 계산한다.     \r\n\t * @param {string} compareDate - yyyymmdd 문자형  \r\n \t * @param {string} compareDate2 - yyyymmdd문자형\r\n\t * @param {string} form - {Y:년도,M:월,D:일자} defalut = 'D'\r\n\t * @returns {number} - compareDate < compareDate2 일 경우 음수  compareDate > compareDate2 일 경우 양수\r\n\t * @since 0.1\r\n\t */\t\r\n\t function compareDate(compareDate,compareDate2,form='D'){\r\n\t\t\r\n\t\tcompareDate = strToDate(compareDate);\r\n\t\tcompareDate2 = strToDate(compareDate2);\r\n\t\t\r\n\t\tlet compareRst;\r\n\r\n\t\tconst diffDate = compareDate.getTime() - compareDate2.getTime();\r\n\r\n\t\tif(form=='D'){\r\n\t\t\tcompareRst = Math.abs(diffDate / (1000 * 60 * 60 * 24)); \r\n\t\t}else if(form=='M'){\r\n\t\t\tcompareRst = Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30));\r\n\t\t}else if(form=='Y'){\r\n\t\t\tcompareRst = Math.abs(diffDate / (1000 * 60 * 60 * 24 * 365));\r\n\t\t}\r\n\t\t\r\n\t\tif(compareDate<compareDate2){\r\n\t\t\tcompareRst = Math.floor(compareRst)*-1;\r\n\t\t}\r\n\t\t\r\n\t\treturn compareRst;\r\n\t }\r\n\treturn{\r\n\t\t strToDate\r\n\t\t,dateToStr\r\n\t\t,strDateToDash\r\n\t\t,dashStrTostrDate\r\n\t\t,getTodate\r\n\t\t,dateAdd\r\n\t\t,compareDate\r\n\t\t\r\n\t}\r\n})();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pjwDateUtill);\r\n \r\n\n\n//# sourceURL=webpack://test01/./app/js/pj-date-utill.js?");

/***/ }),

/***/ "./app/js/pj-util.js":
/*!***************************!*\
  !*** ./app/js/pj-util.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pj_date_utill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pj-date-utill.js */ \"./app/js/pj-date-utill.js\");\n/* harmony import */ var _pj_validation_utill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pj-validation-utill.js */ \"./app/js/pj-validation-utill.js\");\n//날짜 유틸 \r\n\r\n\r\n\r\nconst pjUtill = {};\r\n \r\nwindow.utill?\"\":window.utill = pjUtill;\r\n\r\nutill.date=_pj_date_utill_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\nutill.validation=_pj_validation_utill_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n \r\n \r\n \r\n \r\n /**\r\n * 메뉴 항목을 추가한다.\r\n * @param {string} id 항목에 대한 고유 식별자 \r\n * @param {string} url 항목 아이콘 \r\n * @param {string} title 항목 타이틀\r\n * @param {function} callback 실행에 대한 호출 함수\r\n * @@deprecated 는 말 그대로 과거에는 구현되었으나 지금은 지원하지 않는(혹은 삭제예정인) 프로퍼티 혹은 메소드/함수를 가리킵니다.\r\n * @exception 은 메소드/함수에서 일어날 수 있는 예외를\r\n * @returns {boolean} 성공 여부\r\n * @since 0.4  는 이 프로퍼티/속성/메소드가 지원되기 시작한 버전을 표기합니다.\r\n */\r\n \r\n \r\n \r\n \r\n \r\n \r\n  \n\n//# sourceURL=webpack://test01/./app/js/pj-util.js?");

/***/ }),

/***/ "./app/js/pj-validation-utill.js":
/*!***************************************!*\
  !*** ./app/js/pj-validation-utill.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/** \r\n * @file : PJ_정합성_유틸\r\n * @author : PJW\r\n * @since : 2022-10\r\n * @version : 0.1\r\n */\r\n let validUtill = (function(){\r\n\tlet numberReg = /[^0-9]/g;\r\n\t\t\r\n\t/**\r\n\t * 날짜 형식 체크   \r\n\t * @param {string} strDate - yyyymmdd yyyy-mm-dd yyyy/mm/dd  \r\n\t * @returns {boolean} - 날짜 형식이 맞을경우 TRUE 아닌경우 FALSE  \r\n\t * @since 0.1\r\n\t */\t\r\n\t function dateValidation(strDate){\r\n\t\tif(typeof strDate  == 'number'){\r\n\t\t\tstrDate = strDate.toString();\r\n\t\t}\r\n\t\tstrDate = strDate.replace(numberReg, \"\");\r\n\t\tlet validReg = RegExp(/^\\d{4}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/);\r\n\t\treturn validReg.test(targetStr);\r\n\t }\r\n\t \r\n\t/**\r\n\t * 사업자 번호  형식 체크\r\n\t * @param {number or string} bizNo - number or str   \r\n\t * @returns {boolean} - 사업자번호 형식이 맞을경우 TRUE 아닌경우 FALSE  \r\n\t * @since 0.1\r\n\t */\t\r\n\tfunction bizNoValidation(bizNo){\r\n\t\tif(typeof bizNo  == 'number'){\r\n\t\t\tbizNo = bizNo.toString();\r\n\t\t}\r\n\t\t\r\n\t\tvar numberMap = bizNo.replace(numberReg, '').split('').map(function (d){\r\n        \treturn parseInt(d, 10);\r\n    \t});\r\n    \t\r\n\t\tif (numberMap.length == 10) {\r\n\t        var keyArr = [1, 3, 7, 1, 3, 7, 1, 3, 5];\r\n\t        var chk = 0;\r\n\t        \r\n\t        keyArr.forEach(function(d, i){\r\n\t            chk += d * numberMap[i];\r\n\t        });\r\n\t        \r\n\t        chk += parseInt((keyArr[8] * numberMap[8])/ 10, 10);\r\n\t        return Math.floor(numberMap[9]) === ( (10 - (chk % 10) ) % 10);\r\n   \t\t }\r\n   \t \treturn false;\r\n\t} \r\n\t/**\r\n\t * 주민등록번호 형식 체크 \r\n\t * @param {number or string} juminNo - number or str   \r\n\t * @returns {boolean} - 주민번호 형식이 맞을경우 TRUE 아닌경우 FALSE  \r\n\t * @since 0.1\r\n\t */\t\r\n\tfunction juminNoValidation(juminNo){\r\n\t\tif(typeof juminNo  == 'number'){\r\n\t\t\tjuminNo = juminNo.toString();\r\n\t\t}\r\n\t    \r\n\t   juminNo = juminNo.replace(numberReg, \"\");\r\n\t \r\n\t    var arr_ssn = [];\r\n\t    var compare = [2,3,4,5,6,7,8,9,2,3,4,5];\r\n\t    var sum     = 0;\r\n\t \r\n\t    // 입력값 체크\r\n\t    if (juminNo.match('[^0-9]')) {\r\n\t        return false; \r\n\t    }\r\n\t \r\n\t    // 자리수 체크\r\n\t    if (juminNo.length != 13) {\r\n\t        return false;\r\n\t    }    \r\n\t \r\n\t    // 공식: M = (11 - ((2×A + 3×B + 4×C + 5×D + 6×E + 7×F + 8×G + 9×H + 2×I + 3×J + 4×K + 5×L) % 11)) % 10\r\n\t    for (var i = 0; i < 13; i++) { \r\n\t        arr_ssn[i] = juminNo.substring(i,i+1); \r\n\t    }\r\n\t    \r\n\t    for (var i = 0; i < 12; i++) {\r\n\t        sum = sum + (arr_ssn[i] * compare[i]); \r\n\t    }\r\n\t \r\n\t    sum = (11 - (sum % 11)) % 10;\r\n\t    \r\n\t    if (sum != arr_ssn[12]) { \r\n\t        return false; \r\n\t    }\r\n\t    return true;\r\n\t}\r\n\r\n\t/**\r\n\t * 법인 번호 형식 체크\r\n\t * @param {number or string} bubinNo - number or str   \r\n\t * @returns {boolean} - 법인번호 형식이 맞을경우 TRUE 아닌경우 FALSE  \r\n\t * @since 0.1\r\n\t */\t\r\n\tfunction bubinNoValidation(bubinNo){\r\n\t\tif(typeof bubinNo  == 'number'){\r\n\t\t\tbubinNo = bubinNo.toString();\r\n\t\t}\r\n\t \tbubinNo = bubinNo.replace(numberReg, \"\");\r\n\t \r\n\t    var as_Biz_no = String(bubinNo);\r\n\t    var isNum = true;\r\n\t    var I_TEMP_SUM = 0 ;\r\n\t    var I_TEMP = 0;\r\n\t    var S_TEMP;\r\n\t    var I_CHK_DIGIT = 0;\r\n\t \r\n\t    if (bubinNo.length != 13) {\r\n\t        return false;\r\n\t    }\r\n\t \r\n\t    for (var index01 = 1; index01 < 13; index01++) {\r\n\t        var i = index01 % 2;\r\n\t        var j = 0;\r\n\t \r\n\t        if(i == 1) j = 1;\r\n\t        else if( i == 0) j = 2;\r\n\t \r\n\t        I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(index01-1, index01),10) * j;\r\n\t    }\r\n\t \r\n\t    I_CHK_DIGIT= I_TEMP_SUM%10;\r\n\t    if (I_CHK_DIGIT != 0 ) I_CHK_DIGIT = 10 - I_CHK_DIGIT;\r\n\t \r\n\t    if (as_Biz_no.substring(12, 13) != String(I_CHK_DIGIT)) return false;\r\n\t \r\n\t    return true;\r\n\t}\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\r\n\t\r\n\treturn{\r\n\t\t dateValidation\r\n\t\t,bizNoValidation\r\n\t\t,juminNoValidation\r\n\t\t,bubinNoValidation\r\n\t}\r\n\t\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validUtill); \n\n//# sourceURL=webpack://test01/./app/js/pj-validation-utill.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/js/pj-util.js");
/******/ 	
/******/ })()
;