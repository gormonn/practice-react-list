import React, { useEffect, useState } from "react";
import "./styles.css";
import { getFakeData } from "./mock";
import { Table, Row, Cell } from "./blocks";

export default function App() {
  // const fakeData = getFakeData(100);
  // console.log(fakeData);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ProductsList />
    </div>
  );
}

function ProductsList() {
  const [productList, setProductList] = useState([]);

  console.log("render", productList);
  useEffect(() => {
    async function getProductList() {
      const data = await getFakeData(5);
      setProductList(data);
    }
    getProductList();
  }, []);

  return (
    <Table>
      {productList.map(({ id, name, count, price }) => (
        <Row key={id}>
          <Cell>
            {name}
            <div>{count}</div>
          </Cell>
          <Cell>{price}</Cell>
          <Cell>
            <button>Edit</button>
            <button>Delete</button>
          </Cell>
        </Row>
      ))}
    </Table>
  );
}
