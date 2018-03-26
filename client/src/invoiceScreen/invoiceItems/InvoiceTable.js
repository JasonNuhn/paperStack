import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

export default class InvoiceItemsTable extends Component {
  // constructor(props) {
  //   state = {
  //     data: this.billableItems
  //   };
  // }

  itemNameValidator = (value, row) => {
    const response = {
      isValid: true,
      notification: { type: "success", msg: "", title: "" }
    };
    if (!value) {
      response.isValid = false;
      response.notification.type = "error";
      response.notification.msg = "Please enter an item name";
      response.notification.title = "No Item Name";
    } else if (value.length < 3) {
      response.isValid = false;
      response.notification.type = "error";
      response.notification.msg = "Items must be at least three characters";
      response.notification.title = "Invalid Item Length";
    }
    return response;
  };

  quantityValidator = (value, row) => {
    const response = {
      isValid: true,
      notification: { type: "success", msg: "", title: "" }
    };
    const nan = isNaN(parseInt(value, 10));
    if (!value) {
      response.isValid = false;
      response.notification.type = "error";
      response.notification.msg = "Please enter a quantity";
      response.notification.title = "No Quantity Given";
    } else if (nan) {
      response.isValid = false;
      response.notification.type = "error";
      response.notification.msg = "Please use numbers only";
      response.notification.title = "Invalid Quantity Type";
    }
    return response;
  };

  rateValidator = (value, row) => {
    const response = {
      isValid: true,
      notification: { type: "success", msg: "", title: "" }
    };
    const nan = isNaN(parseFloat(value));
    if (!value) {
      response.isValid = false;
      response.notification.type = "error";
      response.notification.msg = "Please enter a price";
      response.notification.title = "No Quantity Given";
    } else if (nan) {
      response.isValid = false;
      response.notification.type = "error";
      response.notification.msg = "Please use numbers only";
      response.notification.title = "Invalid Rate Type";
    }
    return response;
  };

  render() {
    const billableItems = [
      {
        id: 1,
        item: "Primer - Gallon",
        qty: 1,
        rate: 2199,
        amount: 2199
      },
      {
        id: 2,
        item: "Gravity Grey Paint - Gallon",
        qty: 3,
        rate: 2499,
        amount: 7497
      },
      {
        id: 3,
        item: "Misc. Supplies",
        qty: 1,
        rate: 4532,
        amount: 4532
      },
      {
        id: 4,
        item: "Labor",
        qty: 5,
        rate: 7000,
        amount: 35000
      }
    ];

    const selectRowProp = {
      mode: "checkbox"
    };

    const cellEditProp = {
      mode: "click"
    };

    const options = {
      insertText: "Add Line Item",
      deleteText: "Delete Line Item",
      noDataText: "No billable items"
    };

    function amountFormatter(cell, row) {
      return `$ ${(cell/(100)).toFixed(2)}`;
    }

    function rateFormatter(cell, row) {
      return `$ ${(cell/(100)).toFixed(2)}`;
    }

    // function calculateAmount(cell, row) {
    //   return 
    // }

    return (
      <div style={{ width: "90%", margin: "auto" }}>
        <link
          rel="stylesheet"
          href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"
        />
        <BootstrapTable
          data={billableItems}
          striped
          hover
          condensed
          options={options}
          version="4"
          deleteRow={true}
          insertRow={true}
          selectRow={selectRowProp}
          cellEdit={cellEditProp}
        >
          <TableHeaderColumn dataField="id" isKey width="10">
            #
          </TableHeaderColumn>

          <TableHeaderColumn
            dataField="item"
            width="200"
            editable={{ validator: this.itemNameValidator }}
          >
            Item
          </TableHeaderColumn>

          <TableHeaderColumn
            dataField="qty"
            width="30"
            editable={{ validator: this.quantityValidator }}
          >
            Quantity
          </TableHeaderColumn>

          <TableHeaderColumn
            dataField="rate"
            dataFormat={rateFormatter}
            width="30"
            editable={{ validator: this.rateValidator }}
          >
            Rate
          </TableHeaderColumn>

          <TableHeaderColumn
            dataField="amount"
            dataFormat={amountFormatter}
            width="30"
          >
            Amount
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
