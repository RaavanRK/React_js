import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Home1() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Box>
      <Button onClick={handleOpen} sx={{ color: "white" }}>
        join us
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            JOIN US
          </Typography>
          <Grid>
            <TextField
              fullWidth
              label="name"
              id="fullWidth"
              margin="dense"
            />
            <TextField
              fullWidth
              label="email"
              id="fullWidth"
              margin="dense"
            />
            <TextField
              fullWidth
              label="fullWidth"
              id="fullWidth"
              margin="dense"
              type="number"
            />
            <TextField
              fullWidth
              id="date"
              label="Birthday"
              type="date"
              margin="dense"
              sx={{}}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Grid
              container
              md={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid item md={6}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Label" />
                  <FormControlLabel control={<Checkbox />} label="Label" />
                  <FormControlLabel control={<Checkbox />} label="Label" />
                </FormGroup>
              </Grid>
              <Grid item md={6}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Label" />
                  <FormControlLabel control={<Checkbox />} label="Label" />
                  <FormControlLabel control={<Checkbox />} label="Label" />
                </FormGroup>
              </Grid>
            </Grid>
          </Grid>
          <TextField
              fullWidth
              label="Comment"
              id="fullWidth"
              margin="dense"
            />
          <Grid
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button variant="outlined">SUBMIT</Button>
              </Grid>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Box>
    
    </>
  );
}

export default Home1;
