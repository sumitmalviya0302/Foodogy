import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-20 px-12 border-b shadow-md flex justify-between">
      <div className="w-20 h-full border overflow-hidden rounded-full cursor-pointer">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkY9fBy_IaJ0gCSKtcnhtrnEQW97G1een_A&usqp=CAU"
            alt="Logo"
            className="w-full h-full hover:scale-125 hover:transition-all"
          />
        </Link>
      </div>

      <ul className="flex justify-between items-center">
        <li className="text-xl mx-3 p-2 hover:bg-yellow-300  hover:rounded-full cursor-pointer ">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="text-xl mx-3 p-2 hover:bg-yellow-300  hover:rounded-full cursor-pointer ">
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
