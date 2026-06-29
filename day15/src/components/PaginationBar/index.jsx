import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

function PaginationBar({ page, setPage }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "40px 0",
      }}
    >
      <Pagination
        count={20}
        page={page}
        onChange={(event, value) => setPage(value)}
      />
    </Box>
  );
}

export default PaginationBar;