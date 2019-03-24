package com.skilldistillery.meditationtrackerjpa.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Meditation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private boolean goal;
	
	@Column(name="time_spent")
	private int timeSpent;
	
	@Column(name="recommended_time")
	private int recommendedTime;
	
	@Column(name="feeling_rate")
	private int feelingRate;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public boolean isGoal() {
		return goal;
	}

	public void setGoal(boolean goal) {
		this.goal = goal;
	}

	public int getTimeSpent() {
		return timeSpent;
	}

	public void setTimeSpent(int timeSpent) {
		this.timeSpent = timeSpent;
	}

	public int getRecommendedTime() {
		return recommendedTime;
	}

	public void setRecommendedTime(int recommendedTime) {
		this.recommendedTime = recommendedTime;
	}

	public int getFeelingRate() {
		return feelingRate;
	}

	public void setFeelingRate(int feelingRate) {
		this.feelingRate = feelingRate;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + feelingRate;
		result = prime * result + (goal ? 1231 : 1237);
		result = prime * result + id;
		result = prime * result + recommendedTime;
		result = prime * result + timeSpent;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Meditation other = (Meditation) obj;
		if (feelingRate != other.feelingRate)
			return false;
		if (goal != other.goal)
			return false;
		if (id != other.id)
			return false;
		if (recommendedTime != other.recommendedTime)
			return false;
		if (timeSpent != other.timeSpent)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "meditation [id=" + id + ", goal=" + goal + ", timeSpent=" + timeSpent + ", recommendedTime="
				+ recommendedTime + ", feelingRate=" + feelingRate + "]";
	}

	public Meditation(int id, boolean goal, int timeSpent, int recommendedTime, int feelingRate) {
		super();
		this.id = id;
		this.goal = goal;
		this.timeSpent = timeSpent;
		this.recommendedTime = recommendedTime;
		this.feelingRate = feelingRate;
	}

	public Meditation() {
		super();
	}
	
}
