import React from 'react';
import { render } from 'react-dom';

// Import React Table
import 'react-table/react-table.css';
import Table1 from './Table1';
import Table2 from './Table2';
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
        {/* <Table1 />
        <Table2 /> */}
        <TreeTableComponent />
      </div>
    );
  }
}

export default AllTables;
