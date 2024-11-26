import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const generatePDF = async () => {
  const targetE = document.getElementById("resume"); 
  if (!targetE) {
    console.error("Target element not found with ID: resume");
    return;
  }
  const renderedCanvas = await html2canvas(targetE); // Render the element as a canvas
  const data = renderedCanvas.toDataURL("image/png"); // Convert the canvas to image data
  const pdfDoc = new jsPDF("p", "mm", "a4"); 

  const width = pdfDoc.internal.pageSize.getWidth();
  const height = (renderedCanvas.height * width) / renderedCanvas.width; 

  pdfDoc.addImage(data, "PNG", 0, 0, width, height); 
  pdfDoc.save("resume.pdf"); 
};

export default generatePDF;
