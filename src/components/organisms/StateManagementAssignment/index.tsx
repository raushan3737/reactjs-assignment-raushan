import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Grid,
  ThemeProvider,
  styled,
} from "@mui/material";
import { FilterAltOutlined, MoreVert } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import TablePagination from "@mui/material/TablePagination";
import theme from "../../../utils/Theme/theme";
import Typography from "../../atoms/Typography";
import tableData from "../../../utils/Data/CandidateDetailsData.json";
import Chip from "../../atoms/Chip";

interface CandidateColumnProps {
  id: "name" | "adjudication" | "status" | "location" | "date";
  label: string;
  align?: "right";
}

export const candidateColumns: CandidateColumnProps[] = [
  { id: "name", label: "NAME" },
  { id: "adjudication", label: "ADJUDICATION" },
  {
    id: "status",
    label: "STATUS",
    align: "right",
  },
  {
    id: "location",
    label: "LOCATION",
    align: "right",
  },
  {
    id: "date",
    label: "DATE",
    align: "right",
  },
];

export interface rowsOptionProps {
  label: string;
  value: number;
}

export let rowsOption: rowsOptionProps[] = [
  { label: "2 per page", value: 2 },
  { label: "5 per page", value: 5 },
  { label: "7 per page", value: 7 },
  { label: "10 per page", value: 10 },
];

const OuterGrid = styled(Grid)({
  justifyContent: "center",
  flexGrow: "grow",
  flexWrap: "wrap",
});

const searchbarStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "20px",
};

const CandidateTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");
  const candidatesData = tableData;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  // Logic to filter the candidate based on the given input
  const filteredCandidates = candidatesData.filter((candidate) =>
    Object.values(candidate).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchText.trim().toLowerCase())
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <OuterGrid container>
        <Stack width={"90%"}>
          <Typography text="Candidate Information" variant="h2" />
          <div style={searchbarStyle}>
            <TextField
              size="small"
              value={searchText}
              onChange={handleSearch}
              placeholder="Search any candidate"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton edge="end">
                      <SearchSharpIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              startIcon={<FilterAltOutlined />}
              sx={{ ml: 2 }}
            >
              Filter
            </Button>
            <Button startIcon={<MoreVert />} sx={{ ml: 1 }}></Button>
          </div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {candidateColumns.map((candidateColumn) => (
                    <TableCell
                      key={candidateColumn.id}
                      align={candidateColumn.align}
                    >
                      {candidateColumn.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCandidates
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((candidateRow) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={candidateRow.id}
                      >
                        {candidateColumns.map((candidateColumn) => {
                          const value = candidateRow[candidateColumn.id];
                          return candidateColumn.id === "name" ? (
                            <TableCell
                              key={candidateColumn.id}
                              align={candidateColumn.align}
                            >
                              <Typography text={value} />
                            </TableCell>
                          ) : (
                            <TableCell
                              key={candidateColumn.id}
                              align={candidateColumn.align}
                            >
                              {value !== "CLEAR" && value !== "CONSIDER" ? (
                                value
                              ) : value === "CLEAR" ? (
                                <Chip label={value} />
                              ) : (
                                <Chip label={value} />
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            labelRowsPerPage={`Result out of ${candidatesData.length}`}
            showFirstButton
            showLastButton
            rowsPerPageOptions={rowsOption}
            component="div"
            count={candidatesData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Stack>
      </OuterGrid>
    </ThemeProvider>
  );
};
export default CandidateTable;
