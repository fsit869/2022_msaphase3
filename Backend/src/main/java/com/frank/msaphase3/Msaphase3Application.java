package com.frank.msaphase3;

import com.frank.msaphase3.model.Student;
import com.frank.msaphase3.model.University;
import com.frank.msaphase3.repository.StudentRepository;
import com.frank.msaphase3.repository.UniversityRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableCaching
public class Msaphase3Application {

	public static void main(String[] args) {
		SpringApplication.run(Msaphase3Application.class, args);
	}

	@Bean
	public CommandLineRunner loadDefaultValues(StudentRepository studentRepository, UniversityRepository universityRepository) {
		University uniOne = new University(1, "UOA", 100, "Auckland");
		University uniTwo = new University(2, "MIT", 2, "USA");
		University uniThree = new University(3, "HAVARD", 1, "USA");

		Student studentOne = new Student(1, "NameOne", 1, "upi000", uniOne);
		Student studentTwo = new Student(2, "NameTwo", 2, "upi111", uniOne);
		Student studentThree = new Student(3, "NameThree", 2, "upi222", uniTwo);
		return args -> {
			universityRepository.save(uniOne);
			universityRepository.save(uniTwo);
			universityRepository.save(uniThree);
			studentRepository.save(studentOne);
			studentRepository.save(studentTwo);
			studentRepository.save(studentThree);
		};
	}

}
