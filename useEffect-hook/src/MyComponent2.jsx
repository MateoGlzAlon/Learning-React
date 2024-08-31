import { useState, useEffect } from "react"


function MyComponent2() {

    const [widht, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        console.log("event listener added")

        return () => {
            window.removeEventListener('resize', handleResize)
            console.log("event listener removed")
        }
    }, []);


    function handleResize() {

        setWidth(window.innerWidth)
        setHeight(window.innerHeight)

    }

    return (
        <>
            <p>Window width is: {widht}px</p>
            <p>Window height is: {height}px</p>

        </>
    )
}

export default MyComponent2