import React from "react";
import Card from "../components/card";
import OnePlaceRow from "../components/onePlaceRow";

const Home = () => {
  return (
    <div style={styles.container}>
      
      <OnePlaceRow />
      <OnePlaceRow />
      <OnePlaceRow />
      <OnePlaceRow />
      <OnePlaceRow />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
  },
};

export default Home;