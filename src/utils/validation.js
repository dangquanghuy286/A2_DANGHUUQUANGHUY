const validateStep = (step, formData) => {
  const newErrors = {};

  switch (step) {
    case 1:
      if (!formData.fullName) newErrors.fullName = "Full name is required";
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Email is invalid";
      if (!formData.phone) newErrors.phone = "Phone number is required";
      if (!formData.dateOfBirth)
        newErrors.dateOfBirth = "Date of birth is required";
      break;

    case 2:
      if (!formData.destination)
        newErrors.destination = "Destination is required";
      if (!formData.departureDate)
        newErrors.departureDate = "Departure date is required";
      if (!formData.returnDate)
        newErrors.returnDate = "Return date is required";
      if (!formData.accommodationType)
        newErrors.accommodationType = "Accommodation type is required";
      if (new Date(formData.returnDate) <= new Date(formData.departureDate)) {
        newErrors.returnDate = "Return date must be after departure date";
      }
      break;

    case 3:
      if (!formData.cardNumber)
        newErrors.cardNumber = "Card number is required";
      if (!formData.expiryDate)
        newErrors.expiryDate = "Expiry date is required";
      if (!formData.cvv) newErrors.cvv = "CVV is required";
      if (!formData.cardHolderName)
        newErrors.cardHolderName = "Card holder name is required";
      break;

    default:
      break;
  }

  return newErrors;
};
export default validateStep;
