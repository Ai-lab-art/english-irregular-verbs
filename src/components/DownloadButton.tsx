import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { irregularVerbs } from "@/data/irregularVerbs";
import { toast } from "sonner";

export const DownloadButton = () => {
  const handleDownload = () => {
    try {
      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      // Title
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("English Irregular Verbs - Complete Reference", 148, 15, { align: "center" });
      
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text("अंग्रेजी अनियमित क्रियाहरूको पूर्ण सूची", 148, 22, { align: "center" });

      // Prepare table data
      const tableData = irregularVerbs.map((verb) => [
        verb.v1,
        verb.v2,
        verb.v3,
        verb.v4,
        verb.v5,
        verb.pronunciation,
        verb.nepaliMeaning,
      ]);

      // Generate table
      autoTable(doc, {
        head: [["V1 (Base)", "V2 (Past)", "V3 (P.Participle)", "V4 (Gerund)", "V5 (3rd Person)", "Pronunciation", "नेपाली अर्थ"]],
        body: tableData,
        startY: 28,
        theme: "grid",
        headStyles: {
          fillColor: [41, 128, 185],
          textColor: 255,
          fontStyle: "bold",
          fontSize: 9,
          halign: "center",
        },
        bodyStyles: {
          fontSize: 8,
          cellPadding: 2,
        },
        alternateRowStyles: {
          fillColor: [240, 248, 255],
        },
        columnStyles: {
          0: { fontStyle: "bold", cellWidth: 22 },
          1: { cellWidth: 25 },
          2: { cellWidth: 28 },
          3: { cellWidth: 22 },
          4: { cellWidth: 22 },
          5: { cellWidth: 28, halign: "center", fontStyle: "italic" },
          6: { cellWidth: 35 },
        },
        margin: { top: 28, left: 10, right: 10 },
        didDrawPage: (data) => {
          // Footer
          const pageCount = (doc as any).internal.getNumberOfPages();
          doc.setFontSize(9);
          doc.setFont("helvetica", "normal");
          doc.text(
            `Page ${data.pageNumber} of ${pageCount}`,
            doc.internal.pageSize.width / 2,
            doc.internal.pageSize.height - 10,
            { align: "center" }
          );
        },
      });

      // Save the PDF
      doc.save("irregular-verbs-reference.pdf");
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Failed to generate PDF. Please try again.");
    }
  };

  return (
    <Button onClick={handleDownload} size="lg" className="gap-2">
      <Download className="h-5 w-5" />
      Download PDF
    </Button>
  );
};
