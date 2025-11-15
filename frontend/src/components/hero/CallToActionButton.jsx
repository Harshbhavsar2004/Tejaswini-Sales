import * as React from "react";

export function CallToActionButton({ text, className }) {
  return (
    <button
      className={`gap-2.5 self-stretch px-9 py-3 rounded-[109px] shadow-[4px_38px_62px_rgba(0,0,0,0.5)] max-md:px-5 ${className}`}
    >
      {text}
    </button>
  );
}
