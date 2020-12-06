import { useState } from "react";

export default function Chat() {
  const [chatTitle, setChatTitle] = useState("");
  const [receivedMsg, setReceivedMsg] = useState([]);
  const [sentMsg, setSentMsg] = useState([]);
  return (
    <>
      <div class="back"></div>
      <div class="chat-header"></div>
      <div class="chat-title">Title</div>
      <div class="received-message"></div>
      <div class="received-msg-timestamp"></div>
      <div class="sent-message"></div>
      <div class="sent-msg-timestamp"></div>
    </>
  );
}
