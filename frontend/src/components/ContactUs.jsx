import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import worker from "../assests/worker.webp";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ContactUs() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    attachment: null, // Add this line
  });
  const [showForm, setShowForm] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      attachment: e.target.files[0], // Store the selected file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);
    if (formData.attachment) {
      data.append('attachment', formData.attachment);
    }
  
    // Log the FormData to verify the data being sent
    for (let [key, value] of data.entries()) {
      console.log(key, value);
    }
  
    try {
      const response = await axios.post('http://localhost:5003/send-email', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Thank you for contacting us! We will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        message: '',
        attachment: null,
      });
      setShowForm(false);
    } catch (error) {
      alert('Failed to send email. Please try again later.');
      console.error(error);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div>
        <div className="capability-page">
          <div className="overlay"></div>
          <div className="content-wrapper1">
            <h1>Contact Us</h1>
            <div className="breadcrumb1">
              <i className="fa-solid fa-house-chimney"></i>
              <span>Home </span>
              <i className="fa-regular fa-address-card"></i>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <Container
        fluid
        className="p-5"
        style={{ backgroundColor: "#2C3E50", color: "white", marginTop: "100px" }}
      >
        <Row>
          {/* Contact Information */}
          <Col md={6}>
            <h2>We&apos;re Here to Help Contact Us</h2>
            <h5 className="text-warning mb-3">Get In Touch</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>

            {/* 2x2 Grid for Contact Info */}
            <Row className="mb-4">
              <Col md={6} className="mb-3">
                <Card className="bg-dark text-white p-3">
                  <Card.Body className="d-flex align-items-center">
                    <div className="me-3">
                      <i
                        className="bi bi-telephone-fill"
                        style={{ fontSize: "1.5rem", color: "#F39C12" }}
                      ></i>
                    </div>
                    <div>
                      <Card.Title>Call Now</Card.Title>
                      <Card.Text>(+62) 812 3456 7890</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="bg-dark text-white p-3">
                  <Card.Body className="d-flex align-items-center">
                    <div className="me-3">
                      <i
                        className="bi bi-envelope-fill"
                        style={{ fontSize: "1.5rem", color: "#F39C12" }}
                      ></i>
                    </div>
                    <div>
                      <Card.Title>Email</Card.Title>
                      <Card.Text>machinerex@gmail.com</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="bg-dark text-white p-3">
                  <Card.Body className="d-flex align-items-center">
                    <div className="me-3">
                      <i
                        className="bi bi-clock-fill"
                        style={{ fontSize: "1.5rem", color: "#F39C12" }}
                      ></i>
                    </div>
                    <div>
                      <Card.Title>Operational</Card.Title>
                      <Card.Text>09:00 AM - 05:00 PM</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="bg-dark text-white p-3">
                  <Card.Body className="d-flex align-items-center">
                    <div className="me-3">
                      <i
                        className="bi bi-geo-alt-fill"
                        style={{ fontSize: "1.5rem", color: "#F39C12" }}
                      ></i>
                    </div>
                    <div>
                      <Card.Title>Location</Card.Title>
                      <Card.Text>Pekanbaru, Indonesia</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          {/* Worker Image */}
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <img
              src={worker}
              alt="Worker"
              style={{ maxWidth: "100%", height: "660px" }}
            />
          </Col>
        </Row>
      </Container>

      {/* Enquiry Form Section */}
      <Container className="py-5 mt-5" style={{ backgroundColor: "#F39C12", borderRadius: "10px" }}>
        <h3 className="text-white mb-4 text-center">Enquiry Form</h3>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Form className="p-4 shadow-sm rounded" onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={12} className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={12} className="mb-3">
                  <Form.Control
                    type="file"
                    name="attachment"
                    onChange={handleFileChange}
                  />
                </Col>
                <Col md={12}>
                  <Button variant="dark" className="w-100" type="submit">
                    Submit Enquiry
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Map Section */}
      <Container fluid className="p-5 mt-5">
        <h3 className="text-center mb-4">Find Us Here</h3>
        <div className="map-section" style={{ borderRadius: "10px", overflow: "hidden" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            style={{ width: "100%", height: "350px", border: "0" }}
            allowFullScreen
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </Container>

      {/* Footer Section */}
      <footer
        className="pt-5"
        style={{ backgroundColor: "#2C3E50", color: "white" }}
      >
        <Container>
          <Row>
            {/* Company Logo and Info */}
            <Col md={3} className="mb-4">
              <div className="mb-3">
                <img
                  src="machinerex-logo.png"
                  alt="Machinerex"
                  style={{ maxWidth: "100%" }}
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div>
                <h6>Customer Service</h6>
                <p>
                  <i
                    className="bi bi-telephone-fill"
                    style={{ color: "#F39C12" }}
                  ></i>{" "}
                  (+62) 812 3456 7890
                </p>
              </div>
            </Col>

            {/* Quick Links */}
            <Col md={3} className="mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    <i className="bi bi-chevron-right"></i>Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    <i className="bi bi-chevron-right"></i>About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    <i className="bi bi-chevron-right"></i>Capabilities
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    <i className="bi bi-chevron-right"></i>Event Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    <i className="bi bi-chevron-right"></i>Contact Us
                  </a>
                </li>
              </ul>
            </Col>

            {/* Our Capabilities */}
            <Col md={3} className="mb-4">
              <h5>Our Capabilities</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    <i className="bi bi-chevron-right"></i>Casting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    <i className="bi bi-chevron-right"></i>Injection Molding
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    <i className="bi bi-chevron-right"></i>CNC Machining
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    <i className="bi bi-chevron-right"></i>High-Quality Equipment
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    <i className="bi bi-chevron-right"></i>Heavy Engineering
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    <i className="bi bi-chevron-right"></i>Stamping
                  </a>
                </li>
              </ul>
            </Col>

            {/* Get in Touch */}
            <Col md={3} className="mb-4">
              <h5>Get in Touch</h5>
              <p>
                Ronggo Wasito, Kec. Sail
                <br />
                Pekanbaru City, Riau
              </p>
              <p>
                <i
                  className="bi bi-envelope-fill"
                  style={{ color: "#F39C12" }}
                ></i>{" "}
                machinerex@mail.com
              </p>
              <p>
                <i
                  className="bi bi-clock-fill"
                  style={{ color: "#F39C12" }}
                ></i>{" "}
                09.00 - 17.00
              </p>
              <div>
                <a href="#">
                  <i
                    className="bi bi-facebook me-3 text-white"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="bi bi-twitter me-3 text-white"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="bi bi-linkedin me-3 text-white"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="bi bi-instagram text-white"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
              </div>
            </Col>
          </Row>

          {/* Footer Bottom */}
          <Row className="pt-3 border-top" style={{ borderColor: "#F39C12" }}>
            <Col md={6}>
              <p className="mb-0">Privacy Policy | Terms & Service</p>
            </Col>
            <Col md={6} className="text-md-end">
              <p className="mb-0">
                &copy; 2024 All Rights Reserved | Design by CreedCreatives
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default ContactUs;