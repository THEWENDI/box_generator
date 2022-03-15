import React from 'react'

const BoxDisplay = (props) => {
    const boxStyle = {
        "backgroundColor": props.boxProperties.color,
        "width": props.boxProperties.sideLength + "px",
        "height": props.boxProperties.sideLength + "px",
        "margin": "50px",
        display: "inline-block",
    }
    
    return (
        <div style={boxStyle} ></div>
    )
}

export default BoxDisplay