/* Data Structure - Comprehensive Cipla Medicines Catalog */
const storeData = [
    {
        category: "OTC Medicines",
        icon: "💊",
        id: "otc",
        products: [
            {
                name: "Nicip Plus (Cipla)",
                image: "💊",
                prescription: false,
                composition: "Nimesulide 100mg + Paracetamol 325mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 52,
                discount: 10,
                price: 47,
                desc: "Pain reliever and anti-inflammatory tablet by Cipla.",
                uses: "Fever, Headache, Body pain, Toothache",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Cetirizine (Cipla)",
                image: "💊",
                prescription: false,
                composition: "Cetirizine 10mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 25,
                discount: 8,
                price: 23,
                desc: "Antihistamine for allergy relief by Cipla.",
                uses: "Allergies, Sneezing, Runny nose, Itching",
                storage: "Store below 25°C"
            },
            {
                name: "Omez 20 (Cipla)",
                image: "💊",
                prescription: false,
                composition: "Omeprazole 20mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 95,
                discount: 12,
                price: 84,
                desc: "Proton pump inhibitor for acidity by Cipla.",
                uses: "Acidity, Heartburn, GERD",
                storage: "Store in a dry place"
            },
            {
                name: "Ibugesic Plus (Cipla)",
                image: "💊",
                prescription: false,
                composition: "Ibuprofen 400mg + Paracetamol 325mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 45,
                discount: 10,
                price: 41,
                desc: "Pain and fever relief tablet by Cipla.",
                uses: "Pain, Fever, Inflammation",
                storage: "Store below 30°C"
            },
            {
                name: "Pantocid 40 (Cipla)",
                image: "💊",
                prescription: false,
                composition: "Pantoprazole 40mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 145,
                discount: 15,
                price: 123,
                desc: "For gastric acid reduction by Cipla.",
                uses: "Acid reflux, Ulcers, GERD",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Digene Gel",
                image: "🧪",
                prescription: false,
                composition: "Magnesium Hydroxide, Simethicone",
                unit: "Bottle",
                quantity: "200ml",
                mrp: 180,
                discount: 0,
                price: 180,
                desc: "Antacid for relief from acidity and gas.",
                uses: "Acidity, Indigestion, Gas",
                storage: "Keep bottle tightly closed"
            },
            // Additional OTC Medicines
            {
                name: "Crocin 650 Advance",
                image: "💊",
                prescription: false,
                composition: "Paracetamol 650mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 35,
                discount: 10,
                price: 32,
                desc: "Advanced pain and fever relief tablet.",
                uses: "Fever, Headache, Body pain",
                storage: "Store below 30°C"
            },
            {
                name: "Dolo 650",
                image: "💊",
                prescription: false,
                composition: "Paracetamol 650mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 32,
                discount: 8,
                price: 29,
                desc: "Trusted fever and pain reliever.",
                uses: "Fever, Headache, Cold, Body ache",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Combiflam",
                image: "💊",
                prescription: false,
                composition: "Ibuprofen 400mg + Paracetamol 325mg",
                unit: "Strip of 20",
                quantity: "1 Strip",
                mrp: 48,
                discount: 10,
                price: 43,
                desc: "Powerful pain and inflammation relief.",
                uses: "Pain, Inflammation, Fever",
                storage: "Store below 25°C"
            },
            {
                name: "Saridon",
                image: "💊",
                prescription: false,
                composition: "Propyphenazone + Paracetamol + Caffeine",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 45,
                discount: 8,
                price: 41,
                desc: "Fast relief from headache.",
                uses: "Headache, Migraine",
                storage: "Store in a dry place"
            },
            {
                name: "Disprin",
                image: "💊",
                prescription: false,
                composition: "Aspirin 350mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 18,
                discount: 5,
                price: 17,
                desc: "Aspirin for pain and fever.",
                uses: "Headache, Fever, Pain",
                storage: "Store below 30°C"
            },
            {
                name: "Volini Gel",
                image: "🧴",
                prescription: false,
                composition: "Diclofenac Diethylamine 1.16%",
                unit: "Tube",
                quantity: "30g",
                mrp: 125,
                discount: 12,
                price: 110,
                desc: "Topical pain relief gel.",
                uses: "Muscle pain, Joint pain, Sprains",
                storage: "Store below 25°C"
            },
            {
                name: "Moov Pain Relief Cream",
                image: "🧴",
                prescription: false,
                composition: "Diclofenac + Menthol + Linseed Oil",
                unit: "Tube",
                quantity: "50g",
                mrp: 145,
                discount: 10,
                price: 131,
                desc: "Fast acting pain relief cream.",
                uses: "Back pain, Muscle pain, Joint pain",
                storage: "Store in a cool place"
            },
            {
                name: "Iodex Pain Relief",
                image: "🧴",
                prescription: false,
                composition: "Methyl Salicylate + Menthol",
                unit: "Tube",
                quantity: "40g",
                mrp: 95,
                discount: 8,
                price: 87,
                desc: "Classic pain relief balm.",
                uses: "Muscle pain, Joint pain",
                storage: "Store below 30°C"
            },
            {
                name: "Zandu Balm",
                image: "🧴",
                prescription: false,
                composition: "Menthol, Camphor, Essential oils",
                unit: "Bottle",
                quantity: "25ml",
                mrp: 85,
                discount: 5,
                price: 81,
                desc: "Ayurvedic pain relief balm.",
                uses: "Headache, Body ache, Cold",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Tiger Balm Red",
                image: "🧴",
                prescription: false,
                composition: "Camphor, Menthol, Cajuput Oil",
                unit: "Jar",
                quantity: "21ml",
                mrp: 145,
                discount: 10,
                price: 131,
                desc: "Strong muscle pain relief.",
                uses: "Muscle aches, Sprains",
                storage: "Keep away from heat"
            },
            {
                name: "Amrutanjan Balm",
                image: "🧴",
                prescription: false,
                composition: "Menthol, Camphor",
                unit: "Bottle",
                quantity: "30ml",
                mrp: 75,
                discount: 8,
                price: 69,
                desc: "Traditional headache relief balm.",
                uses: "Headache, Cold, Body ache",
                storage: "Store in a dry place"
            },
            {
                name: "Eno Fruit Salt",
                image: "🧪",
                prescription: false,
                composition: "Sodium Bicarbonate, Citric Acid",
                unit: "Sachet",
                quantity: "Pack of 30",
                mrp: 120,
                discount: 10,
                price: 108,
                desc: "Fast relief from acidity.",
                uses: "Acidity, Heartburn, Indigestion",
                storage: "Store in a dry place"
            },
            {
                name: "Gelusil MPS",
                image: "💊",
                prescription: false,
                composition: "Aluminium Hydroxide + Magnesium Hydroxide",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 68,
                discount: 8,
                price: 63,
                desc: "Antacid for stomach relief.",
                uses: "Acidity, Heartburn, Gas",
                storage: "Store below 25°C"
            },
            {
                name: "Pudin Hara",
                image: "🧪",
                prescription: false,
                composition: "Mentha Oil",
                unit: "Bottle",
                quantity: "30ml",
                mrp: 55,
                discount: 5,
                price: 52,
                desc: "Digestive relief drops.",
                uses: "Stomach ache, Gas, Indigestion",
                storage: "Store in a cool place"
            },
            {
                name: "Hajmola Regular",
                image: "🍬",
                prescription: false,
                composition: "Digestive herbs & spices",
                unit: "Bottle",
                quantity: "120 tablets",
                mrp: 45,
                discount: 8,
                price: 41,
                desc: "Tasty digestive tablets.",
                uses: "Digestion, Appetite",
                storage: "Store in a dry place"
            },
            {
                name: "Dabur Hingoli",
                image: "🍬",
                prescription: false,
                composition: "Hing, Ajwain, Pudina",
                unit: "Bottle",
                quantity: "100 tablets",
                mrp: 40,
                discount: 5,
                price: 38,
                desc: "Digestive tablets with hing.",
                uses: "Gas, Bloating, Indigestion",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Gas-O-Fast",
                image: "🧪",
                prescription: false,
                composition: "Sodium Bicarbonate + Citric Acid",
                unit: "Sachet",
                quantity: "Pack of 15",
                mrp: 75,
                discount: 10,
                price: 68,
                desc: "Instant gas relief sachets.",
                uses: "Gas, Acidity, Bloating",
                storage: "Store in a dry place"
            },
            {
                name: "Electral Powder",
                image: "🧪",
                prescription: false,
                composition: "ORS - Sodium, Potassium, Glucose",
                unit: "Sachet",
                quantity: "Pack of 21",
                mrp: 115,
                discount: 8,
                price: 106,
                desc: "Oral rehydration solution.",
                uses: "Dehydration, Diarrhea, Vomiting",
                storage: "Store in a dry place"
            },
            {
                name: "Glucon-D Orange",
                image: "🧪",
                prescription: false,
                composition: "Glucose, Vitamin C, Minerals",
                unit: "Pack",
                quantity: "500g",
                mrp: 145,
                discount: 12,
                price: 128,
                desc: "Instant energy drink powder.",
                uses: "Energy, Hydration",
                storage: "Keep in an airtight container"
            },
            {
                name: "Strepsils Original",
                image: "🍬",
                prescription: false,
                composition: "Dichlorobenzyl Alcohol + Amylmetacresol",
                unit: "Strip of 8",
                quantity: "1 Strip",
                mrp: 55,
                discount: 5,
                price: 52,
                desc: "Sore throat lozenges.",
                uses: "Sore throat, Throat infection",
                storage: "Store below 30°C"
            },
            {
                name: "Halls Mentho-Lyptus",
                image: "🍬",
                prescription: false,
                composition: "Menthol, Eucalyptus",
                unit: "Pack",
                quantity: "Pack of 20",
                mrp: 40,
                discount: 5,
                price: 38,
                desc: "Soothing throat drops.",
                uses: "Cough, Cold, Throat relief",
                storage: "Store in a cool place"
            },
            {
                name: "Vicks Cough Drops",
                image: "🍬",
                prescription: false,
                composition: "Menthol, Eucalyptus Oil",
                unit: "Pack",
                quantity: "Pack of 20",
                mrp: 35,
                discount: 5,
                price: 33,
                desc: "Cough relief drops.",
                uses: "Cough, Cold, Sore throat",
                storage: "Store below 30°C"
            },
            {
                name: "Otrivin Nasal Drops",
                image: "💧",
                prescription: false,
                composition: "Xylometazoline 0.1%",
                unit: "Bottle",
                quantity: "10ml",
                mrp: 85,
                discount: 8,
                price: 78,
                desc: "Nasal decongestant drops.",
                uses: "Blocked nose, Sinusitis",
                storage: "Store below 25°C"
            },
            {
                name: "Nasivion Nasal Drops",
                image: "💧",
                prescription: false,
                composition: "Oxymetazoline 0.025%",
                unit: "Bottle",
                quantity: "10ml",
                mrp: 75,
                discount: 8,
                price: 69,
                desc: "Nasal congestion relief.",
                uses: "Nasal congestion, Cold",
                storage: "Store in a cool place"
            },
            {
                name: "Karvol Plus",
                image: "🧴",
                prescription: false,
                composition: "Menthol, Camphor, Eucalyptus",
                unit: "Bottle",
                quantity: "10 capsules",
                mrp: 65,
                discount: 5,
                price: 62,
                desc: "Steam inhalation capsules.",
                uses: "Cold, Congestion, Sinusitis",
                storage: "Store below 30°C"
            },
            {
                name: "Smuth Gel",
                image: "🧴",
                prescription: false,
                composition: "Dimethicone 40mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 95,
                discount: 10,
                price: 86,
                desc: "Anti-flatulent gel capsules.",
                uses: "Gas, Bloating, Flatulence",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Mucaine Gel",
                image: "🧴",
                prescription: false,
                composition: "Aluminium Hydroxide + Oxetacaine",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 135,
                discount: 10,
                price: 122,
                desc: "Antacid with local anesthetic.",
                uses: "Acidity, Heartburn, Ulcer pain",
                storage: "Store below 25°C"
            },
            {
                name: "Loperamide (Lopamide)",
                image: "💊",
                prescription: false,
                composition: "Loperamide 2mg",
                unit: "Strip of 4",
                quantity: "1 Strip",
                mrp: 32,
                discount: 8,
                price: 29,
                desc: "Anti-diarrheal medicine.",
                uses: "Diarrhea, Loose motions",
                storage: "Store in a dry place"
            },
            {
                name: "Norflox TZ",
                image: "💊",
                prescription: false,
                composition: "Norfloxacin + Tinidazole",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 85,
                discount: 10,
                price: 77,
                desc: "For stomach infections.",
                uses: "Diarrhea, Dysentery",
                storage: "Store below 25°C"
            },
            {
                name: "Avomine 25",
                image: "💊",
                prescription: false,
                composition: "Promethazine 25mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 35,
                discount: 5,
                price: 33,
                desc: "Anti-nausea and anti-vomiting.",
                uses: "Nausea, Vomiting, Motion sickness",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Ondem 4",
                image: "💊",
                prescription: false,
                composition: "Ondansetron 4mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 85,
                discount: 10,
                price: 77,
                desc: "Anti-emetic tablet.",
                uses: "Nausea, Vomiting",
                storage: "Store below 30°C"
            },
            {
                name: "Limcee Vitamin C",
                image: "🍊",
                prescription: false,
                composition: "Ascorbic Acid 500mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 45,
                discount: 10,
                price: 41,
                desc: "Chewable Vitamin C tablets.",
                uses: "Immunity, Cold prevention",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Celin 500",
                image: "🍊",
                prescription: false,
                composition: "Vitamin C 500mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 38,
                discount: 8,
                price: 35,
                desc: "Vitamin C supplement.",
                uses: "Immunity boost, Antioxidant",
                storage: "Store below 25°C"
            },
            {
                name: "Becosules Capsules",
                image: "💊",
                prescription: false,
                composition: "B-Complex with Vitamin C",
                unit: "Strip of 20",
                quantity: "1 Strip",
                mrp: 65,
                discount: 10,
                price: 59,
                desc: "Multivitamin capsules.",
                uses: "Vitamin deficiency, Weakness",
                storage: "Store in a cool, dry place"
            },
            {
                name: "A to Z NS",
                image: "💊",
                prescription: false,
                composition: "Multivitamins + Minerals",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 95,
                discount: 12,
                price: 84,
                desc: "Complete multivitamin supplement.",
                uses: "Overall health, Energy",
                storage: "Store below 25°C"
            },
            {
                name: "Neurobion Forte",
                image: "💊",
                prescription: false,
                composition: "Vitamin B1, B6, B12",
                unit: "Strip of 30",
                quantity: "1 Strip",
                mrp: 135,
                discount: 12,
                price: 119,
                desc: "Nerve health supplement.",
                uses: "Nerve health, Numbness, Tingling",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Evion 400",
                image: "💊",
                prescription: false,
                composition: "Vitamin E 400mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 68,
                discount: 10,
                price: 61,
                desc: "Vitamin E capsules.",
                uses: "Skin health, Antioxidant",
                storage: "Store below 25°C"
            },
            {
                name: "Shelcal 500",
                image: "💊",
                prescription: false,
                composition: "Calcium 500mg + Vitamin D3",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 175,
                discount: 15,
                price: 149,
                desc: "Calcium and Vitamin D supplement.",
                uses: "Bone health, Calcium deficiency",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Calcimax 500",
                image: "💊",
                prescription: false,
                composition: "Calcium Carbonate 500mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 145,
                discount: 12,
                price: 128,
                desc: "Calcium supplement tablets.",
                uses: "Bone strength, Osteoporosis",
                storage: "Store below 30°C"
            },
            {
                name: "D-Rise 60K",
                image: "💊",
                prescription: false,
                composition: "Cholecalciferol 60000 IU",
                unit: "Strip of 4",
                quantity: "1 Strip",
                mrp: 145,
                discount: 15,
                price: 123,
                desc: "Vitamin D3 supplement.",
                uses: "Vitamin D deficiency",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Uprise D3 60K",
                image: "💊",
                prescription: false,
                composition: "Vitamin D3 60000 IU",
                unit: "Strip of 4",
                quantity: "1 Strip",
                mrp: 155,
                discount: 12,
                price: 136,
                desc: "Weekly Vitamin D3 dose.",
                uses: "Vitamin D deficiency, Bone health",
                storage: "Store below 25°C"
            },
            {
                name: "Dexorange Syrup",
                image: "🧴",
                prescription: false,
                composition: "Iron + Folic Acid + B12",
                unit: "Bottle",
                quantity: "200ml",
                mrp: 125,
                discount: 10,
                price: 113,
                desc: "Iron tonic for anemia.",
                uses: "Anemia, Iron deficiency",
                storage: "Store in a cool place"
            },
            {
                name: "Liv.52 Tablets",
                image: "💊",
                prescription: false,
                composition: "Herbal liver formula",
                unit: "Bottle",
                quantity: "100 tablets",
                mrp: 165,
                discount: 12,
                price: 145,
                desc: "Himalaya liver care tablets.",
                uses: "Liver health, Detox",
                storage: "Store in a dry place"
            },
            {
                name: "Himalaya Cystone",
                image: "💊",
                prescription: false,
                composition: "Herbal kidney formula",
                unit: "Bottle",
                quantity: "60 tablets",
                mrp: 175,
                discount: 12,
                price: 154,
                desc: "Kidney and urinary health.",
                uses: "Kidney stones, UTI",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Himalaya Bonnisan",
                image: "🧴",
                prescription: false,
                composition: "Herbal digestive formula",
                unit: "Bottle",
                quantity: "120ml",
                mrp: 85,
                discount: 8,
                price: 78,
                desc: "Digestive drops for infants.",
                uses: "Colic, Indigestion, Gas",
                storage: "Store below 25°C"
            },
            {
                name: "Gripe Water (Woodward's)",
                image: "🧴",
                prescription: false,
                composition: "Dill Oil, Sodium Bicarbonate",
                unit: "Bottle",
                quantity: "130ml",
                mrp: 95,
                discount: 8,
                price: 87,
                desc: "Baby colic relief water.",
                uses: "Baby colic, Gas, Hiccups",
                storage: "Store in a cool place"
            },
            {
                name: "Lactocalamine Lotion",
                image: "🧴",
                prescription: false,
                composition: "Calamine, Zinc Oxide",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 145,
                discount: 10,
                price: 131,
                desc: "Skin soothing lotion.",
                uses: "Skin rash, Itching, Sunburn",
                storage: "Store below 30°C"
            },
            {
                name: "Candid Powder",
                image: "🧴",
                prescription: false,
                composition: "Clotrimazole 1%",
                unit: "Bottle",
                quantity: "100g",
                mrp: 175,
                discount: 12,
                price: 154,
                desc: "Antifungal dusting powder.",
                uses: "Fungal infections, Prickly heat",
                storage: "Store in a dry place"
            },
            {
                name: "Ring Guard Cream",
                image: "🧴",
                prescription: false,
                composition: "Miconazole + Neomycin",
                unit: "Tube",
                quantity: "20g",
                mrp: 95,
                discount: 10,
                price: 86,
                desc: "Antifungal skin cream.",
                uses: "Ringworm, Fungal infections",
                storage: "Store below 25°C"
            },
            {
                name: "Canesten Cream",
                image: "🧴",
                prescription: false,
                composition: "Clotrimazole 1%",
                unit: "Tube",
                quantity: "20g",
                mrp: 112,
                discount: 10,
                price: 101,
                desc: "Antifungal cream.",
                uses: "Fungal skin infections",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Soframycin Skin Cream",
                image: "🧴",
                prescription: false,
                composition: "Framycetin Sulphate 1%",
                unit: "Tube",
                quantity: "30g",
                mrp: 85,
                discount: 8,
                price: 78,
                desc: "Antibiotic skin cream.",
                uses: "Minor cuts, Burns, Wounds",
                storage: "Store below 25°C"
            },
            {
                name: "Burnol Cream",
                image: "🧴",
                prescription: false,
                composition: "Aminacrine HCl + Cetrimide",
                unit: "Tube",
                quantity: "20g",
                mrp: 65,
                discount: 8,
                price: 60,
                desc: "Burn and wound care cream.",
                uses: "Burns, Cuts, Wounds",
                storage: "Store in a cool place"
            },
            {
                name: "Boroline Cream",
                image: "🧴",
                prescription: false,
                composition: "Boric Acid, Zinc Oxide",
                unit: "Tube",
                quantity: "40g",
                mrp: 60,
                discount: 5,
                price: 57,
                desc: "Antiseptic skin cream.",
                uses: "Dry skin, Cracked heels, Cuts",
                storage: "Store below 30°C"
            },
            {
                name: "Boroplus Cream",
                image: "🧴",
                prescription: false,
                composition: "Herbs, Boric acid",
                unit: "Tube",
                quantity: "80ml",
                mrp: 85,
                discount: 10,
                price: 77,
                desc: "Antiseptic moisturizing cream.",
                uses: "Dry skin, Minor cuts",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Vaseline Petroleum Jelly",
                image: "🧴",
                prescription: false,
                composition: "White Petroleum Jelly",
                unit: "Jar",
                quantity: "100g",
                mrp: 155,
                discount: 10,
                price: 140,
                desc: "Skin protectant jelly.",
                uses: "Dry skin, Cracked lips, Wound care",
                storage: "Store at room temperature"
            },
            {
                name: "Glycerin (Pure)",
                image: "🧴",
                prescription: false,
                composition: "Glycerin IP",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 65,
                discount: 5,
                price: 62,
                desc: "Moisturizing glycerin.",
                uses: "Dry skin, Chapped lips",
                storage: "Store in a cool place"
            },
            {
                name: "Orasep Mouth Wash",
                image: "🧴",
                prescription: false,
                composition: "Chlorhexidine 0.2%",
                unit: "Bottle",
                quantity: "150ml",
                mrp: 125,
                discount: 10,
                price: 113,
                desc: "Antiseptic mouth wash.",
                uses: "Oral hygiene, Gum disease",
                storage: "Store below 25°C"
            },
            {
                name: "Listerine Mouth Wash",
                image: "🧴",
                prescription: false,
                composition: "Essential oils, Thymol",
                unit: "Bottle",
                quantity: "250ml",
                mrp: 175,
                discount: 12,
                price: 154,
                desc: "Daily oral care mouthwash.",
                uses: "Bad breath, Oral hygiene",
                storage: "Store at room temperature"
            },
            {
                name: "Betadine Gargle",
                image: "🧴",
                prescription: false,
                composition: "Povidone Iodine 2%",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 115,
                discount: 10,
                price: 104,
                desc: "Throat gargle solution.",
                uses: "Sore throat, Mouth ulcers",
                storage: "Store away from light"
            },
            {
                name: "Smyle Mouth Ulcer Gel",
                image: "🧴",
                prescription: false,
                composition: "Choline Salicylate + Lignocaine",
                unit: "Tube",
                quantity: "10g",
                mrp: 85,
                discount: 8,
                price: 78,
                desc: "Mouth ulcer relief gel.",
                uses: "Mouth ulcers, Gum pain",
                storage: "Store below 25°C"
            },
            {
                name: "Sensodent K Toothpaste",
                image: "🦷",
                prescription: false,
                composition: "Potassium Nitrate 5%",
                unit: "Tube",
                quantity: "100g",
                mrp: 145,
                discount: 12,
                price: 128,
                desc: "Sensitive teeth toothpaste.",
                uses: "Tooth sensitivity",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Parodontax Toothpaste",
                image: "🦷",
                prescription: false,
                composition: "Stannous Fluoride",
                unit: "Tube",
                quantity: "100g",
                mrp: 185,
                discount: 12,
                price: 163,
                desc: "Gum care toothpaste.",
                uses: "Bleeding gums, Gum health",
                storage: "Store below 30°C"
            }
        ]
    },
    {
        category: "Prescription Medicines",
        icon: "🩺",
        id: "rx",
        products: [
            {
                name: "Azithral 500 (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Azithromycin 500mg",
                unit: "Strip of 3",
                quantity: "1 Strip",
                mrp: 118,
                discount: 15,
                price: 100,
                desc: "Antibiotic for bacterial infections by Cipla.",
                uses: "Respiratory infections, Skin infections, Ear infections",
                storage: "Store below 25°C"
            },
            {
                name: "Cifran 500 (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Ciprofloxacin 500mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 125,
                discount: 12,
                price: 110,
                desc: "Fluoroquinolone antibiotic by Cipla.",
                uses: "UTI, Respiratory infections, Typhoid",
                storage: "Store at room temperature"
            },
            {
                name: "Ciplox 500 (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Ciprofloxacin 500mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 98,
                discount: 10,
                price: 88,
                desc: "Broad spectrum antibiotic by Cipla.",
                uses: "Bacterial infections, UTI, Diarrhea",
                storage: "Store below 30°C"
            },
            {
                name: "Cipmox 500 (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Amoxicillin 500mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 145,
                discount: 15,
                price: 123,
                desc: "Penicillin antibiotic by Cipla.",
                uses: "Throat infections, Ear infections, Dental infections",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Novamox 500 (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Amoxicillin 500mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 98,
                discount: 10,
                price: 88,
                desc: "Antibiotic for various infections by Cipla.",
                uses: "Bacterial infections, Pneumonia",
                storage: "Store below 25°C"
            },
            {
                name: "Cifran CT (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Ciprofloxacin 500mg + Tinidazole 600mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 175,
                discount: 15,
                price: 149,
                desc: "Combination antibiotic for infections by Cipla.",
                uses: "Diarrhea, Dysentery, Abdominal infections",
                storage: "Store at room temperature"
            },
            {
                name: "Citralka Syrup (Cipla)",
                image: "🧴",
                prescription: true,
                composition: "Disodium Hydrogen Citrate",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 95,
                discount: 8,
                price: 87,
                desc: "Alkalizer for urine pH balance by Cipla.",
                uses: "UTI, Kidney stones, Gout",
                storage: "Store below 25°C"
            },
            {
                name: "Telma 40 (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 130,
                discount: 10,
                price: 117,
                desc: "Blood pressure medication by Cipla.",
                uses: "Hypertension, Heart failure",
                storage: "Store at room temperature"
            },
            {
                name: "Telma H (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg + Hydrochlorothiazide 12.5mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 175,
                discount: 12,
                price: 154,
                desc: "Combination BP medicine by Cipla.",
                uses: "Hypertension",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Amlokind AT (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Amlodipine 5mg + Atenolol 50mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 98,
                discount: 10,
                price: 88,
                desc: "Antihypertensive combination by Cipla.",
                uses: "High blood pressure, Angina",
                storage: "Store below 25°C"
            }
        ]
    },
    {
        category: "Cold, Cough & Fever",
        icon: "🤧",
        id: "cold",
        products: [
            {
                name: "Alex Cough Syrup (Cipla)",
                image: "🧴",
                prescription: false,
                composition: "Dextromethorphan + Phenylephrine + CPM",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 95,
                discount: 8,
                price: 87,
                desc: "Cough suppressant by Cipla.",
                uses: "Dry cough, Cold, Allergic cough",
                storage: "Store away from sunlight"
            },
            {
                name: "Cofsils (Cipla)",
                image: "🍬",
                prescription: false,
                composition: "Amylmetacresol + Dichlorobenzyl alcohol",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 45,
                discount: 5,
                price: 43,
                desc: "Throat lozenges by Cipla.",
                uses: "Sore throat, Throat irritation",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Sinarest (Cipla)",
                image: "💊",
                prescription: false,
                composition: "Paracetamol + Phenylephrine + CPM + Caffeine",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 45,
                discount: 10,
                price: 41,
                desc: "Cold and flu relief tablet by Cipla.",
                uses: "Cold, Flu, Nasal congestion, Fever",
                storage: "Store below 25°C"
            },
            {
                name: "Solvin Cold (Cipla)",
                image: "💊",
                prescription: false,
                composition: "Paracetamol + Phenylephrine + Cetirizine",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 65,
                discount: 10,
                price: 59,
                desc: "Cold and allergy relief by Cipla.",
                uses: "Cold, Runny nose, Sneezing",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Chericof (Cipla)",
                image: "🧴",
                prescription: false,
                composition: "Dextromethorphan + CPM + Phenylephrine",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 85,
                discount: 8,
                price: 78,
                desc: "Cough syrup by Cipla.",
                uses: "Cough, Cold, Congestion",
                storage: "Store away from sunlight"
            },
            {
                name: "Tussq DX (Cipla)",
                image: "🧴",
                prescription: false,
                composition: "Dextromethorphan + Phenylephrine + CPM",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 92,
                discount: 10,
                price: 83,
                desc: "Dry cough syrup by Cipla.",
                uses: "Dry cough, Allergic cough",
                storage: "Store in a cool place"
            },
            {
                name: "Zincold (Cipla)",
                image: "💊",
                prescription: false,
                composition: "Paracetamol + Cetirizine + Phenylephrine",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 55,
                discount: 8,
                price: 51,
                desc: "Common cold relief tablet by Cipla.",
                uses: "Cold, Flu, Body ache",
                storage: "Store below 30°C"
            }
        ]
    },
    {
        category: "Diabetes & BP Care",
        icon: "💉",
        id: "diabetes",
        products: [
            {
                name: "Gluconorm G1 (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Glimepiride 1mg + Metformin 500mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 125,
                discount: 15,
                price: 106,
                desc: "Diabetes medicine by Cipla.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },
            {
                name: "Gluconorm G2 (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Glimepiride 2mg + Metformin 500mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 145,
                discount: 15,
                price: 123,
                desc: "Diabetes medicine by Cipla.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },
            {
                name: "Cilacar 10 (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Cilnidipine 10mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 195,
                discount: 12,
                price: 172,
                desc: "Blood pressure medication by Cipla.",
                uses: "Hypertension",
                storage: "Store at room temperature"
            },
            {
                name: "Cardace 5 (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Ramipril 5mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 165,
                discount: 15,
                price: 140,
                desc: "ACE inhibitor for BP by Cipla.",
                uses: "Hypertension, Heart failure",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Metlong 500 (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Metformin 500mg SR",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 48,
                discount: 10,
                price: 43,
                desc: "Diabetes medicine by Cipla.",
                uses: "Type 2 Diabetes",
                storage: "Store below 30°C"
            },
            {
                name: "Glimestar 2 (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Glimepiride 2mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 85,
                discount: 12,
                price: 75,
                desc: "Diabetes medicine by Cipla.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },
            {
                name: "Accu-Chek Active Strips",
                image: "📏",
                prescription: false,
                composition: "Test Strips",
                unit: "Box",
                quantity: "50 Strips",
                mrp: 975,
                discount: 12,
                price: 858,
                desc: "Sugar testing strips for glucometer.",
                uses: "Blood Glucose Monitoring",
                storage: "Store cap closed tightly"
            }
        ]
    },
    {
        category: "Skin & Cosmetic Care",
        icon: "🧴",
        id: "skin",
        products: [
            {
                name: "Cetaphil Gentle Cleanser (Cipla)",
                image: "🧴",
                prescription: false,
                composition: "Gentle cleansing formula",
                unit: "Bottle",
                quantity: "250ml",
                mrp: 599,
                discount: 15,
                price: 509,
                desc: "Gentle skin cleanser for all skin types.",
                uses: "Daily cleansing, Sensitive skin",
                storage: "Store in a cool place"
            },
            {
                name: "Cetaphil Moisturizing Lotion (Cipla)",
                image: "🧴",
                prescription: false,
                composition: "Hydrating body lotion",
                unit: "Bottle",
                quantity: "250ml",
                mrp: 575,
                discount: 15,
                price: 489,
                desc: "Daily moisturizer for dry skin.",
                uses: "Dry skin, Daily moisturization",
                storage: "Store below 30°C"
            },
            {
                name: "Excela (Cipla)",
                image: "🧴",
                prescription: false,
                composition: "Moisturizing cream",
                unit: "Tube",
                quantity: "50g",
                mrp: 350,
                discount: 10,
                price: 315,
                desc: "Skin moisturizer by Cipla.",
                uses: "Dry skin, Eczema",
                storage: "Store in a cool place"
            },
            {
                name: "Saslic DS Foaming Face Wash (Cipla)",
                image: "🧴",
                prescription: false,
                composition: "Salicylic Acid 2%",
                unit: "Bottle",
                quantity: "60ml",
                mrp: 299,
                discount: 10,
                price: 269,
                desc: "Acne control face wash by Cipla.",
                uses: "Acne, Oily skin, Blackheads",
                storage: "Store below 25°C"
            },
            {
                name: "Cipla Rivela SPF 50 (Cipla)",
                image: "☀️",
                prescription: false,
                composition: "Broad spectrum sunscreen",
                unit: "Tube",
                quantity: "50g",
                mrp: 595,
                discount: 12,
                price: 524,
                desc: "Sunscreen with SPF 50 by Cipla.",
                uses: "Sun protection, Anti-aging",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Acnelak CL (Cipla)",
                image: "🧴",
                prescription: false,
                composition: "Clindamycin + Adapalene",
                unit: "Tube",
                quantity: "15g",
                mrp: 245,
                discount: 10,
                price: 221,
                desc: "Acne treatment gel by Cipla.",
                uses: "Acne, Pimples",
                storage: "Store away from sunlight"
            }
        ]
    },
    {
        category: "Respiratory Care",
        icon: "🌬️",
        id: "ayurveda",
        products: [
            {
                name: "Foracort 200 Inhaler (Cipla)",
                image: "💨",
                prescription: true,
                composition: "Formoterol 6mcg + Budesonide 200mcg",
                unit: "Inhaler",
                quantity: "120 doses",
                mrp: 485,
                discount: 15,
                price: 412,
                desc: "Asthma inhaler by Cipla.",
                uses: "Asthma, COPD",
                storage: "Store below 25°C"
            },
            {
                name: "Seroflo 250 Inhaler (Cipla)",
                image: "💨",
                prescription: true,
                composition: "Salmeterol 25mcg + Fluticasone 250mcg",
                unit: "Inhaler",
                quantity: "120 doses",
                mrp: 595,
                discount: 12,
                price: 524,
                desc: "Combination inhaler for asthma by Cipla.",
                uses: "Asthma, Breathing difficulties",
                storage: "Store away from direct sunlight"
            },
            {
                name: "Budecort 200 Inhaler (Cipla)",
                image: "💨",
                prescription: true,
                composition: "Budesonide 200mcg",
                unit: "Inhaler",
                quantity: "100 doses",
                mrp: 345,
                discount: 10,
                price: 311,
                desc: "Steroid inhaler by Cipla.",
                uses: "Asthma, Allergic rhinitis",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Duolin Inhaler (Cipla)",
                image: "💨",
                prescription: true,
                composition: "Levosalbutamol + Ipratropium",
                unit: "Inhaler",
                quantity: "200 doses",
                mrp: 195,
                discount: 10,
                price: 176,
                desc: "Bronchodilator inhaler by Cipla.",
                uses: "COPD, Bronchospasm",
                storage: "Store below 30°C"
            },
            {
                name: "Levolin Inhaler (Cipla)",
                image: "💨",
                prescription: true,
                composition: "Levosalbutamol 50mcg",
                unit: "Inhaler",
                quantity: "200 doses",
                mrp: 165,
                discount: 10,
                price: 149,
                desc: "Rescue inhaler for asthma by Cipla.",
                uses: "Acute asthma, Wheezing",
                storage: "Store at room temperature"
            },
            {
                name: "Tiova Inhaler (Cipla)",
                image: "💨",
                prescription: true,
                composition: "Tiotropium 9mcg",
                unit: "Inhaler",
                quantity: "30 doses",
                mrp: 445,
                discount: 12,
                price: 392,
                desc: "Long-acting bronchodilator by Cipla.",
                uses: "COPD",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Montair LC (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Montelukast 10mg + Levocetirizine 5mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 235,
                discount: 15,
                price: 200,
                desc: "Allergy and asthma tablet by Cipla.",
                uses: "Allergic rhinitis, Asthma",
                storage: "Store below 25°C"
            }
        ]
    },
    {
        category: "Surgical & Medical Items",
        icon: "🧪",
        id: "surgical",
        products: [
            {
                name: "Betadine Solution (Cipla)",
                image: "🧴",
                prescription: false,
                composition: "Povidone Iodine 5%",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 105,
                discount: 8,
                price: 97,
                desc: "Antiseptic solution by Cipla.",
                uses: "Wound cleaning, Antiseptic",
                storage: "Store away from light"
            },
            {
                name: "Betadine Ointment (Cipla)",
                image: "🩹",
                prescription: false,
                composition: "Povidone Iodine 5%",
                unit: "Tube",
                quantity: "20g",
                mrp: 75,
                discount: 5,
                price: 71,
                desc: "Antiseptic ointment by Cipla.",
                uses: "Minor cuts, Burns, Infections",
                storage: "Store below 25°C"
            },
            {
                name: "Dettol Antiseptic Liquid",
                image: "🧼",
                prescription: false,
                composition: "Chloroxylenol, Terpineol",
                unit: "Bottle",
                quantity: "550ml",
                mrp: 216,
                discount: 5,
                price: 205,
                desc: "Disinfectant liquid for first aid.",
                uses: "Cuts, Scratches, Disinfection",
                storage: "Keep out of reach of children"
            },
            {
                name: "Band-Aid Flexible Fabric",
                image: "🩹",
                prescription: false,
                composition: "Adhesive bandage",
                unit: "Box",
                quantity: "100 pieces",
                mrp: 195,
                discount: 10,
                price: 176,
                desc: "Flexible fabric bandages.",
                uses: "Minor cuts, Wounds",
                storage: "Store in a dry place"
            },
            {
                name: "Cotton Roll",
                image: "🧻",
                prescription: false,
                composition: "Absorbent cotton",
                unit: "Roll",
                quantity: "500g",
                mrp: 145,
                discount: 8,
                price: 133,
                desc: "Medical grade absorbent cotton.",
                uses: "Wound dressing, Cleaning",
                storage: "Keep in a dry place"
            }
        ]
    },
    {
        category: "Baby Care Products",
        icon: "👶",
        id: "baby",
        products: [
            {
                name: "Cipla Lactobest Drops",
                image: "🍼",
                prescription: false,
                composition: "Lactobacillus probiotic",
                unit: "Bottle",
                quantity: "10ml",
                mrp: 145,
                discount: 10,
                price: 131,
                desc: "Probiotic drops for infants by Cipla.",
                uses: "Digestive health, Colic relief",
                storage: "Store in refrigerator"
            },
            {
                name: "Supradyn Baby Drops (Cipla)",
                image: "🍼",
                prescription: false,
                composition: "Multivitamins",
                unit: "Bottle",
                quantity: "30ml",
                mrp: 125,
                discount: 8,
                price: 115,
                desc: "Multivitamin drops for infants by Cipla.",
                uses: "Vitamin supplementation",
                storage: "Store below 25°C"
            },
            {
                name: "Pampers Active Baby (L)",
                image: "🧸",
                prescription: false,
                composition: "Cotton soft material",
                unit: "Pack",
                quantity: "44 Pants",
                mrp: 799,
                discount: 15,
                price: 679,
                desc: "Diapers for babies (9-14kg).",
                uses: "Baby hygiene",
                storage: "Store in a dry place"
            },
            {
                name: "Johnson's Baby Powder",
                image: "🍼",
                prescription: false,
                composition: "Talc, Fragrance",
                unit: "Bottle",
                quantity: "200g",
                mrp: 195,
                discount: 10,
                price: 176,
                desc: "Baby powder for soft skin.",
                uses: "Baby care, Skin protection",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Himalaya Baby Lotion",
                image: "🧴",
                prescription: false,
                composition: "Almond oil, Olive oil",
                unit: "Bottle",
                quantity: "200ml",
                mrp: 175,
                discount: 10,
                price: 158,
                desc: "Moisturizing baby lotion.",
                uses: "Baby skin care",
                storage: "Store below 30°C"
            }
        ]
    },
    {
        category: "Health Supplements",
        icon: "❤️",
        id: "health",
        products: [
            {
                name: "Supradyn Daily (Cipla)",
                image: "💊",
                prescription: false,
                composition: "Multivitamins + Minerals",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 95,
                discount: 10,
                price: 86,
                desc: "Daily multivitamin by Cipla.",
                uses: "Overall health, Energy",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Zincovit (Cipla)",
                image: "💊",
                prescription: false,
                composition: "Vitamins + Zinc + Grape seed extract",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 135,
                discount: 12,
                price: 119,
                desc: "Immunity booster by Cipla.",
                uses: "Immunity, Antioxidant",
                storage: "Store below 25°C"
            },
            {
                name: "Polybion (Cipla)",
                image: "🧴",
                prescription: false,
                composition: "B-Complex + Vitamin C",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 65,
                discount: 8,
                price: 60,
                desc: "B-complex syrup by Cipla.",
                uses: "Energy, Appetite, Recovery",
                storage: "Store away from sunlight"
            },
            {
                name: "Calcitas (Cipla)",
                image: "💊",
                prescription: false,
                composition: "Calcium + Vitamin D3",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 165,
                discount: 12,
                price: 145,
                desc: "Calcium supplement by Cipla.",
                uses: "Bone health, Calcium deficiency",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Maxirich Daily (Cipla)",
                image: "💊",
                prescription: false,
                composition: "Omega-3 + Multivitamins",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 195,
                discount: 15,
                price: 166,
                desc: "Omega-3 supplement by Cipla.",
                uses: "Heart health, Brain function",
                storage: "Store below 25°C"
            },
            {
                name: "Revital H",
                image: "⚡",
                prescription: false,
                composition: "Vitamins, Minerals, Ginseng",
                unit: "Bottle",
                quantity: "30 Capsules",
                mrp: 330,
                discount: 8,
                price: 304,
                desc: "Daily health supplement for energy.",
                uses: "Energy, Stamina",
                storage: "Store below 25°C"
            },
            {
                name: "Feronia XT (Cipla)",
                image: "💊",
                prescription: false,
                composition: "Iron + Folic Acid + Zinc",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 125,
                discount: 10,
                price: 113,
                desc: "Iron supplement by Cipla.",
                uses: "Anemia, Iron deficiency",
                storage: "Store in a cool, dry place"
            }
        ]
    }
];

// Cart State
let cart = [];

// Configuration
const WHATSAPP_NUMBER = "919028670610";

// Render Logic
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');

    // Render Categories & Products
    storeData.forEach(category => {
        const section = document.createElement('section');
        section.classList.add('category-section');
        section.id = category.id;

        // Header
        const header = document.createElement('div');
        header.classList.add('category-header');
        header.innerHTML = `
            <span class="category-icon">${category.icon}</span>
            <h3 class="category-title">${category.category}</h3>
        `;
        section.appendChild(header);

        // Product Grid
        const grid = document.createElement('div');
        grid.classList.add('product-grid');

        category.products.forEach(product => {
            const card = createProductCard(product);
            grid.appendChild(card);
        });

        section.appendChild(grid);
        mainContent.appendChild(section);
    });

    // Cart Modal Logic
    setupCartListeners();

    // Search Listeners - Both Mobile and Desktop
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchInputDesktop = document.getElementById('search-input-desktop');
    const searchBtnDesktop = document.getElementById('search-btn-desktop');

    // Mobile search
    searchInput.addEventListener('input', (e) => {
        filterProducts(e.target.value);
        // Sync desktop search
        if (searchInputDesktop) searchInputDesktop.value = e.target.value;
    });
    searchBtn.addEventListener('click', () => filterProducts(searchInput.value));

    // Desktop search
    if (searchInputDesktop) {
        searchInputDesktop.addEventListener('input', (e) => {
            filterProducts(e.target.value);
            // Sync mobile search
            searchInput.value = e.target.value;
        });
    }
    if (searchBtnDesktop) {
        searchBtnDesktop.addEventListener('click', () => filterProducts(searchInputDesktop.value));
    }

    // Initialize - show all products on page load
    filterProducts('');

    // Mobile Menu
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    menuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when link clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            menuBtn.querySelector('i').classList.remove('fa-times');
            menuBtn.querySelector('i').classList.add('fa-bars');
        });
    });
});

function filterProducts(query) {
    const term = query.toLowerCase().trim();
    const productCards = document.querySelectorAll('.product-card');
    const categorySections = document.querySelectorAll('.category-section');

    // If no search term, show ALL products and sections
    if (term === '') {
        productCards.forEach(card => {
            card.style.display = 'flex';
        });
        categorySections.forEach(section => {
            section.style.display = 'block';
        });
        return;
    }

    // Filter products based on search term
    productCards.forEach(card => {
        const name = card.querySelector('.product-name').innerText.toLowerCase();
        const composition = card.querySelector('.product-meta')?.innerText.toLowerCase() || '';

        // Search in name and composition
        if (name.includes(term) || composition.includes(term)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });

    // Show/hide sections based on whether they have visible products
    categorySections.forEach(section => {
        const productGrid = section.querySelector('.product-grid');
        const visibleProducts = productGrid.querySelectorAll('.product-card:not([style*="display: none"])');

        if (visibleProducts.length > 0) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    // Create unique ID for product if not present (simple hash or name)
    const productId = product.name.replace(/\s+/g, '-').toLowerCase();

    // Zoom logic for overlay
    card.innerHTML = `
        <div class="card-image-wrapper">
            <div class="card-image">${product.image}</div>
            <div class="product-overlay">
                <div class="overlay-text">
                    <h4>About Product</h4>
                    <p>${product.desc}</p>
                    <p><strong>Uses:</strong> ${product.uses}</p>
                    <p><strong>Storage:</strong> ${product.storage}</p>
                </div>
            </div>
        </div>
        
        <div class="card-content">
            <h3 class="product-name">${product.name}</h3>
            ${product.prescription ? '<div class="prescription-tag">Rx Prescription Required</div>' : ''}
            <div class="product-meta">
                <p><strong>Comp:</strong> ${product.composition}</p>
                <p>${product.unit} | ${product.quantity}</p>
            </div>
            
            <div class="product-price-section">
                <div>
                    <div>
                        <span class="mrp">₹${product.mrp}</span>
                        <span class="discount-badge">${product.discount}% OFF</span>
                    </div>
                    <div class="final-price">₹${product.price}</div>
                </div>
            </div>
            
            <button class="order-btn add-to-cart-btn" data-id="${productId}">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;

    // Attach event listener to the button
    const btn = card.querySelector('.add-to-cart-btn');
    btn.addEventListener('click', () => addToCart(product, productId));

    return card;
}

function addToCart(product, id) {
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            id: id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: 1,
            unit: product.unit
        });
    }

    updateCartUI();
    toggleCartModal(true); // Open cart when item added
}

function updateCartUI() {
    // Update Badge
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cart-count').innerText = totalQty;

    // Render Cart Items
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty</div>';
        cartTotalPrice.innerText = '₹0';
        return;
    }

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;

        const itemEl = document.createElement('div');
        itemEl.classList.add('cart-item');
        itemEl.innerHTML = `
            <div class="cart-item-image">${item.image}</div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">₹${item.price}</div>
                <div class="cart-item-controls">
                    <button class="qty-btn minus" data-id="${item.id}">-</button>
                    <span class="cart-item-quantity">${item.qty}</span>
                    <button class="qty-btn plus" data-id="${item.id}">+</button>
                    <button class="remove-btn" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;

        cartItemsContainer.appendChild(itemEl);
    });

    cartTotalPrice.innerText = `₹${total}`;

    // Attach event listeners for cart controls
    document.querySelectorAll('.qty-btn.plus').forEach(btn => {
        btn.addEventListener('click', (e) => updateItemQty(e.target.dataset.id, 1));
    });
    document.querySelectorAll('.qty-btn.minus').forEach(btn => {
        btn.addEventListener('click', (e) => updateItemQty(e.target.dataset.id, -1));
    });
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => removeFromCart(e.target.closest('button').dataset.id));
    });
}

function updateItemQty(id, change) {
    const item = cart.find(item => item.id === id);
    if (!item) return;

    item.qty += change;
    if (item.qty <= 0) {
        removeFromCart(id);
    } else {
        updateCartUI();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function setupCartListeners() {
    const cartBtn = document.getElementById('cart-btn');
    const closeCartBtn = document.getElementById('close-cart');
    const cartModal = document.getElementById('cart-modal');
    const checkoutBtn = document.getElementById('checkout-btn');

    cartBtn.addEventListener('click', () => toggleCartModal(true));
    closeCartBtn.addEventListener('click', () => toggleCartModal(false));

    // Close on click outside
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) toggleCartModal(false);
    });

    checkoutBtn.addEventListener('click', checkoutToWhatsApp);
}

function toggleCartModal(show) {
    const cartModal = document.getElementById('cart-modal');
    if (show) {
        cartModal.classList.add('active');
    } else {
        cartModal.classList.remove('active');
    }
}

function checkoutToWhatsApp() {
    if (cart.length === 0) return;

    const customerNameInput = document.getElementById('customer-name');
    const customerName = customerNameInput.value.trim();

    if (!customerName) {
        alert("Please enter your name to proceed.");
        customerNameInput.focus();
        return;
    }

    let message = `Hello Shobha Medical Store,\nI want to order the following items:\n\n*Customer Name:* ${customerName}\n\n`;
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        message += `${index + 1}. ${item.name} (${item.unit})\n   Qty: ${item.qty} | Price: ₹${itemTotal}\n`;
    });

    message += `\n*Total Amount: ₹${total}*`;
    message += `\n\nPlease confirm my order.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
