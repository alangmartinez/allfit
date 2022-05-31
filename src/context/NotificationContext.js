import { createContext, useState } from "react";
import CartNotification from "../notifications/CartNotification";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [severity, setSeverity] = useState('');
    const [message, setMessage] =useState('');
    const [state, setState] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'right',
    });

    const { open, vertical, horizontal } = state;

    const setNotification = (sev, msg) => {
        setMessage(msg);
        setSeverity(sev);
    }

    const handleClose = () => {
        setState({...state, open: false});
    }
    const handleOpen = () => {
        setState({...state, open: true});
    }


    return(
        <NotificationContext.Provider value={{ severity, message, setNotification, handleClose, handleOpen, open, vertical, horizontal }}>
            <CartNotification message={message} severity={severity} {...state} handleClose={handleClose}></CartNotification>
            { children }
        </NotificationContext.Provider>
    )
}

export default NotificationContext; 