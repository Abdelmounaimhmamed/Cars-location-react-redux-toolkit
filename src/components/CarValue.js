import { useSelector  } from "react-redux";

function CarValue() {
  const TotalCost = useSelector( ({Cars : {listOfCars, searchTerm}}) => {
    const filteredCars =  listOfCars.filter(car => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    let cost = 0 ;
    for(let car of filteredCars){
        cost += car.cost
    }
    return cost;
  })

  return (
    <div className="car-value">
      Total Cost : ${TotalCost}
    </div>
  )
}

export default CarValue;
