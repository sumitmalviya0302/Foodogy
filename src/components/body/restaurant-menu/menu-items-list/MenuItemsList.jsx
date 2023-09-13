import {  useEffect, useState } from "react";
import MenuItemCard from "../menu-item-card/MenuItemCard";

const MenuItemsList = ( props ) => {

  const menuInfo = props

  const[menuList,setMenuList] = useState([])

    useEffect(()=>{
      const itemData = menuInfo?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards

      setMenuList(itemData);

    },[])
  
  
    console.log("setmenulist"+setMenuList)

  

  return (
    <div className="my-4">
      {
        menuList.map((item)=>(
          <MenuItemCard {...item?.card?.info} key={item?.card?.info?.id}/>
        ))
      }
      
    </div>
  );
};

export default MenuItemsList;
