// import Logo from "../assets/google-logo.png";
// import HomeHeader from "./HomeHeader";
// import SearchInput from "./SearchInput";
// import Footer from "./Footer";

// //import { useNavigate } from "react-router-dom";

// const Home = () => {
//     // const navigate=useNavigate()
//     // const searchPage=(e)=>{
//     //     navigate(`/${Query}/${1}`)
//     // }

//     return <div className="flex h-[100vh] flex-col">
//         <HomeHeader />
//         <div className=" grow flex justify-center ">
//             <div className="w-full px-5 flex flex-col items-center mt-48 bg-black-900">
//                 <img className="w-[180px] md:w-[500px]  " src={Logo} />
//                 <SearchInput />
//                 <div className="flex gap-20  text-[black] mt-8 py-4
//                 ">
//                     <button class="h-9 px-7  bg-[#f8f9fa] rounded-md border border-[#f8f9fa]  hover:border-[#dadce0] hover:shadow-md"
//               >
//                         Google Search
//                     </button>
//                     <button class="bg-[#f8f9fa] rounded-md border border-[#f8f9fa]  hover:border-[#dadce0] hover:shadow-md h-9 px-7 ">
//                         I'm Felling Lucky
//                     </button>
//                 </div>
//             </div>

//         </div>
//         <Footer/>
//     </div>;
// };

// export default Home;

//------------------------------------------------------------ TESTING CODE START HERE----------------------

import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillMicFill, BsCamera } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const Home = () => {
    const { query } = useParams();
    const [searchQuery, setSearchQuery] = useState(query || "");
    const navigate = useNavigate();

    // FOR ENTER KEY SEARCH WILL EXCUTE
    const handleSearch = (event) => {
        if (event.key === "Enter" && searchQuery.length > 0) {
            navigate(`/${searchQuery}/${1}`)
        }
    }
    // FOR Button SEARCH WILL EXCUTE
    const searchPage = (e) => {
        if (searchQuery.length > 0) {
            navigate(`/${searchQuery}/${1}`)
        }else{
            alert("Enter something to search")

        }
    }


    return (
        <>
            <div className="flex h-[100vh] flex-col">
                <HomeHeader />
                <div className=" grow flex justify-center ">
                    <div className="w-full px-5 flex flex-col items-center mt-48     bg-black-900">
                        <img className="w-[180px] md:w-[500px]  "
                            src={Logo}
                        />
                        {/* <SearchInput/> */}
                        <div id="searchBox" className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white  hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0 mt-5">
                            <AiOutlineSearch className="size={180}" size={18} color="#9aa0a6" />
                            <input
                                type="text"
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyUp={handleSearch}
                                value={searchQuery}
                                autoFocus
                                className="grow outline-0"
                            />
                            <div className="flex items-center gap-3">
                                {searchQuery && (<RxCross2
                                    size={20} color="#9aa0a6" className="cursor-pointer"
                                    onClick={() => setSearchQuery("")} />
                                )}

                                <BsFillMicFill className="cursor-pointer" size={20} color="#9aa0a6" />
                                <BsCamera className="cursor-pointer" size={20} color="#9aa0a6" />
                            </div>
                        </div>

                        {/* Button start here */}
                        <div className="flex mt-10 gap-4">
                            <button className="sm:h-9   px-7  bg-[#f8f9fa] rounded-md border border-[#1b4774]  hover:border-[#dadce0] hover:shadow" onClick={searchPage}>Google Search</button>
                            <button className="sm:h-9   px-7  bg-[#f8f9fa] rounded-md border border-[#1b4774]  hover:border-[#dadce0] hover:shadow">I'm Felling Lucky</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};


export default Home;


