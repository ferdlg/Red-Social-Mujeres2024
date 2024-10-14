import React from "react";
import '../../assets/styles/components/card/card.css'

export const Card =({children})=>{
    return(
        <div className="card">
            {children}
        </div>
    );
}