import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import SearchedImageItemTemplate from "./SearchedImageItemTemplate";
import Pagination from "./Pagination";
import { Context } from "../utils/ContextApi";

const SearchResult = () => {
    const [result, setResult] = useState();
    const { query, startIndex } = useParams();
    const { imageSearch } = useContext(Context);

    useEffect(() => {
        callAPI();
        // window.scrollTo(0, 0);
    }, [query, startIndex, imageSearch]);

    const callAPI = () => {
        let payload = { q: query, start: startIndex };
        if (imageSearch) {
            payload.searchType = "image";
        }
        fetchDataFromApi(payload).then((res) => {
            console.log(res);
            // console.log("result" ,result);
            setResult(res);
        });
    };
   if(!result) return;

   const {items,queries,searchInformation}=result
   console.log(items);
   console.log(queries);


    return (
        <div className="flex flex-col min-h-[100vh]">
            <SearchResultHeader />
            <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
                <div className="flex text-sm text-gray-400 mb-3">
                  {`About ${searchInformation.formattedTotalResults} in (${searchInformation.formattedSearchTime}) seconds`}
                </div>
                {!imageSearch ?(
                    <>
                    {items.map((el,i)=>(
                        <SearchedItemTemplate key={i} data={el}/>
                    ))}
                    </>
                ):(
                    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
                    {items.map((el,i)=>(
                        <SearchedImageItemTemplate key={i} data={el}/>
                    ))}
                    </div>
                )}
                <Pagination queries={queries} />
            </main>
            <Footer />
        </div>
    );
};

export default SearchResult;
