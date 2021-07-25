import { autorun, observable, action, computed } from "mobx";

/*
  Add to the stores object because it's passed into the provider as a prop. 
  which will allow all nested children of the app have access to stores
  ./stores.ts
*/
class CarStore {
  @observable Cars: any[] = ["Honda","Ford"];
  @observable filter: string = "dodge";

  @computed
  get carCount() : number{
    return  this.Cars.length;
  }
  @action
  addCar(car : string)  {
    this.Cars.push(car);
  }

  @action
  removeCar(car : string)
  {
    return this.Cars.filter(c => c !== car);
  }
}

///const store =window.store=new CarStore;//

export  {CarStore};


