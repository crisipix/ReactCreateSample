import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './CarDetails.css';
import { ColumnDef } from '../../Models/ColumnDef';
import { RowData } from '../../Models/RowData';
import {
  NavLink, Route, RouteComponentProps
} from "react-router-dom";
import { Select, ItemPredicate, ItemRenderer } from "@blueprintjs/select"
import { Button, H5, MenuItem, Switch } from "@blueprintjs/core";
import { ICar } from '../../Models/ICar';
import { AllCars } from '../../Data/MockData/mockCars';

const CarSelect = Select.ofType<ICar>();

interface IProps  {
};
interface IState  {
  name: string,
  selectedModel : string,
  columnDefs: any[],
  rowData: any[],
  allowCreate: false,
  createdItems: [],
  disableItems: false,
  disabled: false,
  car: ICar,///TOP_100_FILMS[0],
  filterable: true,
  hasInitialContent: false,
  items: any[]//filmSelectProps.items,
  itemRenderer: ItemRenderer<ICar>,
  itemPredicate: ItemPredicate<ICar>,
  minimal: false,
  resetOnClose: false,
  resetOnQuery: true,
resetOnSelect: false,
};

class CarDetails extends Component<IProps& RouteComponentProps<{}>, IState>{

    constructor(props: any) {
        super(props);
        
        this.state = {
          name: "Chris",
          selectedModel:"",
          columnDefs: [{
            headerName: "Make", field: "make"
          }, {
            headerName: "Model", field: "model"
          }, {
            headerName: "Price",
            field: "price",
            editable: true,
            singleClickEdit : true
          }],
          rowData: AllCars,
          itemRenderer: this.itemRenderer,
          itemPredicate : this.filterCar,
          items: AllCars,
          allowCreate: false,
          createdItems: [],
          disableItems: false,
          disabled: false,
          car: AllCars[0] as ICar,
          filterable: true,
          hasInitialContent: false,
          minimal: false,
          resetOnClose: false,
          resetOnQuery: true,
          resetOnSelect: false,
        };
        //this.setState({Name: "Chris"});
      }
      componentDidMount() {
        console.log("mounted");
          console.log("props",this.props);
          console.log("match",this.props.match);
          console.log("match",this.props.match.params);
          const { params } : any = this.props.match;
          const model : string = params.model;
          if(model){
            this.setState( state => ({selectedModel: model.toLowerCase(),
              rowData: state.rowData.filter(r => r.model && r.model.toLowerCase() === model.toLowerCase()),
              car: state.rowData.filter(r => r.model && r.model.toLowerCase() === model.toLowerCase())[0]
            }));
          }
          
         // this.props.history.push('/details/celica');

      }
    
      componentWillUnmount() {
    
      }

      handleValueChange = (car: ICar) => {
    
        this.setState(state => ({ car, selectedModel:car.model,
          rowData: state.items.filter(r => r.model && r.model.toLowerCase() === car.model.toLowerCase())
        }));
        if(car){
         this.props.history.push(`/details/${car.model.toLowerCase()}`);

        }
};

      itemRenderer :ItemRenderer<ICar> = (car:ICar, { handleClick, modifiers, query })=>{
        if (!modifiers.matchesPredicate) {
          return null;
      }
      const text = `${car.make}. ${car.model}`;
      return (
          <MenuItem
              active={modifiers.active}
              disabled={modifiers.disabled}
              //label={car.model.toString()}
              key={`${car.make}${car.model}`}
              onClick={handleClick}
              text={this.highlightText(text, query)}
          />
      );
      }

      filterCar: ItemPredicate<ICar> = (query, car, _index, exactMatch) => {
        const normalizedTitle = car.model.toLowerCase();
        const normalizedQuery = query.toLowerCase();
    
        if (exactMatch) {
            return normalizedTitle === normalizedQuery;
        } else {
            return `${car.id}. ${normalizedTitle} ${car.model}`.indexOf(normalizedQuery) >= 0;
        }
    };
     
      highlightText(text: string, query: string) {
        let lastIndex = 0;
        const words = query
            .split(/\s+/)
            .filter(word => word.length > 0)
            .map(this.escapeRegExpChars);
        if (words.length === 0) {
            return [text];
        }
        const regexp = new RegExp(words.join("|"), "gi");
        const tokens: React.ReactNode[] = [];
        while (true) {
            const match = regexp.exec(text);
            if (!match) {
                break;
            }
            const length = match[0].length;
            const before = text.slice(lastIndex, regexp.lastIndex - length);
            if (before.length > 0) {
                tokens.push(before);
            }
            lastIndex = regexp.lastIndex;
            tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
        }
        const rest = text.slice(lastIndex);
        if (rest.length > 0) {
            tokens.push(rest);
        }
        return tokens;
    }
  escapeRegExpChars(text: string) {
      return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }

    render(){
        const { allowCreate, disabled, disableItems, car, minimal, ...flags } = this.state;
        const initialContent = this.state.hasInitialContent ? (
          <MenuItem disabled={true} text={`${this.state.rowData.length} items loaded.`} /> ) : (
                    undefined);
        return (
            <div
            className="ag-theme-balham"
            style={{
              height: '500px',
              width: '600px'
            }}
          >
           <CarSelect
                    itemRenderer = {this.itemRenderer}
                    itemPredicate = {this.filterCar}
                    //{...filmSelectProps}
                    //{...flags}
                    //createNewItemFromQuery={maybeCreateNewItemFromQuery}
                    //createNewItemRenderer={maybeCreateNewItemRenderer}
                    //disabled={disabled}
                    //itemDisabled={this.isItemDisabled}
                    //itemsEqual={areFilmsEqual}
                    // we may customize the default filmSelectProps.items by
                    // adding newly created items to the list, so pass our own
                    items={this.state.items}
                    initialContent={initialContent}
                    noResults={<MenuItem disabled={true} text="No results." />}
                    onItemSelect={this.handleValueChange}
                    popoverProps={{ minimal }}
                >
                    <Button
                        icon="film"
                        rightIcon="caret-down"
                        text={car ? `${car.make} (${car.model})` : "(No selection)"}
                        disabled={disabled}
                    />
            </CarSelect>
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}>
            </AgGridReact>
          </div>
        );
    }
    
}

export default CarDetails