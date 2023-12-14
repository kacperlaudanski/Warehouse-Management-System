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
import { ordersHistory } from "../../data/orders-history-data";

export default function HistoryOrders() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell align="center">Order ID</StyledTableCell>
            <StyledTableCell align="center">Client</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ordersHistory.map((order) => (
            <StyledTableRow key={order.number}>
              <StyledTableCell component="th" scope="row">
                {order.number}
              </StyledTableCell>
              <StyledTableCell align="center">{order.id}</StyledTableCell>
              <StyledTableCell align="center">{order.client}</StyledTableCell>
              <StyledTableCell align="center">{order.address}</StyledTableCell>
              <StyledTableCell align="center">{order.date}</StyledTableCell>
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
