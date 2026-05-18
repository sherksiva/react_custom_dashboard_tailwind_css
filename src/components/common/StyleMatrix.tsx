import React from "react";

const StyleMatrix: React.FC = () => {
  // Color palette for the style matrix
  const colorPalette = [
    { name: "Brand", color: "#3B82F6", hex: "#3B82F6" },
    { name: "Success", color: "#10B981", hex: "#10B981" },
    { name: "Warning", color: "#F59E0B", hex: "#F59E0B" },
    { name: "Error", color: "#EF4444", hex: "#EF4444" },
    { name: "Info", color: "#06B6D4", hex: "#06B6D4" },
    { name: "Purple", color: "#8B5CF6", hex: "#8B5CF6" },
  ];

  // Typography styles
  const typographyStyles = [
    { size: "H1", class: "text-3xl", weight: "Bold" },
    { size: "H2", class: "text-2xl", weight: "Semibold" },
    { size: "Body", class: "text-base", weight: "Regular" },
    { size: "Small", class: "text-sm", weight: "Medium" },
  ];

  // Spacing scale
  const spacingScale = [
    { name: "2xs", value: "4px" },
    { name: "xs", value: "8px" },
    { name: "sm", value: "12px" },
    { name: "md", value: "16px" },
    { name: "lg", value: "24px" },
    { name: "xl", value: "32px" },
  ];

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-5 dark:border-gray-800">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
          Style Matrix
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Design system overview
        </p>
      </div>

      {/* Content */}
      <div className="space-y-6 p-6">
        {/* Color Palette Section */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">
            Color Palette
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {colorPalette.map((color) => (
              <div key={color.name} className="text-center">
                <div
                  className="mb-2 h-12 w-full rounded-lg border border-gray-200 dark:border-gray-700 transition-transform hover:scale-105"
                  style={{ backgroundColor: color.color }}
                  title={color.name}
                />
                <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  {color.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {color.hex}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Typography Section */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">
            Typography
          </h4>
          <div className="space-y-2">
            {typographyStyles.map((style) => (
              <div
                key={style.size}
                className="flex items-center justify-between rounded-lg bg-gray-50 p-3 dark:bg-white/[0.02]"
              >
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {style.size}
                  </p>
                  <p className={`${style.class} text-gray-900 dark:text-white`}>
                    Sample Text
                  </p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {style.weight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Spacing Scale Section */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">
            Spacing Scale
          </h4>
          <div className="space-y-3">
            {spacingScale.map((space) => (
              <div key={space.name} className="flex items-center gap-3">
                <div className="w-16">
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    {space.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {space.value}
                  </p>
                </div>
                <div
                  className="h-2 rounded-full bg-brand-500"
                  style={{ width: space.value }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleMatrix;
