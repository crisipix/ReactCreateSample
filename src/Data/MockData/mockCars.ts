import { ICar } from "../../Models/ICar";

export const AllCars: ICar[] = [
    {
        make: "Toyota", model: "Celica", price: 35000
      }, {
        make: "Ford", model: "Mondeo", price: 32000
      }, {
        make: "Porsche", model: "Boxter", price: 72000
      }
].map((c,index)=> ({...c, id : index + 1}));