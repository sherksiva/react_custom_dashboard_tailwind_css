import React from "react";

interface PopupHeaderProps {
  children: React.ReactNode;
  className?: string;
  hasBorder?: boolean; // Add border bottom
}

export const PopupHeader: React.FC<PopupHeaderProps> = ({
  children,
  className = "",
  hasBorder = true,
}) => {
  return (
    <div
      className={`px-4 py-4 sm:px-6 sm:py-5 ${
        hasBorder
          ? "border-b border-gray-200 dark:border-gray-800"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
