import React from "react";
import "./styles.css";
import { getFakeData } from "./mock";

export default async function App() {
  // console.log(mock)
  const fakeData = await getFakeData(100);
  console.log(fakeData);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
