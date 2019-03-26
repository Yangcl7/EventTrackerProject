package com.skilldistillery.meditation.services;

import java.util.List;

import com.skilldistillery.meditationtrackerjpa.entities.Meditation;

public interface MeditationService {
	
	public List<Meditation> findAll();
	
	public Meditation findById(Integer id);
	
	public List<Meditation> findByGoal(Integer id);
	
	public List<Meditation> findByTimeSpentRange(Integer min, Integer max);
	
	public List<Meditation> findByRacommendTimeRange(Integer min, Integer max);
	
	public List<Meditation> findByFeelingRate(Integer min, Integer max);

	public Boolean deleteFillup(Integer id);

	public Meditation addMeditate(Meditation meditation);

	public Meditation updateFillup(Integer id, Meditation fillup);
}
