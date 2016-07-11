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
    this.state = {
      remoteIds: ads.ads,
      columnNames: metrics.column_names,
      rowsData: metrics.rows
    }
    this.cellWidth = 100
  }

  render() {
    let columns = metrics.column_names.map((col, i) => (
      <Column
        header={<Cell>{col}</Cell>}
        key={i}
        columnKey={i}
        width={this.cellWidth}
        cell={<AdsData data={this.state.rowsData}  col={col} />}
      />
    ))


    return (
      <Table
        header={this.props.header}
        width={500}
        maxHeight={5000}
        rowsCount={this.state.remoteIds.length}
        rowHeight={100}
        headerHeight={100}
        >
      <Column
        header={<Cell>{"Ad IDs"}</Cell>}
        cell={<AdsIDs data={this.state.remoteIds} col={"Ad IDS"}/>}
        fixed={true}
        width={this.cellWidth}
        />

        { columns }
      </Table>
    )
  }
}

export default MyTable
