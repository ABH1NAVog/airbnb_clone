import React from "react";
import HeartButton from "./heartButton";

const Card = ({ title, location, price, rating, beds, image }) => {
  return (
    <div className="card-item" style={styles.card}>
      <div style={styles.imageWrapper}>
        <img src={image} alt={title} style={styles.image} />
        <HeartButton />
      </div>
      <div style={styles.content}>
        <p style={styles.title}>{title}</p>
        <p style={styles.location}>{location}</p>
        <div style={styles.infoRow}>
          <span style={styles.beds}>₹{price} • {beds} bed{beds > 1 ? "s" : ""}</span>
          <span style={styles.rating}>★ {rating}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "100%",
    minWidth: 0,
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
    borderRadius: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    transition: "box-shadow 0.2s, transform 0.2s",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "280px",
    display: "block",
    overflow: "hidden",
    borderRadius: "20px 20px 0 0",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  content: {
    padding: "16px 12px",
    textAlign: "left",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: 700,
    fontSize: "15px",
    margin: "0 0 4px 0",
    lineHeight: 1.3,
    color: "#222",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  location: {
    fontSize: "13px",
    color: "#666",
    margin: "0 0 8px 0",
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "13px",
  },
  beds: {
    color: "#222",
    fontWeight: 600,
  },
  rating: {
    color: "#666",
  },
};

export default Card;