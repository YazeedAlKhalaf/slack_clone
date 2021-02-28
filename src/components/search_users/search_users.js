import React from "react";
import styled from "styled-components";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Hits, connectSearchBox } from "react-instantsearch-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useParams } from "react-router-dom";
import db from "../../utils/firebase";
import firebase from "firebase";

function SearchUsers({ openCloseComponent, existingMembersIdsList }) {
  const { workspaceId } = useParams();

  const addUserToWorkspace = (userIdToAdd) => {
    console.log("User ID to add: ", userIdToAdd);
    if (userIdToAdd) {
      db.collection("workspaces")
        .doc(workspaceId)
        .update({
          membersIds: firebase.firestore.FieldValue.arrayUnion(userIdToAdd),
        })
        .then(() => {});
    }
  };

  const searchClient = algoliasearch(
    "YN69P3T38G",
    "9bea995aa8a4b3068aeb37b1e574acc9"
  );
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SearchBox = ({ currentRefinement, refine }) => (
    <Search>
      <input
        type="search"
        placeholder="Search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
    </Search>
  );

  const CustomSearchBox = connectSearchBox(SearchBox);

  return (
    <Container>
      <div onClick={handleClickOpen("paper")}>{openCloseComponent}</div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To invite a user, click on invite button beside his name and he will
            be in your workspace!
          </DialogContentText>
          <InstantSearch searchClient={searchClient} indexName="users">
            <CustomSearchBox />
            <Hits
              hitComponent={({ hit }) => {
                console.log("Existing members: ", existingMembersIdsList);
                return (
                  <UserSearchResult>
                    <UserSearchResultInfo>
                      <img style={{ padding: "15px" }} src={hit.photoUrl} />
                      <h3>{hit.name}</h3>
                    </UserSearchResultInfo>
                    {!existingMembersIdsList.includes(hit.id) ? (
                      <Button
                        color="primary"
                        onClick={(e) => {
                          e.preventDefault();
                          addUserToWorkspace(hit.id);
                        }}
                      >
                        Invite
                      </Button>
                    ) : (
                      <Button color="primary">Added</Button>
                    )}
                  </UserSearchResult>
                );
              }}
            />
          </InstantSearch>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default SearchUsers;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserSearchResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.25s ease;

  :hover {
    background: #d2d2d2;
  }
`;

const UserSearchResultInfo = styled.div`
  display: flex;
  align-items: center;
  color: black;

  img {
    border-radius: 50%;
  }
`;

const Search = styled.div`
  box-shadow: 1px 1px 10px 2px rgb(0 0 0 / 40%);
  width: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;

  input {
    border: none;
    width: 100%;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 15px;
  }

  input::placeholder {
    font-size: 15px;
  }

  input:focus {
    outline: none;
  }
`;
