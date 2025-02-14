// "use client";
// import { Pirata_One } from "next/font/google";
// import { useState } from "react";

// const pirataOne = Pirata_One({ weight: "400", subsets: ["latin"] });

// const ChatMessage = ({ message, sender, profileImage }) => {
//   const [prompt, setPrompt] = useState("");
//   const [output, setOutput] = useState("");

//   const handleGenerate = async () => {
//     try {
//       const response = await fetch("/api/generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ body: prompt }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setOutput(data.output);
//       } else {
//         console.error("Error:", data.error);
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

//   return (
//     <div
//       className={`flex items-center ${
//         sender === "ai" ? "justify-start" : "justify-end"
//       } mb-4`}
//     >
//       {/* Profile Image (Only for AI) */}
//       {sender === "ai" && profileImage && (
//         <img
//           src={profileImage}
//           alt="AI Avatar"
//           className="w-60 h-60 mr-3"
//         />
//       )}

//       {/* Chat Message Bubble */}
//       <div className="bg-glass relative w-80 h-full p-5">
//         <p className="text-black text-xl">{message}</p>
//       </div>

//       {/* No Profile Image for User */}
//       <div className="relative flex items-center w-full rounded overflow-hidden mt-5">
//         <textarea
//           className="peer w-full min-h-12 outline-none bg-glass text-xl text-black pl-4 pr-12 py-2 resize-none"
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Say Hello to Burn Bunny, or you will be roasted! 🔥"
//           rows="1"
//           onInput={(e) => {
//             e.target.style.height = "auto";
//             e.target.style.height = e.target.scrollHeight + "px";
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ChatMessage;

// // test
// const ChatMessage = ({ message, sender, profileImage }) => {
//   return (
//     <div
//       className={`flex items-center ${
//         sender === "ai" ? "justify-start" : "justify-end"
//       } mb-4`}
//     >
//       {/* AI Profile Image */}
//       {sender === "ai" && (
//         <img src={profileImage} alt="AI Avatar" className="w-80 h-90 mr-3" />
//       )}

//       {/* Chat Message Bubble */}
//       <div
//         className={`bg-glass relative max-w-lg p-4 rounded-lg shadow-md ${
//           sender === "ai" ? "text-black" : "bg-blue-500 text-white"
//         }`}
//       >
//         <p className="text-xl">{message}</p>
//       </div>
//     </div>
//   );
// };

// export default ChatMessage;

// test 2
// const ChatMessage = ({ message, sender, profileImage }) => {
//   return (
//     <div className={`flex items-center ${sender === "ai" ? "justify-start" : "justify-end"} mb-4`}>
//       {sender === "ai" && profileImage && (
//         <img src={profileImage} alt="AI Avatar" className="w-12 h-12 mr-3" />
//       )}

//       <div className={`p-3 rounded-lg ${sender === "ai" ? "bg-red-300 text-black" : "bg-blue-300 text-black"}`}>
//         <p>{message}</p>
//       </div>
//     </div>
//   );
// };

// export default ChatMessage;

// test 3 animation
"use client";
import React, { useState, useEffect } from "react";

const ChatMessage = ({ message, sender, profileImage }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (sender === "ai" && currentIndex < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + message[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, message, sender]);

  return (
    <div
      className={`flex items-center ${
        sender === "ai" ? "justify-start" : "justify-end"
      } mb-4 animate-fade-in-up`}
    >
      {/* AI Profile Image */}
      {sender === "ai" && (
        <img src={profileImage} alt="AI Avatar" className="w-80 h-90 mr-3" />
      )}

      {/* Chat Message Bubble */}
      <div
        className={`bg-glass relative max-w-lg p-4 rounded-lg shadow-md ${
          sender === "ai" ? "text-black" : "bg-blue-500 text-white"
        }`}
      >
        <p className="text-xl">
          {sender === "ai" ? displayedText : message}
          {sender === "ai" && (
            <span
              className={`inline-block w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm shadow-lg ${
                currentIndex < message.length
                  ? "animate-[pulse_1s_ease-in-out_infinite]"
                  : "hidden"
              }`}
              style={{
                verticalAlign: "middle",
                marginLeft: "2px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
