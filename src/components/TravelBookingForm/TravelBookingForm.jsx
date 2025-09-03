import React, { useState, useRef } from "react";
import StepProgress from "./StepProgress";
import StepPersonalInfo from "./StepPersonalInfo";
import StepTripDetails from "./StepTripDetails";
import StepPayment from "./StepPayment";
import PdfPreview from "./PdfPreview";
import validateStep from "../../utils/validation";

const TravelBookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    travelers: 0,
    accommodationType: "",
    specialRequests: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
  });
  const [errors, setErrors] = useState({});
  const pdfRef = useRef();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleNext = () => {
    const newErrors = validateStep(currentStep, formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      destination: "",
      departureDate: "",
      returnDate: "",
      travelers: 0,
      accommodationType: "",
      specialRequests: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardHolderName: "",
    });
    setErrors({});
    setCurrentStep(1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepPersonalInfo
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <StepTripDetails
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
          />
        );
      case 3:
        return (
          <StepPayment
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-md shadow-md p-8">
              <StepProgress
                currentStep={currentStep}
                handlePrevious={handlePrevious}
                handleReset={handleReset}
                handleNext={handleNext}
              />
              {renderStep()}
            </div>
          </div>
          <PdfPreview formData={formData} pdfRef={pdfRef} />
        </div>
      </div>
    </div>
  );
};

export default TravelBookingForm;
