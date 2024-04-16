import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import WaitingRoom from "./components/WaitingRoom";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useEffect, useState } from "react";
import ChatRoom from "./components/ChatRoom";

function App() {
  const [connection, setConnection] = useState(null);
  const [messages, setMessages] = useState([]);

  const joinChatRoom = async (username, chatRoom) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("http://localhost:5163/chat")
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("JoinSpecificChatRoom", (username, msg) => {
        console.log(`${msg}`);
        setMessages((messages) => [...messages, { username, msg }]);
      });

      connection.on("ReceiveSpecificMessage", (username, msg) => {
        setMessages((messages) => [...messages, { username, msg }]);
      });

      await connection.start();

      connection.invoke("JoinSpecificChatRoom", { username, chatRoom });

      setConnection(connection);
    } catch (e) {
      console.log(e);
    }
  };

  const sendMessage = async (message) => {
    try {
      await connection.invoke("SendMessage", message);
    } catch (e) {
      console.log(e);
    }
  };

  const leaveChatRoom = async () => {
    try {
      await connection.stop();
      setConnection(null);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Container>
          <Row className="px-5 my-5">
            <Col sm="12">
              <h1 className="font-weight-light">
                Welcome to the SignalR Chat App
              </h1>
            </Col>
          </Row>
          {!connection ? (
            <WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
          ) : (
            <ChatRoom
              messages={messages}
              sendMessage={sendMessage}
              leaveChatRoom={leaveChatRoom}
            ></ChatRoom>
          )}
        </Container>
      </main>
    </div>
  );
}

export default App;
