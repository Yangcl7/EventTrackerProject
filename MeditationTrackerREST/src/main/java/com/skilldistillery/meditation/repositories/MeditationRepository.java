package com.skilldistillery.meditation.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.meditationtrackerjpa.entities.Meditation;

public interface MeditationRepository extends JpaRepository<Meditation, Integer> {

	public Optional<Meditation> findById(Integer id);
	public List<Meditation> findByTimeSpentBetween(Integer min, Integer max);
	public List<Meditation> findByFeelingRateBetween(Integer min, Integer max);
	public List<Meditation> findByRecommendedTimeBetween(Integer min, Integer max);
	public List<Meditation> findByGoal();
}
