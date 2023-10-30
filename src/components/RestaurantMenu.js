import React, { useEffect,useState } from 'react'
import ShimmerCard from './ShimmerCard'
import { useParams } from 'react-router-dom'
import { MENU_API } from "../utils/constants"


const RestaurantMenu = () => {

    const {resId} = useParams()
    
    const [resMenu,setResMenu] = useState(null)
    const [itemCard,setItemCard]=useState(null)

    useEffect(()=>{
        fetchMenu();
    },[])

    async function fetchMenu(){
        const menuData = await fetch(MENU_API+resId) 
        const menuDataJson = await menuData.json()
        setResMenu(menuDataJson);
        setItemCard(menuDataJson.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
    }

    // const { resName }= ;
    // console.log(resName)S
    // const {itemCards} = ;

  return resMenu===null ? <ShimmerCard /> : (
    <div className="menu-container">
        <h1>{resMenu?.data?.cards[0]?.card?.card?.info.name}</h1>
        <p>
            {resMenu?.data?.cards[0]?.card?.card?.info.cuisines.join(", ")+ " - " + "Rs "+Number(resMenu?.data?.cards[0]?.card?.card?.info.costForTwo)/100 + " for two"}
        </p>
        <h2>Menu</h2>
        <ul>
      
                {itemCard.itemCards.map((ele)=> <li key={ele.card.info.id}>{ele.card.info.name} - Rs {ele.card.info.price/100} </li>)}
          
        </ul>
    </div>
  )
}

//.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards[7].card.info

export default RestaurantMenu