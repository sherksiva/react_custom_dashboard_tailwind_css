import { useState } from "react";
import { Popup } from "./index";
import { PopupHeader } from "./PopupHeader";
import { PopupBody } from "./PopupBody";
import { PopupFooter } from "./PopupFooter";
import { PopupTitle } from "./PopupTitle";
import { PopupDescription } from "./PopupDescription";
import { PopupButton } from "./PopupButton";
import { PopupCloseButton } from "./PopupCloseButton";

export const PopupDemo = () => {
  // State for different popup types
  const [showBasicPopup, setShowBasicPopup] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [showDangerPopup, setShowDangerPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showLargePopup, setShowLargePopup] = useState(false);
  const [showSmallPopup, setShowSmallPopup] = useState(false);

  return (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Popup Components Demo
      </h2>

      {/* Basic Popup */}
      <button
        onClick={() => setShowBasicPopup(true)}
        className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600"
      >
        Basic Popup
      </button>

      {/* Confirm Popup */}
      <button
        onClick={() => setShowConfirmPopup(true)}
        className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600"
      >
        Confirm Popup
      </button>

      {/* Form Popup */}
      <button
        onClick={() => setShowFormPopup(true)}
        className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600"
      >
        Form Popup
      </button>

      {/* Danger Popup */}
      <button
        onClick={() => setShowDangerPopup(true)}
        className="px-4 py-2 bg-error-500 text-white rounded-lg hover:bg-error-600"
      >
        Danger Popup
      </button>

      {/* Success Popup */}
      <button
        onClick={() => setShowSuccessPopup(true)}
        className="px-4 py-2 bg-success-500 text-white rounded-lg hover:bg-success-600"
      >
        Success Popup
      </button>

      {/* Large Popup */}
      <button
        onClick={() => setShowLargePopup(true)}
        className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600"
      >
        Large Popup
      </button>

      {/* Small Popup */}
      <button
        onClick={() => setShowSmallPopup(true)}
        className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600"
      >
        Small Popup
      </button>

      {/* Basic Popup */}
      <Popup isOpen={showBasicPopup} onClose={() => setShowBasicPopup(false)}>
        <PopupHeader>
          <PopupTitle>Basic Popup</PopupTitle>
        </PopupHeader>
        <PopupBody>
          <PopupDescription>
            This is a basic popup component with header, body, and footer.
          </PopupDescription>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            You can customize it with different sizes, styles, and content.
          </p>
        </PopupBody>
        <PopupFooter>
          <PopupButton
            variant="secondary"
            onClick={() => setShowBasicPopup(false)}
          >
            Cancel
          </PopupButton>
          <PopupButton onClick={() => setShowBasicPopup(false)}>
            Confirm
          </PopupButton>
        </PopupFooter>
      </Popup>

      {/* Confirm Popup */}
      <Popup isOpen={showConfirmPopup} onClose={() => setShowConfirmPopup(false)}>
        <PopupHeader>
          <PopupTitle size="lg">Confirm Action</PopupTitle>
          <PopupDescription>
            Are you sure you want to proceed with this action?
          </PopupDescription>
        </PopupHeader>
        <PopupBody>
          <div className="bg-warning-50 dark:bg-warning-500/15 border border-warning-200 dark:border-warning-500/30 rounded-lg p-4">
            <p className="text-warning-600 dark:text-warning-400 text-sm">
              This action cannot be undone.
            </p>
          </div>
        </PopupBody>
        <PopupFooter>
          <PopupButton
            variant="secondary"
            onClick={() => setShowConfirmPopup(false)}
          >
            Cancel
          </PopupButton>
          <PopupButton onClick={() => setShowConfirmPopup(false)}>
            Confirm
          </PopupButton>
        </PopupFooter>
      </Popup>

      {/* Form Popup */}
      <Popup isOpen={showFormPopup} onClose={() => setShowFormPopup(false)}>
        <PopupHeader>
          <PopupTitle>Edit Profile</PopupTitle>
        </PopupHeader>
        <PopupBody>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </form>
        </PopupBody>
        <PopupFooter>
          <PopupButton
            variant="secondary"
            onClick={() => setShowFormPopup(false)}
          >
            Cancel
          </PopupButton>
          <PopupButton onClick={() => setShowFormPopup(false)}>
            Save Changes
          </PopupButton>
        </PopupFooter>
      </Popup>

      {/* Danger Popup */}
      <Popup isOpen={showDangerPopup} onClose={() => setShowDangerPopup(false)}>
        <PopupHeader>
          <PopupTitle size="lg">Delete Item</PopupTitle>
        </PopupHeader>
        <PopupBody>
          <div className="bg-error-50 dark:bg-error-500/15 border border-error-200 dark:border-error-500/30 rounded-lg p-4 mb-4">
            <p className="text-error-600 dark:text-error-400 text-sm">
              ⚠️ Warning: This action will permanently delete this item.
            </p>
          </div>
          <PopupDescription>
            This cannot be undone. Please make sure you want to proceed.
          </PopupDescription>
        </PopupBody>
        <PopupFooter>
          <PopupButton
            variant="secondary"
            onClick={() => setShowDangerPopup(false)}
          >
            Cancel
          </PopupButton>
          <PopupButton
            variant="danger"
            onClick={() => setShowDangerPopup(false)}
          >
            Delete
          </PopupButton>
        </PopupFooter>
      </Popup>

      {/* Success Popup */}
      <Popup isOpen={showSuccessPopup} onClose={() => setShowSuccessPopup(false)}>
        <PopupHeader>
          <PopupTitle size="lg">Success!</PopupTitle>
        </PopupHeader>
        <PopupBody>
          <div className="bg-success-50 dark:bg-success-500/15 border border-success-200 dark:border-success-500/30 rounded-lg p-4">
            <p className="text-success-600 dark:text-success-400 text-sm">
              ✓ Your changes have been saved successfully!
            </p>
          </div>
          <PopupDescription>
            You can now see the updates reflected in your profile.
          </PopupDescription>
        </PopupBody>
        <PopupFooter>
          <PopupButton
            variant="success"
            onClick={() => setShowSuccessPopup(false)}
          >
            Done
          </PopupButton>
        </PopupFooter>
      </Popup>

      {/* Large Popup */}
      <Popup
        isOpen={showLargePopup}
        onClose={() => setShowLargePopup(false)}
        size="xl"
      >
        <PopupHeader>
          <PopupTitle size="lg">Large Popup</PopupTitle>
        </PopupHeader>
        <PopupBody>
          <div className="space-y-4">
            <PopupDescription>
              This is a large popup (max-width: 28rem) with multiple sections
              and content.
            </PopupDescription>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="font-semibold text-gray-900 dark:text-white">
                  Section 1
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Content here
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="font-semibold text-gray-900 dark:text-white">
                  Section 2
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Content here
                </p>
              </div>
            </div>
          </div>
        </PopupBody>
        <PopupFooter>
          <PopupButton
            variant="secondary"
            onClick={() => setShowLargePopup(false)}
          >
            Cancel
          </PopupButton>
          <PopupButton onClick={() => setShowLargePopup(false)}>
            Continue
          </PopupButton>
        </PopupFooter>
      </Popup>

      {/* Small Popup */}
      <Popup
        isOpen={showSmallPopup}
        onClose={() => setShowSmallPopup(false)}
        size="sm"
      >
        <PopupHeader>
          <PopupTitle size="sm">Small Popup</PopupTitle>
        </PopupHeader>
        <PopupBody>
          <PopupDescription>
            This is a small popup (max-width: 24rem) with minimal content.
          </PopupDescription>
        </PopupBody>
        <PopupFooter>
          <PopupButton
            size="sm"
            variant="secondary"
            onClick={() => setShowSmallPopup(false)}
          >
            Close
          </PopupButton>
        </PopupFooter>
      </Popup>
    </div>
  );
};
