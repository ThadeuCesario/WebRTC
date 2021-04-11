import React, { useContext } from 'react';
import {Button} from '@material-ui/core'; 

import {SocketContext} from '../../SocketContext';

const Notification = props => {
    const {answerCall, call, callAccepted} = useContext(SocketContext);

    return (
        <>
            {call.isReceivedCall && !callAccepted && (
                <div style={{ display: 'flex', justifyContent: 'center'}}>

                </div>
            )}
        </>
    )
}

export default Notification;