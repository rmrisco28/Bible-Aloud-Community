import { Col, Row } from "react-bootstrap";

export function SharingList() {
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <h2 className="mt-5 mb-4">공동체 나눔</h2>
          <table className="table">
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일자</th>
                <th>조회</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>(ex)no</td>
                <td>(ex)title</td>
                <td>(ex)writer</td>
                <td>(ex)date</td>
                <td>(ex)looking</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
}
