import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './CarDetails.css';
import { ColumnDef } from '../../Models/ColumnDef';
import { RowData } from '../../Models/RowData';

interface IProps  {};
interface IState  {
  Name: string,
  columnDefs: ColumnDef[],
  rowData: RowData[]
};

class CarDetails extends Component<IProps, IState>{

    constructor(props: any) {
        super(props);
        this.state = {
          Name: "Chris",
          columnDefs: [{
            headerName: "Make", field: "make"
          }, {
            headerName: "Model", field: "model"
          }, {
            headerName: "Price", field: "price"
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