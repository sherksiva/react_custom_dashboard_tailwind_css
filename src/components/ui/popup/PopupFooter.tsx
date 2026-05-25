import React from "react";

interface PopupFooterProps {
  children: React.ReactNode;
  className?: string;
  hasBorder?: boolean; // Add border top
  layout?: "horizontal" | "vertical"; // Button layout
}

export const PopupFooter: React.FC<PopupFooterProps> = ({
  children,
  className = "",
  hasBorder = true,
  layout = "horizontal",
}) => {
  const layoutClasses = {
    horizontal: "flex items-center gap-3 justify-end flex-wrap",
    vertical: "flex flex-col gap-2",
  };

  return (
    <div
      className={`px-4 py-4 sm:px-6 sm:py-5 ${
        hasBorder
          ? "border-t border-gray-200 dark:border-gray-800"
          : ""
      } ${layoutClasses[layout]} ${className}`}
    >
      {children}
    </div>
  );
};
