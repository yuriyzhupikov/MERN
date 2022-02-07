import React from "react";

export const Loader = () => {
    return(
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '2rem'}}>
            <div className="progress">
                <div className="indeterminate"/>
            </div>
        </div>
        )
}