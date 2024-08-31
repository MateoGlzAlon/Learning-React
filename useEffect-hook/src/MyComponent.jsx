import { useState, useEffect } from "react"


function MyComponent() {

    const [color, setColor] = useState("green")
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count: ${count} - Color: ${color}`
    }, [count, color])

    function addCount() {
        setCount(prevCount => prevCount + 1)
    }

    function subtractCount() {
        setCount(prevCount => prevCount - 1)
    }

    function changeColor() {
        setColor(prevColor => prevColor === "green" ? "red" : "green")
    }

    return (
        <>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br />
            <button onClick={changeColor}>Change color</button>

        </>
    )
}

export default MyComponent