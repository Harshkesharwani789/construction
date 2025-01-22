import "../css/Home.css";
import "../css/About.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import bulldozer from "../assests/bulldozer-removebg-preview.png";
import client1 from "../assests/client-01.png";
import client2 from "../assests/client-02.png";
import client3 from "../assests/client-03.png";
import icon from "../assests/icon1.webp";
import icon2 from "../assests/icon2.webp";
import icon3 from "../assests/icon3.webp";
import excavator from "../assests/excavator-02.webp";
import map from "../assests/map.png";
import map2 from "../assests/navy-world-map.png";
import worker from "../assests/worker.webp";
import Logo from "../assests/logo.svg";
import Tech1 from "../assests/tech1.png";
import Tech2 from "../assests/tech2.png";
import Tech3 from "../assests/tech3.png";
import Tech4 from "../assests/tech4.png";
import Tech5 from "../assests/tech5.webp";

// import product from "../assests/Product-01.png"

const Home = () => {
  const settings = {
    dots: true, // Add pagination dots if needed
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Autoplay functionality
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const navigate = useNavigate(); // For navigation

  // Function to handle clicking on the flexbox
  const handleBoxClick = () => {
    navigate("/capability"); // Redirect to capability page
  };

  const handleMoreAboutClick = () => {
    navigate("/aboutus");
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  // Dummy data for categories
  const categories = [
    {
      id: 1,
      title: "Grading Equipment",
      img: "https://fadli.creedcreatives.net/machinerex/wp-content/uploads/sites/16/2024/08/Product-01.png",
      details: "Details about grading equipment",
    },
    {
      id: 2,
      title: "Heavy Machinery",
      img: "https://fadli.creedcreatives.net/machinerex/wp-content/uploads/sites/16/2024/08/Product-05.png",
      details: "Details about heavy machinery",
    },
    {
      id: 3,
      title: "Material Handling",
      img: "https://fadli.creedcreatives.net/machinerex/wp-content/uploads/sites/16/2024/08/Product-07.png",
      details: "Details about material handling",
    },
    {
      id: 4,
      title: "Transportation Vehicles",
      img: "https://fadli.creedcreatives.net/machinerex/wp-content/uploads/sites/16/2024/08/Product-08.png",
      details: "Details about transportation vehicles",
    },
    {
      id: 5,
      title: "Forestry Equipment",
      img: "https://fadli.creedcreatives.net/machinerex/wp-content/uploads/sites/16/2024/08/Product-09.png",
      details: "Details about forestry equipment",
    },
    {
      id: 6,
      title: "Agricultural Machinery",
      img: "agriculture.png",
      details: "Details about agricultural machinery",
    },
  ];

  // Function to handle category click and reveal details
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  return (
    <div>

      <div className="home-container ">
        <div className="home-content1">
          {/* Welcome Text */}
          <p className="welcome-text">Welcome to Precise axis</p>

          {/* Main Heading */}
          <h1 className="main-heading">
            One-stop, <br /> on-demand manufacturing services.
          </h1>

          {/* Description */}
          <h3>Simplify your manufacturing needs with PreciseAxis:</h3>
          <ul>
            <li><span>Instant Solutions:</span> Upload your 3D designs, receive real-time quotes, and place orders seamlessly.</li>
            <li><span>Extensive Network:</span> Over 1,000 manufacturers in India and overseas.</li>
            <li><span>Versatile Processes:</span> Supporting 15+ processes and 130+ materials for prototyping and production.</li>
            <li><span>Speed:</span> Manufacture parts in as little as one day.</li>
            <li><span>Quality Assurance:</span> Rigorous QA processes and certifications for every product.</li>
          </ul>

          {/* Get Started Button */}
          <button className="get-started-btn">Get Started</button>

          {/* Flex Container for Reviews and Stats */}
          <div className="stats-container">
            {/* Reviews */}
            <div className="reviews-section">


              {/* Stars and Rating */}
              <div className="rating-section">
                <div className="stars">
                  {/* Star SVG Icons (5 stars) */}
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      aria-hidden="true"
                      className="e-font-icon-svg e-eicon-star"
                      viewBox="0 0 1000 1000"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                    </svg>
                  ))}
                  <span className="rating-number">4.8</span>
                </div>
                <p className="trusted-by">Trusted by 2k+ Clients</p>
              </div>
            </div>

            {/* Stats */}
            <div className="stats">
              <div className="stat">
                <h2>15+</h2>
                <p>Processes</p>
              </div>
              <div className="stat">
                <h2>130+</h2>
                <p>Materials</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-side-container">
        <div className="image-box">
          <img src={bulldozer} alt="Excavator" className="excavator-image" />
        </div>
      </div>
      <div className="button-container">
        <button className="custom-button">
          <span className="circle-icon">●</span>
          Quality You Can Trust!
        </button>
        <button className="custom-button">
          <span className="circle-icon">●</span>
          Act Fast, Save More!
        </button>
        <button className="custom-button">
          <span className="circle-icon">●</span>
          Innovation at Its Best!
        </button>
        <button className="custom-button">
          <span className="circle-icon">●</span>
          Smart Choices, Big Savings!
        </button>
      </div>

      {/* Machinerex Section */}
      <div
        className="why-machinerex"
        style={{ padding: "50px 0", backgroundColor: "#2C3E50" }}
      >
        {/* Section Title */}
        <h3
          className="machinerex-title"
          style={{ color: "white", textAlign: "center", fontSize: "1.5rem" }}
        >
          Capabilities
        </h3>
        <h1
          className="machinerex-subtitle"
          style={{
            color: "white",
            // textAlign: "center",
            fontSize: "2.5rem",
            margin: "10px 0",
          }}
        >
          Why Machinerex Stands Out
        </h1>

        {/* Flexbox Container (Sliding Effect) */}
        <div
          className="machinerex-slider"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Flexboxes with sliding effect */}

          <div
            className="machinerex-box"
            onClick={handleBoxClick}
            style={{
              background: "#34495E",
              padding: "20px",
              borderRadius: "8px",
              flex: "1 1 calc(20% - 20px)",
              minWidth: "250px",
              textAlign: "center",
              color: "white",
            }}
          >
            <img
              src={Tech1}
              alt="Quality"
              className="icon"
              style={{ maxWidth: "80px", marginBottom: "10px" }}
            />
            <h2 style={{ fontSize: "1.2rem", margin: "10px 0" }}>
              Quality You Can Trust!
            </h2>
            <p>
              At PreciseAxis, our rigorous quality control ensures every product meets global standards, delivering precision, reliability, and customer satisfaction.
            </p>
          </div>
          <div
            className="machinerex-box"
            onClick={handleBoxClick}
            style={{
              background: "#34495E",
              padding: "20px",
              borderRadius: "8px",
              flex: "1 1 calc(20% - 20px)",
              minWidth: "250px",
              textAlign: "center",
              color: "white",
            }}
          >
            <img
              src={Tech2}
              alt="Unrivaled Support"
              className="icon"
              style={{ maxWidth: "80px", marginBottom: "10px" }}
            />
            <h2 style={{ fontSize: "1.2rem", margin: "10px 0" }}>
              Unrivaled and Flexibility
            </h2>
            <p>
              With PreciseAxis, quick decisions lead to big savings. Streamlined processes ensure faster delivery and cost-effective solutions every time.
            </p>
          </div>

          <div
            className="machinerex-box"
            onClick={handleBoxClick}
            style={{
              background: "#34495E",
              padding: "20px",
              borderRadius: "8px",
              flex: "1 1 calc(20% - 20px)",
              minWidth: "250px",
              textAlign: "center",
              color: "white",
            }}
          >
            <img
              src={Tech3}
              alt="Innovation"
              className="icon"
              style={{ maxWidth: "80px", marginBottom: "10px" }}
            />
            <h2 style={{ fontSize: "1.2rem", margin: "10px 0" }}>
              Innovation at Its Best
            </h2>
            <p>
              PreciseAxis delivers cutting-edge solutions with advanced technology, redefining precision and efficiency for industries worldwide. Experience true innovation with us.
            </p>
          </div>

          <div
            className="machinerex-box"
            onClick={handleBoxClick}
            style={{
              background: "#34495E",
              padding: "20px",
              borderRadius: "8px",
              flex: "1 1 calc(20% - 20px)",
              minWidth: "250px",
              textAlign: "center",
              color: "white",
            }}
          >
            <img
              src={Tech4}
              alt="Smart Choices"
              className="icon"
              style={{ maxWidth: "80px", marginBottom: "10px" }}
            />
            <h2 style={{ fontSize: "1.2rem", margin: "10px 0" }}>
              Smart Choices, Big Savings
            </h2>
            <p>Choose PreciseAxis for cost-effective solutions. Our efficient processes and expert strategies ensure top quality with significant savings.</p>
          </div>

          {/* <div
            className="machinerex-box"
            onClick={handleBoxClick}
            style={{
              background: "#34495E",
              padding: "20px",
              borderRadius: "8px",
              flex: "1 1 calc(20% - 20px)",
              minWidth: "250px",
              textAlign: "center",
              color: "white",
              display: "flex", // Use flexbox for proper alignment
              flexDirection: "column", // Stack children vertically
              alignItems: "center", // Center align items
            }}
          >
            <img
              src={Tech5}
              alt="Quality"
              className="icon"
              style={{ maxWidth: "80px", marginBottom: "10px" }}
            />
            <h2 style={{ fontSize: "1.2rem", margin: "10px 0" }}>
              Quality You Can Trust!
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div> */}

        </div>
      </div>
      <Container style={{ padding: '25px' }}>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <Row>
                  <Col md={12} className="mb-2 mt-3">
                    <img src={icon} alt="" className="xxxx" style={{ width: '100%', borderRadius: '14px' }} />
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="mt-3">
                    <img src={icon2} alt="" className="xxxx" style={{ width: '100%', borderRadius: '14px' }} />
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <img src={icon3} alt="" className="xxxx1" style={{ width: '100%', borderRadius: '14px' }} />
              </Col>
            </Row>
          </Col>

          <Col md={6}>
            <Container className="about-us-container py-5">
              <Row>
                <Col lg={12} className="text-center">
                  <h6 className="text-warning">About Us</h6>
                  <h2>Engineering Excellence, Unmatched Quality</h2>
                </Col>
              </Row>

              <Row className="text-center my-4">
                <Col lg={4} md={12}>
                  <div className="d-inline-block">
                    <Badge bg="warning" className="text-dark">
                      Range of Equipment
                    </Badge>
                  </div>
                </Col>
                <Col lg={4} md={12}>
                  <div className="d-inline-block">
                    <Badge bg="warning" className="text-dark">
                      Competitive Pricing
                    </Badge>
                  </div>
                </Col>
                <Col lg={4} md={12}>
                  <div className="d-inline-block">
                    <Badge bg="warning" className="text-dark">
                      Experts Support
                    </Badge>
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
              <Row className="text-center">
                <Col lg={12}>
                  <Button variant="primary" onClick={handleMoreAboutClick}>
                    More About
                  </Button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container className="category-grid py-5">
        <Row>
          <Col lg={12} className="text-center">
            <h6 className="text-warning">Let's Choose</h6>
            <h2>Select Your Ideal Category</h2>
          </Col>
        </Row>

        <Row className="mt-4">
          {categories.map((category) => (
            <Col lg={4} md={4} className="mb-2" key={category.id}>
              <Card className="category-card ">
                <Card.Img
                  variant="top"
                  src={category.img}
                  alt={category.title}
                  className="category-img"
                />
                <Card.Body className="category-body">
                  <div
                    className="category-section"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <h5>{category.title}</h5>
                  </div>
                  {selectedCategory === category.id && (
                    <div className="category-details">
                      <p>{category.details}</p>
                      <Button variant="warning">$200 / Day - Rent Now</Button>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* How It Works */}
      <div>
        <Container className="steps-section">
          <div className="text-center mb-4">
            <h5 className="section-subtitle">What We Do</h5>
            {/* <h2 className="section-title">
              Simple Steps to Achieve Your Goals
            </h2> */}
            <p className="section-description">
              At PreciseAxis Pvt Ltd, we specialize in providing comprehensive engineering and manufacturing solutions tailored to meet the diverse needs of our clients.
            </p>
          </div>

          <Row className="g-4">
            {/* Step 1 */}
            <Col lg={6} md={6}>
              <div className="step-box">
                <div className="step-icon">
                  <i className="bi bi-search"></i> {/* Bootstrap Icon */}
                </div>
                <div className="step-content">
                  <h3>High-Quality Engineering Components</h3>
                  <p>
                    We design, produce, and supply cutting-edge components, including precision parts, sheet metal products, and forging solutions, ensuring compliance with international quality standards.
                  </p>
                </div>
                <div className="step-number">01</div>
              </div>
            </Col>

            {/* Step 2 */}
            <Col lg={6} md={6}>
              <div className="step-box">
                <div className="step-icon">
                  <i className="bi bi-calendar"></i> {/* Bootstrap Icon */}
                </div>
                <div className="step-content">
                  <h3>Cutting Tools Manufacturing</h3>
                  <p>
                    Our range of cutting tools is crafted using advanced techniques to support industries in achieving superior performance and efficiency.
                  </p>
                </div>
                <div className="step-number">02</div>
              </div>
            </Col>

            {/* Step 3 */}
            <Col lg={6} md={6}>
              <div className="step-box">
                <div className="step-icon">
                  <i className="bi bi-cart"></i> {/* Bootstrap Icon */}
                </div>
                <div className="step-content">
                  <h3>End-to-End Supply Chain Management</h3>
                  <p>
                    We offer strategic supply chain solutions, from vendor development to efficient delivery, ensuring seamless operations and cost optimization for our clients.
                  </p>
                </div>
                <div className="step-number">03</div>
              </div>
            </Col>

            {/* Step 4 */}
            <Col lg={6} md={6}>
              <div className="step-box">
                <div className="step-icon">
                  <i className="bi bi-truck"></i> {/* Bootstrap Icon */}
                </div>
                <div className="step-content">
                  <h3>Custom Manufacturing Services</h3>
                  <p className="m-0 p-0">
                    With our on-demand manufacturing platform, clients can:
                  </p>
                  <p className="m-0 p-0"> •	Upload 3D drawings for real-time quotes.</p>
                  <p className="m-0 p-0">•	Choose from over 15+ processes and 130+ materials.</p>
                  <p className="m-0 p-0">  •	Access a network of 1,000+ manufacturers in India and abroad.</p>
                </div>
                <div className="step-number">04</div>
              </div>
            </Col>

                   {/* Step 5 */}
                   <Col lg={6} md={6}>
              <div className="step-box">
                <div className="step-icon">
                <i class="fa-solid fa-layer-group"></i>
                </div>
                <div className="step-content">
                  <h3>Industry-Specific Solutions</h3>
                  <p className="m-0 p-0">
                  We cater to a broad spectrum of industries, including:
                  </p>
                  <p className="m-0 p-0"> •	Consumables.</p>
                  <p className="m-0 p-0">•	Defense.</p>
                  <p className="m-0 p-0">  •	Medical Equipment.</p>
                  <p className="m-0 p-0">  •	Machinery Spare Parts.</p>
                </div>
                <div className="step-number">05</div>
              </div>
            </Col>

                  {/* Step 6 */}
                  <Col lg={6} md={6}>
              <div className="step-box">
                <div className="step-icon">
                  <i class="fa-solid fa-headphones"></i>
                </div>
                <div className="step-content">
                  <h3>Prototyping and Production Support</h3>
                  <p className="m-0 p-0">
                  Our agile approach ensures quick turnaround times, enabling clients to manufacture parts in as little as one day, backed by strict quality assurance and certifications.
                  </p>
                  <p className="m-0 p-0">PreciseAxis is your trusted partner for precision-engineered solutions, combining innovation, reliability, and unmatched expertise.</p>
                </div>
                <div className="step-number">06</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main-section">
        <Container fluid className="d-flex justify-content-center my-4">
          <Card
            className="bg-warning p-4 d-flex flex-column flex-md-row align-items-center rounded"
            style={{ maxWidth: "100%", width: "100%", maxHeight: "100%" }}
          >
            <Row className="w-100 align-items-center">
              <Col
                md={8}
                className="d-flex flex-column flex-md-row align-items-center border-md-end border-white mb-3 mb-md-0 pe-md-4"
              >
                <div className="text-center text-md-start mb-3 mb-md-0">
                  <img
                    src={Logo}
                    alt="Service Icon"
                    style={{ maxHeight: "80px", maxWidth: "80px" }}
                    className="mb-3 mb-md-0"
                  />
                </div>
                <div className="ms-md-4 text-center text-md-start">
                  <p className="text-white fs-5 fs-md-4 fs-lg-2 fw-bold mb-0">
                    Builderrine is proud to serve you
                    <br className="d-none d-md-block" /> 24/7. Just Call Us when you need
                  </p>
                </div>
              </Col>
              <Col
                md={4}
                className="d-flex flex-column justify-content-center text-center"
              >
                <p className="text-white fs-6 fs-md-5 fw-bold mb-1">Call Us Anytime</p>
                <p className="text-primary fs-5 fs-md-4 fw-bold text-decoration-underline mb-0">
                  +99 (1234) 56 789
                </p>
              </Col>
            </Row>
          </Card>
        </Container>

        {/* Main Section with Text and Image */}
        <div className="main-content-section py-5">
          <Container>
            <Row className="align-items-center">
              {/* Left Side - Text Content */}
              <Col lg={6} md={6} sm={12} className="mb-4 mb-md-0">
                <div className="text-content text-center text-md-start">
                  <p className="trusted-text text-warning mb-2 fs-5 fw-semibold">
                    Why Choose PreciseAxis?
                  </p>
                  <h2 className="mb-4 fs-3 fw-bold">Choose Quality, Choose Us!</h2>
                  <ul>
                    <li className="text-light"><span className="fw-bolder fs-5">Global Standards:</span> Products and services designed to match international benchmarks</li>
                    <li className="text-light"><span className="fw-bolder fs-5">Expert Team: </span> A dedicated team of supply chain engineers ensuring top-tier quality.</li>
                    <li className="text-light"><span className="fw-bolder fs-5">Industry Adaptability: </span> Serving a wide range of sectors with cutting-edge solutions.</li>
                    <li className="text-light"><span className="fw-bolder fs-5">Ethical Operations: </span> Conducting business with integrity and respect for people and communities.</li>
                  </ul>
                </div>
              </Col>

              {/* Right Side - Excavator Image */}
              <Col lg={6} md={6} sm={12} className="d-flex justify-content-center">
                <div className="image-section">
                  <img
                    src={excavator}
                    alt="Excavator"
                    className="img-fluid excavator-img"
                    style={{ borderRadius: '10px', maxWidth: '100%' }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container fluid className="my-5 ">
          {/* Paragraph Section */}
          <Row className="justify-content-center text-center mb-4">
            <Col md={8}>
              <h5 className="section-subtitle">Our Clients</h5>
              <h2 className="section-title">
                Trust by Our Clients Around the World
              </h2>
              {/* <p className="section-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium modi saepe fugiat, enim laborum molestiae minus
                nulla voluptatum amet distinctio recusandae. Ad ea saepe
                consequatur sunt aperiam magni hic quasi? Eius minima
                voluptatibus hic facilis quis error voluptates iusto quia.
              </p> */}
            </Col>
          </Row>

          {/* Image Section */}
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <img
                src={map2}
                alt="Description of image"
                className="custom-image"
              />
              <img src={map} alt="Map image" className="overlay-image" />
            </Col>
          </Row>
        </Container>

        <Container>
          {/* Testimonials Carousel Section */}
          <div className="my-51">
            <Row className="justify-content-between align-items-center mb-4">
              <Col md={8}>
                <h5 className="section-subtitle">Story Of Client</h5>
                <h2 className="section-title">
                  Enhance Efficiency with Built’s Trusted Equipment
                </h2>
              </Col>
            </Row>
            <Slider {...settings}>
              {/* Testimonial Card 1 */}
              <div>
                <Card className="testimonial-card">
                  <Card.Body>
                    <div className="client-info d-flex align-items-center mt-3">
                      {/* <img
                        src={client1}
                        roundedCircle
                        className="client-img"
                        alt="Client 1"
                      /> */}
                      <div className="ms-3">
                        <h6 className="client-name"><strong>John D., Operations Manager</strong></h6>
                        <p className="client-title">PreciseAxis has truly exceeded our expectations. Their ability to provide high-quality components with rapid turnaround has helped us meet stringent project deadlines without any compromises in quality.</p>
                      </div>
                    </div>
                    <div className="quote-icon">“ ”</div>
                  </Card.Body>
                </Card>
              </div>

              {/* Testimonial Card 2 */}
              <div>
                <Card className="testimonial-card">
                  <Card.Body>
                    <div className="client-info d-flex align-items-center mt-3">
                      {/* <img
                        src={client2}
                        roundedCircle
                        className="client-img"
                        alt="Client 2"
                      /> */}
                      <div className="ms-3">
                        <h6 className="client-name"><strong>Anjali R., Vice President of Operations</strong></h6>
                        <p className="client-title">"The level of innovation and precision delivered by PreciseAxis is unmatched. Their team consistently goes above and beyond to ensure we get the best products for our needs, on time and within budget."</p>
                      </div>
                    </div>
                    <div className="quote-icon">“”</div>
                  </Card.Body>
                </Card>
              </div>

              {/* Testimonial Card 3 */}
              <div>
                <Card className="testimonial-card">
                  <Card.Body>
                    <div className="client-info d-flex align-items-center mt-3">
                      {/* <img
                        src={client3}
                        roundedCircle
                        className="client-img"
                        alt="Client 3"
                      /> */}
                     <div className="ms-3">
                        <h6 className="client-name"><strong>Michael J., Senior Engineer</strong></h6>
                        <p className="client-title">"We've been partnering with PreciseAxis for several years, and their consistent quality and reliability have made them an integral part of our operations. They understand our needs and always deliver exceptional results."</p>
                      </div>
                    </div>
                    <div className="quote-icon">“”</div>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </div>
        </Container>
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

export default Home;
