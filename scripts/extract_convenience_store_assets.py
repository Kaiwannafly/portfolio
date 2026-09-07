"""
Extract screenshots and PDF report for the 2023 DotNet Convenience Store WPF project.
Target locations:
- PDF report -> pnd_portfolio_web/public/docs/ConvenienceStore_Assignment2_Report.pdf
- PDF report -> 2023_DotNet_ConvenienceStore_WPF_AlphaK/Assignment2_Report.pdf
- Screenshots -> pnd_portfolio_web/public/projects/convenience-store/
    * pos_checkout.png
    * financial_dashboard.png
    * warehouse_management.png
    * system_flowchart.png
"""

import shutil
from pathlib import Path
import pymupdf
from PIL import Image
import io

def main():
    source_pdf = Path(r"C:\Users\dpnam\OneDrive\Documents\DPN\projects\Assignment 2\Assignment2.pdf")
    docs_dir = Path(r"C:\Users\dpnam\OneDrive\Documents\DPN\projects\pnd_portfolio_web\public\docs")
    images_dir = Path(r"C:\Users\dpnam\OneDrive\Documents\DPN\projects\pnd_portfolio_web\public\projects\convenience-store")
    repo_pdf_dest = Path(r"C:\Users\dpnam\OneDrive\Documents\DPN\projects\2023_DotNet_ConvenienceStore_WPF_AlphaK\Assignment2_Report.pdf")

    # 1. Ensure target directories exist
    docs_dir.mkdir(parents=True, exist_ok=True)
    images_dir.mkdir(parents=True, exist_ok=True)
    repo_pdf_dest.parent.mkdir(parents=True, exist_ok=True)

    # 2. Copy PDF to public/docs
    web_pdf_dest = docs_dir / "ConvenienceStore_Assignment2_Report.pdf"
    print(f"Copying PDF to: {web_pdf_dest}")
    shutil.copy2(source_pdf, web_pdf_dest)
    print(f"  -> Size: {web_pdf_dest.stat().st_size:,} bytes")

    # 3. Copy PDF to project repo
    print(f"Copying PDF to: {repo_pdf_dest}")
    shutil.copy2(source_pdf, repo_pdf_dest)
    print(f"  -> Size: {repo_pdf_dest.stat().st_size:,} bytes")

    # 4. Extract screenshots using PyMuPDF
    doc = pymupdf.open(source_pdf)

    targets = [
        {
            "page": 5,
            "xref": 17,
            "filename": "pos_checkout.png",
            "desc": "Main POS checkout / invoice interface (1499x825)"
        },
        {
            "page": 8,
            "xref": 32,
            "filename": "financial_dashboard.png",
            "desc": "Admin financial report / LiveCharts interface (1496x827)"
        },
        {
            "page": 8,
            "xref": 33,
            "filename": "warehouse_management.png",
            "desc": "Warehouse management & consignment interface (1496x831)"
        },
        {
            "page": 14,
            "xref": 59,
            "filename": "system_flowchart.png",
            "desc": "System flowchart / ERD (975x769)"
        }
    ]

    print("\nExtracting screenshots:")
    for target in targets:
        xref = target["xref"]
        img_info = doc.extract_image(xref)
        img_bytes = img_info["image"]

        out_path = images_dir / target["filename"]
        
        # Load and verify with Pillow, save as clean PNG
        img = Image.open(io.BytesIO(img_bytes))
        img.save(out_path, format="PNG", optimize=True)
        
        file_size = out_path.stat().st_size
        print(f"Saved: {out_path.name}")
        print(f"  Path: {out_path}")
        print(f"  Resolution: {img.width}x{img.height}")
        print(f"  Size: {file_size:,} bytes")
        print(f"  Description: {target['desc']}")

    print("\nAll assets extracted and verified successfully!")

if __name__ == "__main__":
    main()
