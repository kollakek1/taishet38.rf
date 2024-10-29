import { MdOutlineSettings, MdOutlineArrowBackIosNew, MdClose } from "react-icons/md";
import { useState } from "react";

export default function Settings() {

    const [active, setActive] = useState(false);

    return (
        <>

            <button className="btn lg:btn-ghost max-lg:btn-outline max-lg:w-full" onClick={() => setActive(!active)}>
                Настройки <MdOutlineSettings className="w-6 h-6"/>
            </button>
            <div className={`fixed w-full h-full bg-base-200 lg:bg-black/60 top-0 left-0 duration-500 ease-in-out p-6 ${active ? '' : 'max-lg:-translate-x-full pointer-events-none lg:opacity-0'}`} onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center lg:hidden">
                    <MdOutlineArrowBackIosNew className="w-8 h-8 mt-1" onClick={() => setActive(!active)}/>
                    <p className="text-4xl font-bold">Настройки</p>
                </div>
                <div className="flex items-center justify-center w-full h-full max-lg:hidden" onClick={() => setActive(!active)}>
                    <div className="bg-base-200 rounded-box p-6" onClick={(e) => e.stopPropagation()}>
                        <div className="flex gap-9">
                            <p className="text-3xl font-bold mt-1">Настройки</p>
                            <button className="btn btn-ghost btn-square" onClick={() => setActive(!active)}>
                                <MdClose className="w-6 h-6 my-auto cursor-pointer"/>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}