import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

const WaitingRoom = ({ joinChatRoom }) => {
  const [username, setUsername] = useState(null);
  const [chatRoom, setChatRoom] = useState(null);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        joinChatRoom(username, chatRoom);
      }}
    >
      <Row className="px-5 py-5">
        <Col sm="12">
          <Form.Group>
            <Form.Control
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Control
              placeholder="Chat Room"
              onChange={(e) => setChatRoom(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col sm="12">
          <hr />
          <Button variant="success" type="submit">
            Join Chat Room
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default WaitingRoom;
