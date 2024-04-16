import { Col, Row } from "react-bootstrap";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";
import { useEffect } from "react";

const ChatRoom = ({ messages, sendMessage, leaveChatRoom }) => {
  useEffect(() => {
    setTimeout(() => {
      const messageContainer = document.querySelector(
        "div[style='height: 40vh; overflow-y: auto;']"
      );
      messageContainer.scrollTop =
        messageContainer.scrollHeight - messageContainer.clientHeight;
    }, 10);
  }, [messages]);
  return (
    <div>
      <Row className="px-5 my-5">
        <Col sm={10}>
          <h2>Chat Room</h2>
        </Col>
        <Col sm={2}>
          <button className="btn btn-danger" onClick={leaveChatRoom}>
            Leave Chat Room
          </button>
        </Col>
      </Row>
      <Row className="px-5 my-5">
        <Col sm={12}>
          <MessageContainer messages={messages} />
        </Col>
        <Col sm={12}>
          <SendMessageForm sendMessage={sendMessage} />
        </Col>
      </Row>
    </div>
  );
};

export default ChatRoom;
