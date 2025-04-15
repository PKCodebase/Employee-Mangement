package com.PkCodebase.Employe.Management.service;

import com.PkCodebase.Employe.Management.entity.Employee;

import java.util.List;
import java.util.Optional;


public interface EmployeeService {

    Employee addEmployee(Employee employee);

    Employee getEmployeeById(Long id);

    List<Employee> getAllEmployees();

    Employee getEmployeeByEmail(String email);

    Employee updateEmployeeById(Long id,Employee employee);

    void deleteEmployee(Long id);
}
