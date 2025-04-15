import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';



const Dashboard =() =>{

    const[employees,setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchEmployees=async()=>{
            try{
                const response = await fetch("http://localhost:9000/api/all");
                const data = await response.json();
                setEmployees(data);
            }catch(error){
                console.error("Error fetching employees:",error.message);
            }
        }
        fetchEmployees();

    },[]);

    const handleDelete = async (id) =>{
        try{
            const response = await fetch(`http://localhost:9000/api/${id}`, {
                method: "DELETE",
            });
            if(response.ok){
                setEmployees((prevEmployees) =>
                    prevEmployees.filter((employee) => employee.id !== id)
                );
            }

            console.log(`Employee with ID ${id} deleted`);
        }catch(error){
            console.error("Error deleting employee:",error.message);
        }
    }

    // const handleUpdate = async (id)=>{
    //    navigate(`/employee/${id}`);
    // }
    
    const handleUpdate =  (id)=>{
        navigate(`/employee/${id}`);
     }
     

    return(
        <>
        <Container>
          <Row>
            <Col>
            <h1 className='text-center'>Employees</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>DEPARTMENT</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                     <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.department}</td>
                        <td>
                            <Button variant="outline-secondary" onClick={() =>handleUpdate(employee.id)}>Update</Button>{" "}
                            <Button variant="outline-danger" onClick={()=> handleDelete(employee.id)}>Delete</Button>{" "}
                        </td>
                     </tr>   
                    ))}
                </tbody>
            </Table>
            </Col>
          </Row>
        </Container>
        </>
    )
}

export default Dashboard;