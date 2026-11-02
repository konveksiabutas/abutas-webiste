import React from "react";

export function AbutasStudioLogo() {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "4px 8px",
        userSelect: "none",
      }}
    >
      {/* Abutas Monogram Mark */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, borderRadius: "6px" }}
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="6" fill="#171B1C" />
        <path
          d="M16 7L8 23H12.5L14.2 19.5H17.8L19.5 23H24L16 7ZM15 16L16 13.5L17 16H15Z"
          fill="#F1EDE5"
        />
        <circle cx="23" cy="9" r="3" fill="#E56B37" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
        <span
          style={{
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
            fontWeight: 800,
            fontSize: "13px",
            letterSpacing: "0.08em",
            color: "currentColor",
          }}
        >
          ABUTAS
        </span>
        <span
          style={{
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
            fontWeight: 600,
            fontSize: "10px",
            letterSpacing: "0.04em",
            color: "#E56B37",
            textTransform: "uppercase",
          }}
        >
          Content Studio
        </span>
      </div>
    </div>
  );
}

export function AbutasStudioIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="6" fill="#171B1C" />
      <path
        d="M16 7L8 23H12.5L14.2 19.5H17.8L19.5 23H24L16 7ZM15 16L16 13.5L17 16H15Z"
        fill="#F1EDE5"
      />
      <circle cx="23" cy="9" r="3" fill="#E56B37" />
    </svg>
  );
}
