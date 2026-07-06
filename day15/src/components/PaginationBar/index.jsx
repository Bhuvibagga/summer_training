import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

function PaginationBar({ page, setPage }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "32px 0 48px",
        "& .MuiPaginationItem-root": {
          color: "#111111",
          borderRadius: "999px",
          minWidth: "38px",
          height: "38px",
          margin: "0 4px",
        },
        "& .Mui-selected": {
          backgroundColor: "#111111",
          color: "#ffffff",
          fontWeight: 700,
        },
        "& .MuiPaginationItem-root:hover": {
          backgroundColor: "#f5f5f5",
        },
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