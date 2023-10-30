
import RestuarantCard from "./RestaurantCard"
import resList from "../utils/Data"
import { useState,useEffect } from "react"
import ShimmerCard from "./ShimmerCard"
import {Link} from "react-router-dom"

const Body = () => {
    const [listOfRestaurants,setListOfRestaurant] = useState([])
    const [filteredRestaurants,setFilteredRestaurant]=useState([])
    const [searchText,setSearchText] = useState("")

    useEffect(()=>{fetchData()},[])

    async function fetchData(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json();
        setListOfRestaurant(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestaurants.length===0 ? <ShimmerCard /> : (
    <div className="body">
        <div className="filter">
        <button className="filter-btn-high" onClick={() => {
              setListOfRestaurant(listOfRestaurants.filter((a) =>  a.info.avgRating>4))         
            }}>Top rated Restuarant</button>
            <button className="filter-btn-sort" onClick={() => {
              const sortList = [...listOfRestaurants].sort((a,b) =>  b.info.avgRating - a.info.avgRating)  
              setListOfRestaurant(sortList)       
            }}>Sort By Highest Rated Restuarant</button>
        <div className="search">
        <input type="text" className="search-res" value={searchText} placeholder="Search Restaurant here..." name="sres" 
        onChange={(event)=>{
            setSearchText(event.target.value)
        }}/>
        <button className="search-btn" onClick={()=>{
            const searchList = listOfRestaurants.filter((slist)=>slist.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurant(searchList)
        }} >Search</button>
        </div>
        </div>
        <div className="restuarant-containers">
            {filteredRestaurants.map((element) => (
           <Link to={"/restaurant/"+element.info.id}> <RestuarantCard key={element.info.id} resData={element} /></Link>
        ))}
        </div>

    </div>
)
        }




export default Body