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
    this.tableName = 'HYFN Ads Metrics'
    this.minWidth = 500
    this.cellWidth = 150
    this.rowHeight=100
    this.headerHeight=100
  }

  componentWillMount() {
    // do initial fetch for Ads IDs and render fixed column
    $.getJSON('/ads', function (data) {
     this.setState({ remoteIds: data.ads })
    })
  }

  componentDidMount() {
    // do request for data from /ads and /ads_metrics route
    $.getJSON('/ads_metrics', function (data) {
      let columnNames = data.column_names
      let rowsData = data.rows
      this.setState({ columnNames: columnNames, rowsData: rowsData })
    })
  }

  render() {
    // var { data } = this.state
    return (
      <MyTable
        header={this.tableName}
        minWidth={this.minWidth}
        width={600}
        maxHeight={5000}
        rowsCount={this.state.remoteIds.length}
        rowHeight={this.rowHeight}
        headerHeight={this.headerHeight}
        remoteIds={this.state.remoteIds}
        columnNames={this.state.columnNames}
        rowsData={this.state.rowsData}
      />
    )
  }
}

render(
  <App/>,
  document.getElementById('app')
  )
