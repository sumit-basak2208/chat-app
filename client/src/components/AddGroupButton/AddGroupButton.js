import "./AddGroupButton.css"
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import React from "react";
import Button from '@mui/material/Button';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });  


const AddGroupButton = () => {

    const [open, setOpen] = useState(false);
  const [scroll, setScroll] = React.useState('paper');
    return(
        <div>
            <button onClick={(e) =>{setOpen(true)}}className="add-button button" title="Add Group"><i className="fa fa-plus"></i></button>
            <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="xs"
        onClose={(e)=>{setOpen(false)}}
        scroll={scroll}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Create Group"}</DialogTitle>
        <DialogContent>
            <form className="add-group-form">
                <div className="access-group">
                <label className="access"><input type="radio" name="access" id="public" value="public"></input>Public</label>
                <label className="access"><input type="radio" name="access" id="private" value="private"></input>Private</label>
                </div>
                <div className="search-bar">
                    <input type="search" placeholder="Search User"></input>
                </div>
            </form>
                <h5 className="url-title">URL: </h5>
                <div className="url">https://URL</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e) => {setOpen(false)}}>Cancel</Button>
          <Button onClick={(e) => {setOpen(false)}}>Create Group</Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default AddGroupButton;