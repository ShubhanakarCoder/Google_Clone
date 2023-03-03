
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'

const ProfileIcon = () => {
    const [Query, setQuery] = useState("");
    const navigate = useNavigate();
    const handleSearch=(event)=>{
        if(event.key==="Enter"){
            console.log(event.key);
            navigate(`/${Query}/${1}`)
        }
       }
  return (
    <div className="flex gap-2">
        <input  type="text" placeholder="enter text"
         onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleSearch}
         value={Query}
         /> 
       
         

    </div>
  )
}

export default ProfileIcon