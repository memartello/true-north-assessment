import React, { Fragment } from "react";
import { Typography , DialogActions, DialogContent, Button, Checkbox} from '@mui/material';
import { BootstrapDialog, BootstrapDialogTitle } from "../../commons/BoostrapDialog";
import { Card, TaskInfo } from "../../commons/StyledComponents" ;

const TaskDetails = ({description, title, completed, onConfirm}) =>{
    const [open, setOpen] = React.useState(false);
    const handleClickOpen  = () => setOpen(true);
    const handleClose  = () => setOpen(false);
    const handleConfirm = () => {onConfirm();setOpen(false);}
    return(
        <Fragment>
            <Card completed={completed} onClick={handleClickOpen}>
                <TaskInfo >
                    {`${title} - ${description}`} 
                    <Checkbox disabled checked={completed} style={{float: 'right'}} />
                </TaskInfo>
            </Card>
            <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                {`${title}`}
            </BootstrapDialogTitle>
            <DialogContent dividers style={{width:'500px'}}>
                <Typography gutterBottom>
                {`${description}`}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleConfirm}>
                Complete
                </Button>
            </DialogActions>
            </BootstrapDialog>
        </Fragment>
    )
}

export default TaskDetails;