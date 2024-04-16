const MessageContainer = ({ messages }) => {
  return (
    <div style={{ height: "40vh", overflowY: "auto" }}>
      <table>
        <tbody>
          {messages.map((message, index) => (
            <tr key={index}>
              <td>
                {message.msg} - {message.username}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MessageContainer;
