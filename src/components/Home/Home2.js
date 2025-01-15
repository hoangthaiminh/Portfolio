import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillFire,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ĐỂ TÔI <span className="purple"> GIỚI THIỆU </span> BẢN THÂN
            </h1>
            <p className="home-about-body">
              Cảm ơn soumyaji cho dự án này (Thank to soumyaji), 
			  tôi nghĩ việc
			  lập trình là rất thú vị, có lẽ vậy… 🤷‍♂️
              <br />
              <br />Tôi đang là một học sinh lớp 9 và
			  hiện đang học tập
              <i>
                <b className="purple"> C++, Python. </b>
              </i>
              <br />
              <br />
              Việc tôi thấy thú vị trong lập trình là nó &nbsp;
              <i>
                <b className="purple">chạy chương trình rất nhanh, tính toán chính xác 100% </b> 
                và đặc biệt rằng với ngôn ngữ C++, việc tối ưu thuật toán là một cái gì đó{" "}
                <b className="purple">
                  thoả mãn sự tìm tòi của tôi.
                </b>
              </i>
              <br />
              <br />
              Dù sao đi nữa, việc lập trình là thú vị nhưng lập trình để giải các bài toán là một chuyện khác.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hoangthaiminh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
