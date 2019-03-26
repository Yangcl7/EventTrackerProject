package com.skilldistillery.meditation.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.skilldistillery.meditation.repositories.MeditationRepository;
import com.skilldistillery.meditationtrackerjpa.entities.Meditation;

public class MeditationServiceImpl implements MeditationService {

	@Autowired
	MeditationRepository repo;
	
	@Override
	public List<Meditation> findAll() {
		List<Meditation> meditate = null;
		meditate = repo.findAll();
		return null;
	}

	@Override
	public Meditation findById(Integer id) {
		Optional<Meditation> optional;
		Meditation meditation = null;
		optional = repo.findById(id);
		if(optional.isPresent()) {
			meditation = optional.get();
		}
		return meditation;
	}

	@Override
	public List<Meditation> findByGoal(Integer id) {
		return repo.findByGoal();
	}

	@Override
	public List<Meditation> findByTimeSpentRange(Integer min, Integer max) {
		List<Meditation> meditations = null;
		meditations = repo.findByTimeSpentBetween(min, max);
		return meditations;
	}

	@Override
	public List<Meditation> findByRacommendTimeRange(Integer min, Integer max) {
		List<Meditation> meditations = null;
		meditations = repo.findByRecommendedTimeBetween(min, max);
		return null;
	}

	@Override
	public List<Meditation> findByFeelingRate(Integer min, Integer max) {
		List<Meditation> meditations = null;
		meditations = repo.findByFeelingRateBetween(min, max);
		return null;
	}

	@Override
	public Boolean deleteFillup(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Meditation addMeditate(Meditation meditation) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Meditation updateFillup(Integer id, Meditation fillup) {
		// TODO Auto-generated method stub
		return null;
	}

}
