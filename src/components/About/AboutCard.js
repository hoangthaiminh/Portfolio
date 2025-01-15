import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Chào mọi người, tôi là <span className="purple">Hoàng Thái Minh </span>
            đến từ <span className="purple"> trường THCS Nguyễn Du, TP Hà Tĩnh.</span>
            <br />
            Hiện tôi là một học sinh lớp 9 đang trong quá trình học tập và nâng
			cao kĩ năng về lập trình.
            <br />
            <br />
            Những mục tiêu tiếp theo của bản thân:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Thi đỗ đầu trường THPT Chuyên Hà Tĩnh🙏 
            </li>
            <li className="about-activity">
              <ImPointRight /> Học thêm nhiều kiến thức nâng cao & cần thiết.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nếu bạn muốn đi nhanh, hãy đi một mình{" "}
			||
			Nếu bạn muốn đi xa, hãy đi cùng nhau"{" "}
          </p>
          <footer className="blockquote-footer">Hello myfriends @TDungz @Y_N @Vo_Anh_Banh @Linh_Dan10</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
