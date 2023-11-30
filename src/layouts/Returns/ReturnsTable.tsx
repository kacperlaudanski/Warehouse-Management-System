import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "../../components/Button";
import { Ban, Edit, PackageCheck, Printer, X } from "lucide-react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[500],
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  number: number,
  name: string,
  address: string,
  description: string,
  products: string,
) {
  return { number, name, address, description, products};
}

const rows = [
  createData(
    1,
    "Jan Kovalsky",
    "Example Address 1/1",
    "Destroyed product",
    "10x White Plate",
  ),
  createData(
    2,
    "Jan Kovalsky",
    "Example Address 1/1",
    "Destroyed product",
    "10x White Plate",
  ),
  createData(
    3,
    "Jan Kovalsky",
    "Example Address 1/1",
    "Destroyed product",
    "10x White Plate",
  ),
  createData(
    4,
    "Jan Kovalsky",
    "Example Address 1/1",
    "Destroyed product",
    "10x White Plate",
  ),
  createData(
    5,
    "Jan Kovalsky",
    "Example Address 1/1",
    "Destroyed product",
    "10x White Plate",
  ),
  createData(
    6,
    "Jan Kovalsky",
    "Example Address 1/1",
    "Destroyed product",
    "10x White Plate",
  ),
  createData(
    7,
    "Jan Kovalsky",
    "Example Address 1/1",
    "Destroyed product",
    "10x White Plate",
  ),
  createData(
    8,
    "Jan Kovalsky",
    "Example Address 1/1",
    "Destroyed product",
    "10x White Plate",
  ),
  createData(
    9,
    "Jan Kovalsky",
    "Example Address 1/1",
    "Destroyed product",
    "10x White Plate",
  ),
  createData(
    10,
    "Jan Kovalsky",
    "Example Address 1/1",
    "Destroyed product",
    "10x White Plate",
  ),
];

export default function ReturnsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Return description</StyledTableCell>
            <StyledTableCell align="center">Returned products</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.number}>
              <StyledTableCell component="th" scope="row">
                {row.number}
              </StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.address}</StyledTableCell>
              <StyledTableCell align="center">
                {row.description}
              </StyledTableCell>
              <StyledTableCell align="center">{row.products}</StyledTableCell>
              <StyledTableCell align="center">
                <div className="flex justify-center">
                  <Button variant="ghost" icon="actionButton">
                  <PackageCheck />
                  </Button>
                  <Button variant="ghost" icon="actionButton">
                    <Ban />
                  </Button>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
