import React from "react";
import { RecoilRoot } from "recoil";
import GooseRunner from "./components/GooseRunner";

export default function App() {
  return (
    <RecoilRoot>
    <div className="App">
     <h1>GOOSE RUNNER</h1>
     <GooseRunner />
     </div>
     </RecoilRoot>
  );
}

