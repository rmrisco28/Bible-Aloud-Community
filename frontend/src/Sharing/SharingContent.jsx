import { Col, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

export function SharingContent() {
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <h3 className="mb-3">게시물 제목</h3>

          <FormGroup>
            <FormLabel>작성자</FormLabel>
            <FormControl disabled={true} value={"작성자명"} />
          </FormGroup>

          <FormGroup>
            <FormLabel>본문</FormLabel>
            <FormControl as="textarea" disabled={true} value={"본문"} />
          </FormGroup>
        </Col>
      </Row>
    </>
  );
}
