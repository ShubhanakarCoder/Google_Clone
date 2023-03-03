import { Tb2Fa, TbGridDots } from "react-icons/tb";
import {RxAvatar} from "react-icons/rx";
import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
    return (
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
                       <TbGridDots size={25}/>
                    </span>
                    <span className="cursor-pointer">
                       <RxAvatar size={25}/>
                    </span>
                </div>

        </div>
    )
};

export default HomeHeader;
