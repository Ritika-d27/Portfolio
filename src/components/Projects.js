import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import projImg4 from "../assets/images/project-img4.png";
import projImg5 from "../assets/images/project-img5.png";
import projImg6 from "../assets/images/project-img6.png";
import img1 from "../assets/images/achv2.jpg";
import img2 from "../assets/images/achv1.png";
import img3 from "../assets/images/achv6.png";
import img4 from "../assets/images/achv4.jpeg";
import img5 from "../assets/images/achv5.png";
import img6 from "../assets/images/achv3.jpg";
import colorSharp2 from "../assets/images/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "BloGGy!",
      description: "Website for blogging",
      imgUrl: projImg1,
    },
    {
      title: "EasyChat",
      description: "Web-application to chat without any linguistic barrier",
      imgUrl: projImg2,
    },
    {
      title: "Tourmate",
      description: "Travel management website",
      imgUrl: projImg3,
    },
    {
      title: "Agriculture Ecommerce",
      description: "Commercial website for farmers",
      imgUrl: projImg4,
    },
    {
      title: "Banking System",
      description: "Bank management website",
      imgUrl: projImg5,
    },
    {
      title: "TextUtil",
      description: "Web-application for operations on text",
      imgUrl: projImg6,
    },
  ];

  const achievements = [
    {
      title: "Soft Skills",
      description: "Gold medalist in NPTEL soft skill course",
      imgUrl: img1,
    },
    {
      title: "Web Development Training",
      description: "Trained in Web Development from Internshala",
      imgUrl: img2,
    },
    {
      title: "C++",
      description: "Completed training of C++ from Great Learning",
      imgUrl: img3,
    },
    {
      title: "LetsGrowMore (LGM)",
      description: "Intern of LGM in Web Development",
      imgUrl: img4,
    },
    {
      title: "Oracle",
      description: "Certified in Oracle for SQL Programming",
      imgUrl: img5,
    },
    {
      title: "Poem Writing",
      description: "Got Awarded in Poem Writing Competition",
      imgUrl: img6,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects & Achievements</h2>
                  <p>
                    All the Projects made by me are mention here! And all my
                    achievements are also there with certail details of mine.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Achievements</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">About</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {achievements.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p className="about">
                          🚀 I am Ritika Dwivedi, a self-taught full-stack web
                          developer and an aspiring C++ Programmer <br />
                          🚀 I like to think of myself as a "Hybrid Developer."
                          In short, I enjoy being both creative + technical. <br />
                          🚀 I specialize in front-end technologies creating 
                          web components and experiences focused
                          on usability and user experience. <br />
                          🚀 I am undergraduate student in a Bachelor's in Engineering in
                          Computer Engineering from Terna Engineering College. <br />
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
