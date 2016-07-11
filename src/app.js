import React, { Component } from 'react'
import { render } from 'react-dom'
import { Table, Column, Cell } from 'fixed-data-table'

const ads = {
  "ads": [
    {
      "id": 1,
      "remote_id": "123",
      "name": "123",
      "status": "ACTIVE",
    },
    {
      "id": 2,
      "remote_id": "456",
      "name": "456",
      "status": "ACTIVE",
    },
    {
      "id": 3,
      "remote_id": "789",
      "name": "789",
      "status": "ACTIVE",
    },
    {
      "id": 4,
      "remote_id": "901",
      "name": "901",
      "status": "ACTIVE",
    },
  ]
}


const metrics = {
 "column_names": [
      "impressions",
      "reach",
      "frequency",
      "cpm",
      "spend",
      "ctr",
      "cost_per_inline_link_click",
      "actions:goal",
      "actions:link_click",
      "cost_per_action_type:cost_per_goal",
      "actions:offsite_conversion"
    ],
 "rows": [
      {
        "remote_id": "123",
        "impressions": "123",
        "reach": 123,
        "frequency": 1.0413449389302,
        "cpm": 12.30131445905,
        "spend": 182.49,
        "ctr": 0.87630603303,
        "cost_per_inline_link_click": 3.0415,
        "actions:goal": 3,
        "actions:link_click": 60,
        "cost_per_action_type:cost_per_goal": 60.83,
        "actions:offsite_conversion": 123
      },
      {
        "remote_id": "456",
        "impressions": "123",
        "reach": 123,
        "frequency": 1.0413449389302,
        "cpm": 12.30131445905,
        "spend": 182.49,
        "ctr": 0.87630603303,
        "cost_per_inline_link_click": 3.0415,
        "actions:goal": 3,
        "actions:link_click": 60,
        "cost_per_action_type:cost_per_goal": 60.83,
        "actions:offsite_conversion": 456
      },
      {
        "remote_id": "789",
        "impressions": "123",
        "reach": 123,
        "frequency": 1.0413449389302,
        "cpm": 12.30131445905,
        "spend": 182.49,
        "ctr": 0.87630603303,
        "cost_per_inline_link_click": 3.0415,
        "actions:goal": 3,
        "actions:link_click": 60,
        "cost_per_action_type:cost_per_goal": 60.83,
        "actions:offsite_conversion": 789
      },
      {
        "remote_id": "901",
        "impressions": "123",
        "reach": 123,
        "frequency": 1.0413449389302,
        "cpm": 12.30131445905,
        "spend": 182.49,
        "ctr": 0.87630603303,
        "cost_per_inline_link_click": 3.0415,
        "actions:goal": 3,
        "actions:link_click": 60,
        "cost_per_action_type:cost_per_goal": 60.83,
        "actions:offsite_conversion": 901
      }
    ]

}

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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      remoteIds: ads.ads,
      columnNames: metrics.column_names,
      rowsData: metrics.rows
    }
    this.cellWidth = 100
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
