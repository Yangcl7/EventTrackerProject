package com.skilldistillery.meditation.date;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class MeditationDAOJpaImpl implements MeditationDAO{

	@PersistenceContext
	private EntityManager em;
}
