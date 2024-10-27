import { MdInfo, MdClose } from 'react-icons/md';
import { useState, useEffect } from "react";

export default function Alert() {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem('AlertMain');
        if (data === null) {
            localStorage.setItem('AlertMain', 'true');
        } else {
            setActive(data === 'true');
        }
    }, []);

    return (
        <div className={`alert bg-base-100 shadow-lg mb-2 ${active ? '' : 'hidden'}`}>
            <MdInfo className="w-7 h-7 text-info"/>
            <div>
                <h3><span className="font-bold">Этот сайт</span> — неофициальный портал города Тайшет, который создан для того, чтобы делиться событиями и важной информацией о жизни города.</h3>
            </div>
            <button className="btn btn-sm lg:btn-ghost btn-square" onClick={() => {
                localStorage.setItem('AlertMain', 'false')

                setActive(false)

                }}><MdClose/></button>
        </div>
    );
}