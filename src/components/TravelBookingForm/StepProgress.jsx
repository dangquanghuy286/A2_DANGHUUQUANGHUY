import React from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Users,
  MapPin,
  CreditCard,
} from "lucide-react";
import { steps } from "../../constants/travelOptions";

const StepProgress = ({
  currentStep,
  handlePrevious,
  handleReset,
  handleNext,
}) => {
  const icons = {
    Users: Users,
    MapPin: MapPin,
    CreditCard: CreditCard,
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, index) => {
          const Icon = icons[step.icon];
          return (
            <div key={step.id} className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step.id
                    ? "bg-[#00c0d1] text-white"
                    : "bg-gray-300 text-gray-500"
                }`}
              >
                {currentStep > step.id ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <Icon className="h-5 w-5" />
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-4 ${
                    currentStep > step.id ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Step {currentStep} of {steps.length}
        </p>
        <h3 className="text-lg font-medium text-gray-800">
          {steps[currentStep - 1].title}
        </h3>
      </div>

      <div className="flex justify-between items-center mt-8 pt-6 border-t">
        <div className="flex gap-3">
          {currentStep > 1 && (
            <button
              onClick={handlePrevious}
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>
          )}

          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-6 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
        </div>

        <button
          onClick={
            currentStep === 3
              ? () => alert("Booking submitted successfully!")
              : handleNext
          }
          className="flex items-center gap-2 px-6 py-3 bg-[#00c0d1] text-white rounded-lg hover:bg-[#028c99] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentStep === 3 ? "Submit Booking" : "Continue"}
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default StepProgress;
