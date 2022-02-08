import React, { useEffect } from "react";
import { useStore } from "react-redux";

const Regions = () => {
    const regions = useStore()
    return (
        <div> 
        <p>{regions[1].value}</p>
        </div>
    )
}

export default Regions;