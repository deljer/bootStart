package com.pjw.bootStart.config.utill;


import org.apache.commons.text.StringEscapeUtils;

import com.fasterxml.jackson.core.SerializableString;
import com.fasterxml.jackson.core.io.CharacterEscapes;
import com.fasterxml.jackson.core.io.SerializedString;

/**
 * XSS 공격을 방지하기 위한 Utill Class
 * @author PJW
 * @version 1.0
 */
public class XssProtectSupportUtill extends CharacterEscapes {
	private static final long serialVersionUID = 2842815500367827595L;
	private final int[] asciiEscapes;

	    public XssProtectSupportUtill() {
	        asciiEscapes = CharacterEscapes.standardAsciiEscapesForJSON();
	        asciiEscapes['<'] = CharacterEscapes.ESCAPE_CUSTOM;
	        asciiEscapes['>'] = CharacterEscapes.ESCAPE_CUSTOM;
	        asciiEscapes['\"'] = CharacterEscapes.ESCAPE_CUSTOM;
	        asciiEscapes['('] = CharacterEscapes.ESCAPE_CUSTOM;
	        asciiEscapes[')'] = CharacterEscapes.ESCAPE_CUSTOM;
	        asciiEscapes['#'] = CharacterEscapes.ESCAPE_CUSTOM;
	        asciiEscapes['\''] = CharacterEscapes.ESCAPE_CUSTOM;
	    }

	    @Override
	    public int[] getEscapeCodesForAscii() {
	        return asciiEscapes;
	    }

	    @Override
	    public SerializableString getEscapeSequence(int ch) {
	    	
	        return new SerializedString(StringEscapeUtils.escapeHtml4(Character.toString((char) ch)));
	    }
}
