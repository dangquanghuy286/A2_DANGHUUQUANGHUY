import React from "react";
import { Download } from "lucide-react";
import calculateTotal from "../../utils/calculations";
import { exportToPdf } from "../../utils/handleExport";

const PdfPreview = ({ formData, pdfRef }) => {
  const handleDownload = () => {
    exportToPdf(formData);
  };
  return (
    <div className="bg-white rounded-md shadow-md p-6 sticky top-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Booking Preview</h3>
        <Download
          className="h-5 w-5 text-gray-600 cursor-pointer hover:text-[#00c0d1]"
          onClick={handleDownload}
        />
      </div>

      <div ref={pdfRef} className="space-y-4 text-sm">
        <div className="border-b pb-4">
          <h4 className="font-semibold text-gray-800 mb-2">
            Personal Information
          </h4>
          <div className="space-y-1 text-gray-600">
            <p>
              <span className="font-medium">Name:</span>
              {formData.fullName || "Not provided"}
            </p>
            <p>
              <span className="font-medium">Email:</span>
              {formData.email || "Not provided"}
            </p>
            <p>
              <span className="font-medium">Phone:</span>
              {formData.phone || "Not provided"}
            </p>
            <p>
              <span className="font-medium">Date of Birth:</span>
              {formData.dateOfBirth || "Not provided"}
            </p>
          </div>
        </div>

        <div className="border-b pb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Trip Details</h4>
          <div className="space-y-1 text-gray-600">
            <p>
              <span className="font-medium">Destination:</span>
              {formData.destination || "Not selected"}
            </p>
            <p>
              <span className="font-medium">Departure:</span>
              {formData.departureDate || "Not selected"}
            </p>
            <p>
              <span className="font-medium">Return:</span>
              {formData.returnDate || "Not selected"}
            </p>
            <p>
              <span className="font-medium">Travelers:</span>{" "}
              {formData.travelers}
            </p>
            <p>
              <span className="font-medium">Accommodation:</span>
              {formData.accommodationType || "Not selected"}
            </p>
            {formData.specialRequests && (
              <p>
                <span className="font-medium">Special Requests:</span>
                {formData.specialRequests}
              </p>
            )}
          </div>
        </div>

        <div className="border-b pb-4">
          <h4 className="font-semibold text-gray-800 mb-2">
            Payment Information
          </h4>
          <div className="space-y-1 text-gray-600">
            <p>
              <span className="font-medium">Card:</span> {formData.cardNumber}
            </p>
            <p>
              <span className="font-medium">Card Holder:</span>
              {formData.cardHolderName || "Not provided"}
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-800">Total Amount:</span>
            <span className="text-xl font-bold text-blue-600">
              ${calculateTotal(formData).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfPreview;
