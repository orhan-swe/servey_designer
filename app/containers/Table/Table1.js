import React from 'react';
import { render } from 'react-dom';
import ReactTable from 'react-table';
import { makeData, Logo, Tips } from './Utils';

// Import React Table
import 'react-table/react-table.css';

class Table1 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
    this.renderEditable = this.renderEditable.bind(this);
  }
  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: '#fafafa' }}
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
    return (
      <div style={{padding: '50px'}}>
        <ReactTable
          data={data}
          columns={[
            {
              Header: 'First Name',
              accessor: 'firstName',
              Cell: this.renderEditable
            },
            {
              Header: 'Last Name',
              accessor: 'lastName',
              Cell: this.renderEditable
            },
            {
              Header: 'Full Name',
              id: 'full',
              accessor: d =>
                <div
                  dangerouslySetInnerHTML={{
                    __html: d.firstName + ' ' + d.lastName
                  }}
                />
            }
          ]}
          defaultPageSize={10}
          className='-striped -highlight'
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

export default Table1;
