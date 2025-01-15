import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Tiến trình <strong className="purple">của tôi</strong>
      </h1>
      <GitHubCalendar
        username="hoangthaiminh"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
