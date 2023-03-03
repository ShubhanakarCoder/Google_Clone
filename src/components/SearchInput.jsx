import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillMicFill, BsCamera } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";



const SearchInput = () => {
    const { query } = useParams();
    const [searchQuery, setSearchQuery] = useState( query || "");
    const navigate = useNavigate();

    const handleSearch = (event) => {
        if (event.key === "Enter" && searchQuery.length > 0) {
            navigate(`/${searchQuery}/${1}`)
        }
    }

    // console.log(Query.length);
    return (
        <div
            id="searchBox"
            className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0 mt-5"
        >
            <AiOutlineSearch size={18} color="#9aa0a6" />
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
    )
};

export default SearchInput;

//------------------------------------------------------------ TESTING CODE START HERE----------------------



// import { useState } from "react";
// import { AiOutlineSearch } from "react-icons/ai";
// import { IoMdClose } from "react-icons/io";
// import { useNavigate, useParams } from "react-router-dom";
// import { BsFillMicFill, BsCamera } from "react-icons/bs";
// import { RxCross2 } from "react-icons/rx";



// const SearchInput = (props) => {
//     const { query } = useParams();
//     const [searchQuery, setSearchQuery] = useState( query || "");
//     const navigate = useNavigate();
    

//     const handleClick = () => {
//         props.onButtonClick("Data from child component");
//       };
    
//     var searchedData=searchQuery
//     console.log("SEARCHED QUERY",searchedData);

//     const handleSearch = (event) => {
//         if (event.key === "Enter" && searchQuery.length > 0 ) {
//             navigate(`/${searchQuery}/${1}`)
//         }
//     }
    
//     return (
//         <div
//             id="searchBox"
//             className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0 mt-5"
//         >
//             <AiOutlineSearch size={18} color="#9aa0a6" />
//             <input
//                 type="text"
//                 onChange={(e) => setSearchQuery(e.target.value)}

//                 onKeyUp={handleSearch}
//                 value={searchQuery}
//                 autoFocus
//                 className="grow outline-0"
//             />
//             <div className="flex items-center gap-3">

//                 {searchQuery && (<RxCross2
//                     size={20} color="#9aa0a6" className="cursor-pointer"
//                     onClick={() => setSearchQuery("")} />
//                 )}

//                 <BsFillMicFill className="cursor-pointer" size={20} color="#9aa0a6" />
//                 <BsCamera className="cursor-pointer" size={20} color="#9aa0a6" />
//             </div>
//             {/* <div className="flex gap-20  text-[black] mt-8 py-4
//                 ">
//                     <button class="h-9 px-7  bg-[#f8f9fa] rounded-md border border-[#f8f9fa]  hover:border-[#dadce0] hover:shadow-md" onClick={()=>searchPage()}
//               >
//                         Testing Google Search
//                     </button>
//                     <button class="bg-[#f8f9fa] rounded-md border border-[#f8f9fa]  hover:border-[#dadce0] hover:shadow-md h-9 px-7 ">
//                         I'm Felling Lucky
//                     </button>
//                 </div> */}
//         </div>
//     )
// };

// export default SearchInput;