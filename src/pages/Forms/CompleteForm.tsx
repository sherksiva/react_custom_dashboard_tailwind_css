import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Form from "../../components/form/Form";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import Select from "../../components/form/Select";
import MultiSelect from "../../components/form/MultiSelect";
import Checkbox from "../../components/form/input/Checkbox";
import Radio from "../../components/form/input/Radio";
import DatePicker from "../../components/form/date-picker";
import { EyeCloseIcon, EyeIcon } from "../../icons";

interface FormDataType {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  department: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
  dateOfBirth: string;
  agreeTerms: boolean;
  subscribenews: boolean;
  gender: string;
  skills: string[];
  message: string;
}

export default function CompleteForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    department: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    dateOfBirth: "",
    agreeTerms: false,
    subscribenews: false,
    gender: "",
    skills: [],
    message: "",
  });

  const departmentOptions = [
    { value: "marketing", label: "Marketing" },
    { value: "development", label: "Development" },
    { value: "design", label: "Design" },
    { value: "hr", label: "HR" },
  ];

  const countryOptions = [
    { value: "usa", label: "USA" },
    { value: "uk", label: "UK" },
    { value: "canada", label: "Canada" },
    { value: "india", label: "India" },
    { value: "australia", label: "Australia" },
  ];

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const skillOptions = [
    { value: "ui-design", text: "UI Design" },
    { value: "frontend", text: "Front-end Development" },
    { value: "backend", text: "Back-end Development" },
    { value: "product", text: "Product Management" },
    { value: "marketing", text: "Marketing" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string, fieldName: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleCheckboxChange = (fieldName: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: checked,
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      gender: value,
    }));
  };

  const handleDateChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      dateOfBirth: value,
    }));
  };

  const handleSkillsChange = (skills: string[]) => {
    setFormData((prev) => ({
      ...prev,
      skills,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Print form data to console
    console.log("=== COMPLETE FORM DATA ===");
    console.table(formData);
    console.log("=== FORM DATA JSON ===");
    console.log(JSON.stringify(formData, null, 2));
    
    // Print in alert
    alert(
      "Form Data:\n\n" +
      Object.entries(formData)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n") +
      "\n\nCheck console for more details!"
    );

    // Optional: Print window
    const printWindow = window.open("", "", "height=500,width=800");
    if (printWindow) {
      printWindow.document.write(
        "<html><head><title>Form Data</title></head><body>"
      );
      printWindow.document.write("<h2>Complete Form Submission Data</h2>");
      printWindow.document.write("<table border='1' cellpadding='10'>");
      printWindow.document.write("<tr><th>Field</th><th>Value</th></tr>");
      
      Object.entries(formData).forEach(([key, value]) => {
        printWindow.document.write(
          `<tr><td>${key}</td><td>${value}</td></tr>`
        );
      });
      
      printWindow.document.write("</table>");
      printWindow.document.write("</body></html>");
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div>
      <PageMeta
        title="Complete Form | TailAdmin - React.js Admin Dashboard Template"
        description="Complete form with all form elements"
      />
      <PageBreadcrumb pageTitle="Complete Form" />
      
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
          <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
            Complete Form - All Elements
          </h3>
          
          <Form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password">Password *</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                >
                  {showPassword ? (
                    <EyeIcon className="w-5 h-5" />
                  ) : (
                    <EyeCloseIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Department */}
            <div>
              <Label>Department</Label>
              <Select
                options={departmentOptions}
                placeholder="Select department"
                value={formData.department}
                onChange={(value) => handleSelectChange(value, "department")}
                className="dark:bg-dark-900"
              />
            </div>

            {/* Address */}
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>

            {/* City */}
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                type="text"
                id="city"
                name="city"
                placeholder="Enter city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>

            {/* Country */}
            <div>
              <Label>Country</Label>
              <Select
                options={countryOptions}
                placeholder="Select country"
                value={formData.country}
                onChange={(value) => handleSelectChange(value, "country")}
                className="dark:bg-dark-900"
              />
            </div>

            {/* Skills */}
            <div>
              <MultiSelect
                label="Skills"
                options={skillOptions}
                value={formData.skills}
                onChange={handleSkillsChange}
                placeholder="Select your skills"
              />
            </div>

            {/* Gender */}
            <div>
              <Label>Gender</Label>
              <div className="flex flex-wrap gap-4 mt-2">
                {genderOptions.map((option) => (
                  <Radio
                    key={option.value}
                    id={`gender-${option.value}`}
                    name="gender"
                    value={option.value}
                    label={option.label}
                    checked={formData.gender === option.value}
                    onChange={handleRadioChange}
                  />
                ))}
              </div>
            </div>

            {/* Zip Code */}
            <div>
              <Label htmlFor="zipCode">Zip Code</Label>
              <Input
                type="text"
                id="zipCode"
                name="zipCode"
                placeholder="Enter zip code"
                value={formData.zipCode}
                onChange={handleInputChange}
              />
            </div>

            {/* Date of Birth */}
            <div>
              <Label>Date of Birth</Label>
              <DatePicker
                value={formData.dateOfBirth}
                onChange={handleDateChange}
              />
            </div>

            {/* Message / Textarea */}
            <div>
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message here"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={formData.agreeTerms}
                  onChange={(checked) =>
                    handleCheckboxChange("agreeTerms", checked)
                  }
                />
                <Label className="!mt-0 cursor-pointer">
                  I agree to terms and conditions *
                </Label>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  checked={formData.subscribenews}
                  onChange={(checked) =>
                    handleCheckboxChange("subscribenews", checked)
                  }
                />
                <Label className="!mt-0 cursor-pointer">
                  Subscribe to our newsletter
                </Label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Submit & Print Form
              </button>
              <button
                type="reset"
                onClick={() => {
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    password: "",
                    department: "",
                    address: "",
                    city: "",
                    country: "",
                    zipCode: "",
                    dateOfBirth: "",
                    agreeTerms: false,
                    subscribenews: false,
                    gender: "",
                    skills: [],
                    message: "",
                  });
                }}
                className="flex-1 px-6 py-2 text-gray-900 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-200 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
              >
                Reset
              </button>
            </div>
          </Form>
        </div>

        {/* Form Data Preview */}
        <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
          <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
            Form Data Preview
          </h3>
          <div className="space-y-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-700">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Full Name:
              </p>
              <p className="text-gray-900 dark:text-white">
                {formData.fullName || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Email:
              </p>
              <p className="text-gray-900 dark:text-white">
                {formData.email || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Phone:
              </p>
              <p className="text-gray-900 dark:text-white">
                {formData.phone || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Department:
              </p>
              <p className="text-gray-900 dark:text-white">
                {formData.department || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Address:
              </p>
              <p className="text-gray-900 dark:text-white">
                {formData.address || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                City:
              </p>
              <p className="text-gray-900 dark:text-white">
                {formData.city || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Country:
              </p>
              <p className="text-gray-900 dark:text-white">
                {formData.country || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">                Gender:
              </p>
              <p className="text-gray-900 dark:text-white">
                {formData.gender ? formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1) : "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">                Zip Code:
              </p>
              <p className="text-gray-900 dark:text-white">
                {formData.zipCode || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Date of Birth:
              </p>
              <p className="text-gray-900 dark:text-white">
                {formData.dateOfBirth || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Skills:
              </p>
              <p className="text-gray-900 dark:text-white">
                {formData.skills.length > 0 ? formData.skills.join(", ") : "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Message:
              </p>
              <p className="text-gray-900 dark:text-white line-clamp-3">
                {formData.message || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Agree to Terms:
              </p>
              <p className="text-gray-900 dark:text-white">
                {formData.agreeTerms ? "✓ Yes" : "✗ No"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Subscribe to Newsletter:
              </p>
              <p className="text-gray-900 dark:text-white">
                {formData.subscribenews ? "✓ Yes" : "✗ No"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
