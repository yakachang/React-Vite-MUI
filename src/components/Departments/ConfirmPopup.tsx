import {
  Dialog,
  DialogTitle,
  DialogContent,
  // DialogContentText,
  DialogActions,
  Button,
  Grid,
} from '@mui/material'

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  openConfirm: boolean
  setOpenConfirm: React.Dispatch<React.SetStateAction<boolean>>
  department: string
  setDepartment: React.Dispatch<React.SetStateAction<string>>
  peerDepartment: string
  setPeerDepartment: React.Dispatch<React.SetStateAction<string>>
}

const ConfirmPopup = (props: Props) => {
  const handleGoBack = () => {
    props.setOpenConfirm(false)
    props.setOpen(true)
  }

  const handleCreateSuccess = () => {
    props.setOpenConfirm(false)
    setTimeout(() => {
      props.setDepartment('')
      props.setPeerDepartment('')
    }, 500)
  }

  return (
    <Dialog open={props.openConfirm}>
      <DialogTitle>Confirm a new Relationship</DialogTitle>
      <DialogContent>
        {/* <DialogContentText>
          Subtitle
        </DialogContentText> */}
        <Grid container spacing={4}>
          <Grid
            item
            xs={4}
            style={{ display: 'flex', alignItems: 'center', justifyItems: 'start' }}
          >
            Department:
          </Grid>
          <Grid
            item
            xs={8}
            style={{ display: 'flex', alignItems: 'center', justifyItems: 'start' }}
          >
            {props.department}
          </Grid>
          <Grid
            item
            xs={4}
            style={{ display: 'flex', alignItems: 'center', justifyItems: 'start' }}
          >
            Peer Department:
          </Grid>
          <Grid
            item
            xs={8}
            style={{ display: 'flex', alignItems: 'center', justifyItems: 'start' }}
          >
            {props.peerDepartment}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleGoBack}>Back</Button>
        <Button onClick={handleCreateSuccess}>Confirm</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmPopup
