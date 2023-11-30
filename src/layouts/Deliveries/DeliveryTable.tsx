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
  supplier: string,
  address: string,
  deliveryDate: string,
  products: string,
  status: string
) {
  return { number, supplier, address, deliveryDate, products, status };
}

const rows = [
  createData(
    1,
    "Cups",
    "product_1_ID",
    "Gray cups, 300cl",
    "R43, P05, W23",
    "Pending"
  ),
  createData(
    2,
    "Plates",
    "product_2_ID",
    "White plates, 300mm",
    "T13, K45, Y76",
    "Canceled"
  ),
  createData(
    3,
    "Pillows",
    "product_3_ID",
    "Pillows, 40x40, white",
    "J43, F75, U43",
    "In process"
  ),
  createData(
    4,
    "Pillows",
    "product_4_ID",
    "Big pillow, 100x100, white",
    "R65, C43, S53",
    "Pending"
  ),
  createData(
    5,
    "Towels",
    "product_5_ID",
    "Blue towels, 120x70, woolen",
    "R90, A03, V53",
    "In process"
  ),
  createData(
    1,
    "Cups",
    "product_1_ID",
    "Gray cups, 300cl",
    "R43, P05, W23",
    "Pending"
  ),
  createData(
    2,
    "Plates",
    "product_2_ID",
    "White plates, 300mm",
    "T13, K45, Y76",
    "Canceled"
  ),
  createData(
    3,
    "Pillows",
    "product_3_ID",
    "Pillows, 40x40, white",
    "J43, F75, U43",
    "Pending"
  ),
  createData(
    4,
    "Pillows",
    "product_4_ID",
    "Big pillow, 100x100, white",
    "R65, C43, S53",
    "Pending"
  ),
  createData(
    5,
    "Towels",
    "product_5_ID",
    "Blue towels, 120x70, woolen",
    "R90, A03, V53",
    "In process"
  ),
  createData(
    1,
    "Cups",
    "product_1_ID",
    "Gray cups, 300cl",
    "R43, P05, W23",
    "Pending"
  ),
  createData(
    2,
    "Plates",
    "product_2_ID",
    "White plates, 300mm",
    "T13, K45, Y76",
    "Canceled"
  ),
  createData(
    3,
    "Pillows",
    "product_3_ID",
    "Pillows, 40x40, white",
    "J43, F75, U43",
    "Pending"
  ),
  createData(
    4,
    "Pillows",
    "product_4_ID",
    "Big pillow, 100x100, white",
    "R65, C43, S53",
    "In process"
  ),
  createData(
    5,
    "Towels",
    "product_5_ID",
    "Blue towels, 120x70, woolen",
    "R90, A03, V53",
    "Pending"
  ),
];

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
          {rows.map((row) => (
            <StyledTableRow key={row.number}>
              <StyledTableCell component="th" scope="row">
                {row.number}
              </StyledTableCell>
              <StyledTableCell align="center">{row.supplier}</StyledTableCell>
              <StyledTableCell align="center">{row.address}</StyledTableCell>
              <StyledTableCell align="center">
                {row.deliveryDate}
              </StyledTableCell>
              <StyledTableCell align="center">{row.products}</StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
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
