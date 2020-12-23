import styled from "styled-components";

export const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

export const Row = styled.div`
  display: flex;
`;

export const Cell = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  width: 100%;
  padding: 0.8em 1.2em;
  overflow: hidden;
  list-style: none;
  border: solid 3px white;
  background: rgba(112, 128, 144, 0.2);
`;
