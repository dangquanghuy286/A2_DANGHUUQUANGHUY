import React from "react";
import { Users } from "lucide-react";

const StepPersonalInfo = ({ formData, errors, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Users className="h-12 w-12 text-[#00c0d1] mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">
          Personal Information
        </h2>
        <p className="text-gray-600">Tell us about yourself</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c0d1] ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c0d1] ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="your@gmail.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c0d1] ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="+84 123 456 789"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth *
          </label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c0d1] ${
              errors.dateOfBirth ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepPersonalInfo;
