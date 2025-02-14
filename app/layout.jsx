import "../styles/globals.css";
import { Pirata_One } from "next/font/google";

const pirataOne = Pirata_One({
  weight: "400", // Available weight for Pirata One
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: 'Burn Bunny',
  description: 'just compete with burn bunny and you feel defeated.',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="pirataOne.className">
        <div className="layout">
          <div className="background"></div> {/* Background layer */}
          <div className="content">{children}</div>{" "}
          {/* Chat or other page content */}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

// // tried burn-o-meter
// "use client";
// import { useState } from "react";

// const RootLayout = ({ children }) => {
//   const [burnLevel, setBurnLevel] = useState(0);
//   const maxBurn = 100;

//   const getColors = (level) => {
//     const intensity = (level / maxBurn) * 100;
//     const hue1 = Math.max(0, 60 - level * 2); // From yellow to red
//     const hue2 = Math.max(0, 30 - level * 1.5); // Slightly redder

//     return {
//       color1: `hsl(${hue1}, ${60 + intensity * 0.4}%, ${
//         50 - intensity * 0.2
//       }%)`,
//       color2: `hsl(${hue2}, ${70 + intensity * 0.3}%, ${
//         45 - intensity * 0.25
//       }%)`,
//       meterColor: `hsl(${hue1}, ${80 + intensity * 0.2}%, ${
//         40 - intensity * 0.15
//       }%)`,
//     };
//   };

//   const incrementBurn = () => {
//     setBurnLevel((prev) => Math.min(prev + 5, maxBurn));
//   };

//   const { color1, color2, meterColor } = getColors(burnLevel);

//   // Calculate the height of the filled portion
//   const filledHeight = `${burnLevel}%`;

//   return (
//     <html lang="en">
//       <body>
//         <div className="main">
//           <div
//             className="fixed"
//             style={{
//               top: "15px",
//               right: "15px",
//               bottom: "15px",
//               width: "2.6%",
//             }}
//           >
//             <div className="relative h-full">
//               {/* Container with gradient background */}
//               <div
//                 style={{
//                   position: "absolute",
//                   width: "2.6%",
//                   height: filledHeight,
//                   bottom: 0,
//                   background: `linear-gradient(135deg, ${color1}, ${color2})`,
//                   transition: "height 0.5s ease",
//                 }}
//               />

//               {/* Separator line */}
//               <div
//                 style={{
//                   position: "absolute",
//                   width: "2.6%",
//                   height: "2px",
//                   backgroundColor: "#333",
//                   left: "-10%",
//                   top: `${100 - burnLevel}%`,
//                   transition: "top 0.5s ease",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//         <main className="app flex min-h-screen">
//           <div className="flex-1 p-4">
//             <button
//               onClick={incrementBurn}
//               className="px-4 py-2 bg-white rounded-md shadow-md"
//             >
//               Increase Burn: {burnLevel}%
//             </button>
//             {children}
//           </div>
//         </main>
//       </body>
//     </html>
//   );
// };

// export default RootLayout;
