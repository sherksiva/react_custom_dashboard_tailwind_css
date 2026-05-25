import React from "react";

interface PopupButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "success"; // Button variant
  size?: "sm" | "md"; // Button size
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const PopupButton: React.FC<PopupButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  type = "button",
}) => {
  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-4 py-2.5 text-sm",
  };

  // Variant classes
  const variantClasses = {
    primary:
      "bg-brand-500 text-white hover:bg-brand-600 disabled:bg-brand-300 disabled:text-white",
    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 disabled:opacity-50",
    danger:
      "bg-error-500 text-white hover:bg-error-600 disabled:bg-error-300 disabled:text-white",
    success:
      "bg-success-500 text-white hover:bg-success-600 disabled:bg-success-300 disabled:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-lg transition font-medium ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${
        disabled ? "cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};
