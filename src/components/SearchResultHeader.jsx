import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { menu } from "../utils/Constants";
import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import { Tb2Fa, TbGridDots } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { Context } from "../utils/ContextApi";

const SearchResultHeader = () => {
    const [selectedItem, setSeleted] = useState("All")
    const { setImageSearch } = useContext(Context);

    useEffect(() => {
        return () => setImageSearch(false)
    }, [])
    const clickHandler = (el) => {
        console.log(el.name)
        let imageType = el.name === "Images"
        setImageSearch(imageType ? true : false)
        setSeleted(el.name)
    }
    return (
        <>

            <div className=" flex p-[15px] pb-4 md:pr-5 md:pl-20 md:pt-7   border-b   border-[#ebebeb] items-center sticky top-0 bg-white">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center grow align-middle">
                        <Link to="/">
                            <img className=" mt-6 hidden md:block w-[92px] mr-2" src={Logo} />
                        </Link>
                        <SearchInput from="searchresult" />
                    </div>
                </div>
                <div className="h-16 flex
        justify-between md:justify-end items-center gap-4 px-5 ">
                    <div className="flex gap-4">
                        <span className="text-black text-[15px] line-height
                    hover:underline cursor-pointer">
                            Gmail
                        </span>
                        <span className="text-black text-[15px]
                    hover:underline cursor-pointer">
                            Images
                        </span>
                        <span className="cursor-pointer">
                            <TbGridDots size={25} />
                        </span>
                        <span className="cursor-pointer">
                            <RxAvatar size={25} />
                        </span>
                    </div>
                </div>

                {/* API KEY=AIzaSyCS34OKrZsn0vzsFzjkIFPNGlOF66q0abY  0f09b8666c8b9fb8c */}
            </div>
            <div className="flex ml-[-12px] pl-20">
                {menu.map((menu, index) => (
                    <span
                        key={index}
                        className={`flex items-center p-4 text-[#5f6368] cursor-pointer relative ${selectedItem === menu.name ? "text-blue-800" : ""}`}

                        onClick={() => clickHandler(menu)}
                    >
                        <span className="hidden md:block mr-2">
                            {menu.icon}
                        </span>
                        <span className="text-sm">{menu.name}</span>
                        {selectedItem === menu.name && (
                            <span className="h-[1px] w-[70px] absolute bg-[#1a73e8] bottom-[0] left-[10px]" />
                        )}
                    </span>
                ))}
            </div>

        </>
    )
};

export default SearchResultHeader;
