import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemsTable from "../components/ItemsTable";
import { deleteItem } from "../redux/slices/list";
import styled from "styled-components";

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em 23em;

  > div {
    width: 100%;

    > h4 {
      margin-top: 1em;
      margin-bottom: 0.6em;
      text-align: center;
      color: var(--primary-color);
      font-size: 1.5em;
      font-weight: 400;
      line-height: 1.2em;
    }
  }

  @media (max-width: 768px) {
    margin: 2em 1em;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;

  > h2 {
    color: var(--secondary-color);
    font-size: 1.8em;
    font-weight: 600;
    margin-bottom: 0;
  }

  > p {
    margin-top: 0.8em;
    margin-bottom: 0.6em;
    text-align: initial;
    color: var(--secondary-color);
    font-size: 1.225em;
    font-weight: 400;
    line-height: 1.2em;
  }
`;
const List = () => {
  const data = useSelector((state) => state.dataList.list);
  const dispatch = useDispatch();

  const sortedData = [...data].sort((a, b) => {
    const dateA = new Date(a.submissionDate);
    const dateB = new Date(b.submissionDate);
    return dateB - dateA;
  });

  const lastTenRecords = sortedData.slice(-10);

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <Wapper>
      <Title>
        <h2>Lista Formulario</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the bed industry's standard dummy text
          ever since.
        </p>
      </Title>

      <div>
        {data && data.length > 0 ? (
          <ItemsTable data={lastTenRecords} handleDelete={handleDelete} />
        ) : (
          <h4>No hay datos disponibles</h4>
        )}
      </div>
    </Wapper>
  );
};

export default List;
