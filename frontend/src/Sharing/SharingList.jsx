import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

export function SharingList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/sharing/list")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finally");
      });
  }, []);

  return (
    <>
      <Row className="justify-content-center">
        <Col xs={10} md={10} lg={8}>
          <h2 className="my-4">공동체 나눔</h2>
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
              {data.map((data) => (
                <tr
                  key={data.id}
                  onClick={() => {
                    navigate("/sharing/content/" + data.id);
                  }}
                >
                  <td>{data.id}</td>
                  <td>{data.sharingTitle}</td>
                  <td>{data.memberName}</td>
                  <td>{data.createdAt}</td>
                  <td>{data.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button onClick={() => navigate("/sharing/add")}>글 작성</Button>
        </Col>
      </Row>
    </>
  );
}
