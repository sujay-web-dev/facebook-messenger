import React, { useState, useEffect } from "react";
import { FormControl, Input,IconButton } from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState("");
  const [messages, setmessages] = useState([]);

  const [username, setusername] = useState("");

  useEffect(() => {
    // run once when the app component loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setmessages(snapshot.docs.map((doc) => ({id:doc.id ,message:doc.data()})));
      });
  }, []);

  useEffect(() => {
    setusername(prompt("Please Enter your name"));
  }, []);

  const sendmsg = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <img className="imgsize" src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="LOGO" />
    <h5>Welcome {username} !!</h5>
      
      <form className="app__form">
        <FormControl className="app__formcontrol">
          <Input className="app__input" placeholder="Enter a Message..." value={input} onChange={(event) => setInput(event.target.value)}/>

        <IconButton className="app__iconbtn" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendmsg}>
          <SendIcon color="primary" />
        </IconButton>

        </FormControl>
      </form>

      <FlipMove>
      {messages.map(({id, message}) => (
        <Message key={id} username={username} message={message} />
      ))}
      </FlipMove>
    </div>
  );
}

export default App;
