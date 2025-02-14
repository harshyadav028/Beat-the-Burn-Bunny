// import { useState, useEffect } from "react";
// import ChatMessage from "./chatMessage";

// const ChatWindow = ({ output }) => {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     if (output) {
//       setMessages([
//         {
//           sender: "ai",
//           message: output,
//           profileImage: "/1_burn_bunny_welcome-removebg-preview.png",
//         },
//       ]);
//     }
//   }, [output]);

//   return (
//     <div className="flex flex-col p-4 space-y-4">
//       {messages.map((msg, index) => (
//         <ChatMessage key={index} {...msg} />
//       ))}
//     </div>
//   );
// };

// export default ChatWindow;

// // test
import ChatMessage from "./chatMessage";

const ChatWindow = ({ messages }) => {
  return (
    <div className="flex flex-col p-4 space-y-4">
      {messages.map((msg, index) => (
        <ChatMessage key={index} {...msg} />
      ))}
    </div>
  );
};

export default ChatWindow;

// test 2
// import ChatMessage from "./chatMessage";

// const ChatWindow = ({ messages }) => {
//   return (
//     <div className="flex flex-col p-4 space-y-4">
//       {messages.map((msg, index) => (
//         <ChatMessage key={index} {...msg} />
//       ))}
//     </div>
//   );
// };

// export default ChatWindow;
