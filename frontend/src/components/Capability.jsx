// import React, { useState } from 'react';
// import '../css/Capability.css';
// import { Container, Row, Col, Button } from "react-bootstrap";
// import service from "../assests/service-01.jpg";
// import service1 from "../assests/service-02.jpg";
// import service2 from "../assests/service-03.jpg";
// import service3 from "../assests/service-04.png";
// import service4 from "../assests/service-05.png";
// import service5 from "../assests/service-06.webp";
// import sections from './Data.js';

// function App() {
//   const [selectedSection, setSelectedSection] = useState('residential');

//   // const sections = {
//   //   residential: {
//   //     title: 'Residential Design',
//   //     content: 'Description for residential design...',
//   //   },
//   //   office: {
//   //     title: 'Office Design',
//   //     content: 'Description for office design...',
//   //   },
//   //   hospitality: {
//   //     title: 'Hospitality Design',
//   //     content: 'Description for hospitality design...',
//   //   },
//   //   newSection: {
//   //     title: 'New Section',
//   //     content: 'Description for the new section...',
//   //   },
//   //   casting: {
//   //     title: 'Casting',
//   //     content: 'Description for casting...',
//   //   },
//   //   injection: {
//   //     title: 'Injection',
//   //     content: 'Description for injection...',
//   //   },
//   //   stamping: {
//   //     title: 'Stamping',
//   //     content: 'Description for stamping...',
//   //   },
//   // };

//   return (
//     <div className="container-fluidx">
//       <div className="capability-page">
//         <div className="overlay"></div>
//         <div className="content-wrapper1">
//           <h1>CAPABILITIES</h1>
//           <div className="breadcrumb1">
//             <i className="fa-solid fa-house-chimney"></i>
//             <span>Home </span>
//             <i className="fa-regular fa-address-card"></i>
//             <span>About Us</span>
//           </div>
//       </div>
//     </div>
//     <div>
//     <Container fluid>
//       <Row className="mt-5">
//         {/* Left Sidebar */}
//         <Col md={4} style={{ position: 'relative', top: '70px', height: 'calc(100vh - 70px)' }}>
//           <div className="d-flex flex-column">
//             {Object.keys(sections).map((sectionKey) => (
//               <Button
//                 key={sectionKey}
//                 className={`mb-2 ${selectedSection === sectionKey ? 'btn-warning' : 'btn-secondary'} button-large`}
//                 onClick={() => setSelectedSection(sectionKey)}
//               >
//                 {sections[sectionKey].sections.heading}
//               </Button>
//             ))}
//           </div>
//         </Col>

//         {/* Scrollable Content Section */}
//         <Col md={5} style={{ height: 'calc(100vh - 70px)', overflowY: 'scroll' }}>
//           <h2 className="section-title">{sections[selectedSection].title}</h2>
//           <p>{sections[selectedSection].content}</p>
//           <h3>Personalized Layouts</h3>
//           <p>Every family has different needs. We design layouts that maximize space, enhance flow, and cater to your specific lifestyle.</p>
//           <h3>Lighting Ambiance</h3>
//           <p>Lighting sets the mood in your home. We use a mix of natural and artificial lighting to create the perfect ambiance for every room.</p>
//           <h3>Technology Integration</h3>
//           <p>Seamless integration of technology is vital in modern office design. Ensure your space is equipped with the latest tech tools.</p>
//         </Col>

//         {/* Right Image Section */}
//         <Col md={3} className="d-none d-md-block" style={{ position: 'relative', top: '70px', height: 'calc(100vh - 70px)' }}>
//           <div className="d-flex flex-column">
//             {selectedSection === 'residential' && (
//               <>
//                 <img src={service} alt="Residential" className="service-img mb-2" />
//                 <img src={service1} alt="Residential" className="service-img mb-2" />
//               </>
//             )}
//             {selectedSection === 'office' && (
//               <>
//                 <img src={service2} alt="Office" className="service-img mb-2" />
//                 <img src={service3} alt="Office" className="service-img mb-2" />
//               </>
//             )}
//             {selectedSection === 'hospitality' && (
//               <>
//                 <img src={service4} alt="Hospitality" className="service-img mb-2" />
//                 <img src={service5} alt="Hospitality" className="service-img mb-2" />
//               </>
//             )}
//             {selectedSection === 'newSection' && (
//               <>
//                 <img src={service4} alt="New Section" className="service-img mb-2" />
//                 <img src={service5} alt="New Section" className="service-img mb-2" />
//               </>
//             )}
//             {selectedSection === 'casting' && (
//               <>
//                 <img src={service4} alt="Casting" className="service-img mb-2" />
//                 <img src={service5} alt="Casting" className="service-img mb-2" />
//               </>
//             )}
//             {selectedSection === 'injection' && (
//               <>
//                 <img src={service4} alt="Injection" className="service-img mb-2" />
//                 <img src={service5} alt="Injection" className="service-img mb-2" />
//               </>
//             )}
//             {selectedSection === 'stamping' && (
//               <>
//                 <img src={service4} alt="Stamping" className="service-img mb-2" />
//                 <img src={service5} alt="Stamping" className="service-img mb-2" />
//               </>
//             )}
//           </div>
//         </Col>
//       </Row>
//     </Container>
//     </div>
//       <div>


//       </div>
//     </div>
//   );
// }

// export default App;





import React, { useState } from 'react';
import '../css/Capability.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import service from "../assests/service-01.jpg";
import service1 from "../assests/service-02.jpg";
import service2 from "../assests/service-03.jpg";
import service3 from "../assests/service-04.png";
import service4 from "../assests/service-05.png";
import service5 from "../assests/service-06.webp";
import data from './Data.js';

function App() {
  const [selectedSection, setSelectedSection] = useState(data[0].title);

  return (
    <div className="container-fluidx">
      <div className="capability-page">
        <div className="overlay"></div>
        <div className="content-wrapper1">
          <h1>CAPABILITIES</h1>
          <div className="breadcrumb1">
            <i className="fa-solid fa-house-chimney"></i>
            <span>Home </span>
            <i className="fa-regular fa-address-card"></i>
            <span>About Us</span>
          </div>
        </div>
      </div>
      <div>
        <Container fluid>
          <Row className="mt-5">
            {/* Left Sidebar */}
            <Col md={4} style={{ position: 'relative', top: '70px', height: 'calc(100vh - 70px)' }}>
              <div className="d-flex flex-column">
                {data.map((section, index) => (
                  <Button
                    key={index}
                    className={`mb-2 ${selectedSection === section.title ? 'btn-warning' : 'btn-secondary'} button-large`}
                    onClick={() => setSelectedSection(section.title)}
                  >
                    {section.title}
                  </Button>
                ))}
              </div>
            </Col>

            {/* Scrollable Content Section */}
            <Col md={5} style={{ height: 'calc(100vh - 70px)', overflowY: 'scroll' }}>
              {data.map((section, index) => (
                selectedSection === section.title && (
                  <div key={index}>
                    <h2 className="section-title">{section.title}</h2>
                    <p>{section.description}</p>
                    {section.sections.map((sect, idx) => (
                      <div key={idx}>
                        <h3>{sect.heading}</h3>
                        <ul>
                          {sect.points.map((point, id) => (
                            <li key={id}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {section.whyChoose && (
                      <div>
                        <h3>Why Choose Our Solutions?</h3>
                        <ul>
                          {section.whyChoose.map((reason, id) => (
                            <li key={id}>{reason}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )
              ))}
            </Col>

            {/* Right Image Section */}
            <Col md={3} className="d-none d-md-block" style={{ position: 'relative', top: '70px', height: 'calc(100vh - 70px)' }}>
              <div className="d-flex flex-column">
                {selectedSection === 'Customized Cutting Tools & Machinery Consumables' && (
                  <>
                    <img src={service} alt="Service" className="service-img mb-2" />
                    <img src={service1} alt="Service" className="service-img mb-2" />
                  </>
                )}
                {selectedSection === 'Sheet Metal & Stamping Parts' && (
                  <>
                    <img src={service2} alt="Service" className="service-img mb-2" />
                    <img src={service3} alt="Service" className="service-img mb-2" />
                  </>
                )}
                {selectedSection === 'Hot Forging & Cold Forging of Fasteners' && (
                  <>
                    <img src={service4} alt="Service" className="service-img mb-2" />
                    <img src={service5} alt="Service" className="service-img mb-2" />
                  </>
                )}
                {selectedSection === 'Aluminium & Zinc Die Casting Parts' && (
                  <>
                    <img src={service4} alt="Service" className="service-img mb-2" />
                    <img src={service5} alt="Service" className="service-img mb-2" />
                  </>
                )}
                {selectedSection === 'Precision Machining Parts' && (
                  <>
                    <img src={service4} alt="Service" className="service-img mb-2" />
                    <img src={service5} alt="Service" className="service-img mb-2" />
                  </>
                )}
                {selectedSection === 'CAD/CAM Engineering Services' && (
                  <>
                    <img src={service4} alt="Service" className="service-img mb-2" />
                    <img src={service5} alt="Service" className="service-img mb-2" />
                  </>
                )}
                {selectedSection === 'Brass Components Manufacturing' && (
                  <>
                    <img src={service4} alt="Service" className="service-img mb-2" />
                    <img src={service5} alt="Service" className="service-img mb-2" />
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        {/* Footer */}
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
}

export default App;
