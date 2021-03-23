import React from "react";
import {ambulanceNW,
        ambulanceSE,
        deliveryNW,
        deliverySE,
        policeNW,
        policeSE,
        suvNW,
        suvSE,
        taxiNW,
        taxiSE,} from "../images";
import { WORLD_SIZE, TILE_ASPECT_RATIO} from "../constants";

function MovingObject({ x, y, dir, type}){
    const yOffset = ((100 / WORLD_SIZE) * TILE_ASPECT_RATIO) / 1.8;
    const yBase = yOffset * y + yOffset / 1.5;
    const xBase = 50 - (100 / 19) * y;
    const xAbs = xBase + (50 / 9) * x;
    const yAbs = yBase + yOffset * x;

    let src;
    if(type === "truck" && dir === "up"){
        src = deliveryNW;
    } else if( type === "truck" && dir === "down"){
        src = deliverySE;
    } else if( type === "ambulance" && dir === "up"){
        src = ambulanceNW;
    }else if( type === "ambulance" && dir === "down"){
        src = ambulanceSE;
    }else if( type === "police" && dir === "up"){
        src = policeNW;
    }else if( type === "police" && dir === "down"){
        src = policeSE;
    }else if( type === "suv" && dir === "up"){
        src = suvNW;
    }else if( type === "suv" && dir === "down"){
        src = suvSE;
    }else if( type === "taxi" && dir === "up"){
        src = taxiNW;
    }else if( type === "taxi" && dir === "down"){
        src = taxiSE;
    }
                        
     return (
    <img
      alt={type}
      className={`${type}`}
      style={{
        top: `${yAbs}%`,
        left: `${xAbs}%`,
        opacity: x < 0 || x > 8 ? 0 : 1,
      }}
      src={src}
    />
  );
}

export default MovingObject;