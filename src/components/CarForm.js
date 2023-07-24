import { useDispatch ,useSelector} from "react-redux";
import {addCar, changeCost, changeName} from "./../store/index";


function CarForm() {
  const dispatch = useDispatch();
  const name = useSelector((state) => {
    return state.form.name
  } )
  const cost = useSelector( (state) => state.form.cost);
  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(changeName(value));
  }
  const handleCostChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch(changeCost(value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({name , cost}));
  }

  return (

    <div className="panel car-form">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
              <label className="label">name</label>
              <input type="text" className="input is-expanded" value={name} onChange={handleChange} />
              <label className="label">Cost</label>
              <input className="input is-expanded" type="number" value={cost || ""} onChange={handleCostChange} />
              <input type="submit" value={"send"} className="button is-link" />
          </div>
        </div>  
      </form>    
    </div>
  );
}

export default CarForm;
