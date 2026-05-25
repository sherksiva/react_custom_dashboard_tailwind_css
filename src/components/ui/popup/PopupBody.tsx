import React from "react";

interface PopupBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const PopupBody: React.FC<PopupBodyProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`px-4 py-4 sm:px-6 sm:py-5 ${className}`}>
      {children}
    </div>
  );
};
