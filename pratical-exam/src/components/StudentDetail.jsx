import { Card, Row, Col, Button } from "react-bootstrap";

function StudentDetails({ student, setSelectedStudent }) {
  if (!student) {
    return null;
  }

  return (
    <Card className="student-details-card">
      <Card.Body>
        <div className="details-header">
          <div>
            <h4>Student Details</h4>
            <p>Complete student information</p>
          </div>

          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => setSelectedStudent(null)}
          >
            Close
          </Button>
        </div>

        <Row className="mt-4">
          <Col md={6} className="mb-3">
            <div className="detail-item">
              <span>Student Name</span>
              <strong>{student.name}</strong>
            </div>
          </Col>

          <Col md={6} className="mb-3">
            <div className="detail-item">
              <span>Roll Number</span>
              <strong>{student.rollNumber}</strong>
            </div>
          </Col>

          <Col md={6} className="mb-3">
            <div className="detail-item">
              <span>Class</span>
              <strong>{student.className}</strong>
            </div>
          </Col>

          <Col md={6} className="mb-3">
            <div className="detail-item">
              <span>Subject</span>
              <strong>{student.subject}</strong>
            </div>
          </Col>

          <Col md={6} className="mb-3">
            <div className="detail-item">
              <span>Marks</span>
              <strong>{student.marks} / 100</strong>
            </div>
          </Col>

          <Col md={6} className="mb-3">
            <div className="detail-item">
              <span>Exam Type</span>
              <strong>{student.examType}</strong>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default StudentDetails;