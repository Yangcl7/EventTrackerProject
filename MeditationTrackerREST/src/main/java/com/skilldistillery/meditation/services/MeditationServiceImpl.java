package com.skilldistillery.meditation.services;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.meditation.repositories.MeditationRepository;
import com.skilldistillery.meditationtrackerjpa.entities.Meditation;


@Service
public class MeditationServiceImpl implements MeditationService {

	@Autowired
	MeditationRepository repo;
	
	@Override
	public List<Meditation> findAll() {
		List<Meditation> meditates = null;
		meditates = repo.findAll();
		return meditates;
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

//	@Override
//	public List<Meditation> findByGoal(Integer id) {
//		return repo.findByGoal();
//	}

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
		return meditations;
	}

	@Override
	public List<Meditation> findByFeelingRate(Integer min, Integer max) {
		List<Meditation> meditations = null;
		meditations = repo.findByFeelingRateBetween(min, max);
		return meditations;
	}

	@Override
	public Boolean deleteMeditation(Integer id) {
		Boolean result = false;
		Optional<Meditation> optional;
		Meditation managed = null;
		optional = repo.findById(id);
		if(optional.isPresent()) {
			managed = optional.get();
			repo.delete(managed);
			result = true;
		}
		return result;
	}

	@Override
	public Meditation addMeditate(Meditation meditation) {
		repo.saveAndFlush(meditation);
		return meditation;
	}

	@Override
	public Meditation updateMeditation(Integer id, Meditation meditation) {
		Meditation managed = null;
		Optional<Meditation> optional = repo.findById(id);
		if(optional.isPresent()) {
			managed = optional.get();
			managed.setFeelingRate(meditation.getFeelingRate());
			managed.setId(meditation.getId());
			managed.setRecommendedTime(meditation.getRecommendedTime());
			managed.setTimeSpent(meditation.getTimeSpent());
		}
		return managed;
	}

}
