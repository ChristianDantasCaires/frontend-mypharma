import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

let StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        textAlign: "center"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        textAlign: "center"
    },
}));

let StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        textAlign: "center"
    },
    '&:last-child td, &:last-child th': {
        border: 0,
        textAlign: "center"
    },
    textAlign: "center"
}));

const TabelaProdutos = ({ produtos }) => {
    return (
        <TableContainer component={Paper} style={{ width: "80%" }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow style={{ textAlign: "center" }}>
                        <StyledTableCell>Nome</StyledTableCell>
                        <StyledTableCell align="right">Descrição</StyledTableCell>
                        <StyledTableCell align="right">Preço</StyledTableCell>
                        <StyledTableCell align="right">Em estoque</StyledTableCell>
                        <StyledTableCell align="right">Categoria</StyledTableCell>
                        <StyledTableCell align="right">Marca</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        produtos.map(value => (
                            <StyledTableRow key={value.id} component="a" href={`/detalhes/${value._id}`}>
                                <StyledTableCell component="th" scope="column">
                                    {value.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{value.description}</StyledTableCell>
                                <StyledTableCell align="right">{value.price}</StyledTableCell>
                                <StyledTableCell align="right">
                                    {value.estoque ? "Sim" : "Não"}
                                </StyledTableCell>
                                <StyledTableCell align="right">{value.category}</StyledTableCell>
                                <StyledTableCell align="right">{value.marca}</StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TabelaProdutos;