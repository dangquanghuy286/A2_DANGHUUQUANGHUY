const calculateTotal = (formData) => {
  const basePrice = 500; // Base price per person
  const accommodationMultiplier = {
    "Budget Hotel (2-3 stars)": 1,
    "Standard Hotel (3-4 stars)": 1.3,
    "Luxury Hotel (4-5 stars)": 1.8,
    Resort: 2.0,
    Homestay: 0.8,
    Hostel: 0.6,
  };

  const days =
    formData.departureDate && formData.returnDate
      ? Math.ceil(
          (new Date(formData.returnDate) - new Date(formData.departureDate)) /
            (1000 * 60 * 60 * 24)
        )
      : 1;

  const multiplier = accommodationMultiplier[formData.accommodationType] || 1;
  return basePrice * formData.travelers * days * multiplier;
};
export default calculateTotal;
