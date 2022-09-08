package com.frank.msaphase3.controller;

import com.frank.msaphase3.dto.StudentDto;
import com.frank.msaphase3.model.Student;
import com.frank.msaphase3.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StudentController {
    @Autowired
    StudentService studentService;

    @GetMapping("/student/dto_example/{student_id}")
    public ResponseEntity<StudentDto> getStudentUniDetails(@PathVariable int student_id) {
        StudentDto studentDto = studentService.getImportantDetails(student_id);
        if (studentDto == null) {
            return new ResponseEntity("Student ID not found", HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(studentDto, HttpStatus.OK);
        }
    }

    @GetMapping("/student/getall")
    public ResponseEntity<List<Student>> getAllStudents(
            @RequestParam(name="page", defaultValue = "0") int page,
            @RequestParam(name="perPage", defaultValue="25" ) int perPage,
            @RequestParam(name="sort", defaultValue = "id") String sort,
            @RequestParam(name="order", defaultValue="DESC") String order
    ) {
        try {
            List<Student> studentList;
            if (order.equals("ASC")) {
                studentList = studentService.getAllStudentsPaging(page, perPage, sort, true);
            } else {
                studentList = studentService.getAllStudentsPaging(page, perPage, sort, false);
            }
            return new ResponseEntity(studentList, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(e.toString(), HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping("student/upi/{upi}")
    public ResponseEntity searchByUpi(String upi) {
        return new ResponseEntity(studentService.findByUpi(upi), HttpStatus.OK);
    }

}
