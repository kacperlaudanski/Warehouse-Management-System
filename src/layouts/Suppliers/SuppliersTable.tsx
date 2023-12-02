import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "../../components/Button";
import { Edit, Package, X } from "lucide-react";
import { StyledTableCell } from "../Table/StyledTableCell";
import { StyledTableRow } from "../Table/StyledTableRow";
import { suppliersData } from "../../data/suppliers-data";

export default function SuppliersTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Products</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {suppliersData.map((supplier) => (
            <StyledTableRow key={supplier.number}>
              <StyledTableCell component="th" scope="row">
                {supplier.number}
              </StyledTableCell>
              <StyledTableCell align="center">{supplier.name}</StyledTableCell>
              <StyledTableCell align="center">
                {supplier.address}
              </StyledTableCell>
              <StyledTableCell align="center">
                {supplier.products}
              </StyledTableCell>
              <StyledTableCell align="center">
                <div className="flex justify-center">
                  <Button variant="ghost" icon="actionButton">
                    <Package />
                  </Button>
                  <Button variant="ghost" icon="actionButton">
                    <Edit />
                  </Button>
                  <Button variant="ghost" icon="actionButton">
                    <X />
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
