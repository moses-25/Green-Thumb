import React from "react";

import videoUrl from "/Homepage.mp4";

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 0,
          width: "1850px",
          height: "730px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          objectFit: "cover",
        }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0, 
          width: "100vw",
          height: "100vh",
          zIndex: 1,
          objectFit: "cover",
          borderRadius: "20px",
          pointerEvents: "none",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      />

      {/* Centered Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
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
            Welcome to <span style={{ color: "#7ed957" }}>Green Thumb🌱</span>
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
    </div>
  );
};

export default HomePage;

