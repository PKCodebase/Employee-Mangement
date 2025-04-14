package com.PkCodebase.Employe.Management.controller;

import com.PkCodebase.Employe.Management.entity.Employee;
import com.PkCodebase.Employe.Management.service.impl.EmployeeServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employee")
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


    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,
                                                   @Valid @RequestBody Employee employee) {
        employee.setId(id); // Set ID from path variable
        Employee updatedEmployee = employeeServiceImpl.updateEmployee(employee);
        return ResponseEntity.ok(updatedEmployee);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
        Optional<String> message = employeeServiceImpl.deleteEmployee(id);
        return ResponseEntity.ok(message.orElse("Employee deleted Successfully")); // HTTP 200 OK
    }
}
