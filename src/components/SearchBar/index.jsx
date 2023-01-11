import { BsSearch } from "react-icons/bs";
import "./SearchBar.css"

const SearchBar = () => {
  return (
    <div className="searchbar_container">
      <BsSearch className="searchbar_icon" size="1.5em" />
      <input type="text" placeholder="Search pet..." />
    </div>
  );
};

export default SearchBar