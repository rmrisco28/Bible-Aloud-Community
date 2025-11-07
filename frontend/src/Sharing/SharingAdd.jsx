import {
  Button,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

export function SharingAdd() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  function handleSaveButton() {
    if (title.trim() === "") {
      alert("Please enter a title!");
      return;
    } else if (name.trim() === "") {
      alert("Please enter a name!");
      return;
    } else if (content.trim() === "") {
      alert("Please enter a content!");
      return;
    }

    axios
      .post("/api/sharing/add", {
        sharingTitle: title,
        memberName: name,
        content: content,
      })
      .then((res) => {
        console.log("Sharing success!");
        alert(res.data.message);
        navigate("/sharing/list");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finally");
      });
  }

  return (
    <>
      <Row className="justify-content-center">
        <Col xs={10} md={10} lg={8}>
          <h2 className="mb-3">글작성</h2>
          <div className="mb-3">
            {/*제목*/}
            <FormGroup>
              <FormLabel style={{ fontSize: "1.5rem" }}>제목</FormLabel>
              <FormControl
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </FormGroup>

            {/*작성자*/}
            <FormGroup>
              <FormLabel style={{ fontSize: "1.5rem" }}>작성자</FormLabel>
              <FormControl
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </FormGroup>

            {/*본문 내용*/}
            <FormGroup>
              <FormLabel style={{ fontSize: "1.5rem" }}>본문</FormLabel>
              <FormControl
                as="textarea"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </FormGroup>
          </div>
          <div className="mb-3">
            <Button className="me-3" onClick={handleSaveButton}>
              저장
            </Button>
            <Button
              className="btn btn-secondary me-3"
              onClick={() => {
                navigate("/sharing/list");
              }}
            >
              뒤로
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}
