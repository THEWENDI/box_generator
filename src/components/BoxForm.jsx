import React, {useState} from 'react'

const BoxForm = (props) => {
    // each input is a state
    const [color, setColor] = useState("");
    const [sideLength, setSideLength] = useState(0);

    // creates a new box property when "add" button is pressed
    // defaults side length to 200 if the value was invalid
    function handleSubmit(e) {
        e.preventDefault();
        props.makeBox({
            color: color,
            sideLength: (parseInt(sideLength) <= 0) || Number.isNaN(sideLength) ?
                200
                : sideLength
        })
        // reset input
        setColor("")
        setSideLength(0)
    }




    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div>
            <label>Color:</label>
            <input type="text" name="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </div>
            <div>
            <label>Side Length:</label>
            <input type="number" name="sideLength" value={sideLength} onChange={(e) => setSideLength(e.target.value)} />
            </div>
            <button>Add</button>
        </form>
    )
}

export default BoxForm

