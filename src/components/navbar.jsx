import { FaBars } from "react-icons/fa";
import { MdOutlineArrowBackIosNew, MdEmojiEvents, MdLink, MdHome } from "react-icons/md";
import { BiNews } from "react-icons/bi";

import { useState } from "react";
import { useSwipeable } from 'react-swipeable';

import Settings from "./settings";

export default function NavBar() {

    const [active, setActive] = useState(false);

    const handlers = useSwipeable({
        onSwipedLeft: () => setActive(!active),
        preventDefaultTouchmoveEvent: true,
    });

    return (
        <>
            <button className="btn"> 
				<FaBars className={`w-7 h-7 duration-500 ease-in-out z-40 ${active ? 'rotate-90' : ''}`} onClick={() => setActive(!active)}/>
			</button>
            <div {...handlers} className={`fixed h-full w-full bg-base-200 top-0 left-0 duration-500 ease-in-out p-6 ${active ? '' : '-translate-x-full'}`}>
                <div className="flex justify-between items-center">
                    <MdOutlineArrowBackIosNew className="w-8 h-8 mt-1" onClick={() => setActive(!active)}/>
                    <p className="text-4xl font-bold">It's Тайшет</p>
                </div>
                <div className="flex flex-col gap-3 mt-5">
                    <button className="btn btn-outline w-full">
                        Главное <MdHome className="w-6 h-6"/>
                    </button>
                    <button className="btn btn-outline w-full">
                        События <MdEmojiEvents className="w-6 h-6"/>
                    </button>
                    <button className="btn btn-outline w-full">
                        Новости <BiNews className="w-6 h-6"/>
                    </button>
                    <button className="btn btn-outline w-full">
                        Оффициальные ссылки <MdLink className="w-6 h-6"/>
                    </button>
                    <Settings/>
                </div>
            </div>
        </>
    );
}