import React, { Fragment } from "react";
import { Typography , DialogActions, DialogContent, Button, Checkbox} from '@mui/material';
import { BootstrapDialog, BootstrapDialogTitle } from "../../commons/BoostrapDialog";
import { Card, TaskInfo } from "../../commons/StyledComponents" ;

const TRIM_DESCRIPTION = 150;

const TaskText = ({title, description, checked}) => {
    return(
        <TaskInfo>
            <span>{`${title} - ${description.length > TRIM_DESCRIPTION ? description.substring(0,TRIM_DESCRIPTION)+"{...}":  description}`} </span>
            <Checkbox disabled checked={checked} style={{float: 'right'}} />
        </TaskInfo>
    )
}

const TaskDetails = ({description, title, completed, onConfirm}) =>{
    const [open, setOpen] = React.useState(false);
    const handleClickOpen  = () => setOpen(true);
    const handleClose  = () => setOpen(false);
    const handleConfirm = () => {onConfirm();setOpen(false);}
    return(
        <Fragment>
            <Card onClick={handleClickOpen}>
                <TaskText title={title} description={description} checked={completed} />
            </Card>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}>
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                {`${title}`}
            </BootstrapDialogTitle>
            <DialogContent dividers style={{width:'350px'}}>
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