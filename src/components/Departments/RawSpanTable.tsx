import { Fragment } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { tableData } from '../../constants/rawSpanTableData'

export default function SpanningTable() {
  return (
    <Paper style={{ width: '100%' }}>
      <Table style={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <TableCell>Department ID</TableCell>
            <TableCell>Department Name</TableCell>
            <TableCell>Peer Department IDs</TableCell>
            <TableCell>Peer Department Names</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map(item => (
            <Fragment>
              <TableRow>
                <TableCell rowSpan={item.peer_dept_names.length + 1}>{item.dept_id}</TableCell>
                <TableCell rowSpan={item.peer_dept_names.length + 1}>{item.dept_name}</TableCell>
              </TableRow>
              {item.peer_depts.map(peer_dept => (
                <TableRow>
                  <TableCell>{peer_dept.id}</TableCell>
                  <TableCell>{peer_dept.name}</TableCell>
                </TableRow>
              ))}
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}
