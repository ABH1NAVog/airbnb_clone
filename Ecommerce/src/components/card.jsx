import React from "react";
import HeartButton from "./heartButton";

const Card = ({ title, location, price, rating, beds, image}) => {
  return (
    <div style={styles.card}>
        <div style={styles.imageWrapper}>
            <img src={image} alt={title} style={styles.image} />
            <HeartButton />
        </div>
        <div style={styles.content}>
            <p style={styles.title}>{title} at {location}</p>
            <p style={styles.description}>₹ {price} with {beds} beds | ★{rating} </p>
            {/* <button style={styles.button}>{buttonText}</button> */}
        </div>
    </div>
  );
};

const styles = {
  card: {
    width: "150px",
    minWidth: "170px",
    flexShrink: 0,
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
    // borderRadius: "12px", 
    // boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    // background: "#fff",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    display: "block",
  },
  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  content: {
    textAlign: "left",
  },
  title: {
    fontWeight: "semi-bold",
    fontSize: "15px",
    margin: "0 0 8px",
    marginBottom: '4px',
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginTop: "0px",
    marginBottom: "12px",
  },
  button: {
    padding: "10px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Card;