import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./UTable2";
import _ from "lodash";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const columns = [
  {
    Header: "Category",
    accessor: "category"
  },
  {
    Header: "Question",
    accessor: "question"
    // accessor: d => d.question
  },
  {
    Header: "Options",
    accessor: "age",
    aggregate: vals => _.round(_.mean(vals)),
    Aggregated: row => {
      return (
        <span>
          {row.value} (avg)
            </span>
      );
    },
    filterMethod: (filter, row) =>
      filter.value === `${row[filter.id]} (avg)`
  },
  {
    Header: "Follow up question",
    accessor: "visits",
    aggregate: vals => _.sum(vals),
    filterable: false
  }
];

class Table2 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div style={{ padding: '50px' }}>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          // pivotBy={["category", "question"]}
          SubComponent={row => {
            return (
              <div style={{ padding: "20px" }}>
                <em>
                  You can put any component
                </em>
              </div>
            );
          }}
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

export default Table2;
