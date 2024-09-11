import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_LINK } from '../constants';


const RestrauntMenu = () => {
    const param = useParams();
    const [restrauntInfo, setRestrauntInfo] = useState({});

    useEffect(() => {
        getRestrauntInfo();
    },[])
    
    const getRestrauntInfo = async() => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${param.id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        setRestrauntInfo(json.data);
        const info = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
        console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    }

  return (Object.keys(restrauntInfo).length === 0 ) ? <div>Loading...</div> : (
    <div className='restraunt-menu'>
        <h2>{restrauntInfo?.cards[0]?.card?.card?.text}</h2>
        <h5>{restrauntInfo?.cards[2]?.card?.card?.info?.areaName}</h5>
        <div className='restraunt-menu-top-card'>
            <div className='restraunt-menu-image'>
            <img src={IMG_CDN_LINK + restrauntInfo?.cards[2]?.card?.card?.info?.cloudinaryImageId} />
            <div className='restraunt-menu-top-card-info'>
            <h3>{restrauntInfo?.cards[2]?.card?.card?.info?.name}</h3>
            <p>{restrauntInfo?.cards[2]?.card?.card?.info?.city}📍</p>
            <p>{restrauntInfo?.cards[2]?.card?.card?.info?.avgRating}⭐ rating</p>
            <p>{restrauntInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
            </div>
            </div>
            <div className='restraunt-menu-cuisines'>
                <p>{restrauntInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</p>
            </div>
        </div>
        <div className='restraunt-menu-main-heading'>
            <h3>Menu</h3>
        <div className='restraunt-menu-main'>

            {restrauntInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((item, index) => {
                return (
                    <div className='restraunt-menu-main-card' key={index}>
                       
                        <h5>{item?.card?.card?.title}</h5>
                      {item?.card?.card?.itemCards?.map((item, index) => {
                        return (
                            <div className='restraunt-menu-item' key={index}>
                                <div className='restraunt-menu-item-info'>
                                <p>{item?.card?.info?.name}
                                    <span>{item?.card?.info?.isVeg === 1 ? "✅" : "❌"}</span>
                                </p>
                                <p>₹{item?.card?.info?.price/100}</p>
                                </div>
                                <button>Add</button>
                            </div>
                        )
                    })}

                    </div>
                )
            })}
        </div>

        </div>
    </div>
  )
}

export default RestrauntMenu