import React from "react";

interface PopupDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const PopupDescription: React.FC<PopupDescriptionProps> = ({
  children,
  className = "",
}) => {
  return (
    <p
      className={`text-sm text-gray-500 dark:text-gray-400 mt-2 ${className}`}
    >
      {children}
    </p>
  );
};
