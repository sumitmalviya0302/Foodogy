// import { IMG_URL } from "../../../../utils/constants";

const MenuItemCard = ( props ) => {
  console.log(props);
  return (
    <div className=" m-2 p-2 flex justify-between">
      {/* <div className=" mr-5">
        <p className=" font-bold my-1">
          {
            menuItem?.name
          }
        </p>
        <p className="text-sm mb-2">
        &#8377; {menuItem?.defaultPrice /
            100}
        </p>
        <p className="text-xs my-2 text-gray-500">
          {
            menuItem?.description
          }
        </p>
      </div>
      <div>
        <div className=" ml-5 h-full">
        <img src={(IMG_URL)+(menuItem?.imageId)} alt="image" className=" rounded-xl w-9/12 mx-auto"/>
        <p className="text-sm text-green-600 border w-5/12 mx-auto text-center py-1 border-green-400 mt-1">ADD</p>
        </div>
      </div> */}
      menu
    </div>
  );
};

export default MenuItemCard;
