import React from 'react';
import '../styles/Profile.scss';
import account from '../assets/account.png';
import editIcon from '../assets/edit.svg';
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
    backgroundColor: '#F2F2F2',
    color: 'black',
    border: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    background: 'none',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  td: {
    border: 0,
    paddingBottom: 30,
  },
}));

function createData(name, calories, fat, carbs, protein, button) {
  return { name, calories, fat, carbs, protein, button };
}

const rows = [
  createData(2101, 5, '12.12.2022', 'Н. Константиновна', '1220с', 'Детали заказа'),
  createData(2101, 5, '12.12.2022', 'Н. Константиновна', '1220с', 'Детали заказа'),
  createData(2101, 5, '12.12.2022', 'Н. Константиновна', '1220с', 'Детали заказа'),
  createData(2101, 5, '12.12.2022', 'Н. Константиновна', '1220с', 'Детали заказа'),
  createData(2101, 5, '12.12.2022', 'Н. Константиновна', '1220с', 'Детали заказа'),
];

const Profile = () => {
  return (
    <div className="profileContainer">
      <div className="profileRouteHistory">
        <div>
          <a href="">Главная </a>/<a href=""> Новость </a>
        </div>
      </div>
      <div className="account">
        <h1 className="accountTitle">Мой аккаунт</h1>
        <div className="accountDetails">
          <div className="profileLogo">
            <img src={account} alt="" />
          </div>
          <div className="accountData">
            <div className="data">
              <p>Имя</p>
              Татьяна
            </div>
            <div className="data">
              <p>Фамилия</p>
              Смолянинова
            </div>
            <div className="data">
              <p>Телефон</p>
              +996<span>555 50 50 50</span>
            </div>
            <div className="data">
              <p>E-mail</p>
              Tatyana@gmail.com
            </div>
            <div className="editButton">
              <p>Редактировать данные</p>
              <img src={editIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="ordersHistory">
        <h2>История заказов</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700, maxWidth: '1288px' }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>№ Заказа</StyledTableCell>
                <StyledTableCell align="left">Кол-во товаров</StyledTableCell>
                <StyledTableCell align="left">Дата</StyledTableCell>
                <StyledTableCell align="left">Покупатель</StyledTableCell>
                <StyledTableCell align="left">Итого</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell className="td" align="left">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell className="td" align="left">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell className="td" align="left">
                    {row.fat}
                  </StyledTableCell>
                  <StyledTableCell className="td" align="left">
                    {row.carbs}
                  </StyledTableCell>
                  <StyledTableCell className="td" align="left">
                    {row.protein}
                  </StyledTableCell>
                  <StyledTableCell className="buttonTd" align="left">
                    {row.button}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Profile;
