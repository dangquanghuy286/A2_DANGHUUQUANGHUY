import jsPDF from "jspdf";
import "../assets/font/Roboto_Condensed-Bold-normal.js";
import "../assets/font/Roboto-Regular-normal.js";
import calculateTotal from "./calculations.js";

export const exportToPdf = (formData) => {
  const doc = new jsPDF("portrait", "pt", "a4");

  // Đặt font mặc định
  doc.setFont("Roboto-Regular", "normal");

  // Tiêu đề
  doc.setFontSize(20);
  doc.setFont("Roboto_Condensed-Bold", "normal");
  doc.text("Booking Preview", 40, 30);
  doc.setFont("Roboto-Regular", "normal");

  let yPosition = 50;

  // Phần Personal Information
  doc.setFontSize(16);
  doc.setFont("Roboto_Condensed-Bold", "normal");
  doc.text("Personal Information", 40, yPosition);
  doc.setLineWidth(0.5);
  doc.line(40, yPosition + 5, 555, yPosition + 5);
  yPosition += 20;

  doc.setFontSize(13);
  doc.setFont("Roboto-Regular", "normal");
  doc.text(`Name: ${formData.fullName || "Not provided"}`, 40, yPosition);
  yPosition += 15;
  doc.text(`Email: ${formData.email || "Not provided"}`, 40, yPosition);
  yPosition += 15;
  doc.text(`Phone: ${formData.phone || "Not provided"}`, 40, yPosition);
  yPosition += 15;
  doc.text(
    `Date of Birth: ${formData.dateOfBirth || "Not provided"}`,
    40,
    yPosition
  );
  yPosition += 25;

  // Phần Trip Details
  doc.setFontSize(16);
  doc.setFont("Roboto_Condensed-Bold", "normal");
  doc.text("Trip Details", 40, yPosition);
  doc.line(40, yPosition + 5, 555, yPosition + 5);
  yPosition += 20;

  doc.setFontSize(13);
  doc.setFont("Roboto-Regular", "normal");
  doc.text(
    `Destination: ${formData.destination || "Not selected"}`,
    40,
    yPosition
  );
  yPosition += 15;
  doc.text(
    `Departure: ${formData.departureDate || "Not selected"}`,
    40,
    yPosition
  );
  yPosition += 15;
  doc.text(`Return: ${formData.returnDate || "Not selected"}`, 40, yPosition);
  yPosition += 15;
  doc.text(`Travelers: ${formData.travelers || "0"}`, 40, yPosition);
  yPosition += 15;
  doc.text(
    `Accommodation: ${formData.accommodationType || "Not selected"}`,
    40,
    yPosition
  );
  yPosition += 15;
  if (formData.specialRequests) {
    doc.text(`Special Requests: ${formData.specialRequests}`, 40, yPosition);
    yPosition += 15;
  }
  yPosition += 10;

  // Phần Payment Information
  doc.setFontSize(16);
  doc.setFont("Roboto_Condensed-Bold", "normal");
  doc.text("Payment Information", 40, yPosition);
  doc.line(40, yPosition + 5, 555, yPosition + 5);
  yPosition += 20;

  doc.setFontSize(13);
  doc.setFont("Roboto-Regular", "normal");
  doc.text(`Card: ${formData.cardNumber || "Not provided"}`, 40, yPosition);
  yPosition += 15;
  doc.text(
    `Card Holder: ${formData.cardHolderName || "Not provided"}`,
    40,
    yPosition
  );
  yPosition += 25;

  // Phần Total Amount
  doc.setFillColor(219, 234, 254);
  doc.rect(40, yPosition, 515, 40, "F");
  doc.setFontSize(18);
  doc.setFont("Roboto_Condensed-Bold", "normal");
  doc.text("Total Amount:", 50, yPosition + 25);
  doc.setFontSize(14);
  doc.setTextColor(37, 99, 235);
  doc.text(
    `$${calculateTotal(formData).toLocaleString()}`,
    500,
    yPosition + 25,
    { align: "right" }
  );
  doc.setTextColor(0, 0, 0);

  // Lưu file PDF
  doc.save("booking.pdf");
};
