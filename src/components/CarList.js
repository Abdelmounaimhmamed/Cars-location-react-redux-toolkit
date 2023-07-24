import { useSelector,useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const listOfCars = useSelector( ({Cars: {listOfCars,searchTerm}}) => {
    return listOfCars.filter(car => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  });
  const handleDelete = (id) => {
    dispatch(removeCar(id));
  }

  return (
    <div className="">
        {listOfCars.map(car => (
          <div key={car.id} className="panel flexify">
              <span>{car.name} - ${car.cost}</span>
              <button onClick={() => handleDelete(car.id)} className="button is-danger">Delete</button>
          </div>
        ))}
    </div>
  )
}

export default CarList;
