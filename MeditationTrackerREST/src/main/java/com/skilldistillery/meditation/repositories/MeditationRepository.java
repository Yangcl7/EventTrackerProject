package com.skilldistillery.meditation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.meditationtrackerjpa.entities.Meditation;

public interface MeditationRepository extends JpaRepository<Meditation, Integer> {

}
