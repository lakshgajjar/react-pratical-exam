import { Form, Row, Col } from "react-bootstrap";

function Search({
  searchText,
  setSearchText,
  examFilter,
  setExamFilter,
}) {
  return (
    <div className="search-box">
      <Row className="align-items-center">
        <Col md={8} className="mb-2 mb-md-0">
          <Form.Control
            type="text"
            placeholder="Search student, roll number or subject..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Col>

        <Col md={4}>
          <Form.Select
            value={examFilter}
            onChange={(e) => setExamFilter(e.target.value)}
          >
            <option value="All">All Exams</option>
            <option value="Class Exam">Class Exam</option>
            <option value="Online Exam">Online Exam</option>
            <option value="Missed Exam">Missed Exam</option>
          </Form.Select>
        </Col>
      </Row>
    </div>
  );
}

export default Search;