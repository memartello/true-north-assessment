import React, {useState, useEffect} from 'react';
import PubSub from 'pubsub-js';
import {Slide, Alert} from "@mui/material";

export const AlertEvent = "Alert";
export const AlertTypes = {
    success: "succes",
    info: "info",
    warning: "warning",
    danger: "danger"
}

export const EventAlert = React.forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false)
    const [alert, setAlert] = useState({});
    useEffect( () => {
        PubSub.subscribe(AlertEvent,(e, data) => {
            setAlert(data);
            setVisible(true);
        })
    },[])
    useEffect( () => {
        if(visible){
          setTimeout(()=>{
            setVisible(false)
          },3000)
        }
    },[visible])
    return(
      <Slide direction="down" ref={ref.current} in={visible} >
        <Alert  severity={alert.type} color={alert.type} style={{position:"absolute", width:"300px"}}>{alert.message}</Alert>
      </Slide>
    )
})