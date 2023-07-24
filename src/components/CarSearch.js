import { useDispatch ,useSelector } from "react-redux";
import { ChangeSearchTerm } from "../store/index.js";

function CarSearch() {
  const dispatch = useDispatch();
  const searchTem = useSelector( (state) => state.Cars.searchTerm);
  const handleSearchTerm = (e) => {
    const value = e.target.value;
    dispatch(ChangeSearchTerm(value));
  }

  return (
    <div className="list-header ">
      <h3 className="title is-3">My Cars </h3>
      <div className="search field is-horizontal">
        <label className="label">search</label>
        <input className="input" type="text" value={searchTem} onChange={handleSearchTerm} /> 
      </div>
    </div>
  )
}

export default CarSearch;
