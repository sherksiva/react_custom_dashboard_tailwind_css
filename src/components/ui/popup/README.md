# Popup Component Documentation

A comprehensive popup/modal component system for your React Tailwind CSS dashboard.

## Components

### 1. **Popup** (Main Component)
The main popup container component that manages the modal behavior.

#### Props:
- `isOpen: boolean` - Controls popup visibility
- `onClose: () => void` - Callback when popup should close
- `children: React.ReactNode` - Popup content
- `size?: 'sm' | 'md' | 'lg' | 'xl'` - Popup width (default: 'md')
- `showCloseButton?: boolean` - Show/hide close button (default: true)
- `showBackdrop?: boolean` - Show/hide backdrop overlay (default: true)
- `closeOnBackdropClick?: boolean` - Close when clicking backdrop (default: true)
- `closeOnEsc?: boolean` - Close when pressing Escape key (default: true)
- `className?: string` - Additional CSS classes

#### Example:
```tsx
import { useState } from "react";
import { Popup } from "@/components/ui/popup";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Popup</button>
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Hello World!</p>
      </Popup>
    </>
  );
}
```

---

### 2. **PopupHeader**
Container for the popup's header section.

#### Props:
- `children: React.ReactNode` - Header content
- `hasBorder?: boolean` - Add bottom border (default: true)
- `className?: string` - Additional CSS classes

#### Example:
```tsx
<PopupHeader>
  <PopupTitle>Confirm Action</PopupTitle>
</PopupHeader>
```

---

### 3. **PopupBody**
Container for the popup's main content.

#### Props:
- `children: React.ReactNode` - Body content
- `className?: string` - Additional CSS classes

#### Example:
```tsx
<PopupBody>
  <p>This is the main content of the popup.</p>
</PopupBody>
```

---

### 4. **PopupFooter**
Container for the popup's footer section (typically buttons).

#### Props:
- `children: React.ReactNode` - Footer content (usually buttons)
- `hasBorder?: boolean` - Add top border (default: true)
- `layout?: 'horizontal' | 'vertical'` - Button layout (default: 'horizontal')
- `className?: string` - Additional CSS classes

#### Example:
```tsx
<PopupFooter>
  <PopupButton variant="secondary" onClick={onCancel}>
    Cancel
  </PopupButton>
  <PopupButton onClick={onConfirm}>
    Confirm
  </PopupButton>
</PopupFooter>
```

---

### 5. **PopupTitle**
Title component for popup headers.

#### Props:
- `children: React.ReactNode` - Title text
- `size?: 'sm' | 'md' | 'lg'` - Title size (default: 'md')
- `className?: string` - Additional CSS classes

#### Example:
```tsx
<PopupTitle size="lg">Delete Confirmation</PopupTitle>
```

---

### 6. **PopupDescription**
Description/subtitle component for additional context.

#### Props:
- `children: React.ReactNode` - Description text
- `className?: string` - Additional CSS classes

#### Example:
```tsx
<PopupDescription>
  Are you sure you want to delete this item?
</PopupDescription>
```

---

### 7. **PopupButton**
Button component for popup actions.

#### Props:
- `children: React.ReactNode` - Button text
- `variant?: 'primary' | 'secondary' | 'danger' | 'success'` - Button style (default: 'primary')
- `size?: 'sm' | 'md'` - Button size (default: 'md')
- `onClick?: () => void` - Click handler
- `disabled?: boolean` - Disable button (default: false)
- `type?: 'button' | 'submit' | 'reset'` - Button type (default: 'button')
- `className?: string` - Additional CSS classes

#### Example:
```tsx
<PopupButton variant="danger" onClick={handleDelete}>
  Delete
</PopupButton>
```

---

### 8. **PopupCloseButton**
Convenience component for close buttons.

#### Props:
- `onClick: () => void` - Click handler
- `className?: string` - Additional CSS classes

#### Example:
```tsx
<PopupCloseButton onClick={handleClose} />
```

---

## Usage Examples

### Basic Popup
```tsx
import { useState } from "react";
import { Popup, PopupHeader, PopupBody, PopupFooter, PopupTitle, PopupButton } from "@/components/ui/popup/exports";

function BasicPopupExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Basic Popup</button>
      
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PopupHeader>
          <PopupTitle>Welcome</PopupTitle>
        </PopupHeader>
        <PopupBody>
          <p>This is a basic popup with header, body, and footer.</p>
        </PopupBody>
        <PopupFooter>
          <PopupButton variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </PopupButton>
          <PopupButton onClick={() => setIsOpen(false)}>
            Confirm
          </PopupButton>
        </PopupFooter>
      </Popup>
    </>
  );
}
```

### Confirmation Dialog
```tsx
<Popup isOpen={showConfirm} onClose={() => setShowConfirm(false)}>
  <PopupHeader>
    <PopupTitle size="lg">Confirm Action</PopupTitle>
    <PopupDescription>
      Are you sure you want to proceed? This action cannot be undone.
    </PopupDescription>
  </PopupHeader>
  <PopupBody>
    <div className="bg-warning-50 dark:bg-warning-500/15 border border-warning-200 dark:border-warning-500/30 rounded-lg p-4">
      <p className="text-warning-600 dark:text-warning-400 text-sm">
        ⚠️ Warning: This will affect your account.
      </p>
    </div>
  </PopupBody>
  <PopupFooter>
    <PopupButton variant="secondary" onClick={() => setShowConfirm(false)}>
      Cancel
    </PopupButton>
    <PopupButton onClick={() => setShowConfirm(false)}>
      Confirm
    </PopupButton>
  </PopupFooter>
</Popup>
```

### Form Popup
```tsx
<Popup isOpen={showForm} onClose={() => setShowForm(false)} size="lg">
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
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg"
          placeholder="Enter your email"
        />
      </div>
    </form>
  </PopupBody>
  <PopupFooter>
    <PopupButton variant="secondary" onClick={() => setShowForm(false)}>
      Cancel
    </PopupButton>
    <PopupButton onClick={() => setShowForm(false)}>
      Save Changes
    </PopupButton>
  </PopupFooter>
</Popup>
```

### Danger Popup
```tsx
<Popup isOpen={showDelete} onClose={() => setShowDelete(false)} size="sm">
  <PopupHeader>
    <PopupTitle>Delete Item</PopupTitle>
  </PopupHeader>
  <PopupBody>
    <div className="bg-error-50 dark:bg-error-500/15 border border-error-200 dark:border-error-500/30 rounded-lg p-4">
      <p className="text-error-600 dark:text-error-400 text-sm">
        ⚠️ This action cannot be undone.
      </p>
    </div>
    <PopupDescription className="mt-4">
      Are you sure you want to delete this item?
    </PopupDescription>
  </PopupBody>
  <PopupFooter>
    <PopupButton variant="secondary" onClick={() => setShowDelete(false)}>
      Cancel
    </PopupButton>
    <PopupButton variant="danger" onClick={() => setShowDelete(false)}>
      Delete
    </PopupButton>
  </PopupFooter>
</Popup>
```

---

## Sizes

- `sm`: max-width 24rem (384px)
- `md`: max-width 28rem (448px) - default
- `lg`: max-width 32rem (512px)
- `xl`: max-width 36rem (576px)

---

## Button Variants

- `primary`: Brand color (blue)
- `secondary`: Gray color
- `danger`: Red color
- `success`: Green color

---

## Features

✅ Fully responsive design
✅ Dark mode support
✅ Keyboard accessibility (Escape to close)
✅ Backdrop click handling
✅ Multiple size options
✅ Composable structure
✅ Type-safe with TypeScript
✅ Tailwind CSS styling

---

## Demo

Check out `PopupDemo.tsx` for a complete demonstration of all popup variations and use cases.
