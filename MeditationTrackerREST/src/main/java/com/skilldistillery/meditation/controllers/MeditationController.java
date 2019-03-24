package com.skilldistillery.meditation.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.meditation.date.MeditationDAO;

@RestController
@RequestMapping("api")
public class MeditationController {

	@Autowired
	private MeditationDAO dao;
	
}
