import { Button, Grid } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RawSpanTable from './RawSpanTable'
import SearchBar from './SearchBar'
import CreatePopup from './CreatePopup'
import { useState } from 'react'
import ConfirmPopup from './ConfirmPopup'

const DepartmentContent = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [openConfirm, setOpenConfirm] = useState<boolean>(false)
  const [department, setDepartment] = useState<string>('')
  const [peerDepartment, setPeerDepartment] = useState<string>('')

  const handleClick = () => {
    setOpen(true)
  }

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={8} style={{ display: 'flex', alignItems: 'center', justifyItems: 'start' }}>
          <SearchBar />
        </Grid>
        <Grid
          item
          xs={4}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}
        >
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleClick}
            disableElevation
          >
            Create
          </Button>
          <CreatePopup
            open={open}
            setOpen={setOpen}
            setOpenConfirm={setOpenConfirm}
            department={department}
            setDepartment={setDepartment}
            peerDepartment={peerDepartment}
            setPeerDepartment={setPeerDepartment}
          />
          <ConfirmPopup
            setOpen={setOpen}
            openConfirm={openConfirm}
            setOpenConfirm={setOpenConfirm}
            setDepartment={setDepartment}
            department={department}
            peerDepartment={peerDepartment}
            setPeerDepartment={setPeerDepartment}
          />
        </Grid>
        <Grid item xs={12}>
          <RawSpanTable />
        </Grid>
      </Grid>
    </>
  )
}

export default DepartmentContent
