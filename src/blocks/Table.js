import styled from "styled-components";

export const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
`;

export const Cell = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  flex-grow: 1;
  list-style: none;
  border: solid 3px gray;
`;
