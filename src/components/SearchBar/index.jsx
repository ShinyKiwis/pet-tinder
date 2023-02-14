import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="searchbar_container">
      <BsSearch className="searchbar_icon" size="1.5em" />
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search pet type (cat or dog)..."
      />
    </div>
  );
};

export default SearchBar;
