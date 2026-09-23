import { useState } from "react";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import StudentForm from "./components/Form";
import StudentList from "./components/StudentList";
import StudentDetails from "./components/StudentDetail";
import Search from "./components/Search";
import Pagination from "./components/Pagination";


function App() {
  const students = useSelector((state) => state.students.students);
  const loading = useSelector((state) => state.students.loading);

  const [editStudent, setEditStudent] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [examFilter, setExamFilter] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);

  const studentsPerPage = 5;

  const filteredStudents = students.filter((student) => {
    const search = searchText.toLowerCase();

    const matchesSearch =
      student.name.toLowerCase().includes(search) ||
      student.rollNumber.toLowerCase().includes(search) ||
      student.subject.toLowerCase().includes(search);

    const matchesExam =
      examFilter === "All" || student.examType === examFilter;

    return matchesSearch && matchesExam;
  });

  const totalPages = Math.ceil(
    filteredStudents.length / studentsPerPage
  );

  const startIndex = (currentPage - 1) * studentsPerPage;

  const currentStudents = filteredStudents.slice(
    startIndex,
    startIndex + studentsPerPage
  );

  const handleSearchChange = (value) => {
    setSearchText(value);
    setCurrentPage(1);
  };

  const handleFilterChange = (value) => {
    setExamFilter(value);
    setCurrentPage(1);
  };

  return (
    <div className="app">
      <Navbar />

      <div className="container py-4">

        <div className="page-title">
          <h2>Student Management System</h2>        
        </div>

        <div id="form">
          <StudentForm
            editStudent={editStudent}
            setEditStudent={setEditStudent}
          />
        </div>

        {selectedStudent && (
          <StudentDetails
            student={selectedStudent}
            setSelectedStudent={setSelectedStudent}
          />
        )}

        <Search
          searchText={searchText}
          setSearchText={handleSearchChange}
          examFilter={examFilter}
          setExamFilter={handleFilterChange}
        />

        {loading ? (
          <div className="loading">
            Loading students...
          </div>
        ) : (
          <>
            <StudentList
              students={currentStudents}
              setEditStudent={setEditStudent}
              setSelectedStudent={setSelectedStudent}
            />

            {totalPages > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            )}
          </>
        )}

      </div>
    </div>
  );
}

export default App;