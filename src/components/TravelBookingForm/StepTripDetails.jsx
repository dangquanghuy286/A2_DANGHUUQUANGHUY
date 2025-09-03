import React from "react";
import { MapPin } from "lucide-react";
import {
  destinations,
  accommodationTypes,
} from "../../constants/travelOptions";

const StepTripDetails = ({ formData, errors, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <MapPin className="h-12 w-12 text-[#00c0d1] mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">Trip Details</h2>
        <p className="text-gray-600">Plan your perfect journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Destination *
          </label>
          <select
            value={formData.destination}
            onChange={(e) => handleInputChange("destination", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c0d1] ${
              errors.destination ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select destination</option>
            {destinations.map((dest) => (
              <option key={dest.id} value={dest.name}>
                {dest.name}
              </option>
            ))}
          </select>
          {errors.destination && (
            <p className="text-red-500 text-sm mt-1">{errors.destination}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Travelers
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={formData.travelers}
            onChange={(e) =>
              handleInputChange("travelers", parseInt(e.target.value))
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c0d1]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Departure Date *
          </label>
          <input
            type="date"
            value={formData.departureDate}
            onChange={(e) => handleInputChange("departureDate", e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c0d1] ${
              errors.departureDate ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.departureDate && (
            <p className="text-red-500 text-sm mt-1">{errors.departureDate}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Return Date *
          </label>
          <input
            type="date"
            value={formData.returnDate}
            onChange={(e) => handleInputChange("returnDate", e.target.value)}
            min={
              formData.departureDate || new Date().toISOString().split("T")[0]
            }
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c0d1] ${
              errors.returnDate ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.returnDate && (
            <p className="text-red-500 text-sm mt-1">{errors.returnDate}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Accommodation Type *
          </label>
          <select
            value={formData.accommodationType}
            onChange={(e) =>
              handleInputChange("accommodationType", e.target.value)
            }
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c0d1] ${
              errors.accommodationType ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select accommodation</option>
            {accommodationTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.accommodationType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.accommodationType}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Special Requests
          </label>
          <textarea
            value={formData.specialRequests}
            onChange={(e) =>
              handleInputChange("specialRequests", e.target.value)
            }
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c0d1]"
            placeholder="Any special requests or dietary requirements..."
          />
        </div>
      </div>
    </div>
  );
};

export default StepTripDetails;
