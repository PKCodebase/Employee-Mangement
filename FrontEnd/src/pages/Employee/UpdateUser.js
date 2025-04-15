import React, { useEffect } from 'react';
import './UpdateUser.css';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const UpdateUser = () =>{
    const{id} = useParams();
    const navigate = useNavigate();
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(()=>{
    const fetchEmployee = async () => {
        try{
            const response = await fetch(`http://localhost:9000/api/${id}`);
            const data = await response.json();
            setFormData(data);
        }catch(error){
            console.error("Error fetching employee:", error.message);
        }
    }
    fetchEmployee();

},[id]);


   const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await fetch(`http://localhost:9000/api/${id}`, {
      method: "PUT",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log("Employee Updated",data);
    navigate("/"); // Redirect to the dashboard after successful submission

   }catch(error){
   console.error("Error:", error.message);
   }
}

    return(
        <div className="center-form">
        <h1>Edit Employee</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>
  
          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
  
          <Form.Group controlId="formPhone">
            <Form.Control
              type="text"
              name="phone"
              placeholder="Enter Phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Form.Group>
  
          <Form.Group controlId="formDepartment">
            <Form.Control
              type="text"
              name="department"
              placeholder="Enter Department"
              value={formData.department}
              onChange={handleInputChange}
            />
          </Form.Group>
  
          <Button variant="primary" type="submit" className="w-100">
            Edit Employee
          </Button>
        </Form>
      </div>
    )
}

export default UpdateUser;