import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import db from "../../../utils/firebase";
import styled from "styled-components";
import { userKey } from "../../../utils/constants";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

function AddWorkspaceDialog({ size }) {
  const [open, setOpen] = React.useState(false);
  const user = JSON.parse(localStorage.getItem(userKey));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = (e) => {
    const createWorkspaceTextField = document.getElementById("workspace_name");
    const newWorkspaceName = createWorkspaceTextField.value;
    if (newWorkspaceName && newWorkspaceName.trim() !== "") {
      const docRefWorkspaceNew = db.collection("workspaces").doc();

      docRefWorkspaceNew
        .set({
          id: docRefWorkspaceNew.id,
          name: newWorkspaceName.trim(),
          membersIds: [user.id],
        })
        .then(() => {});
    }

    handleClose();
  };

  return (
    <Container>
      <NewMessage onClick={handleClickOpen}>
        <AddCircleOutlineIcon />
      </NewMessage>
      <CustomDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Workspace</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a workspace please enter the name below, we will use our
            hax to create a workspace for you 😎
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="workspace_name"
            label="Workspace Name"
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

export default AddWorkspaceDialog;

const Container = styled.div`
  cursor: pointer;
`;

const CustomDialog = styled(Dialog)``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: ${({ theme }) => theme.sidebarBgColor};
  fill: ${({ theme }) => theme.sidebarBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.25s ease;

  :hover {
    transform: scale(0.8);
  }
`;
