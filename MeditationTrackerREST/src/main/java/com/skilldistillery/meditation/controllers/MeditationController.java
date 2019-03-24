package com.skilldistillery.meditation.controllers;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class MeditationController {

	@GetMapping("test")
	public Boolean testController(HttpServletResponse response) {
		response.setStatus(418);
		return true;
	}
	
}
