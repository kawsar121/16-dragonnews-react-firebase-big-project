import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [iteam, setIteam] = useState([])
    
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => setIteam(data.data.news_category))
    },[])

    return (
        <div>
             <h1 className="font-bold text-black text-2xl">All Categorys {iteam.length}</h1> 
             
           <div className="flex flex-col gap-3 mt-2 text-black">
            {
                iteam.map((cat) => <NavLink to={`/cat/${cat.category_id}`} className="btn btn-soft" 
                                     key={cat.category_id}>
                                     {cat.category_name}
                                   </NavLink>)   
            }
           </div>
        </div>
    );
};

export default LeftNavbar;