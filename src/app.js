import React, { Component } from 'react'
import { render } from 'react-dom'
import MyTable from './MyTable'

class App extends Component {
  constructor() {
    super()
    this.state = {
      remoteIds: [],
      columnNames: [],
      rowsData:[]
    }
    this.cellWidth = 150
  }

  componentDidMount() {
    // do request for data from /ads and /ads_metrics route
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

render(
  <App
    header={'Ad IDs'}
  />,
  document.getElementById('app')
  )
