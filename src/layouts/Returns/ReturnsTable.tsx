import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "../../components/Button";
import { Ban, PackageCheck} from "lucide-react";
import { StyledTableCell } from "../Table/StyledTableCell";
import { StyledTableRow } from "../Table/StyledTableRow";
import { returnsData } from "../../data/returns-data";

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
          {returnsData.map((data) => (
            <StyledTableRow key={data.number}>
              <StyledTableCell component="th" scope="row">
                {data.number}
              </StyledTableCell>
              <StyledTableCell align="center">{data.name}</StyledTableCell>
              <StyledTableCell align="center">{data.address}</StyledTableCell>
              <StyledTableCell align="center">
                {data.description}
              </StyledTableCell>
              <StyledTableCell align="center">{data.products}</StyledTableCell>
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
