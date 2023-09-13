import { useState } from "react"


const SearchBar = () => {

  const [searchText, setSearchText] = useState("")

  const handleSearch = (e) =>{
    setSearchText(e.target.value)
  }

  return (
    <div className="my-4 w-11/12 h-20 border mx-auto text-center pt-5">
        <input type="text" placeholder="Search"className="w-6/12 h-10 outline-none border border-black rounded-full pl-4 mr-3" value={searchText} onChange={handleSearch}/>
        <button className="w-20 border h-10 border-black rounded-full hover:bg-yellow-300">Search</button>
    </div>
  )
}

export default SearchBar