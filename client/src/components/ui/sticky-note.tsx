import { ReactNode } from "react";

interface StickyNoteProps {
  children: ReactNode;
  className?: string;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

export function StickyNote({ 
  children, 
  className = "", 
  position = "top-right" 
}: StickyNoteProps) {
  const positionClasses = {
    "top-right": "-top-4 -right-4",
    "top-left": "-top-4 -left-4", 
    "bottom-right": "-bottom-4 -right-4",
    "bottom-left": "-bottom-4 -left-4"
  };

  return (
    <div className={`absolute ${positionClasses[position]} z-10 bg-yellow-300 p-3 rounded-lg shadow-md max-w-48 ${className}`}>
      <p className="text-xs font-medium text-gray-800 leading-tight">
        {children}
      </p>
    </div>
  );
}