import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addStudent, updateStudent } from "../redux/studentSlice";

function StudentForm({ editStudent, setEditStudent }) {
  const dispatch = useDispatch();

  const [student, setStudent] = useState({
    name: "",
    rollNumber: "",
    className: "",
    subject: "",
    marks: "",
    examType: "Class Exam",
  });

  useEffect(() => {
    if (editStudent) {
      setStudent(editStudent);
    }
  }, [editStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !student.name ||
      !student.rollNumber ||
      !student.className ||
      !student.subject ||
      !student.marks
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editStudent) {
      dispatch(
        updateStudent({
          ...student,
          marks: Number(student.marks),
        })
      );

      alert("Student updated successfully");

      setEditStudent(null);
    } else {
      dispatch(
        addStudent({
          ...student,
          id: Date.now(),
          marks: Number(student.marks),
        })
      );

      alert("Student added successfully");
    }

    setStudent({
      name: "",
      rollNumber: "",
      className: "",
      subject: "",
      marks: "",
      examType: "Class Exam",
    });
  };

  const handleCancel = () => {
    setEditStudent(null);

    setStudent({
      name: "",
      rollNumber: "",
      className: "",
      subject: "",
      marks: "",
      examType: "Class Exam",
    });
  };

  return (
    <Card className="student-form-card">
      <Card.Body>
        <Card.Title className="mb-4">
          {editStudent ? "Edit Student" : "Add New Student"}
        </Card.Title>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Student Name</Form.Label>

                <Form.Control
                  type="text"
                  name="name"
                  value={student.name}
                  onChange={handleChange}
                  placeholder="Enter student name"
                />
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Roll Number</Form.Label>

                <Form.Control
                  type="text"
                  name="rollNumber"
                  value={student.rollNumber}
                  onChange={handleChange}
                  placeholder="Enter roll number"
                />
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Class</Form.Label>

                <Form.Control
                  type="text"
                  name="className"
                  value={student.className}
                  onChange={handleChange}
                  placeholder="Enter class"
                />
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Subject</Form.Label>

                <Form.Select
                  name="subject"
                  value={student.subject}
                  onChange={handleChange}
                >
                  <option value="">Select Subject</option>
                  <option value="Science">Science</option>
                  <option value="Maths">Maths</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Computer">Computer</option>

                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Marks</Form.Label>

                <Form.Control
                  type="number"
                  name="marks"
                  value={student.marks}
                  onChange={handleChange}
                  placeholder="Enter marks"
                  min="0"
                  max="100"
                />
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Type of Exam</Form.Label>

                <Form.Select
                  name="examType"
                  value={student.examType}
                  onChange={handleChange}
                >
                  <option value="Class Exam">Class Exam</option>
                  <option value="Online Exam">Online Exam</option>
                  <option value="Missed Exam">Missed Exam</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" variant="primary" className="me-2">
            {editStudent ? "Update Student" : "Add Student"}
          </Button>

          {editStudent && (
            <Button
              type="button"
              variant="secondary"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          )}
        </Form>
      </Card.Body>
    </Card>
  );
}

export default StudentForm;