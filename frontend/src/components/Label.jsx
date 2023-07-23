import React from 'react';
import label from "../static/goin_label.png";

console.log(label)

const Label = () => {
    return (
        <div className="p-8 grid gap-4 grid-flow-row auto-rows-max">
            <div className="flex items-center gap-2 place-content-center">
                <img className="h-14 w-14" src={label} alt="goin_label"/>
            </div>
        </div>
    )
}

export default Label;

//*<div className="text-4xl font-semibold text-blue-900">Hydrohelper</div>*//