import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "../../components/Button";
import { Edit, Printer, X } from "lucide-react";

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
  product: string, 
  id: string,
  description: string,
  location: string, 
  stock: number, 
) {
  return { number, product, id, description, location, stock }
}

const rows = [
  createData(
    1,
    'Cups',
    'product_1_ID',
    'Gray cups, 300cl',
    'R43, P05, W23',
    20
  ),
  createData(
    2,
    'Plates',
    'product_2_ID',
    'White plates, 300mm',
    'T13, K45, Y76',
    28
  ),
  createData(
    3,
    'Pillows',
    'product_3_ID',
    'Pillows, 40x40, white',
    'J43, F75, U43',
    5
  ),
  createData(
    4,
    'Pillows',
    'product_4_ID',
    'Big pillow, 100x100, white',
    'R65, C43, S53',
    45
  ),
  createData(
    5,
    'Towels',
    'product_5_ID',
    'Blue towels, 120x70, woolen',
    'R90, A03, V53',
    12
  ),  createData(
    1,
    'Cups',
    'product_1_ID',
    'Gray cups, 300cl',
    'R43, P05, W23',
    20
  ),
  createData(
    2,
    'Plates',
    'product_2_ID',
    'White plates, 300mm',
    'T13, K45, Y76',
    28
  ),
  createData(
    3,
    'Pillows',
    'product_3_ID',
    'Pillows, 40x40, white',
    'J43, F75, U43',
    5
  ),
  createData(
    4,
    'Pillows',
    'product_4_ID',
    'Big pillow, 100x100, white',
    'R65, C43, S53',
    45
  ),
  createData(
    5,
    'Towels',
    'product_5_ID',
    'Blue towels, 120x70, woolen',
    'R90, A03, V53',
    12
  ),  createData(
    1,
    'Cups',
    'product_1_ID',
    'Gray cups, 300cl',
    'R43, P05, W23',
    20
  ),
  createData(
    2,
    'Plates',
    'product_2_ID',
    'White plates, 300mm',
    'T13, K45, Y76',
    28
  ),
  createData(
    3,
    'Pillows',
    'product_3_ID',
    'Pillows, 40x40, white',
    'J43, F75, U43',
    5
  ),
  createData(
    4,
    'Pillows',
    'product_4_ID',
    'Big pillow, 100x100, white',
    'R65, C43, S53',
    45
  ),
  createData(
    5,
    'Towels',
    'product_5_ID',
    'Blue towels, 120x70, woolen',
    'R90, A03, V53',
    12
  ),
];

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
          {rows.map((row) => (
            <StyledTableRow key={row.number}>
              <StyledTableCell component="th" scope="row">
                {row.number}
              </StyledTableCell>
              <StyledTableCell align="center">{row.product}</StyledTableCell>
              <StyledTableCell align="center">{row.id}</StyledTableCell>
              <StyledTableCell align="center">{row.description}</StyledTableCell>
              <StyledTableCell align="center">{row.location}</StyledTableCell>
              <StyledTableCell align="center">{row.stock}</StyledTableCell>
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