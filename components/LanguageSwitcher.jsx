"use client";
import Image from "next/image";
import { useState } from "react";

const LanguageSwitcher = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="relative">
            <button className="flex items-center gap-2">
                <Image
                    onClick={() => setShowMenu(!showMenu)}
                    className="max-w-8"
                    src="/images/bd.png"
                    alt="bangla"
                    width={50}
                    height={50}
                />
                Language
            </button>

            {showMenu && (
                <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
                    <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                        <Image
                            className="max-w-8"
                            src="/images/bd.png"
                            alt="bangla"
                            width={50}
                            height={50}
                        />
                        Bangla
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                        <Image
                            className="max-w-8"
                            src="/images/usa.png"
                            alt="bangla"
                            width={50}
                            height={50}
                        />
                        English
                    </li>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
