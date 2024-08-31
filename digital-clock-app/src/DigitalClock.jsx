import { useState, useEffect } from "react";

function DigitalClock() {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => setTime(new Date()), 1000)

        return () => {
            clearInterval(intervalId)
        }

    }, [])


    function formatTime() {

        let hours = time.getHours() % 12
        let minutes = time.getMinutes()
        let seconds = time.getSeconds()

        const meridian = hours <= 12 ? "PM" : "AM"

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`
    }

    function padZero(num) {
        return num < 10 ? num.toString().padStart(2, "0") : num
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )


}

export default DigitalClock