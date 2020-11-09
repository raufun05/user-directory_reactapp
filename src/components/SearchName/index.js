import React, { useContext } from "react";
import "./SearchName.css";
import UserAreaContext from "../../utils/UserAreaContext";

const SearchName = () => {
    const context = useContext(UserAreaContext);

    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search by alphabet"
                    aria-label="Search"
                    onChange={e => context.handleSearchChange(e)}
                />
                <button className="btn my-2 my-sm-0" type="submit">
                    Search
                 </button>
            </form>
        </div>
    );
}
export default SearchName;