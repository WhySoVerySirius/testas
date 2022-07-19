import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomizedTables({data, columns}) {

    const rows = [];
    function createData(id, name, status, species, type, gender, origin, location, image) {
        return {id, name, status, species, type, gender, origin, location, image};
    }

    data.map(item=>{
        rows.push(createData(item.id, item.name, item.status, item.species, item.type, item.gender, item.origin.name, item.location.name, item.image))
    })

    return (
    <TableContainer component={Paper} style={{overflowX:"initial"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" stickyHeader>
        <TableHead>
          <TableRow>
            {columns.includes('id')? <StyledTableCell align="right">Id</StyledTableCell>: null}
            {columns.includes('name')?<StyledTableCell align="right">Name</StyledTableCell>:null}
            {columns.includes('status')?<StyledTableCell align="right">Status</StyledTableCell>:null}
            {columns.includes('species')?<StyledTableCell align="right">Species</StyledTableCell>:null}
            {columns.includes('type')?<StyledTableCell align="right">Type</StyledTableCell>:null}
            {columns.includes('gender')?<StyledTableCell align="right">Gender</StyledTableCell>:null}
            {columns.includes('origin')?<StyledTableCell align="right">Origin</StyledTableCell>:null}
            {columns.includes('location')?<StyledTableCell align="right">Location</StyledTableCell>:null}
            {columns.includes('image')?<StyledTableCell align="right">Image</StyledTableCell>:null}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              {columns.includes('id')?<StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>:null}
              {columns.includes('name')?<StyledTableCell align="right">{row.name}</StyledTableCell>:null}
              {columns.includes('status')?<StyledTableCell align="right">{row.status}</StyledTableCell>:null}
              {columns.includes('species')?<StyledTableCell align="right">{row.species}</StyledTableCell>:null}
              {columns.includes('type')?<StyledTableCell align="right">{row.type}</StyledTableCell>:null}
              {columns.includes('gender')?<StyledTableCell align="right">{row.gender}</StyledTableCell>:null}
              {columns.includes('origin')?<StyledTableCell align="right">{row.origin}</StyledTableCell>:null}
              {columns.includes('location')?<StyledTableCell align="right">{row.location}</StyledTableCell>:null}
              {columns.includes('image')?<StyledTableCell align="right"><img src={row.image} alt="" className='list-image'/> </StyledTableCell>:null}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
