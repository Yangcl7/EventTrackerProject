package com.skilldistillery.meditation.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.meditation.services.MeditationService;
import com.skilldistillery.meditationtrackerjpa.entities.Meditation;

@RestController
@RequestMapping("api")
public class MeditationController {
	@Autowired
	private MeditationService serv;

	@GetMapping("test")
	public Boolean testController(HttpServletResponse response) {
		response.setStatus(418);
		return true;
	}
	@GetMapping(path = "ping")
	public String ping() {
		return "pong";
	}
	@GetMapping("meditation/{id}")
	public Meditation findById(@PathVariable("id")Integer id, HttpServletResponse response) {
		Meditation meditation = null;
		meditation = serv.findById(id);
		if(meditation == null) {
			response.setStatus(400);
		}
		return meditation;
	}
	
	@GetMapping("meditation/timeSpent/{min}/{max}")
	public List<Meditation> findByTimeSpentRange(@PathVariable("min") Integer min,
						@PathVariable("max") Integer max, HttpServletResponse response) {
		List<Meditation> meditation = null;
		meditation = serv.findByTimeSpentRange(min, max);
		if(meditation == null || meditation.size() == 0) {
			response.setStatus(400);
		}
		return meditation;
	}
	@GetMapping("meditation/recommendedTime/{min}/{max}")
	public List<Meditation> findByRacommendTimeRange(@PathVariable("min") Integer min,
						@PathVariable("max") Integer max, HttpServletResponse response) {
		List<Meditation> meditation = null;
		meditation = serv.findByRacommendTimeRange(min, max);
		if(meditation == null || meditation.size() == 0) {
			response.setStatus(400);
		}
		return meditation;
	}
	
	@DeleteMapping("fillups/{id}")
	public Boolean deleteById(@PathVariable("id") Integer id,
						HttpServletResponse response) {		
		Boolean result = null;
		result = serv.deleteFillup(id);
		response.setStatus(204);
		if(result == false) {
			response.setStatus(400);
		}
		return result;
	}
	
	@PostMapping("fillups")
	public Meditation addMeditate(@RequestBody Meditation meditation, HttpServletResponse response) {
		Meditation newMeditate = null;
		response.setStatus(201);
		newMeditate = serv.addMeditate(meditation);
		if(newMeditate == null) {
			response.setStatus(400);
		}
		return newMeditate;			
		}
	
	@PutMapping("fillups/{id}")
	public Meditation replaceFillup(@PathVariable("id") Integer id,
			 @RequestBody Meditation meditation,
			 HttpServletResponse response) {
		Meditation newMeditation = null;
		newMeditation = serv.updateFillup(id, meditation);
		if(newMeditation == null ) {
			response.setStatus(400);
		}
		return newMeditation;
	}
	
	
}
