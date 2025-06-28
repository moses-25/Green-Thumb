import React from "react";

const backgroundUrl =
  "./public/image.jpg"; // Adjust the path as necessary
const backgroundStyle = {
  backgroundImage: `url(${backgroundUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const HomePage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "rgba(34, 49, 63, 0.7)",
          padding: "3rem 2.5rem",
          borderRadius: "1.5rem",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          color: "#fff",
          maxWidth: "500px",
          textAlign: "center",
          backdropFilter: "blur(4px)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Welcome to <span style={{ color: "#7ed957" }}>Green Thumb 🌱</span>
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "2rem",
            lineHeight: "1.6",
          }}
        >
          Your personal plant management app. Track your plants, set reminders, and
          grow your garden with ease. Start your journey to becoming a plant expert
          today!
        </p>
      </div>
    </div>
  );
};

export default HomePage;

