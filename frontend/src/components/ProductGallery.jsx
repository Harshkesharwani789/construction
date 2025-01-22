import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/ProductGallery.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import service from "../assests/service-01.jpg";
import service1 from "../assests/service-02.jpg";
import service2 from "../assests/service-03.jpg";
import service3 from "../assests/service-04.png";
import service4 from "../assests/service-05.png";
import service5 from "../assests/service-06.webp";

// Updated array to handle both images and videos (total 15 media items)
const media = [
  { type: "image", src: service },
  { type: "image", src: service1 },
  { type: "image", src: service2 },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { type: "image", src: service3 },
  { type: "video", src: service5 },
  { type: "image", src: service4 },
  { type: "image", src: "https://via.placeholder.com/300" },
  { type: "image", src: "https://via.placeholder.com/300" },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { type: "image", src: "https://via.placeholder.com/300" },
  { type: "image", src: "https://via.placeholder.com/300" },
  { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
  { type: "image", src: "https://via.placeholder.com/300" },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

function ProductGallery() {
  return (
    <div className="containerx">
      {" "}
      {/* Added margin from navbar */}
      <div className="row">
        <div className="about-page">
          {/* Navbar */}

          {/* Content below Navbar */}
          <div className="content-wrapper">
            <h1>Event Gallery</h1>
            <div className="breadcrumb1">
              <i className="fa-solid fa-house-chimney"></i>
              <span>Home </span>
              <i className="fa-regular fa-address-card"></i>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="row mt-5 ">
          {media.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
                className="img-container"
                style={{ width: "100%", height: "300px", overflow: "hidden" }}
              >
                {" "}
                {/* Fixed size */}
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Product ${index}`}
                    className="img-fluid product-img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                  />
                ) : (
                  <video
                    controls
                    className="img-fluid product-video"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
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
  );
}

export default ProductGallery;
