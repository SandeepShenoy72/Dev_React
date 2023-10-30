import {CDN_URL} from "../utils/constants"




const RestuarantCard = (props) => {
    const {resData}=props
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData.info
   return ( <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img alt="Restaurant Image" className="res-img" src={CDN_URL
            + cloudinaryImageId}/>
        <h4>{name}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating} Stars</h5>
        <h5>{costForTwo}</h5>
        <h5>{sla.deliveryTime} minutes</h5> 
         
    </div> )
}

export default RestuarantCard