import { autorun, observable } from "mobx";

class CarStore {
  @observable Cars: any[] = ["Honda","Ford"];
  @observable filter: string = "dodge";
}

///const store =window.store=new CarStore;//

export  {CarStore};


