import { useState } from "react";
import "./heartButton.css";

function HeartButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={`heart-btn ${liked ? "liked" : ""}`}
      onClick={() => setLiked(!liked)}
      aria-label="wishlist"
    >
      <svg
        viewBox="0 0 24 24"
        className="heart-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  );
}

export default HeartButton;

// import { useState } from "react";

// const HeartButton = () => {
//   const [liked, setLiked] = useState(false);

//   return (
//     <button
//       onClick={(e) => {
//         e.preventDefault();
//         setLiked(!liked);
//       }}
//       className="absolute top-3 right-3 z-10"
//     >
//       <svg
//         viewBox="0 0 24 24"
//         fill="currentColor"
//         xmlns="http://www.w3.org/2000/svg"
//         className={`h-6 w-6 drop-shadow-md transition-colors ${
//           liked
//             ? "fill-primary text-primary"
//             : "fill-black/30 text-primary-foreground"
//         }`}
//       >
//         <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//       </svg>
//     </button>
//   );
// };

// export default HeartButton;