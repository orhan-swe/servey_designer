
import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./../Utils";
import _ from "lodash";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

// pull in the HOC
import treeTableHOC from "react-table/lib/hoc/treeTable";

import faker from 'faker';
import { testDataRedo } from './service';
import QuestionTable from "./QuestionTable";

class CateogryTable extends React.Component {
  constructor() {
    super();
    this.editable = false;
    this.state = {
      // data: makeData()
      data: testDataRedo()
    };
    this.renderEditable = this.renderEditable.bind(this);
  }
  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  render() {
    const { data } = this.state;
    // now use the new TreeTable component
    return (
      <div style={{ padding: '100px' }}>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Category",
              accessor: d => d.name + " (" + d.numberQuestions + ")",
              id: "name",
              Cell: this.editable ? this.renderEditable: null,
            }
          ]}
          minRows={0}
          showPagination={false}
          SubComponent={row => {
            return (
              <QuestionTable
                data={row.original.questions}
                editable={this.editable}
                />
            );
          }
          } />
          <Logo />
      </div>
    );
  }
}
// data={row.original.answerOptions}

export default CateogryTable;
