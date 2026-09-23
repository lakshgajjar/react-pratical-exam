import { useDispatch } from "react-redux";
import { Table, Button, Badge } from "react-bootstrap";
import { deleteStudent } from "../redux/studentSlice";

function StudentList({ students, setEditStudent, setSelectedStudent }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      dispatch(deleteStudent(id));
    }
  };

  const handleEdit = (student) => {
    setEditStudent(student);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleView = (student) => {
    setSelectedStudent(student);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="student-list" id="students">
      <div className="table-header">
        <div>
          <h4>Student List</h4>
        </div>

        <Badge bg="primary">
          {students.length} Students
        </Badge>
      </div>

      <Table responsive hover className="student-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Roll No.</th>
            <th>Class</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Exam Type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>
                  <div className="student-name">
                    <div>
                      <strong>{student.name}</strong>
                      <small>Student</small>
                    </div>
                  </div>
                </td>
                <td>{student.rollNumber}</td>
                <td>{student.className}</td>
                <td>{student.subject}</td>
                <td>
                  <strong>{student.marks}</strong> / 100
                </td>
                <td>
                  <span
                    className={
                      student.examType === "Missed Exam"
                        ? "exam missed"
                        : student.examType === "Online Exam"
                        ? "exam online"
                        : "exam class"
                    }
                  >
                    {student.examType}
                  </span>
                </td>
                <td>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="me-2"
                    onClick={() => handleView(student)}
                  >
                    View
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(student)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-5">
                No students found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default StudentList;