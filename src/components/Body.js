import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
const Body =()=>{
    return(
           <div className="body">
            <div className="search">searchbar is not yet implemented</div>
            <div className="res-container">
                {resList.map((resturant) => (
                    <ResturantCard key={resturant.data.id} resData={resturant}/>
                ))};
                
            </div>
           </div>
    );
};
export default Body;