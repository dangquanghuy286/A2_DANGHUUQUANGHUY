import React from "react";
import { CreditCard } from "lucide-react";
import calculateTotal from "../../utils/calculations";

const StepPayment = ({ formData, errors, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <CreditCard className="h-12 w-12 text-[#00c0d1] mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">
          Payment & Confirmation
        </h2>
        <p className="text-gray-600">Secure your booking</p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Booking Summary
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Destination:</span>
            <span className="font-medium">{formData.destination}</span>
          </div>
          <div className="flex justify-between">
            <span>Travelers:</span>
            <span className="font-medium">{formData.travelers} person(s)</span>
          </div>
          <div className="flex justify-between">
            <span>Duration:</span>
            <span className="font-medium">
              {formData.departureDate} to {formData.returnDate}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Accommodation:</span>
            <span className="font-medium">{formData.accommodationType}</span>
          </div>
          <div className="border-t pt-2 mt-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Total Amount:</span>
              <span className="text-blue-600">
                ${calculateTotal(formData).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Card Number *
          </label>
          <input
            type="text"
            value={formData.cardNumber}
            onChange={(e) => handleInputChange("cardNumber", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c0d1] ${
              errors.cardNumber ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="1234 5678 9012 3456"
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Expiry Date *
          </label>
          <input
            type="month"
            value={formData.expiryDate}
            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c0d1] ${
              errors.expiryDate ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.expiryDate && (
            <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            CVV *
          </label>
          <input
            type="text"
            value={formData.cvv}
            onChange={(e) => handleInputChange("cvv", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c0d1] ${
              errors.cvv ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="123"
            maxLength="4"
          />
          {errors.cvv && (
            <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Card Holder Name *
          </label>
          <input
            type="text"
            value={formData.cardHolderName}
            onChange={(e) =>
              handleInputChange("cardHolderName", e.target.value)
            }
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c0d1] ${
              errors.cardHolderName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Name as it appears on card"
          />
          {errors.cardHolderName && (
            <p className="text-red-500 text-sm mt-1">{errors.cardHolderName}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepPayment;
