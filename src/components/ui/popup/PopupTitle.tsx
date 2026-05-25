import React from "react";

interface PopupTitleProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg"; // Title size
}

export const PopupTitle: React.FC<PopupTitleProps> = ({
  children,
  className = "",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "text-lg font-semibold",
    md: "text-xl font-semibold",
    lg: "text-2xl font-bold",
  };

  return (
    <h2
      className={`text-gray-900 dark:text-white ${sizeClasses[size]} ${className}`}
    >
      {children}
    </h2>
  );
};
