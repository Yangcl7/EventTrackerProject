package com.skilldistillery.meditation.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.skilldistillery.meditationtrackerjpa.entities.Meditation;

@Service
public interface MeditationService {
	
	public List<Meditation> findAll();
	
	public Meditation findById(Integer id);
	
//	public List<Meditation> findByGoal(Integer id);
	
	public List<Meditation> findByTimeSpentRange(Integer min, Integer max);
	
	public List<Meditation> findByRacommendTimeRange(Integer min, Integer max);
	
	public List<Meditation> findByFeelingRate(Integer min, Integer max);

	public Boolean deleteMeditation(Integer id);

	public Meditation addMeditate(Meditation meditation);

	public Meditation updateMeditation(Integer id, Meditation meditation);

	
}
