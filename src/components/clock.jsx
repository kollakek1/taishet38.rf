import { useState, useEffect } from "react";
export default function Clock() {

    const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Irkutsk'}));


    useEffect(() => {
        const timer = setInterval(() => setTime(new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Irkutsk'})), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center max-lg:hidden">
            <p className="text-6xl font-bold">{time}</p>
            <p className="text-3xl font-medium">{new Intl.DateTimeFormat('ru-RU', {day: 'numeric', month: 'long'}).format(new Date())}</p>
        </div>
    );
}