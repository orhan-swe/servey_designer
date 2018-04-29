import React from 'react';
import { render } from 'react-dom';

// Import React Table
import 'react-table/react-table.css';
import Table1 from './Table1';
import Table2 from './Table2';
import CategoryTable from './Category/CategoryTable';
import TreeTableComponent from './TreeTable/TreeTableComponent';

class AllTables extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div >
        <h3 style={{ "padding-left": "100px",  "padding-top": "30px"  }} > Lytics survey designer </h3>
        {/* <Table1 />
        <Table2 /> */}
        {/* <TreeTableComponent />/> */}
        <CategoryTable />
      </div>
    );
  }
}

export default AllTables;
