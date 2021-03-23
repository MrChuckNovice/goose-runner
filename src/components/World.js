import React from "react";
import Landscape from "./Landscape";
import Trucks from "./Trucks";

export default function World() {
    return (
        <div className = "world">
          <Landscape />
          <Trucks />
          </div>
    );
}