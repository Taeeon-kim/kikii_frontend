import styled from 'styled-components';

export const StyledTableWrapper = styled.div`
  width: 80%;
  height: 700px;
  overflow: scroll;
  margin: 50px auto 0;
`;

export const StyledTable = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;
export const StyledTh = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04aa6d;
  color: white;
`;
export const StyledTr = styled.tr``;
