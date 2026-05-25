import React from "react";

interface PopupCloseButtonProps {
  onClick: () => void;
  className?: string;
}

export const PopupCloseButton: React.FC<PopupCloseButtonProps> = ({
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-lg transition font-medium px-4 py-2.5 text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 ${className}`}
    >
      Close
    </button>
  );
};
