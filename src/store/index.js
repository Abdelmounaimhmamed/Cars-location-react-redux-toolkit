import {configureStore} from "@reduxjs/toolkit";
import { FormSlice ,changeName,changeCost} from "./slices/Form";
import { CarSlice , addCar, removeCar, ChangeSearchTerm} from "./slices/CarsSlice";



const store =  configureStore({
    reducer : {
        form : FormSlice.reducer ,
        Cars: CarSlice.reducer 
    }
});


export {
    store,
    changeCost,
    changeName,
    addCar,
    removeCar,
    ChangeSearchTerm
}