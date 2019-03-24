package com.skilldistillery.meditationtrackerjpa.test;

import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.meditationtrackerjpa.entities.Meditation;

class MeditationTest {
	
	static private EntityManagerFactory emf;
	private EntityManager em;
	Meditation meditation;

	@BeforeAll
	public static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("EventTracker");
	}

	@AfterAll
	public static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	public void setUp() throws Exception {
		em = emf.createEntityManager();
		meditation = em.find(Meditation.class, 1);
		System.out.println(meditation);
	}

	@AfterEach
	public void tearDown() throws Exception {
		em.close();
		meditation = null;
	}
	@Test
	void test_meditation_sql_mapping() {
		assertEquals(10, meditation.getTimeSpent());
	}

//	@Test
//	public void test() {
//		fail("Not yet implemented");
//	}

}
