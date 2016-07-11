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
    this.headerHeight=100
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    // do initial fetch for Ads IDs and render fixed column
    var that = this
    $.get('/ads', function (data) {
     var d = JSON.parse(data)
     console.log('data is ', d)
     that.setState({ remoteIds: data.ads })
    })
  }

  fetchData() {
    $.get('/ads_metrics', function (data) {
        console.log('fetching data is ', data)
        let columnNames = data.column_names
        let rowsData = data.rows
        this.setState({ columnNames: columnNames, rowsData: rowsData })
    })
  }
  componentWillMount() {
    // do request for data from /ads_metrics route
    $.get('/ads_metrics', function (data) {
      console.log('data is ', data)
      let columnNames = data.column_names
      let rowsData = data.rows
      this.setState({ columnNames: columnNames, rowsData: rowsData })
    })
  }

  render() {
    // destructer state into an object that can be spread over to reduce # of
    // props to be apssed down explicitly
    // var { data } = this.state
    console.log('stat is ', this.state)
    return (
     <div>
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
      <button onClick={this.fetchData}>Click</button>
      </div>
    )
  }
}

render(
  <App/>,
  document.getElementById('app')
  )
