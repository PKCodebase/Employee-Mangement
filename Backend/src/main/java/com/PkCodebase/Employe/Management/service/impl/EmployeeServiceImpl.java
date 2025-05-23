package com.PkCodebase.Employe.Management.service.impl;

import com.PkCodebase.Employe.Management.entity.Employee;
import com.PkCodebase.Employe.Management.exception.EmployeeNotFoundException;
import com.PkCodebase.Employe.Management.repository.EmployeeRepository;
import com.PkCodebase.Employe.Management.service.EmployeeService;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class EmployeeServiceImpl implements EmployeeService {


    private final  EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    @Override
    public Employee addEmployee(@Valid Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not found"));
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll(); // Fetch all employees from the database
    }



    @Override
    public Employee getEmployeeByEmail(String email) {
        return employeeRepository.findAll().stream()
                .filter(employee -> employee.getEmail().equalsIgnoreCase(email)) // Case-insensitive comparison
                .findFirst()
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not found with email: " + email));
    }

    @Override
    public Employee updateEmployeeById(Long id, Employee employee) {
        Optional<Employee> existingEmployee = employeeRepository.findById(id);
        if(existingEmployee.isPresent()){
            Employee updateEmployee = existingEmployee.get();
            updateEmployee.setName(employee.getName());
            updateEmployee.setEmail(employee.getEmail());
            updateEmployee.setDepartment(employee.getDepartment());
            updateEmployee.setPhone(employee.getPhone());
            return employeeRepository.save(updateEmployee);
        }
        return null;
    }


    @Override
    public void deleteEmployee(Long id) {

      if(!employeeRepository.existsById(id)){
          throw new EmployeeNotFoundException("Employee not found with id: " + id);
      }
      employeeRepository.deleteById(id);
    }


}



