import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import db from "../../../utils/firebase";
import styled from "styled-components";

function AddChannelDialog({ size }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = (e) => {
    const createChannelTextField = document.getElementById("channel_name");
    const newChannelName = createChannelTextField.value;
    if (newChannelName && newChannelName.trim() !== "") {
      db.collection("rooms").add({
        name: newChannelName,
      });
    }

    handleClose();
  };

  const CustomAddIcon = styled(AddIcon)`
    transform: scale(${size || 1.0});
  `;

  return (
    <Container>
      <CustomAddIcon onClick={handleClickOpen} />
      <CustomDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Channel</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a channel please enter the name below, we will use our hax
            to create a channel for you 😎
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="channel_name"
            label="Channel Name"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreate} color="primary">
            Create
          </Button>
        </DialogActions>
      </CustomDialog>
    </Container>
  );
}

export default AddChannelDialog;

const Container = styled.div`
  cursor: pointer;
`;

const CustomDialog = styled(Dialog)``;
