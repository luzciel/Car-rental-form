import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1em;
  margin-top: 2rem;

  th,
  td {
    border-bottom: 1px solid #cccccc;
    padding: 8px;
    text-align: left;
    max-width: 100px;
  }
  thead {
    tr {
      th {
        font-size: 18px;
        text-align: center;
        font-weight: 500;
        white-space: pre-line;
        padding: 8px 15px;
      }

      th:first-child {
        width: 28%;
      }

      th:not(:first-child) {
        max-width: 100px;
      }
    }
  }

  tr:hover {
    background-color: #f5f5f5;
  }

  td {
    text-align: center;
    cursor: pointer;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  margin-top: 2em;

  @media (max-width: 1200px) {
    align-items: center;
  }
`;

const ItemsTable = ({ data, handleDelete }) => {
  if (!data || data.length === 0) {
    return <p>No hay datos disponibles</p>;
  }

  const columns = [
    "Nombre",
    "Rut vendedor",
    "Patente vehículo",
    "Marca vehículo",
    "Modelo vehículo",
    "Color vehículo",
    "Eliminar",
  ];

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id + index}>
              <td>{row.sellerName}</td>
              <td>{row.sellerRut}</td>
              <td>{row.vehicleBrand}</td>
              <td>{row.vehicleModel}</td>
              <td>{row.vehiclePatent}</td>
              <td>{row.vehiclePrice}</td>
              <td onClick={() => handleDelete(row.id)}>
                <img src="./src/assets/delete.svg" alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Footer>
        <p>
          Mostrando registros del 1 al {data.length} de un total de{" "}
          {data.length} registros
        </p>
      </Footer>
    </TableContainer>
  );
};

ItemsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      sellerName: PropTypes.string.isRequired,
      sellerRut: PropTypes.string.isRequired,
      vehicleBrand: PropTypes.string.isRequired,
      vehicleModel: PropTypes.string.isRequired,
      vehiclePatent: PropTypes.string.isRequired,
      vehiclePrice: PropTypes.number.isRequired,
      currentDate: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};

export default ItemsTable;
