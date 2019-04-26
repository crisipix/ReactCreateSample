import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './CarDetails.css';
import { ColumnDef } from '../../Models/ColumnDef';
import { RowData } from '../../Models/RowData';
import {
  NavLink, Route, RouteComponentProps
} from "react-router-dom";

interface IProps  {
};
interface IState  {
  name: string,
  selectedModel : string,
  columnDefs: any[],
  rowData: any[]
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
          rowData: [{
            make: "Toyota", model: "Celica", price: 35000
          }, {
            make: "Ford", model: "Mondeo", price: 32000
          }, {
            make: "Porsche", model: "Boxter", price: 72000
          }]
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
              rowData: state.rowData.filter(r => r.model && r.model.toLowerCase() === model.toLowerCase())
            }));
          }
          
         // this.props.history.push('/details/celica');

      }
    
      componentWillUnmount() {
    
      }
    render(){
        return (
            <div
            className="ag-theme-balham"
            style={{
              height: '500px',
              width: '600px'
            }}
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}>
            </AgGridReact>
          </div>
        );
    }
    
}

export default CarDetails