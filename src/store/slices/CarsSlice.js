import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {  
    searchTerm : "",
    listOfCars : []
}


const CarSlice = createSlice({
    name : "Cars",
    initialState,
    reducers : {
        ChangeSearchTerm : (state , action) => {
            state.searchTerm  = action.payload;
        },
        addCar: (state , action) => {
            state.listOfCars.push({
                name : action.payload.name,
                cost : action.payload.cost,
                id : nanoid()
            });
        },
        removeCar : (state , action) => {
            const carsUpdated = state.listOfCars.filter(car => car.id !== action.payload);
            state.listOfCars = carsUpdated;
        }
    }
})



export {CarSlice};
export const {ChangeSearchTerm,addCar,removeCar} = CarSlice.actions;


