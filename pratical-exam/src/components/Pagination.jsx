import { Pagination as BootstrapPagination } from "react-bootstrap";

function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-box">
      <BootstrapPagination>
        <BootstrapPagination.Prev
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        />

        {pages.map((page) => (
          <BootstrapPagination.Item
            key={page}
            active={currentPage === page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </BootstrapPagination.Item>
        ))}

        <BootstrapPagination.Next
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        />
      </BootstrapPagination>
    </div>
  );
}

export default Pagination;