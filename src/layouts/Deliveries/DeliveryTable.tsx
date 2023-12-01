import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "../../components/Button";
import { Ban, PackageCheck, Printer } from "lucide-react";
import { StyledTableCell } from "../Table/StyledTableCell";
import { StyledTableRow } from "../Table/StyledTableRow";
import { deliveriesData } from "../../data/deliveries-data";

export default function DeliveryTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell align="center">Supplier</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Delivery date</StyledTableCell>
            <StyledTableCell align="center">Products</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deliveriesData.map((delivery) => (
            <StyledTableRow key={delivery.number}>
              <StyledTableCell component="th" scope="row">
                {delivery.number}
              </StyledTableCell>
              <StyledTableCell align="center">{delivery.supplier}</StyledTableCell>
              <StyledTableCell align="center">{delivery.address}</StyledTableCell>
              <StyledTableCell align="center">
                {delivery.deliveryDate}
              </StyledTableCell>
              <StyledTableCell align="center">{delivery.products}</StyledTableCell>
              <StyledTableCell align="center">{delivery.status}</StyledTableCell>
              <StyledTableCell align="center">
                <div className="flex justify-center">
                  <Button variant="ghost" icon="actionButton">
                    <PackageCheck />
                  </Button>
                  <Button variant="ghost" icon="actionButton">
                    <Printer />
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
