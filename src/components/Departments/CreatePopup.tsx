import {
  Dialog,
  DialogTitle,
  DialogContent,
  // DialogContentText,
  TextField,
  DialogActions,
  Button,
  Grid,
} from '@mui/material'

type Props = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setOpenConfirm: React.Dispatch<React.SetStateAction<boolean>>
  department: string
  setDepartment: React.Dispatch<React.SetStateAction<string>>
  peerDepartment: string
  setPeerDepartment: React.Dispatch<React.SetStateAction<string>>
}

const CreatePopup = (props: Props) => {

  const handleClose = () => {
    props.setOpen(false)
    setTimeout(() => {
      props.setDepartment('')
      props.setPeerDepartment('')
    }, 500)
  }

  const handleCrete = () => {
    props.setOpen(false)
    props.setOpenConfirm(true)
  }

  const isValid: boolean = (props.department.length !== 0) && (props.peerDepartment.length !== 0)

  return (
    <Dialog open={props.open}>
      <DialogTitle>Create a Relationship</DialogTitle>
      <DialogContent>
        {/* <DialogContentText>
          Subtitle
        </DialogContentText> */}
        <Grid container spacing={4}>
          <Grid item xs={4} style={{ display: 'flex', alignItems: 'center', justifyItems: 'start' }}>
            Department:
          </Grid>
          <Grid item xs={8} style={{ display: 'flex', alignItems: 'center', justifyItems: 'start' }}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              fullWidth
              variant="standard"
              value={props.department}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setDepartment(event.target.value)
              }}
            />
          </Grid>
          <Grid item xs={4} style={{ display: 'flex', alignItems: 'center', justifyItems: 'start' }}>
            Peer Department:
          </Grid>
          <Grid item xs={8} style={{ display: 'flex', alignItems: 'center', justifyItems: 'start' }}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              fullWidth
              variant="standard"
              value={props.peerDepartment}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setPeerDepartment(event.target.value)
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={handleCrete}
          disabled={!isValid}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CreatePopup
