import pdfplumber

with pdfplumber.open(r'c:\Users\thema\Downloads\USE -by Manideep Nera.pdf') as pdf:
    text = ''
    for i, page in enumerate(pdf.pages):
        extracted = page.extract_text()
        if extracted:
            text += extracted + '\n'
    
    with open('use_content.txt', 'w', encoding='utf-8') as f:
        f.write(text)
    
    print(f"Extracted {len(pdf.pages)} pages, {len(text)} characters")
    print("\nFirst 2000 characters:")
    print(text[:2000])
