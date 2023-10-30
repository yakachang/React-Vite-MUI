import { Button, Grid } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RawSpanTable from './RawSpanTable'
import SearchBar from './SearchBar'

const DepartmentContent = () => {
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
          <Button variant="contained" startIcon={<AddIcon />} disableElevation>
            Create
          </Button>
        </Grid>
        <Grid item xs={12}>
          <RawSpanTable />
        </Grid>
      </Grid>
    </>
  )
}

export default DepartmentContent
