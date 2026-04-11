import { useState } from "react";
import "./heartButton.css";
function HeartButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={`heart-shape ${liked ? "active" : ""}`}
      onClick={() => setLiked(!liked)}
    />
  );
}
export default HeartButton;