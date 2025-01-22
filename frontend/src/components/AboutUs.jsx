import React from "react";
import "../css/About.css";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Carousel,
  Form,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import icon from "../assests/icon1.webp";
import icon2 from "../assests/icon2.webp";
import icon3 from "../assests/icon3.webp";
import interior from "../assests/interior.jpg";
import expert1 from "../assests/expert-01.png";
import expert2 from "../assests/expert-02.png";
import expert3 from "../assests/expert-03.png";
import expert4 from "../assests/expert-04.png";
import commercial from "../assests/commercial-01.jpg";
import commercial1 from "../assests/commercial-02.webp";
import mission from './../assests/mission.webp';
import vision from './../assests/vision.jpg';


const AboutPage = () => {
  const navigate = useNavigate();

  // const handleMoreAboutClick = () => {
  //   navigate("/aboutus");
  // };

  const experts = [
    {
      name: 'Tom Holland',
      title: 'CEO & Founder',
      image: expert1,
      facebook: '#',
      instagram: '#',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Zendaya',
      title: 'CEO & Founder',
      image: expert2,
      facebook: '#',
      instagram: '#',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Tobey Maguire',
      title: 'CEO & Founder',
      image: expert3,
      facebook: '#',
      instagram: '#',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Marisa Tomei',
      title: 'CEO & Founder',
      image: expert4,
      facebook: '#',
      instagram: '#',
      linkedin: '#',
      twitter: '#',
    },
  ];

  return (
    <div className="about-page-container" style={{ paddingTop: "10px" }}>
      {/* Adjust top padding */}
      <div className="about-page">
        {/* Navbar */}

        {/* Content below Navbar */}
        <div className="content-wrapper">
          <h1>ABOUT US</h1>
          <div className="breadcrumb1">
            <i className="fa-solid fa-house-chimney"></i>
            <span>Home </span>
            <i className="fa-regular fa-address-card"></i>
            <span>About Us</span>
          </div>
        </div>
      </div>
      <div className="container" style={{ padding: "25px" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 mb-2 mt-3">
                    <img src={icon} alt="" className="xxxx" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-3">
                    <img src={icon2} alt="" className="xxxx" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img src={icon3} alt="" className="xxxx1" />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <Container className="about-us-container py-5">
              <Row>
                <Col lg={12} className="text-center">
                  <h6 className="text-warning">About Us</h6>
                  <h2>Your Trusted Partner for Quality Equipment Rentals</h2>
                </Col>
              </Row>

              <Row className="text-center my-4">
                <Col lg={4} md={12}>
                  <div className="d-inline-block">
                    <span className="badge bg-warning text-dark">
                      Range of Equipment
                    </span>
                  </div>
                </Col>
                <Col lg={4} md={12}>
                  <div className="d-inline-block">
                    <span className="badge bg-warning text-dark">
                      Competitive Pricing
                    </span>
                  </div>
                </Col>
                <Col lg={4} md={15}>
                  <div className="d-inline-block">
                    <span className="badge bg-warning text-dark">
                      Experts Support
                    </span>
                  </div>
                </Col>
              </Row>

              <Row className="">
                <Col lg={12}>
                  <p>
                    Founded by engineers with over two decades of expertise in manufacturing and supply chain management, PreciseAxis Pvt Ltd is a trusted name in engineering excellence. Our core strengths lie in:
                  </p>
                  <ul>
                    <li><span className="fs-5 font-bolder">Vendor Development & Management:</span> Forging strategic partnerships and nurturing vendor relationships.</li>
                    <li><span className="fs-5 font-bolder">Operational Efficiency:</span> Optimizing supply chain processes to reduce costs and improve performance.</li>
                    <li><span className="fs-5 font-bolder">Industry Expertise:</span> Serving diverse sectors like cutting tools, precision components, sheet metal, cold and hot forging, powder metallurgy, and consumable industries, including defense, medical, and machinery spare parts.</li>
                  </ul>
                  <p>With a clear strategy and ethical business practices, we drive sustainable growth and operational excellence.</p>
                </Col>
              </Row>
              <hr className="my-4" />
            </Container>
          </div>

          <div>
            <Container className="about-us-container py-5">
              <Row>
                <h3
                  className="machinerex-title"
                  style={{ fontSize: "1.5rem" }}
                >
                  Leadership
                </h3>
                <h1
                  className="machinerex-subtitle"
                  style={{
                    color: "black",
                    // textAlign: "center",
                    fontSize: "2.5rem",
                    margin: "10px 0",
                  }}
                >
                  At PreciseAxis, leadership is defined by:
                </h1>
                <div className="leadership">
                  <p>•	<span className="fw-bolder fs-5">Visionary Strategy:</span> Driving growth through well-defined enterprise strategies.</p>
                  <p>•<span className="fw-bolder fs-5">	Agility & Scalability:</span> Ensuring swift scalability with multiple supply chain strategies for 10x efficiency.</p>
                  <p>•	<span className="fw-bolder fs-5">Global Supplier Network:</span> Collaborating with a network of world-class suppliers, delivering reliable solutions across industries.</p>
                  <p>•	<span className="fw-bolder fs-5">Commitment to Integrity:</span> Upholding ethical practices and contributing to the communities we serve.</p>
                </div>
              </Row>
            </Container>
          </div>



        </div>
      </div>
      <div style={{ fontFamily: "'Arial', sans-serif" }}>
        <Container className="my-5">
          <Row className="align-items-center mb-5">
            <Col md={6}>
              <img
                src={interior}
                alt="Interior Design"
                className="img-fluid rounded"
                style={{
                  border: "none",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              />
            </Col>
            <Col md={6}>
              <h3 style={{ fontWeight: "bold", fontSize: "2rem" }}>
                Founded in 1997, Dhavanesha Interiors...
              </h3>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                We've distilled 28 years of industry wisdom into crafting your
                perfect home. From humble beginnings to becoming a leader in
                design and craftsmanship, our journey has been marked by a
                dedication to quality and customer satisfaction. As a
                third-generation family business, we have inherited a legacy of
                passion and expertise in transforming spaces.
              </p>
            </Col>
          </Row>

          <h2 className="text-center mb-4 display-6 pt-3" style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
            What Sets Us Apart
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            At PreciseAxis Pvt Ltd, we take pride in our distinct strengths that make us a trusted partner for engineering and manufacturing solutions:
          </p>

          <Row className="justify-content-center">
            <Col xs={12} md={4} className="mb-3">
              <Card className="text-center border-0">
                <Card.Body>
                  <div className="mb-3">
                    <i
                      className="fas fa-trophy"
                      style={{ fontSize: "2.5rem", color: "#f0c14b" }}
                    ></i>
                  </div>
                  <Card.Title style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    Legacy of Excellence
                  </Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    With over two decades of experience, we have honed our skills
                    in creating bespoke interiors that merge functionality with
                    aesthetic appeal.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-3">
              <Card className="text-center border-0">
                <Card.Body>
                  <div className="mb-3">
                    <i
                      className="fas fa-lightbulb"
                      style={{ fontSize: "2.5rem", color: "#f0c14b" }}
                    ></i>
                  </div>
                  <Card.Title style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    Innovation and Creativity
                  </Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    We embrace innovation in design and technology, ensuring our
                    solutions are at the forefront of contemporary trends.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-3">
              <Card className="text-center border-0">
                <Card.Body>
                  <div className="mb-3">
                    <i
                      className="fas fa-user"
                      style={{ fontSize: "2.5rem", color: "#f0c14b" }}
                    ></i>
                  </div>
                  <Card.Title style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    Customer-Centric Approach
                  </Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    Your vision is our priority. We collaborate closely with
                    clients to understand their unique needs and aspirations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container className="my-5">
          <h2 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
            Mission
          </h2>
          <Row className="align-items-center mb-6 mission-vision-section">
            <Col md={6}>
              <div className="zoom-effect">
                <img
                  src={mission}
                  alt="Mission"
                  className="img-fluid rounded w-75"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="zoom-effect">
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                  To deliver high-quality engineering components, cutting tools, and services that incorporate modern design and production methodologies, meeting and exceeding global standards. We are committed to fostering sustainable growth by maintaining ethical practices, ensuring reliability, and continuously enhancing operational excellence across all sectors we serve.
                </p>
              </div>
            </Col>
          </Row>

          <h2 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
            Vision
          </h2>
          <Row className="align-items-center mb-6 mission-vision-section">
            <Col md={6}>
              <div className="zoom-effect">
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                  To be a global leader in the engineering and manufacturing industry, recognized for innovation, quality, and ethical business practices. Our vision is to build a robust supply chain ecosystem that empowers industries with precision-engineered solutions, driving efficiency and creating long-term value for our customers, employees, and stakeholders.
                </p>
              </div>
            </Col>
            <Col md={5}>
              <div className="zoom-effect">
                <img
                  src={vision}
                  alt="Vision"
                  className="img-fluid rounded"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="my-5">
        <h6 className="text-center text-warning">Meet Our Experts</h6>
        <h2 className="text-center">The Minds Behind Our Success</h2>
        <p className="text-center text-muted">
        Our strength lies in our people. Our team is composed of highly skilled engineers, designers, supply chain experts, and quality control specialists who work together seamlessly to deliver the best solutions for our clients. With a shared commitment to excellence, innovation, and customer satisfaction, each team member plays a crucial role in achieving our mission to provide top-quality engineering components and services.
        </p>

        {/* <Row className="mt-4">
          {experts.map((expert, index) => (
            <Col key={index} md={3} className="mb-4">
              <Card className="expert-card animate__animated animate__slideInUp">
                <Card.Img variant="top" src={expert.image} />
                <div className="expert-info p-3">
                  <i className="icon-up mb-2"></i> 
                  <h5 className="text-center">{expert.name}</h5>
                  <p className="text-center">{expert.title}</p>
                  <div className="social-icons text-center">
                    <a href={expert.facebook}><i className="bi bi-facebook"></i></a>
                    <a href={expert.instagram}><i className="bi bi-instagram"></i></a>
                    <a href={expert.linkedin}><i className="bi bi-linkedin"></i></a>
                    <a href={expert.twitter}><i className="bi bi-twitter"></i></a>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row> */}
      </Container>

      <div>
        <footer
          className="pt-5"
          style={{ backgroundColor: "#2C3E50", color: "white" }}
        >
          <Container>
            {/* Main Footer Content */}
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
                      <i class="bi bi-chevron-right"></i>Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      <i class="bi bi-chevron-right"></i>Anout Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      <i class="bi bi-chevron-right"></i>Capabilities
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      <i class="bi bi-chevron-right"></i>Event Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      <i class="bi bi-chevron-right"></i>Contact Us
                    </a>
                  </li>
                </ul>
              </Col>

              {/* Our Service */}
              <Col md={3} className="mb-4">
                <h5>Our Capabilities</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white">
                      <i class="bi bi-chevron-right"></i>Casting
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      <i class="bi bi-chevron-right"></i>Injection Molding
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      <i class="bi bi-chevron-right"></i>CNC Machining
                      Available
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      <i class="bi bi-chevron-right"></i>High-Quality Equipment
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      <i class="bi bi-chevron-right"></i>Heavy Engineering
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      <i class="bi bi-chevron-right"></i>Stamping
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
    </div>
  );
};

export default AboutPage;
