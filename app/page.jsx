// "use client";
// import { Pirata_One } from "next/font/google";
// import { useState } from "react";
// import ChatWindow from "../components/chatWindow";

// const pirataOne = Pirata_One({ weight: "400", subsets: ["latin"] });

// export default function HomePage() {
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
//     <div className={pirataOne.className}>
//       <h1 className="text-5xl">Welcome to Burn Bunny Roasting Arena 🔥</h1>
//       <p className="text-2xl">
//         This is a place where words burn hotter than flames!
//       </p>
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

//       {/* chat window */}
//       <ChatWindow output={output} />
//     </div>
//   );
// }

// // const generateText = async () => {
// //   try {
// //     const payload = { body: "Write a roast welcome message!" }; // ✅ Ensure correct data structure
// //     console.log("Sending payload:", payload); // Debugging

// //     const response = await fetch("/api/generate", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         "Accept": "application/json" // ✅ Ensure proper content type
// //       },
// //       body: JSON.stringify(payload),
// //     });

// //     if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

// //     const data = await response.json();
// //     console.log("Generated Response:", data);
// //   } catch (error) {
// //     console.error("Fetch Error:", error);
// //   }
// // };

// // test
"use client";
import { Pirata_One } from "next/font/google";
import { useState } from "react";
import ChatWindow from "../components/chatWindow";

const pirataOne = Pirata_One({ weight: "400", subsets: ["latin"] });

export default function HomePage() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]); // Store full chat history

  const handleGenerate = async () => {
    if (!prompt.trim()) return; // Prevent empty messages

    // Append user message to chat
    const newUserMessage = {
      sender: "user",
      message: prompt,
      profileImage: "",
    };
    setMessages((prev) => [...prev, newUserMessage]);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: prompt }),
      });

      const data = await response.json();
      if (response.ok) {
        var aiMessage = {
          sender: "ai",
          message: data.output,
          profileImage:
            (messages.length % 8) - 2 === 0
              ? "/2_bb_oh_competing.png" //2
              : (messages.length - 4) % 8 === 0
              ? "/3_bb_lost_na-removebg.png" // 3
              : (messages.length - 6) % 8 === 0
              ? "/2_bb_oh_competing.png" // 4
              : "/1_burn_bunny_welcome-removebg-preview.png", // 1
        };
        setMessages((prev) => [...prev, aiMessage]); // Append AI response
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }

    setPrompt(""); // Clear input for next message
  };

  return (
    <div className={pirataOne.className}>
      <h1 className="text-5xl bg-gradient-to-r from-red-700 via-orange-500 via-yellow-500 to-red-700 bg-clip-text text-transparent">
      🔥 🔥 Welcome to Burn Bunny Roasting Arena 🔥 🔥
      </h1>
      <p className="text-2xl text-black pl-20 ml-10">
      This is a place where words burn hotter than flames!
      </p>

      {/* Chat Window Component */}
      <ChatWindow messages={messages} />

      {/* User Input Field (Always at Bottom) */}
      <div className="relative flex flex-row items-center w-full rounded overflow-hidden mt-5">
        <textarea
          className="peer w-full min-h-28 outline-none bg-glass2 text-xl text-white pl-4 pr-12 py-2 resize-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Got the guts to face the flames? 🔥"
          rows="1"
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
          }}
        />
        <button
          className="absolute right-2 bottom-0.5 px-10 py-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-lg shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wide border-2 border-orange-400/20 hover:border-orange-400/40
 "
          onClick={handleGenerate}
        >
          Defend
        </button>
      </div>
    </div>
  );
}

// // test 2
// "use client";
// import { Pirata_One } from "next/font/google";
// import { useState } from "react";
// import ChatWindow from "../components/chatWindow";

// const pirataOne = Pirata_One({ weight: "400", subsets: ["latin"] });

// export default function HomePage() {
//   const [prompt, setPrompt] = useState("");
//   const [messages, setMessages] = useState([]); // Store full chat history

//   const handleGenerate = async () => {
//     if (!prompt.trim()) return; // Prevent empty messages

//     // Append user message to chat
//     const newUserMessage = { sender: "user", message: prompt, profileImage: "" };
//     setMessages((prev) => [...prev, newUserMessage]);

//     try {
//       const response = await fetch("/api/generate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ body: prompt }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         const aiMessage = { sender: "ai", message: data.output, profileImage: "/1_burn_bunny_welcome-removebg-preview.png" };
//         setMessages((prev) => [...prev, aiMessage]); // Append AI response
//       } else {
//         console.error("Error:", data.error);
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }

//     setPrompt(""); // Clear input for next message
//   };

//   return (
//     <div className={pirataOne.className}>
//       <h1 className="text-5xl">Welcome to Burn Bunny Roasting Arena 🔥</h1>
//       <p className="text-2xl">This is a place where words burn hotter than flames!</p>

//       {/* Chat Window */}
//       <ChatWindow messages={messages} />

//       {/* Input Area */}
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

//       <button
//         className="mt-3 px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//         onClick={handleGenerate}
//       >
//         Send Message
//       </button>
//     </div>
//   );
// }
