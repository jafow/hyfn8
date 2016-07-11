import React, { Component } from 'react'
import { Table, Column, Cell } from 'fixed-data-table'


const AdsIDs = ({ rowIndex,  data, ...props }) => (
    <Cell class={status ? 'active' : 'inactive'} {...props}>
      {data[rowIndex].remote_id}
    </Cell>
    )

const AdsData = ({ rowIndex, col, data, ...props }) => (
    <Cell {...props}>
      {data[rowIndex][col]}
    </Cell>
    )



class MyTable extends Component {
  constructor(props) {
    super(props)
    this.cellWidth = 150
    this.rowHeight = 100
  }

  render() {
    let columns = this.props.columnNames.map((col, i) => (
      <Column
        header={<Cell>{col}</Cell>}
        key={i}
        width={this.cellWidth}
        cell={<AdsData data={this.props.rowsData} col={col} />}
      />
    ))

    return (
      <Table
        header={this.props.header}
        width={500}
        maxHeight={5000}
        rowsCount={this.props.remoteIds.length}
        rowHeight={100}
        headerHeight={100}>
      <Column
        header={<Cell>{"Ad IDs"}</Cell>}
        cell={<AdsIDs data={this.props.remoteIds} col={"Ad IDS"}/>}
        fixed={true}
        width={this.cellWidth}
       />
        { columns }
      </Table>
    )
  }
}

MyTable.propTypes = {
  remoteIds: React.PropTypes.array,
  columnNames: React.PropTypes.array,
  rowsData: React.PropTypes.array
}

export default MyTable
