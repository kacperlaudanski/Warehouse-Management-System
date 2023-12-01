import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "../../components/Button";
import { Edit, Printer, X } from "lucide-react";
import { StyledTableCell } from "../Table/StyledTableCell";
import { StyledTableRow } from "../Table/StyledTableRow";
import { warehouseData } from "../../data/warehouse-data";

export default function StockLevelTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell align="center">Product</StyledTableCell>
            <StyledTableCell align="center">Product ID</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Stock</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {warehouseData.map((data) => (
            <StyledTableRow key={data.number}>
              <StyledTableCell component="th" scope="row">
                {data.number}
              </StyledTableCell>
              <StyledTableCell align="center">{data.product}</StyledTableCell>
              <StyledTableCell align="center">{data.id}</StyledTableCell>
              <StyledTableCell align="center">{data.description}</StyledTableCell>
              <StyledTableCell align="center">{data.location}</StyledTableCell>
              <StyledTableCell align="center">{data.stock}</StyledTableCell>
              <StyledTableCell align="center">
                <div className="flex justify-center">
                  <Button variant="ghost" icon="actionButton">
                    <Edit />
                  </Button>
                  <Button variant="ghost" icon="actionButton">
                    <Printer />
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