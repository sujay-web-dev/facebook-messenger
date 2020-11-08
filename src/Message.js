import { CardContent,Typography,Card } from "@material-ui/core";
import './Message.css';
import React, { forwardRef } from 'react';



const Message = forwardRef( ({message, username}, ref) => {

    const isuser = username === message.username;

  return (
    <div ref={ref} className={`message ${isuser && 'msg__user'}`}>
      <Card className={isuser ? "msg__usercard" : "msg__guestcard"}>
        <CardContent>
          <Typography color="white" variant="h6" component="h6">
          {!isuser && `${message.username || 'Unknown User'} : `} {message.message}
          </Typography>
        </CardContent>
      </Card>
   
    </div>
  );
});

export default Message;
