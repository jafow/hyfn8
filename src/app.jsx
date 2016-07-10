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


const App = (props) => (
  <div>
    <Table
      width={500}
      maxHeight={5000}
      rowsCount={8}
      rowHeight={100}
      headerHeight={100}
      {...props}
      >
    <Column
      header={<Cell>{props.header}</Cell>}
      cell={<Cell>{props.data}</Cell>}
      width={100}
    />
    </Table>
  </div>
)

render(
  <App
    header={'name'}
    data={'metric234'}
  />,
  document.getElementById('app')
  )
