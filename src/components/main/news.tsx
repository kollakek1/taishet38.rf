import { useState, useEffect } from "react";

export default function News() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    if (loading) {
        return (
            <>
                <div className="h-full justify-center items-center flex">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            </>
        );
    }

    return (
        <>
        </>
    )
}