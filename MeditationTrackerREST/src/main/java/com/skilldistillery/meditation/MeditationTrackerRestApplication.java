package com.skilldistillery.meditation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
@EntityScan("com.skilldistillery")
public class MeditationTrackerRestApplication extends SpringBootServletInitializer{
	
	@Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(MeditationTrackerRestApplication.class);
	  }
	 

	public static void main(String[] args) {
		SpringApplication.run(MeditationTrackerRestApplication.class, args);
	}

}
