import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./PostUser.css";
import { useNavigate } from "react-router-dom";

const PostUser = () => {
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

  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await fetch("http://localhost:9000/api/add", {
      method: "POST",   
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log("Emplyee Created",data);
    navigate("/"); // Redirect to the dashboard after successful submission

  }catch(error){
    console.error("Error:", error);
  }
}

  return (
    <div className="center-form">
      <h1>Post Employee</h1>
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
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PostUser;
