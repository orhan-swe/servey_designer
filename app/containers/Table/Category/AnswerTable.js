
import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./../Utils";
import _ from "lodash";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";


class AnswerTable extends React.Component {
  constructor() {
    super();
    this.state = {
      // data: makeData()
      data: []
    };
    this.renderEditable = this.renderEditable.bind(this);
  }
  componentWillMount() {
    this.setState({data: this.props.data});
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
      <div style={{ padding: '20px' }}>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Answer options",
              accessor: "answer",
              id: "answer",
              Cell: this.props.editable ? this.renderEditable: null
            },
            {
              Header: "Follow up question",
              accessor: "followUpQuestion",
              id: "followUpQuestion",
              Cell: this.props.editable ? this.renderEditable: null
            }
          ]}
          minRows={0}
          showPagination={false}
        />
        <br />
      </div>
    );
  }
}

export default AnswerTable;
