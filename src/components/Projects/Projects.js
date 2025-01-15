import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import noinf from "../../Assets/Projects/noinf.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Một số <strong className="purple">dự án </strong> của tôi
        </h1>
        <p style={{ color: "white" }}>
          Dưới đây là một số dự án tiêu biểu mà tôi đã góp công.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noinf}
              isBlog={false}
              title="Không có thông tin"
              description="Không có thông tin. Sẽ hiển thị nếu có cập nhật
			  sau."
              ghLink="https://github.com/hoangthaiminh"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
