import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    region: "",
    city: ""
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
    <Form className= "form-style" onSubmit={handleSubmit} >
      <Form.Group controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su correo electrónico"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
    </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Ingrese su número de teléfono"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formRegion">
        <Form.Label>Región</Form.Label>
        <Form.Control
          as="select"
          name="region"
          value={formData.region}
          onChange={handleChange}
        >
          <option value="">Seleccione su región</option>
          <option value="region1">Región 1</option>
          <option value="region2">Región 2</option>
          <option value="region3">Región 3</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formCity">
        <Form.Label>Ciudad</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su ciudad"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form></div>
  );
}

export default ContactForm;
