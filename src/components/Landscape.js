import React from "react";
import {
    groundgrass,
    groundpath,
    roadstraight,
    groundriverOpen, 
 } from "../images";
 import { WORLD_SIZE, TILE_ASPECT_RATIO } from "../constants";
 import Tile from "./Tile";
 const yOffset = (100 / WORLD_SIZE) * (TILE_ASPECT_RATIO / 1.8);
const tiles = [];
    for (let i = WORLD_SIZE; i > 0; i-- ){
       //ici on va designer l'emplacement de nos tiles 
        if (i === 1 || i === 2 || i === 6 || i === 9){
            tiles.push(Array(WORLD_SIZE).fill("groundgrass"));
        }else if (i === 3 || i === 4){
            tiles.push(Array(WORLD_SIZE).fill("roadstraight"));
        }else if (i === 5){
            tiles.push(Array(WORLD_SIZE).fill("groundpath"));
        }else if (i === 7 || i === 8){
            tiles.push(Array(WORLD_SIZE).fill("groundriverOpen"));
        }
    }
   function Landscape() { 
    return(
       <>
        {tiles.map((row, y) => {
        const yBase = y * yOffset;
        const xBase = 50 - (100 / 18) * y;
        return row.map((tile, x) => {
            const z = x + 100;
            const yAbs = yBase + yOffset * x;
            const xAbs = xBase + (100/ 18) * x;
            let src;
            if (tile === "groundgrass"){
                src = groundgrass;
            }else if (tile === "roadstraight"){
                src = roadstraight;
            }else if (tile === "groundpath"){
                src = groundpath;
            }else if (tile === "groundriverOpen"){
                src = groundriverOpen;
            }
            return <Tile key={`${x}${y}`} src={src} x={xAbs} y={yAbs} z={z} />;
        }); 
    })}
    </>
    );  
}

export default React.memo(Landscape);
