package com.frank.msaphase3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class Msaphase3Application {

	public static void main(String[] args) {
		SpringApplication.run(Msaphase3Application.class, args);
	}

}
