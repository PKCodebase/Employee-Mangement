package com.PkCodebase.Employe.Management.controller;

import com.PkCodebase.Employe.Management.entity.Employee;
import com.PkCodebase.Employe.Management.service.impl.EmployeeServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.PkCodebase.Employe.Management.exception.EmployeeNotFoundException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {


    private final  EmployeeServiceImpl employeeServiceImpl;

    public EmployeeController(EmployeeServiceImpl employeeServiceImpl) {
        this.employeeServiceImpl = employeeServiceImpl;
    }

    @PostMapping("/add")
    public ResponseEntity<Employee> addEmployee(@Valid @RequestBody Employee employee) {
        Employee savedEmployee = employeeServiceImpl.addEmployee(employee);
        return ResponseEntity.status(201).body(savedEmployee); // HTTP 201 Created
    }


    @GetMapping("/all")
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> employees = employeeServiceImpl.getAllEmployees();
        return ResponseEntity.ok(employees); // HTTP 200 OK
    }


    @GetMapping("/email")
    public ResponseEntity<Employee> getEmployeesByEmail(@RequestParam String email) {
        Employee employees = employeeServiceImpl.getEmployeeByEmail(email);
        return ResponseEntity.ok(employees); // HTTP 200 OK
    }





    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id) {
        try{
            employeeServiceImpl.deleteEmployee(id);
            return new  ResponseEntity<>("Employee with id " + id + "deleted Successfully " , HttpStatus.OK);

        }catch(EmployeeNotFoundException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable Long id) {
        Employee employee = employeeServiceImpl.getEmployeeById(id);
        if(employee == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Employee not found with id: " + id);
        }
        return ResponseEntity.ok(employee);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateEmployee(@PathVariable Long id,
                                                   @Valid @RequestBody Employee employee) {
        Employee updatedEmployee = employeeServiceImpl.updateEmployeeById(id,employee);
        if(updatedEmployee == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Employee not found with id: " + id);
        }
        return ResponseEntity.ok(updatedEmployee);
    }
}
