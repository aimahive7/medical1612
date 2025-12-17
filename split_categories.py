import re

file_path = r'd:\pg\77 Medical\medical1612\script.js'

# New Diabetes Products to Add
new_diabetes_products = """
            // Istaphase Group (Sun Pharma)
            {
                name: "Istaphase 1 (Sun Pharma)",
                image: "💊",
                prescription: true,
                composition: "Glimepiride 1mg + Metformin 500mg + Voglibose 0.2mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 145,
                discount: 15,
                price: 123,
                desc: "Triple anti-diabetic combination.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },
            {
                name: "Istaphase 2 (Sun Pharma)",
                image: "💊",
                prescription: true,
                composition: "Glimepiride 2mg + Metformin 500mg + Voglibose 0.2mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 165,
                discount: 15,
                price: 140,
                desc: "Triple anti-diabetic combination.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },

            // Ziglim Group (FDC)
            {
                name: "Ziglim M1 (FDC)",
                image: "💊",
                prescription: true,
                composition: "Glimepiride 1mg + Metformin 500mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 115,
                discount: 12,
                price: 101,
                desc: "Diabetes management tablet.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },
             {
                name: "Ziglim M2 (FDC)",
                image: "💊",
                prescription: true,
                composition: "Glimepiride 2mg + Metformin 500mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 135,
                discount: 12,
                price: 119,
                desc: "Diabetes management tablet.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },

            // Glimisave Group (Eris)
            {
                name: "Glimisave M1 (Eris)",
                image: "💊",
                prescription: true,
                composition: "Glimepiride 1mg + Metformin 500mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 120,
                discount: 12,
                price: 105,
                desc: "Effective blood sugar control.",
                uses: "Type 2 Diabetes",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Glimisave M2 (Eris)",
                image: "💊",
                prescription: true,
                composition: "Glimepiride 2mg + Metformin 500mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 140,
                discount: 12,
                price: 123,
                desc: "Effective blood sugar control.",
                uses: "Type 2 Diabetes",
                storage: "Store in a cool, dry place"
            },

            // Glycomet Group (USV)
            {
                name: "Glycomet 500 (USV)",
                image: "💊",
                prescription: true,
                composition: "Metformin 500mg",
                unit: "Strip of 20",
                quantity: "1 Strip",
                mrp: 45,
                discount: 10,
                price: 40,
                desc: "Standard diabetes medication.",
                uses: "Type 2 Diabetes, PCOS",
                storage: "Store below 25°C"
            },
            {
                name: "Glycomet 850 (USV)",
                image: "💊",
                prescription: true,
                composition: "Metformin 850mg",
                unit: "Strip of 20",
                quantity: "1 Strip",
                mrp: 65,
                discount: 10,
                price: 58,
                desc: "Higher dose diabetes medication.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },
             {
                name: "Glycomet SR 500 (USV)",
                image: "💊",
                prescription: true,
                composition: "Metformin 500mg Sustained Release",
                unit: "Strip of 20",
                quantity: "1 Strip",
                mrp: 55,
                discount: 10,
                price: 49,
                desc: "SR tablet for diabetes.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },
            {
                name: "Glycomet SR 1000 (USV)",
                image: "💊",
                prescription: true,
                composition: "Metformin 1000mg SR",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 85,
                discount: 10,
                price: 76,
                desc: "High dose SR tablet.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },

            // Glimiprime Group (Prime)
            {
                name: "Glimiprime 1 (Prime)",
                image: "💊",
                prescription: true,
                composition: "Glimepiride 1mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 65,
                discount: 10,
                price: 58,
                desc: "Sulfonylurea for diabetes.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },
             {
                name: "Glimiprime 2 (Prime)",
                image: "💊",
                prescription: true,
                composition: "Glimepiride 2mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 85,
                discount: 10,
                price: 76,
                desc: "Sulfonylurea for diabetes.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },

            // Cyblex Group (Dr. Reddy's)
            {
                name: "Cyblex M 60 (Dr. Reddy's)",
                image: "💊",
                prescription: true,
                composition: "Gliclazide 60mg + Metformin 500mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 195,
                discount: 12,
                price: 172,
                desc: "Effective dual therapy.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },
             {
                name: "Cyblex MV 80.2 (Dr. Reddy's)",
                image: "💊",
                prescription: true,
                composition: "Gliclazide 80mg + Metformin + Voglibose",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 225,
                discount: 15,
                price: 191,
                desc: "Triple drug combination.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },

            // Voglitor Group (Torrent)
            {
                name: "Voglitor 0.2 (Torrent)",
                image: "💊",
                prescription: true,
                composition: "Voglibose 0.2mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 75,
                discount: 10,
                price: 67,
                desc: "Post-meal sugar control.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },
            {
                name: "Voglitor 0.3 (Torrent)",
                image: "💊",
                prescription: true,
                composition: "Voglibose 0.3mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 95,
                discount: 10,
                price: 85,
                desc: "Post-meal sugar control.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },
            {
                name: "Voglitor MD 0.2 (Torrent)",
                image: "💊",
                prescription: true,
                composition: "Voglibose 0.2mg MD",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 80,
                discount: 10,
                price: 72,
                desc: "Mouth dissolving voglibose.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },

            // Exermet Group (Cipla)
            {
                name: "Exermet 500 (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Metformin 500mg SR",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 45,
                discount: 8,
                price: 41,
                desc: "Sustained release metformin.",
                uses: "Type 2 Diabetes",
                storage: "Store below 30°C"
            },
             {
                name: "Exermet 850 (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Metformin 850mg SR",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 55,
                discount: 8,
                price: 50,
                desc: "Higher strength metformin.",
                uses: "Type 2 Diabetes",
                storage: "Store below 30°C"
            },
            {
                name: "Exermet 1000 (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Metformin 1000mg SR",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 65,
                discount: 10,
                price: 58,
                desc: "Maximum strength metformin.",
                uses: "Type 2 Diabetes",
                storage: "Store below 30°C"
            },

            // Switglim Group (Akumentis)
            {
                name: "Switglim M 1/500 (Akumentis)",
                image: "💊",
                prescription: true,
                composition: "Glimepiride 1mg + Metformin 500mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 95,
                discount: 10,
                price: 85,
                desc: "Combination diabetes therapy.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },
            {
                name: "Switglim M 2/500 (Akumentis)",
                image: "💊",
                prescription: true,
                composition: "Glimepiride 2mg + Metformin 500mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 115,
                discount: 10,
                price: 103,
                desc: "Combination diabetes therapy.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },

            // Udapa Group (Lupin)
            {
                name: "Udapa 5 (Lupin)",
                image: "💊",
                prescription: true,
                composition: "Dapagliflozin 5mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 125,
                discount: 12,
                price: 110,
                desc: "SGLT2 inhibitor for diabetes.",
                uses: "Type 2 Diabetes, Heart Failure",
                storage: "Store below 25°C"
            },
            {
                name: "Udapa 10 (Lupin)",
                image: "💊",
                prescription: true,
                composition: "Dapagliflozin 10mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 165,
                discount: 12,
                price: 145,
                desc: "SGLT2 inhibitor for diabetes.",
                uses: "Type 2 Diabetes, Heart Failure",
                storage: "Store below 25°C"
            },

             // Insider Injections & Pens
             {
                name: "Human Mixtard 30/70 (Novo Nordisk)",
                image: "💉",
                prescription: true,
                composition: "Biphasic Isophane Insulin",
                unit: "Vial",
                quantity: "40IU/ml",
                mrp: 165,
                discount: 5,
                price: 156,
                desc: "Human insulin injection.",
                uses: "Diabetes Mellitus",
                storage: "Store in refrigerator 2-8°C"
            },
             {
                name: "Human Actrapid (Novo Nordisk)",
                image: "💉",
                prescription: true,
                composition: "Soluble Insulin",
                unit: "Vial",
                quantity: "40IU/ml",
                mrp: 165,
                discount: 5,
                price: 156,
                desc: "Short acting insulin.",
                uses: "Diabetes Mellitus",
                storage: "Store in refrigerator 2-8°C"
            },
            {
                name: "Ryzodeg Penfill",
                image: "💉",
                prescription: true,
                composition: "Insulin Degludec + Insulin Aspart",
                unit: "Penfill",
                quantity: "3ml",
                mrp: 1450,
                discount: 10,
                price: 1305,
                desc: "Long acting insulin combination.",
                uses: "Diabetes Mellitus",
                storage: "Store in refrigerator 2-8°C"
            },
            {
                name: "Tresiba Penfill",
                image: "💉",
                prescription: true,
                composition: "Insulin Degludec",
                unit: "Penfill",
                quantity: "3ml",
                mrp: 1250,
                discount: 10,
                price: 1125,
                desc: "Ultra long acting insulin.",
                uses: "Diabetes Mellitus",
                storage: "Store in refrigerator 2-8°C"
            },
            {
                name: "Basalog (Biocon)",
                image: "💉",
                prescription: true,
                composition: "Insulin Glargine",
                unit: "Pen",
                quantity: "3ml",
                mrp: 545,
                discount: 10,
                price: 490,
                desc: "Long acting insulin analog.",
                uses: "Diabetes Mellitus",
                storage: "Store in refrigerator 2-8°C"
            },
"""

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Extract the Diabetes & BP Care Category Block
# Find start
start_marker = 'category: "Diabetes & BP Care",'
start_idx = content.find(start_marker)

# Find the start of the products array within this category
products_start = content.find('products: [', start_idx)
# We need to find the matching closing bracket for this array.
# A simple counter approach.
count = 1
i = products_start + len('products: [')
products_end = -1
while i < len(content):
    if content[i] == '[':
        count += 1
    elif content[i] == ']':
        count -= 1
        if count == 0:
            products_end = i + 1
            break
    i += 1

if products_end == -1:
    print("Error: Could not find end of products array.")
    exit()

# Extract the content of the products array (excluding [ and ])
products_content_str = content[products_start:products_end]
# Remove "products: [" and trailing "]"
products_inner = products_content_str[products_content_str.find('[')+1 : products_content_str.rfind(']')]

# 2. Split products
# We will iterate through lines and reconstruct objects to classify them.
# This is tricky without a full parser, but since the format is consistent:
# Objects start with { and end with }
# We will use regex to capture each object block.
product_pattern = re.compile(r'\{[^{}]+\}', re.DOTALL) # Simple nested braces are not handled by regex easily if nested.
# Fortunately, the products don't seem to have nested braces inside them (no sub-objects).
# Wait, check if they have. Just properties.
# So `{[^{}]+}` should work.

product_matches = product_pattern.findall(products_inner)

diabetes_products = []
heart_products = []

# Keywords for Heart/BP
heart_keywords = [
    "Telmisartan", "Telma", "Telmikind", "Tazloc", "Temsan", "Metxl", "Cilacar", "Cardace", 
    "Ramipril", "Amlodipine", "Losartan", "Valsartan", "Clonidine", "Prazosin", "Diltiazem", 
    "Nifedipine", "Isosorbide", "Nitroglycerin", "Ranolazine", "Dabigatran", "Apixaban", 
    "Sacubitril", "BP Monitor", "Cilnidipine", "Metoprolol", "Hydrochlorothiazide", "Chlorthalidone",
    "Bisoprolol", "Nebivolol", "Atenolol", "Indapamide", "Spironolactone", "Torsemide", "Furosemide",
    "Atorvastatin", "Rosuvastatin", "Clopidogrel", "Ecosprin", "Aspirin"
]

# Specifically exclude some that might overlap if any (none apparent).
# Note: "Metoprolol" is Heart. "Glimepiride" is Diabetes.

for prod_str in product_matches:
    is_heart = False
    for kw in heart_keywords:
        if kw in prod_str:
            is_heart = True
            break
    
    # Specific overrides if needed
    if "Gluconorm" in prod_str: is_heart = False
    if "Metlong" in prod_str: is_heart = False
    
    if is_heart:
        heart_products.append(prod_str)
    else:
        diabetes_products.append(prod_str)

# 3. Construct new Diabetes Category Content
# Update Category Name in the original block
# We effectively replace the whole category block or just the products part and title.

# Let's reconstruct the DIABETES category first
diabetes_products_final = ",\n".join(diabetes_products)
# Add NEW products
diabetes_products_final += ",\n" + new_diabetes_products

new_diabetes_block = f"""
        category: "Diabetes Care",
        icon: "🩸",
        id: "diabetes",
        products: [
{diabetes_products_final}
        ]
"""

# 4. Construct Heart Category Content
heart_products_final = ",\n".join(heart_products)
new_heart_block = f"""
    {{
        category: "Heart & BP Care",
        icon: "❤️",
        id: "heart",
        products: [
{heart_products_final}
        ]
    }}
"""

# 5. Apply changes to content
# Replace the original products array with the new diabetes products array
# And Change the category name.
# Actually, easier to replace the whole block "category... to end of products ]"

category_end = products_end + 1 # Include the comma or closing brace of the category object if possible
# Find the closing brace of the category object
cat_obj_end = -1
count = 1
i = start_idx + len('category: "Diabetes & BP Care",')
while i < len(content):
    if content[i] == '{':
        count += 1
    elif content[i] == '}':
        count -= 1
        if count == 0: # This detects the end of the category object itself?
            # Wait, the category object started before `start_idx`. 
            # `start_idx` points to `category: ...`.
            # The object started at `{` before `start_idx`.
            pass 
        if content[i] == '}' and i > products_end: # basic heuristic: closing brace after products array
             cat_obj_end = i + 1
             break
    i += 1

# Finding the exact range to replace:
# We identified `products_start` and `products_end`.
# We also want to change the Title.
# Let's just replace the chunk from `start_idx` to `products_end`.
# And insert the Heart block after the Diabetes block.

# Step 5a: Replace Diabetes Title and Products
prefix = content[:start_idx]
suffix = content[products_end:]

# Modified Diabetes Part
# We need to construct the middle part:
# category: "Diabetes Care",
# icon: "🩸",
# id: "diabetes",
# products: [ ... ]

modified_diabetes_part = f"""category: "Diabetes Care",
        icon: "🩸",
        id: "diabetes",
        products: [
{diabetes_products_final}
        ]"""

# Join them
new_content = prefix + modified_diabetes_part + suffix

# Step 5b: Insert Heart Category
# Find the end of the Diabetes Category Object to insert Heart Category after it.
# Now we need to find where the diabetes category object ends in `new_content`.
# It ends at the first `}` after the products array we just inserted.
# or simply, `suffix` starts with `\n    },`.
# Let's inspect `suffix` start.
# If `suffix` starts with `\n    },` we can insert after that comma.

insert_pos = new_content.find('},', start_idx + len(modified_diabetes_part)) + 2
# Add Heart Block
final_content = new_content[:insert_pos] + "\n" + new_heart_block + "," + new_content[insert_pos:]

# Remove double commas if any generated
final_content = final_content.replace(",,", ",")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print("Successfully split categories and added new products.")
