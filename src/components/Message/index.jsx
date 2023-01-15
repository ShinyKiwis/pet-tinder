import { ImNotification } from "react-icons/im";
import {MdClose} from "react-icons/md"

import "./Message.css";

const Message = ({ message, onClose}) => {
  return (
    <div className="message_container">
      <MdClose onClick={onClose} className="close_icon" />
      <ImNotification size="2em" color="var(--primary)" />
      <span>{message}</span>
    </div>
  );
};

export default Message;
