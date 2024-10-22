import React from "react";

function OpeningPage() {
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src="/path/to/logo.png" alt="Logo" style={styles.logo} />
        <h1 style={styles.title}>Welcome to My Blog</h1>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  logoContainer: {
    textAlign: "center",
  },
  logo: {
    width: "150px",
    height: "150px",
  },
  title: {
    fontSize: "2rem",
    marginTop: "20px",
  },
};

export default OpeningPage;
