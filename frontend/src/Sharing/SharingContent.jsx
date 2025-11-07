import {
  Button,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Table,
} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export function SharingContent() {
  const [comment, setComment] = useState("");
  const [commentName, setCommentName] = useState("");

  const navigate = useNavigate();

  function handleCommentSaveButton() {
    axios.post("api/comment/add", {
      comment: comment,
    });
  }

  return (
    <>
      <Row className="justify-content-center">
        <Col xs={10} md={10} lg={8}>
          <h2 className="my-4">게시물 제목</h2>
          <div className="mb-3">
            <FormGroup className="mb-3">
              <FormLabel>작성자</FormLabel>
              <FormControl disabled value={"작성자명"} />
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>본문</FormLabel>
              <FormControl as="textarea" disabled value={"본문"} />
            </FormGroup>
          </div>

          <div className="d-flex justify-content-end  mb-3">
            <Button
              variant="secondary"
              className="me-2"
              onClick={() => navigate("/sharing/list")}
            >
              뒤로
            </Button>
            <Button variant="warning">수정</Button>
          </div>
          <hr className="mb-3" />
          {/*댓글*/}
          <div className="mb-2">
            <FormControl
              as="textarea"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              placeholder="댓글을 입력하세요"
              style={{ flex: 1, minHeight: "80px" }}
            />
          </div>
          <div className="d-flex align-items-center justify-content-between gap-2 mb-5">
            <FormControl
              style={{ width: "200px" }}
              value={commentName}
              onChange={(e) => setCommentName(e.target.value)}
              placeholder="이름"
            />
            <Button onClick={handleCommentSaveButton}>댓글 저장</Button>
          </div>

          <div>
            <Table>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>내용</th>
                  <th>작성시간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>홍길동</td>
                  <td>댓글내용</td>
                  <td>날짜</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </>
  );
}
