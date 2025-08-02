import React from "react"

export default function Loader() {
  return (
    <div className="my-8">
      <div className="relative grid grid-cols-3 w-30 h-40 m-auto gap-1.5 [perspective-800px]">
        <div className="digit" style={{ animationDelay: "0.1s" }}>0</div>
        <div className="digit" style={{ animationDelay: "0.3s" }}>1</div>
        <div className="digit" style={{ animationDelay: "0.5s" }}>0</div>
        <div className="digit" style={{ animationDelay: "0.7s" }}>1</div>
        <div className="digit" style={{ animationDelay: "0.9s" }}>1</div>
        <div className="digit" style={{ animationDelay: "1.1s" }}>0</div>
        <div className="digit" style={{ animationDelay: "1.3s" }}>0</div>
        <div className="digit" style={{ animationDelay: "1.5s" }}>1</div>
        <div className="glow" />
      </div>
    </div>
  );
}
