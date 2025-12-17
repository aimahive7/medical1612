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
                name: "Dolo 650 (Micro Labs)",
                image: "💊",
                prescription: false,
                composition: "Paracetamol 650mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 33,
                discount: 5,
                price: 31,
                desc: "India's most trusted fever & pain relief tablet.",
                uses: "Fever, Cold, Body ache",
                storage: "Store below 30°C"
            },
            {
                name: "Sinarest New Tablet (Centaur)",
                image: "💊",
                prescription: false,
                composition: "Paracetamol + Phenylephrine + CPM",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 65,
                discount: 8,
                price: 60,
                desc: "Relief from cold, nasal congestion and fever.",
                uses: "Common cold, Flu, Fever",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Cheston Cold (Cipla)",
                image: "💊",
                prescription: false,
                composition: "Cetirizine + Paracetamol + Phenylephrine",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 48,
                discount: 5,
                price: 45,
                desc: "Total relief from cold symptoms.",
                uses: "Cold, Runny nose, Blocked nose",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Wikoryl Tablet (Alembic)",
                image: "💊",
                prescription: false,
                composition: "Paracetamol + Phenylephrine + CPM",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 52,
                discount: 8,
                price: 48,
                desc: "Anti-cold formulation for fast relief.",
                uses: "Fever, Cold, Allergic rhinitis",
                storage: "Store below 25°C"
            },
            {
                name: "Sumo Cold (Alkem)",
                image: "💊",
                prescription: false,
                composition: "Paracetamol + Phenylephrine + Diphenhydramine + Caffeine",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 45,
                discount: 5,
                price: 42,
                desc: "Effective relief from cold and flu.",
                uses: "Cold, Fever, Headache",
                storage: "Store in a dry place"
            },
            {
                name: "Solvin Cold (Ipca)",
                image: "💊",
                prescription: false,
                composition: "Paracetamol + Phenylephrine + CPM",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 55,
                discount: 8,
                price: 51,
                desc: "Trusted remedy for seasonal colds.",
                uses: "Cold, Sneezing, Watery eyes",
                storage: "Store below 30°C"
            },
            {
                name: "Febrex Plus (Indoco)",
                image: "💊",
                prescription: false,
                composition: "Paracetamol + Phenylephrine + CPM",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 58,
                discount: 8,
                price: 53,
                desc: "Tablets for fever and cold congestion.",
                uses: "Fever, Nasal congestion",
                storage: "Store in a cool place"
            },
            {
                name: "Alex Cough Syrup (Glenmark)",
                image: "🧴",
                prescription: false,
                composition: "Dextromethorphan + Phenylephrine + CPM",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 118,
                discount: 10,
                price: 106,
                desc: "Syrup for dry cough and cold.",
                uses: "Dry cough, Cold, Allergy",
                storage: "Store away from light"
            },
            {
                name: "Ascoril D Plus (Glenmark)",
                image: "🧴",
                prescription: false,
                composition: "Phenylephrine + CPM + Dextromethorphan",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 125,
                discount: 12,
                price: 110,
                desc: "Sugar-free cough syrup.",
                uses: "Dry cough, Congestion",
                storage: "Store below 25°C"
            },
            {
                name: "Grilinctus Syrup (Franco-Indian)",
                image: "🧴",
                prescription: false,
                composition: "Dextromethorphan + CPM + Guaiphenesin + Ammonium Chloride",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 115,
                discount: 10,
                price: 104,
                desc: "Comprehensive cough relief formula.",
                uses: "Cough, Cold, Chest congestion",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Benadryl Cough Formula (J&J)",
                image: "🧴",
                prescription: false,
                composition: "Diphenhydramine + Ammonium Chloride + Sodium Citrate",
                unit: "Bottle",
                quantity: "150ml",
                mrp: 135,
                discount: 10,
                price: 121,
                desc: "Time-tested cough relief syrup.",
                uses: "Cough, Sore throat",
                storage: "Store below 30°C"
            },
            {
                name: "Vicks Action 500 Advanced (P&G)",
                image: "💊",
                prescription: false,
                composition: "Paracetamol + Diphenhydramine + Phenylephrine + Caffeine",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 50,
                discount: 5,
                price: 47,
                desc: "Relief from multiple symptoms of cold.",
                uses: "Headache, Body ache, Blocked nose",
                storage: "Store in a dry place"
            },
            {
                name: "Corex DX (Pfizer)",
                image: "🧴",
                prescription: false,
                composition: "Dextromethorphan + CPM",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 110,
                discount: 8,
                price: 101,
                desc: "For dry irritating cough.",
                uses: "Dry cough, Throat irritation",
                storage: "Store below 30°C"
            },
            {
                name: "Tossex (Abbott)",
                image: "🧴",
                prescription: false,
                composition: "Codeine Phosphate + Triprolidine",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 145,
                discount: 10,
                price: 130,
                desc: "Antitussive cough syrup.",
                uses: "Dry cough",
                storage: "Store in a secure place"
            },
            {
                name: "Zedex Syrup (Wockhardt)",
                image: "🧴",
                prescription: true,
                composition: "Bromhexine + Dextromethorphan + Ammonium Chloride",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 118,
                discount: 10,
                price: 106,
                desc: "Cough syrup for productive cough.",
                uses: "Productive cough, Bronchitis",
                storage: "Store in a cool place"
            },
            {
                name: "Ascoril LS (Glenmark)",
                image: "🧴",
                prescription: true,
                composition: "Levosalbutamol + Ambroxol + Guaiphenesin",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 118,
                discount: 12,
                price: 104,
                desc: "Expectorant mucolytic syrup.",
                uses: "Wet cough, Bronchitis, Asthma",
                storage: "Store away from sunlight"
            },
            {
                name: "Asthalin Expectorant (Cipla)",
                image: "🧴",
                prescription: true,
                composition: "Salbutamol + Guaiphenesin",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 35,
                discount: 5,
                price: 33,
                desc: "Relief from bronchospasm and cough.",
                uses: "Asthma, Bronchitis, Wet cough",
                storage: "Store below 25°C"
            },
            {
                name: "Ambrodil S (Aristo)",
                image: "🧴",
                prescription: false,
                composition: "Ambroxol + Salbutamol",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 45,
                discount: 5,
                price: 42,
                desc: "Mucolytic bronchodilator syrup.",
                uses: "Productive cough, Respiratory issues",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Crocin Cold & Flu Max (GSK)",
                image: "💊",
                prescription: false,
                composition: "Paracetamol + Caffeine + Phenylephrine",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 65,
                discount: 8,
                price: 60,
                desc: "Max relief from cold and flu symptoms.",
                uses: "Fever, Headache, Sinus congestion",
                storage: "Store below 30°C"
            },
            {
                name: "Otrivin Oxy (GSK)",
                image: "💧",
                prescription: false,
                composition: "Oxymetazoline 0.05%",
                unit: "Spray",
                quantity: "10ml",
                mrp: 98,
                discount: 5,
                price: 93,
                desc: "Fast acting nasal spray.",
                uses: "Blocked nose (within 25 seconds)",
                storage: "Store at room temperature"
            },
            {
                name: "Nasivion Adult (P&G)",
                image: "💧",
                prescription: false,
                composition: "Oxymetazoline 0.05%",
                unit: "Drops",
                quantity: "10ml",
                mrp: 88,
                discount: 5,
                price: 84,
                desc: "Nasal drops for blocked nose.",
                uses: "Nasal congestion",
                storage: "Store below 30°C"
            },
            {
                name: "Maxtra Syrup (Zuventus)",
                image: "🧴",
                prescription: false,
                composition: "Phenylephrine + CPM",
                unit: "Bottle",
                quantity: "60ml",
                mrp: 95,
                discount: 10,
                price: 86,
                desc: "Cold relief for kids.",
                uses: "Cold, Sneezing, Runny nose",
                storage: "Store in a cool, dry place"
            },
            {
                name: "T-Minic Drops (GSK)",
                image: "🧴",
                prescription: false,
                composition: "Phenylephrine + CPM",
                unit: "Bottle",
                quantity: "15ml",
                mrp: 85,
                discount: 8,
                price: 78,
                desc: "Drops for infant cold relief.",
                uses: "Common cold, Congestion in babies",
                storage: "Store below 25°C"
            },
            {
                name: "Montair LC (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Montelukast + Levocetirizine",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 295,
                discount: 15,
                price: 250,
                desc: "For allergic rhinitis and asthma.",
                uses: "Allergy, Runny nose, Sneezing",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Telekast L (Lupin)",
                image: "💊",
                prescription: true,
                composition: "Montelukast + Levocetirizine",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 185,
                discount: 12,
                price: 163,
                desc: "Anti-allergic medication.",
                uses: "Allergic rhinitis, Asthma",
                storage: "Store below 30°C"
            },
            {
                name: "Levocet M (Hetero)",
                image: "💊",
                prescription: true,
                composition: "Levocetirizine + Montelukast",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 145,
                discount: 10,
                price: 130,
                desc: "Combination for allergy relief.",
                uses: "Allergies, Hay fever",
                storage: "Store in a dry place"
            },
            {
                name: "Montek LC (Sun Pharma)",
                image: "💊",
                prescription: true,
                composition: "Montelukast + Levocetirizine",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 190,
                discount: 12,
                price: 167,
                desc: "Relief from allergic symptoms.",
                uses: "Sneezing, Runny nose, Asthma",
                storage: "Store below 25°C"
            },
            {
                name: "Allegra 120 (Sanofi)",
                image: "💊",
                prescription: false,
                composition: "Fexofenadine 120mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 218,
                discount: 15,
                price: 185,
                desc: "Non-drowsy allergy relief.",
                uses: "Allergies, Skin Rashes",
                storage: "Store below 25°C"
            },
            {
                name: "Zyrtec (Dr. Reddy's)",
                image: "💊",
                prescription: true,
                composition: "Cetirizine 10mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 45,
                discount: 5,
                price: 43,
                desc: "Fast allergy relief.",
                uses: "Allergy, Urticaria",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Okacet (Cipla)",
                image: "💊",
                prescription: false,
                composition: "Cetirizine 10mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 22,
                discount: 2,
                price: 20,
                desc: "Effective antihistamine tablet.",
                uses: "Cold, Allergy, Itching",
                storage: "Store below 25°C"
            },
            {
                name: "Avil 25 (Sanofi)",
                image: "💊",
                prescription: false,
                composition: "Pheniramine Maleate 25mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 12,
                discount: 0,
                price: 12,
                desc: "Anti-allergic tablet.",
                uses: "Allergy, Itching, Insect bites",
                storage: "Store below 30°C"
            },
            {
                name: "Ctz (Alkem)",
                image: "💊",
                prescription: false,
                composition: "Cetirizine 10mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 35,
                discount: 5,
                price: 33,
                desc: "Standard anti-allergy medicine.",
                uses: "Runny nose, Allergy",
                storage: "Store in a cool place"
            },
            {
                name: "Honitus (Dabur)",
                image: "🧴",
                prescription: false,
                composition: "Herbal Formula",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 110,
                discount: 10,
                price: 99,
                desc: "Ayurvedic cough remedy.",
                uses: "Cough, Sore throat",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Koflet Syrup (Himalaya)",
                image: "🧴",
                prescription: false,
                composition: "Honey + Herbs",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 95,
                discount: 8,
                price: 87,
                desc: "Herbal cough syrup.",
                uses: "All types of cough",
                storage: "Store away from light"
            },
            {
                name: "Koflet Lozenges (Himalaya)",
                image: "🍬",
                prescription: false,
                composition: "Herbal",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 35,
                discount: 2,
                price: 33,
                desc: "Soothes sore throat.",
                uses: "Sore throat, Cough",
                storage: "Store in a dry place"
            },
            {
                name: "Vicks VapoRub (P&G)",
                image: "🧴",
                prescription: false,
                composition: "Menthol, Camphor, Eucalyptus",
                unit: "Jar",
                quantity: "50g",
                mrp: 155,
                discount: 10,
                price: 140,
                desc: "Cold relief balm.",
                uses: "Cold, Congestion, Body ache",
                storage: "Store below 30°C"
            },
            {
                name: "Vicks Inhaler (P&G)",
                image: "🧴",
                prescription: false,
                composition: "Menthol, Camphor",
                unit: "Stick",
                quantity: "1 unit",
                mrp: 65,
                discount: 0,
                price: 65,
                desc: "Portable nasal inhaler.",
                uses: "Blocked nose",
                storage: "Close tightly after use"
            },
            {
                name: "Amrutanjan Relief Cough Syrup",
                image: "🧴",
                prescription: false,
                composition: "Herbal",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 85,
                discount: 5,
                price: 81,
                desc: "Natural relief from cough.",
                uses: "Cough, Throat irritation",
                storage: "Store in a cool place"
            },
            {
                name: "Cofsils Lozenges (Cipla)",
                image: "🍬",
                prescription: false,
                composition: "Amylmetacresol + Dichlorobenzyl",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 35,
                discount: 2,
                price: 33,
                desc: "Triple relief for sore throat.",
                uses: "Sore throat",
                storage: "Store in a dry place"
            },
            {
                name: "Strepsils Orange (Reckitt)",
                image: "🍬",
                prescription: false,
                composition: "Vitamin C + Amylmetacresol",
                unit: "Strip of 8",
                quantity: "1 Strip",
                mrp: 35,
                discount: 0,
                price: 35,
                desc: "Soothing lozenges with Vitamin C.",
                uses: "Sore throat",
                storage: "Store below 25°C"
            },
            {
                name: "Strepsils Honey & Lemon (Reckitt)",
                image: "🍬",
                prescription: false,
                composition: "Honey + Lemon",
                unit: "Strip of 8",
                quantity: "1 Strip",
                mrp: 35,
                discount: 0,
                price: 35,
                desc: "Soothing relief for throat.",
                uses: "Sore throat, Dry throat",
                storage: "Store below 25°C"
            },
            {
                name: "Alex Lozenges (Glenmark)",
                image: "🍬",
                prescription: false,
                composition: "Dextromethorphan + Amylmetacresol",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 45,
                discount: 5,
                price: 43,
                desc: "Cough suppressant lozenges.",
                uses: "Dry cough, Sore throat",
                storage: "Store in a cool, dry place"
            },
            {
                name: "TusQ Tablet (Blue Cross)",
                image: "💊",
                prescription: false,
                composition: "Dextromethorphan + Phenylephrine + CPM",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 65,
                discount: 8,
                price: 60,
                desc: "Tablet for dry cough and cold.",
                uses: "Dry cough, Cold",
                storage: "Store below 30°C"
            },
            {
                name: "Cheston Cold DS (Cipla)",
                image: "🧴",
                prescription: false,
                composition: "Paracetamol + Phenylephrine + Cetirizine",
                unit: "Bottle",
                quantity: "60ml",
                mrp: 85,
                discount: 5,
                price: 81,
                desc: "Double strength cold suspension.",
                uses: "Severe cold in children",
                storage: "Store away from light"
            },
            {
                name: "Sinarest AF (Centaur)",
                image: "🧴",
                prescription: false,
                composition: "Phenylephrine + CPM + Sodium Citrate",
                unit: "Bottle",
                quantity: "60ml",
                mrp: 95,
                discount: 8,
                price: 87,
                desc: "Alcohol-free cold drops.",
                uses: "Cold, Congestion in infants",
                storage: "Store below 25°C"
            },
            {
                name: "Wikoryl AF (Alembic)",
                image: "🧴",
                prescription: false,
                composition: "Phenylephrine + Chlorpheniramine",
                unit: "Bottle",
                quantity: "60ml",
                mrp: 92,
                discount: 8,
                price: 85,
                desc: "Anti-cold syrup for kids.",
                uses: "Fever, Cold, Body ache",
                storage: "Store in a cool place"
            },
            {
                name: "Solvin Cold DS (Ipca)",
                image: "🧴",
                prescription: false,
                composition: "Paracetamol + Phenylephrine + CPM",
                unit: "Bottle",
                quantity: "60ml",
                mrp: 98,
                discount: 8,
                price: 90,
                desc: "Suspension for cold and fever.",
                uses: "Fever, Cold symptoms",
                storage: "Store below 30°C"
            },
            {
                name: "Crocin Pain Relief (GSK)",
                image: "💊",
                prescription: false,
                composition: "Paracetamol + Caffeine",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 65,
                discount: 5,
                price: 62,
                desc: "Targeted pain relief.",
                uses: "Headache, Body pain",
                storage: "Store below 30°C"
            },
            {
                name: "Dolo-250 Syrup (Micro Labs)",
                image: "🧴",
                prescription: false,
                composition: "Paracetamol 250mg/5ml",
                unit: "Bottle",
                quantity: "60ml",
                mrp: 45,
                discount: 2,
                price: 44,
                desc: "Fever relief for children.",
                uses: "Fever, Pain in kids",
                storage: "Store below 25°C"
            },
            {
                name: "Calpol 650 (GSK)",
                image: "💊",
                prescription: false,
                composition: "Paracetamol 650mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 32,
                discount: 2,
                price: 31,
                desc: "Standard fever medication.",
                uses: "Fever, Pain",
                storage: "Store below 30°C"
            },
            {
                name: "Calpol 500 (GSK)",
                image: "💊",
                prescription: false,
                composition: "Paracetamol 500mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 20,
                discount: 0,
                price: 20,
                desc: "Mild fever and pain relief.",
                uses: "Fever, Headache",
                storage: "Store below 30°C"
            },
            {
                name: "P-250 (Apex)",
                image: "🧴",
                prescription: false,
                composition: "Paracetamol 250mg",
                unit: "Bottle",
                quantity: "60ml",
                mrp: 42,
                discount: 2,
                price: 41,
                desc: "Pediatric fever suspension.",
                uses: "Fever in children",
                storage: "Store in a cool place"
            },
            {
                name: "Meftal-P (Blue Cross)",
                image: "🧴",
                prescription: true,
                composition: "Mefenamic Acid",
                unit: "Bottle",
                quantity: "60ml",
                mrp: 55,
                discount: 5,
                price: 52,
                desc: "Fever and pain suspension.",
                uses: "High fever, Body pain",
                storage: "Store below 30°C"
            },
            {
                name: "Ibugesic Plus Syrup (Cipla)",
                image: "🧴",
                prescription: false,
                composition: "Ibuprofen + Paracetamol",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 55,
                discount: 5,
                price: 52,
                desc: "Anti-inflammatory syrup.",
                uses: "Fever, Pain, Inflammation",
                storage: "Store below 25°C"
            },
            {
                name: "Combiflam Syrup (Sanofi)",
                image: "🧴",
                prescription: false,
                composition: "Ibuprofen + Paracetamol",
                unit: "Bottle",
                quantity: "60ml",
                mrp: 48,
                discount: 2,
                price: 47,
                desc: "Dual action pain relief.",
                uses: "Pain, Fever in kids",
                storage: "Store below 25°C"
            },
            {
                name: "Flexon (Aristo)",
                image: "💊",
                prescription: false,
                composition: "Ibuprofen + Paracetamol",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 35,
                discount: 5,
                price: 33,
                desc: "Pain and fever tablet.",
                uses: "Muscle pain, Fever",
                storage: "Store in a dry place"
            },
            {
                name: "Zerodol-P (Ipca)",
                image: "💊",
                prescription: true,
                composition: "Aceclofenac + Paracetamol",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 65,
                discount: 10,
                price: 59,
                desc: "Potent pain killer.",
                uses: "Joint pain, Body ache, Fever",
                storage: "Store below 25°C"
            },
            {
                name: "Aceclo Plus (Aristo)",
                image: "💊",
                prescription: true,
                composition: "Aceclofenac + Paracetamol",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 55,
                discount: 8,
                price: 51,
                desc: "Relief from pain and swelling.",
                uses: "Body pain, Inflammation",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Hifenac-P (Intas)",
                image: "💊",
                prescription: true,
                composition: "Aceclofenac + Paracetamol",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 95,
                discount: 10,
                price: 86,
                desc: "Effective analgesic tablet.",
                uses: "Dental pain, Body pain",
                storage: "Store below 25°C"
            },
            {
                name: "Dolonex DT (Pfizer)",
                image: "💊",
                prescription: true,
                composition: "Piroxicam 20mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 145,
                discount: 12,
                price: 128,
                desc: "Dispersible pain relief.",
                uses: "Severe pain, Arthritis",
                storage: "Store below 30°C"
            },
            {
                name: "Ketorol DT (Dr. Reddy's)",
                image: "💊",
                prescription: true,
                composition: "Ketorolac 10mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 135,
                discount: 10,
                price: 121,
                desc: "Short term toothache relief.",
                uses: "Dental pain, Severe pain",
                storage: "Store below 25°C"
            },
            {
                name: "Zifi 200 (FDC)",
                image: "💊",
                prescription: true,
                composition: "Cefixime 200mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 115,
                discount: 10,
                price: 104,
                desc: "Antibiotic for infections.",
                uses: "Throat infection, Typhoid, UTI",
                storage: "Store below 25°C"
            },
            {
                name: "Taxim-O 200 (Alkem)",
                image: "💊",
                prescription: true,
                composition: "Cefixime 200mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 120,
                discount: 10,
                price: 108,
                desc: "Effective cephalosporin antibiotic.",
                uses: "Respiratory tract infections",
                storage: "Store below 25°C"
            },
            {
                name: "Monocef-O 200 (Aristo)",
                image: "💊",
                prescription: true,
                composition: "Cefpodoxime 200mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 155,
                discount: 12,
                price: 136,
                desc: "Broad spectrum antibiotic.",
                uses: "Severe bacterial infections",
                storage: "Store below 25°C"
            },
            {
                name: "Augmentin 625 (GSK)",
                image: "💊",
                prescription: true,
                composition: "Amoxicillin + Clavulanic Acid",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 225,
                discount: 15,
                price: 191,
                desc: "Gold standard antibiotic.",
                uses: "Bacterial infections",
                storage: "Store below 25°C"
            },
            {
                name: "Clavam 625 (Alkem)",
                image: "💊",
                prescription: true,
                composition: "Amoxicillin + Clavulanic Acid",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 210,
                discount: 15,
                price: 178,
                desc: "Combination antibiotic.",
                uses: "Infections, Pneumonia",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Moxikind-CV 625 (Mankind)",
                image: "💊",
                prescription: true,
                composition: "Amoxicillin + Clavulanic Acid",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 195,
                discount: 12,
                price: 172,
                desc: "Antibiotic for bacterial infections.",
                uses: "Ear, Nose, Throat infections",
                storage: "Store below 25°C"
            },
            {
                name: "Azithral 250 (Cipla)",
                image: "🧴",
                prescription: true,
                composition: "Azithromycin 250mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 110,
                discount: 10,
                price: 99,
                desc: "Macrolide antibiotic.",
                uses: "Throat infection, Tonsillitis",
                storage: "Store below 30°C"
            },
            {
                name: "Azee 500 (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Azithromycin 500mg",
                unit: "Strip of 5",
                quantity: "1 Strip",
                mrp: 135,
                discount: 15,
                price: 115,
                desc: "3-day antibiotic course.",
                uses: "Respiratory infections",
                storage: "Store below 25°C"
            },
            {
                name: "Lincotus (Lincoln)",
                image: "🧴",
                prescription: false,
                composition: "Codeine + Chlorpheniramine",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 140,
                discount: 10,
                price: 126,
                desc: "Cough syrup for dry cough.",
                uses: "Dry cough",
                storage: "Store in a safe place"
            },
            {
                name: "Rexcof DX (Cipla)",
                image: "🧴",
                prescription: false,
                composition: "Dextromethorphan + CPM",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 112,
                discount: 10,
                price: 101,
                desc: "Dry cough relief.",
                uses: "Dry cough, Allergy",
                storage: "Store away from light"
            },
            {
                name: "Grilinctus-BM (Franco-Indian)",
                image: "🧴",
                prescription: true,
                composition: "Terbutaline + Bromhexine",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 98,
                discount: 8,
                price: 90,
                desc: "Bronchodilator cough syrup.",
                uses: "Bronchitis, Wet cough",
                storage: "Store in a cool place"
            },
            {
                name: "Bro-Zedex (Wockhardt)",
                image: "🧴",
                prescription: true,
                composition: "Bromhexine + Terbutaline + Guaiphenesin",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 115,
                discount: 10,
                price: 104,
                desc: "Expectorant for chest congestion.",
                uses: "Productive cough",
                storage: "Store away from light"
            },
            {
                name: "Mucolite (Dr. Morepen)",
                image: "🧴",
                prescription: false,
                composition: "Ambroxol 30mg",
                unit: "Bottle",
                quantity: "100ml",
                mrp: 85,
                discount: 8,
                price: 78,
                desc: "Mucolytic syrup.",
                uses: "Wet cough, Phlegm",
                storage: "Store in a cool place"
            },
            {
                name: "Sinarest Vapocaps (Centaur)",
                image: "🧴",
                prescription: false,
                composition: "Menthol + Camphor + Eucalyptus",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 65,
                discount: 5,
                price: 62,
                desc: "Inhalant capsules for congestion.",
                uses: "Blocked nose, Cold",
                storage: "Store below 25°C"
            },
            {
                name: "Nasoclear (Zuventus)",
                image: "💧",
                prescription: false,
                composition: "Saline Nasal Drops",
                unit: "Bottle",
                quantity: "20ml",
                mrp: 55,
                discount: 5,
                price: 52,
                desc: "Saline drops for dry nose.",
                uses: "Dry nose, Congestion",
                storage: "Store in a cool place"
            },
            {
                name: "Sepmax (Galpha)",
                image: "💊",
                prescription: true,
                composition: "Trimethoprim + Sulfamethoxazole",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 45,
                discount: 5,
                price: 43,
                desc: "Antibiotic tablet.",
                uses: "Bacterial infections",
                storage: "Store away from light"
            },
            {
                name: "Norflox 400 (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Norfloxacin 400mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 75,
                discount: 10,
                price: 68,
                desc: "For urinary and stomach infections.",
                uses: "UTI, Stomach infection",
                storage: "Store below 25°C"
            },
            {
                name: "Ciplox TZ (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Ciprofloxacin + Tinidazole",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 125,
                discount: 12,
                price: 110,
                desc: "Strong antibiotic combination.",
                uses: "Diarrhea, Dysentery",
                storage: "Store below 25°C"
            },
            {
                name: "Oflox 200 (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Ofloxacin 200mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 85,
                discount: 10,
                price: 77,
                desc: "Fluoroquinolone antibiotic.",
                uses: "Typhoid, UTI",
                storage: "Store below 30°C"
            },
            {
                name: "Oflox OZ (Cipla)",
                image: "💊",
                prescription: true,
                composition: "Ofloxacin + Ornidazole",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 135,
                discount: 12,
                price: 119,
                desc: "For stomach infection.",
                uses: "Loose motion, Diarrhea",
                storage: "Store below 25°C"
            },
            {
                name: "Zenflox 200 (Mankind)",
                image: "💊",
                prescription: true,
                composition: "Ofloxacin 200mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 82,
                discount: 10,
                price: 74,
                desc: "Antibiotic tablet.",
                uses: "Bacterial infections",
                storage: "Store below 25°C"
            },
            {
                name: "Mahacef 200 (Mankind)",
                image: "💊",
                prescription: true,
                composition: "Cefixime 200mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 105,
                discount: 10,
                price: 95,
                desc: "Oral cephalosporin antibiotic.",
                uses: "Fever, Infection",
                storage: "Store below 25°C"
            },
            {
                name: "Gudcef 200 (Mankind)",
                image: "💊",
                prescription: true,
                composition: "Cefpodoxime 200mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 145,
                discount: 12,
                price: 128,
                desc: "Antibiotic for severe infections.",
                uses: "Respiratory infections",
                storage: "Store below 25°C"
            },
            {
                name: "Spasmo Proxyvon Plus (Wockhardt)",
                image: "💊",
                prescription: true,
                composition: "Diclofenac + Paracetamol + Dicyclomine",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 65,
                discount: 10,
                price: 59,
                desc: "Pain and spasm relief.",
                uses: "Stomach pain, Cramps",
                storage: "Store below 25°C"
            },
            {
                name: "Cyclopam (Indoco)",
                image: "💊",
                prescription: true,
                composition: "Dicyclomine + Paracetamol",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 48,
                discount: 5,
                price: 45,
                desc: "Relief from stomach cramps.",
                uses: "Abdominal pain, Colic",
                storage: "Store in a dry place"
            },
            {
                name: "Meftal Spas (Blue Cross)",
                image: "💊",
                prescription: true,
                composition: "Mefenamic Acid + Dicyclomine",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 52,
                discount: 5,
                price: 49,
                desc: "Menstrual pain relief.",
                uses: "Period pain, Stomach cramps",
                storage: "Store below 30°C"
            },
            {
                name: "Buscopan 10 (Sanofi)",
                image: "💊",
                prescription: true,
                composition: "Hyoscine Butylbromide",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 45,
                discount: 5,
                price: 43,
                desc: "Antispasmodic tablet.",
                uses: "Stomach cramping",
                storage: "Store below 25°C"
            },
            {
                name: "Crocin 500 (GSK)",
                image: "💊",
                prescription: false,
                composition: "Paracetamol 500mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 20,
                discount: 0,
                price: 20,
                desc: "Safe fever relief.",
                uses: "Fever, Mild pain",
                storage: "Store below 30°C"
            },
            {
                name: "Paracip 500 (Cipla)",
                image: "💊",
                prescription: false,
                composition: "Paracetamol 500mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 18,
                discount: 2,
                price: 16,
                desc: "Effective antipyretic.",
                uses: "Fever, Headache",
                storage: "Store below 25°C"
            },
            {
                name: "Paracip 650 (Cipla)",
                image: "💊",
                prescription: false,
                composition: "Paracetamol 650mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 25,
                discount: 2,
                price: 23,
                desc: "High strength fever relief.",
                uses: "High fever",
                storage: "Store below 25°C"
            },
            {
                name: "Ultracet (J&J)",
                image: "💊",
                prescription: true,
                composition: "Tramadol + Paracetamol",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 245,
                discount: 10,
                price: 220,
                desc: "Strong pain killer.",
                uses: "Severe pain",
                storage: "Store below 25°C"
            },
            {
                name: "Dologesic SP (Micro Labs)",
                image: "💊",
                prescription: true,
                composition: "Diclofenac + Paracetamol + Serratiopeptidase",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 95,
                discount: 10,
                price: 86,
                desc: "For pain and swelling.",
                uses: "Injury, Surgery recovery",
                storage: "Store below 25°C"
            },
            {
                name: "Signoflam (Lupin)",
                image: "💊",
                prescription: true,
                composition: "Aceclofenac + Paracetamol + Serratiopeptidase",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 115,
                discount: 12,
                price: 101,
                desc: "Anti-inflammatory pain relief.",
                uses: "Swelling, Pain",
                storage: "Store below 25°C"
            },
            {
                name: "Enzoflam (Alkem)",
                image: "💊",
                prescription: true,
                composition: "Diclofenac + Paracetamol + Serratiopeptidase",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 125,
                discount: 12,
                price: 110,
                desc: "Resolves inflammation and pain.",
                uses: "Edema, Pain",
                storage: "Store below 30°C"
            },
            {
                name: "Chymoral Forte (Torrent)",
                image: "💊",
                prescription: true,
                composition: "Trypsin-Chymotrypsin",
                unit: "Strip of 20",
                quantity: "1 Strip",
                mrp: 385,
                discount: 15,
                price: 327,
                desc: "Enzyme for wound healing.",
                uses: "Swelling, Wounds",
                storage: "Store below 25°C"
            },
            {
                name: "Omnigel (Cipla)",
                image: "🧴",
                prescription: false,
                composition: "Diclofenac Gel",
                unit: "Tube",
                quantity: "30g",
                mrp: 115,
                discount: 10,
                price: 104,
                desc: "Pain relief gel.",
                uses: "Muscular pain, Sprain",
                storage: "Store below 25°C"
            },
            {
                name: "Relisprary (Midas)",
                image: "🧴",
                prescription: false,
                composition: "Pain relief spray",
                unit: "Can",
                quantity: "50g",
                mrp: 185,
                discount: 10,
                price: 167,
                desc: "Instant pain relief spray.",
                uses: "Sports injuries, Back pain",
                storage: "Store away from heat"
            },
            {
                name: "Combiflam Spray (Sanofi)",
                image: "🧴",
                prescription: false,
                composition: "Pain relief spray",
                unit: "Can",
                quantity: "50g",
                mrp: 175,
                discount: 10,
                price: 158,
                desc: "Fast relief spray.",
                uses: "Joint pain, Muscle pain",
                storage: "Store away from heat"
            },
            {
                name: "Himalaya Cold Balm",
                image: "🧴",
                prescription: false,
                composition: "Herbal",
                unit: "Bottle",
                quantity: "10g",
                mrp: 45,
                discount: 5,
                price: 43,
                desc: "Soothing balm for cold.",
                uses: "Headache, Congestion",
                storage: "Store in a cool place"
            },
            {
                name: "Amrutanjan Roll-On",
                image: "🧴",
                prescription: false,
                composition: "Menthol + Camphor",
                unit: "Roll-on",
                quantity: "10ml",
                mrp: 65,
                discount: 0,
                price: 65,
                desc: "Roll-on for headache.",
                uses: "Headache used on forehead",
                storage: "Store below 25°C"
            },
            {
                name: "Axe Brand Oil",
                image: "🧴",
                prescription: false,
                composition: "Menthol + Eucalyptus",
                unit: "Bottle",
                quantity: "10ml",
                mrp: 125,
                discount: 10,
                price: 113,
                desc: "Universal medicated oil.",
                uses: "Cold, Headache, Insect bites",
                storage: "Store in a cool place"
            },
            {
                name: "Zifi-O (FDC)",
                image: "💊",
                prescription: true,
                composition: "Cefixime + Ofloxacin",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 155,
                discount: 12,
                price: 136,
                desc: "Dual antibiotic power.",
                uses: "Complex infections, Typhoid",
                storage: "Store below 25°C"
            },
            {
                name: "Taxim (Alkem)",
                image: "💉",
                prescription: true,
                composition: "Cefotaxime Injection",
                unit: "Vial",
                quantity: "1g",
                mrp: 45,
                discount: 5,
                price: 43,
                desc: "Injectable antibiotic.",
                uses: "Severe bacterial infections",
                storage: "Store below 25°C"
            },
            {
                name: "Monocef 1g (Aristo)",
                image: "💉",
                prescription: true,
                composition: "Ceftriaxone Injection",
                unit: "Vial",
                quantity: "1g",
                mrp: 62,
                discount: 8,
                price: 57,
                desc: "Broad spectrum injection.",
                uses: "Severe infections, Typhoid",
                storage: "Store below 25°C"
            },
            {
                name: "Pantop 40 (Aristo)",
                image: "💊",
                prescription: false,
                composition: "Pantoprazole 40mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 145,
                discount: 12,
                price: 128,
                desc: "Gastric acid controller.",
                uses: "Acidity, Gastritis",
                storage: "Store below 30°C"
            },
             {
                name: "Pan 40 (Alkem)",
                image: "💊",
                prescription: false,
                composition: "Pantoprazole 40mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 155,
                discount: 12,
                price: 136,
                desc: "Standard acidity medicine.",
                uses: "Acid reflux, Heartburn",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Pentid 400 (Abbott)",
                image: "💊",
                prescription: true,
                composition: "Penicillin G 400,000 IU",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 22,
                discount: 0,
                price: 22,
                desc: "Traditional antibiotic.",
                uses: "Throat infection, Rheumatic fever",
                storage: "Store below 25°C"
            },
             {
                name: "Rantac 150 (J.B. Chemicals)",
                image: "💊",
                prescription: false,
                composition: "Ranitidine 150mg",
                unit: "Strip of 30",
                quantity: "1 Strip",
                mrp: 45,
                discount: 5,
                price: 43,
                desc: "Classic acidity blocker.",
                uses: "Acidity, Indigestion",
                storage: "Store away from light"
            },
             {
                name: "Aciloc 150 (Cadila)",
                image: "💊",
                prescription: false,
                composition: "Ranitidine 150mg",
                unit: "Strip of 30",
                quantity: "1 Strip",
                mrp: 42,
                discount: 5,
                price: 40,
                desc: "Effective antacid.",
                uses: "Heartburn, Gas",
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
            },
            // Hypertension & Heart Care (Telmikind Range - Mankind)
            {
                name: "Telmikind 20 (Mankind)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 20mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 38,
                discount: 10,
                price: 34,
                desc: "Blood pressure tablet by Mankind.",
                uses: "Hypertension, Heart protection",
                storage: "Store below 25°C"
            },
            {
                name: "Telmikind 40 (Mankind)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 55,
                discount: 12,
                price: 48,
                desc: "Widely used BP tablet by Mankind.",
                uses: "Hypertension, Cardiovascular risk",
                storage: "Store below 25°C"
            },
            {
                name: "Telmikind 80 (Mankind)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 80mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 95,
                discount: 15,
                price: 81,
                desc: "High strength BP tablet by Mankind.",
                uses: "Severe Hypertension",
                storage: "Store below 25°C"
            },
            {
                name: "Telmikind-H (Mankind)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg + Hydrochlorothiazide 12.5mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 65,
                discount: 10,
                price: 59,
                desc: "Diuretic combo for BP by Mankind.",
                uses: "Hypertension (Uncontrolled)",
                storage: "Store below 25°C"
            },
            {
                name: "Telmikind-AM (Mankind)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg + Amlodipine 5mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 75,
                discount: 12,
                price: 66,
                desc: "Dual action BP control by Mankind.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
            {
                name: "Telmikind-Beta 25 (Mankind)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg + Metoprolol 25mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 85,
                discount: 10,
                price: 77,
                desc: "BP and Heart Rate control by Mankind.",
                uses: "Hypertension with increased heart rate",
                storage: "Store below 25°C"
            },
             {
                name: "Telmikind-Beta 50 (Mankind)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg + Metoprolol 50mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 98,
                discount: 10,
                price: 88,
                desc: "Strong BP and Heart Rate control.",
                uses: "Hypertension, Angina",
                storage: "Store below 25°C"
            },

            // Telma Range (Glenmark)
            {
                name: "Telma 20 (Glenmark)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 20mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 65,
                discount: 10,
                price: 59,
                desc: "Premium BP tablet by Glenmark.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
            {
                name: "Telma 40 (Glenmark)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 145,
                discount: 15,
                price: 123,
                desc: "Trusted BP medicine by Glenmark.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
            {
                name: "Telma 80 (Glenmark)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 80mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 265,
                discount: 15,
                price: 225,
                desc: "High dose BP tablet by Glenmark.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
             {
                name: "Telma-H (Glenmark)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg + Hydrochlorothiazide 12.5mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 185,
                discount: 12,
                price: 163,
                desc: "BP medicine with diuretic by Glenmark.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
            {
                name: "Telma-AM (Glenmark)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg + Amlodipine 5mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 245,
                discount: 15,
                price: 208,
                desc: "Combination BP therapy by Glenmark.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
             {
                name: "Telma-AM H (Glenmark)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40 + Amlodipine 5 + HCTZ 12.5",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 295,
                discount: 15,
                price: 251,
                desc: "Triple action BP control by Glenmark.",
                uses: "Severe Hypertension",
                storage: "Store below 25°C"
            },
            {
                name: "Telma-CT 40/12.5 (Glenmark)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg + Chlorthalidone 12.5mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 215,
                discount: 12,
                price: 189,
                desc: "Diuretic combination by Glenmark.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },

            // Temsan Range (Emcure)
            {
                name: "Temsan 20 (Emcure)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 20mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 45,
                discount: 10,
                price: 41,
                desc: "BP tablet by Emcure.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
            {
                name: "Temsan 40 (Emcure)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 85,
                discount: 10,
                price: 77,
                desc: "Standard BP tablet by Emcure.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
            {
                name: "Temsan 80 (Emcure)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 80mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 110,
                discount: 12,
                price: 97,
                desc: "High potency BP tablet by Emcure.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
            {
                name: "Temsan-H (Emcure)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg + HCTZ 12.5mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 125,
                discount: 12,
                price: 110,
                desc: "Combination BP medicine by Emcure.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
            {
                name: "Temsan-AM (Emcure)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg + Amlodipine 5mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 145,
                discount: 12,
                price: 128,
                desc: "Dual BP control by Emcure.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },

            // Tazloc Range (USV)
            {
                name: "Tazloc 20 (USV)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 20mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 55,
                discount: 10,
                price: 50,
                desc: "BP maintenance tablet by USV.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
            {
                name: "Tazloc 40 (USV)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 95,
                discount: 12,
                price: 84,
                desc: "Widely prescribed BP tablet by USV.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
             {
                name: "Tazloc 80 (USV)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 80mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 125,
                discount: 12,
                price: 110,
                desc: "Higher dosage for BP control.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
            {
                name: "Tazloc-H (USV)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg + HCTZ 12.5mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 135,
                discount: 12,
                price: 119,
                desc: "Plus diuretic for BP control.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
            {
                name: "Tazloc-AM (USV)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg + Amlodipine 5mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 155,
                discount: 12,
                price: 136,
                desc: "Combination for effective BP control.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
             {
                name: "Tazloc-Beta 25 (USV)",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg + Metoprolol 25mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 105,
                discount: 10,
                price: 95,
                desc: "Heart rate and BP control.",
                uses: "Hypertension, Angina",
                storage: "Store below 25°C"
            },

            // Metxl Range (Ajanta)
            {
                name: "Metxl 25 (Ajanta)",
                image: "💊",
                prescription: true,
                composition: "Metoprolol Succinate 25mg",
                unit: "Strip of 20",
                quantity: "1 Strip",
                mrp: 85,
                discount: 10,
                price: 77,
                desc: "Beta-blocker for heart health.",
                uses: "Hypertension, Angina, Heart failure",
                storage: "Store below 25°C"
            },
            {
                name: "Metxl 50 (Ajanta)",
                image: "💊",
                prescription: true,
                composition: "Metoprolol Succinate 50mg",
                unit: "Strip of 20",
                quantity: "1 Strip",
                mrp: 145,
                discount: 12,
                price: 128,
                desc: "Extended release beta-blocker.",
                uses: "Hypertension, Heart protection",
                storage: "Store below 25°C"
            },
            {
                name: "Metxl AM 25 (Ajanta)",
                image: "💊",
                prescription: true,
                composition: "Metoprolol 25mg + Amlodipine 5mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 125,
                discount: 10,
                price: 113,
                desc: "Combination heart medication.",
                uses: "Hypertension, Angina",
                storage: "Store below 25°C"
            },
            {
                name: "Metxl AM 50 (Ajanta)",
                image: "💊",
                prescription: true,
                composition: "Metoprolol 50mg + Amlodipine 5mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 185,
                discount: 12,
                price: 163,
                desc: "Strong combination for heart care.",
                uses: "Hypertension, Angina",
                storage: "Store below 25°C"
            },

            // Additional Diabetes & BP Medicines (100+)
            // Anti-Diabetic Medicines
            {
                name: "Glycomet 500 SR",
                image: "💊",
                prescription: true,
                composition: "Metformin 500mg SR",
                unit: "Strip of 20",
                quantity: "1 Strip",
                mrp: 45,
                discount: 12,
                price: 40,
                desc: "Sustained release diabetes medicine.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },
            {
                name: "Glycomet GP 1",
                image: "💊",
                prescription: true,
                composition: "Glimepiride 1mg + Metformin 500mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 118,
                discount: 15,
                price: 100,
                desc: "Combination diabetes medicine.",
                uses: "Type 2 Diabetes",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Glycomet GP 2",
                image: "💊",
                prescription: true,
                composition: "Glimepiride 2mg + Metformin 500mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 135,
                discount: 15,
                price: 115,
                desc: "Combination diabetes medicine.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },
            {
                name: "Amaryl M1",
                image: "💊",
                prescription: true,
                composition: "Glimepiride 1mg + Metformin 500mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 195,
                discount: 12,
                price: 172,
                desc: "Premium diabetes combination.",
                uses: "Type 2 Diabetes",
                storage: "Store at room temperature"
            },
            {
                name: "Amaryl M2",
                image: "💊",
                prescription: true,
                composition: "Glimepiride 2mg + Metformin 500mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 225,
                discount: 12,
                price: 198,
                desc: "Premium diabetes combination.",
                uses: "Type 2 Diabetes",
                storage: "Store at room temperature"
            },
            {
                name: "Janumet 50/500",
                image: "💊",
                prescription: true,
                composition: "Sitagliptin 50mg + Metformin 500mg",
                unit: "Strip of 7",
                quantity: "1 Strip",
                mrp: 395,
                discount: 10,
                price: 356,
                desc: "DPP-4 inhibitor combination.",
                uses: "Type 2 Diabetes",
                storage: "Store below 30°C"
            },
            {
                name: "Janumet 50/1000",
                image: "💊",
                prescription: true,
                composition: "Sitagliptin 50mg + Metformin 1000mg",
                unit: "Strip of 7",
                quantity: "1 Strip",
                mrp: 445,
                discount: 10,
                price: 401,
                desc: "DPP-4 inhibitor combination.",
                uses: "Type 2 Diabetes",
                storage: "Store below 30°C"
            },
            {
                name: "Galvus Met 50/500",
                image: "💊",
                prescription: true,
                composition: "Vildagliptin 50mg + Metformin 500mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 325,
                discount: 12,
                price: 286,
                desc: "DPP-4 inhibitor with Metformin.",
                uses: "Type 2 Diabetes",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Galvus Met 50/1000",
                image: "💊",
                prescription: true,
                composition: "Vildagliptin 50mg + Metformin 1000mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 385,
                discount: 12,
                price: 339,
                desc: "DPP-4 inhibitor with Metformin.",
                uses: "Type 2 Diabetes",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Trajenta 5mg",
                image: "💊",
                prescription: true,
                composition: "Linagliptin 5mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 575,
                discount: 10,
                price: 518,
                desc: "DPP-4 inhibitor for diabetes.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },
            {
                name: "Gliclazide 80mg",
                image: "💊",
                prescription: true,
                composition: "Gliclazide 80mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 65,
                discount: 15,
                price: 55,
                desc: "Sulfonylurea for diabetes.",
                uses: "Type 2 Diabetes",
                storage: "Store below 30°C"
            },
            {
                name: "Diamicron MR 60",
                image: "💊",
                prescription: true,
                composition: "Gliclazide 60mg MR",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 145,
                discount: 12,
                price: 128,
                desc: "Modified release gliclazide.",
                uses: "Type 2 Diabetes",
                storage: "Store at room temperature"
            },
            {
                name: "Glynase MF",
                image: "💊",
                prescription: true,
                composition: "Glipizide 5mg + Metformin 500mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 85,
                discount: 12,
                price: 75,
                desc: "Diabetes combination therapy.",
                uses: "Type 2 Diabetes",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Pioglitazone 15mg",
                image: "💊",
                prescription: true,
                composition: "Pioglitazone 15mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 95,
                discount: 15,
                price: 81,
                desc: "Thiazolidinedione for diabetes.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },
            {
                name: "Pioglitazone 30mg",
                image: "💊",
                prescription: true,
                composition: "Pioglitazone 30mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 145,
                discount: 15,
                price: 123,
                desc: "Thiazolidinedione for diabetes.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },
            {
                name: "Acarbose 50mg",
                image: "💊",
                prescription: true,
                composition: "Acarbose 50mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 85,
                discount: 10,
                price: 77,
                desc: "Alpha-glucosidase inhibitor.",
                uses: "Type 2 Diabetes",
                storage: "Store below 30°C"
            },
            {
                name: "Voglibose 0.2mg",
                image: "💊",
                prescription: true,
                composition: "Voglibose 0.2mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 75,
                discount: 12,
                price: 66,
                desc: "Alpha-glucosidase inhibitor.",
                uses: "Type 2 Diabetes",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Voglibose 0.3mg",
                image: "💊",
                prescription: true,
                composition: "Voglibose 0.3mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 95,
                discount: 12,
                price: 84,
                desc: "Alpha-glucosidase inhibitor.",
                uses: "Type 2 Diabetes",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Dapagliflozin 10mg",
                image: "💊",
                prescription: true,
                composition: "Dapagliflozin 10mg",
                unit: "Strip of 14",
                quantity: "1 Strip",
                mrp: 495,
                discount: 10,
                price: 446,
                desc: "SGLT2 inhibitor for diabetes.",
                uses: "Type 2 Diabetes, Heart Failure",
                storage: "Store below 25°C"
            },
            {
                name: "Empagliflozin 10mg",
                image: "💊",
                prescription: true,
                composition: "Empagliflozin 10mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 525,
                discount: 10,
                price: 473,
                desc: "SGLT2 inhibitor for diabetes.",
                uses: "Type 2 Diabetes, Heart Protection",
                storage: "Store at room temperature"
            },
            {
                name: "Empagliflozin 25mg",
                image: "💊",
                prescription: true,
                composition: "Empagliflozin 25mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 595,
                discount: 10,
                price: 536,
                desc: "SGLT2 inhibitor for diabetes.",
                uses: "Type 2 Diabetes, Heart Protection",
                storage: "Store at room temperature"
            },
            {
                name: "Canagliflozin 100mg",
                image: "💊",
                prescription: true,
                composition: "Canagliflozin 100mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 545,
                discount: 12,
                price: 480,
                desc: "SGLT2 inhibitor for diabetes.",
                uses: "Type 2 Diabetes",
                storage: "Store below 30°C"
            },
            {
                name: "Teneligliptin 20mg",
                image: "💊",
                prescription: true,
                composition: "Teneligliptin 20mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 195,
                discount: 15,
                price: 166,
                desc: "DPP-4 inhibitor for diabetes.",
                uses: "Type 2 Diabetes",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Tenepure M 500",
                image: "💊",
                prescription: true,
                composition: "Teneligliptin 20mg + Metformin 500mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 225,
                discount: 15,
                price: 191,
                desc: "DPP-4 inhibitor combination.",
                uses: "Type 2 Diabetes",
                storage: "Store below 25°C"
            },
            {
                name: "Mixtard 30 Insulin",
                image: "💉",
                prescription: true,
                composition: "Human Insulin 30/70",
                unit: "Vial",
                quantity: "10ml",
                mrp: 185,
                discount: 5,
                price: 176,
                desc: "Premixed human insulin.",
                uses: "Diabetes (Type 1 & 2)",
                storage: "Store in refrigerator 2-8°C"
            },
            {
                name: "Actrapid Insulin",
                image: "💉",
                prescription: true,
                composition: "Regular Human Insulin",
                unit: "Vial",
                quantity: "10ml",
                mrp: 175,
                discount: 5,
                price: 166,
                desc: "Short-acting human insulin.",
                uses: "Diabetes",
                storage: "Store in refrigerator 2-8°C"
            },
            {
                name: "Insulatard Insulin",
                image: "💉",
                prescription: true,
                composition: "Isophane Insulin",
                unit: "Vial",
                quantity: "10ml",
                mrp: 175,
                discount: 5,
                price: 166,
                desc: "Intermediate-acting insulin.",
                uses: "Diabetes",
                storage: "Store in refrigerator 2-8°C"
            },
            {
                name: "Lantus Solostar",
                image: "💉",
                prescription: true,
                composition: "Insulin Glargine 100 IU/ml",
                unit: "Pen",
                quantity: "3ml Pen",
                mrp: 795,
                discount: 5,
                price: 755,
                desc: "Long-acting insulin pen.",
                uses: "Diabetes",
                storage: "Store in refrigerator"
            },
            {
                name: "Novorapid Flexpen",
                image: "💉",
                prescription: true,
                composition: "Insulin Aspart",
                unit: "Pen",
                quantity: "3ml Pen",
                mrp: 695,
                discount: 5,
                price: 660,
                desc: "Rapid-acting insulin pen.",
                uses: "Diabetes",
                storage: "Store in refrigerator 2-8°C"
            },
            {
                name: "Humalog Kwikpen",
                image: "💉",
                prescription: true,
                composition: "Insulin Lispro",
                unit: "Pen",
                quantity: "3ml Pen",
                mrp: 725,
                discount: 5,
                price: 689,
                desc: "Rapid-acting insulin pen.",
                uses: "Diabetes",
                storage: "Store in refrigerator"
            },
            // Blood Pressure Medicines
            {
                name: "Amlodipine 5mg",
                image: "💊",
                prescription: true,
                composition: "Amlodipine 5mg",
                unit: "Strip of 14",
                quantity: "1 Strip",
                mrp: 45,
                discount: 15,
                price: 38,
                desc: "Calcium channel blocker for BP.",
                uses: "Hypertension, Angina",
                storage: "Store below 25°C"
            },
            {
                name: "Amlodipine 10mg",
                image: "💊",
                prescription: true,
                composition: "Amlodipine 10mg",
                unit: "Strip of 14",
                quantity: "1 Strip",
                mrp: 75,
                discount: 15,
                price: 64,
                desc: "Calcium channel blocker for BP.",
                uses: "Hypertension, Angina",
                storage: "Store below 25°C"
            },
            {
                name: "Atenolol 50mg",
                image: "💊",
                prescription: true,
                composition: "Atenolol 50mg",
                unit: "Strip of 14",
                quantity: "1 Strip",
                mrp: 35,
                discount: 12,
                price: 31,
                desc: "Beta blocker for BP.",
                uses: "Hypertension, Angina",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Metoprolol 25mg",
                image: "💊",
                prescription: true,
                composition: "Metoprolol 25mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 42,
                discount: 15,
                price: 36,
                desc: "Beta blocker for BP and heart.",
                uses: "Hypertension, Heart conditions",
                storage: "Store below 25°C"
            },
            {
                name: "Metoprolol 50mg",
                image: "💊",
                prescription: true,
                composition: "Metoprolol 50mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 65,
                discount: 15,
                price: 55,
                desc: "Beta blocker for BP and heart.",
                uses: "Hypertension, Heart conditions",
                storage: "Store below 25°C"
            },
            {
                name: "Nebivolol 5mg",
                image: "💊",
                prescription: true,
                composition: "Nebivolol 5mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 165,
                discount: 12,
                price: 145,
                desc: "Third gen beta blocker.",
                uses: "Hypertension",
                storage: "Store at room temperature"
            },
            {
                name: "Nebivolol 2.5mg",
                image: "💊",
                prescription: true,
                composition: "Nebivolol 2.5mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 125,
                discount: 12,
                price: 110,
                desc: "Third gen beta blocker.",
                uses: "Hypertension",
                storage: "Store at room temperature"
            },
            {
                name: "Bisoprolol 5mg",
                image: "💊",
                prescription: true,
                composition: "Bisoprolol 5mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 115,
                discount: 12,
                price: 101,
                desc: "Selective beta blocker.",
                uses: "Hypertension, Heart failure",
                storage: "Store below 30°C"
            },
            {
                name: "Carvedilol 6.25mg",
                image: "💊",
                prescription: true,
                composition: "Carvedilol 6.25mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 75,
                discount: 12,
                price: 66,
                desc: "Alpha-beta blocker.",
                uses: "Hypertension, Heart failure",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Carvedilol 12.5mg",
                image: "💊",
                prescription: true,
                composition: "Carvedilol 12.5mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 95,
                discount: 12,
                price: 84,
                desc: "Alpha-beta blocker.",
                uses: "Hypertension, Heart failure",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Carvedilol 25mg",
                image: "💊",
                prescription: true,
                composition: "Carvedilol 25mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 135,
                discount: 12,
                price: 119,
                desc: "Alpha-beta blocker.",
                uses: "Hypertension, Heart failure",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Losartan 50mg",
                image: "💊",
                prescription: true,
                composition: "Losartan 50mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 85,
                discount: 15,
                price: 72,
                desc: "ARB for blood pressure.",
                uses: "Hypertension, Diabetic nephropathy",
                storage: "Store below 25°C"
            },
            {
                name: "Losartan H",
                image: "💊",
                prescription: true,
                composition: "Losartan 50mg + HCTZ 12.5mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 115,
                discount: 15,
                price: 98,
                desc: "ARB with diuretic combination.",
                uses: "Hypertension",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Telmisartan 40mg",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 95,
                discount: 15,
                price: 81,
                desc: "ARB for blood pressure.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
            {
                name: "Telmisartan 80mg",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 80mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 145,
                discount: 15,
                price: 123,
                desc: "ARB for blood pressure.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
            {
                name: "Olmesartan 20mg",
                image: "💊",
                prescription: true,
                composition: "Olmesartan 20mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 145,
                discount: 12,
                price: 128,
                desc: "ARB for blood pressure.",
                uses: "Hypertension",
                storage: "Store at room temperature"
            },
            {
                name: "Olmesartan 40mg",
                image: "💊",
                prescription: true,
                composition: "Olmesartan 40mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 195,
                discount: 12,
                price: 172,
                desc: "ARB for blood pressure.",
                uses: "Hypertension",
                storage: "Store at room temperature"
            },
            {
                name: "Valsartan 80mg",
                image: "💊",
                prescription: true,
                composition: "Valsartan 80mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 165,
                discount: 12,
                price: 145,
                desc: "ARB for blood pressure.",
                uses: "Hypertension, Heart failure",
                storage: "Store below 30°C"
            },
            {
                name: "Valsartan 160mg",
                image: "💊",
                prescription: true,
                composition: "Valsartan 160mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 225,
                discount: 12,
                price: 198,
                desc: "ARB for blood pressure.",
                uses: "Hypertension, Heart failure",
                storage: "Store below 30°C"
            },
            {
                name: "Irbesartan 150mg",
                image: "💊",
                prescription: true,
                composition: "Irbesartan 150mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 175,
                discount: 12,
                price: 154,
                desc: "ARB for blood pressure.",
                uses: "Hypertension, Diabetic nephropathy",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Ramipril 2.5mg",
                image: "💊",
                prescription: true,
                composition: "Ramipril 2.5mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 75,
                discount: 15,
                price: 64,
                desc: "ACE inhibitor for BP.",
                uses: "Hypertension, Heart failure",
                storage: "Store below 25°C"
            },
            {
                name: "Ramipril 5mg",
                image: "💊",
                prescription: true,
                composition: "Ramipril 5mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 95,
                discount: 15,
                price: 81,
                desc: "ACE inhibitor for BP.",
                uses: "Hypertension, Heart failure",
                storage: "Store below 25°C"
            },
            {
                name: "Enalapril 5mg",
                image: "💊",
                prescription: true,
                composition: "Enalapril 5mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 55,
                discount: 12,
                price: 48,
                desc: "ACE inhibitor for BP.",
                uses: "Hypertension, Heart failure",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Lisinopril 5mg",
                image: "💊",
                prescription: true,
                composition: "Lisinopril 5mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 65,
                discount: 12,
                price: 57,
                desc: "ACE inhibitor for BP.",
                uses: "Hypertension, Heart failure",
                storage: "Store below 30°C"
            },
            {
                name: "Perindopril 4mg",
                image: "💊",
                prescription: true,
                composition: "Perindopril 4mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 145,
                discount: 12,
                price: 128,
                desc: "ACE inhibitor for BP.",
                uses: "Hypertension, Coronary artery disease",
                storage: "Store at room temperature"
            },
            {
                name: "Diltiazem 30mg",
                image: "💊",
                prescription: true,
                composition: "Diltiazem 30mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 55,
                discount: 10,
                price: 50,
                desc: "Calcium channel blocker.",
                uses: "Hypertension, Angina",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Nifedipine 10mg",
                image: "💊",
                prescription: true,
                composition: "Nifedipine 10mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 45,
                discount: 10,
                price: 41,
                desc: "Calcium channel blocker.",
                uses: "Hypertension, Angina",
                storage: "Store below 25°C"
            },
            {
                name: "Prazosin 5mg",
                image: "💊",
                prescription: true,
                composition: "Prazosin 5mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 75,
                discount: 12,
                price: 66,
                desc: "Alpha blocker for BP.",
                uses: "Hypertension",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Clonidine 0.1mg",
                image: "💊",
                prescription: true,
                composition: "Clonidine 0.1mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 55,
                discount: 10,
                price: 50,
                desc: "Central alpha agonist.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
            {
                name: "Hydrochlorothiazide 12.5mg",
                image: "💊",
                prescription: true,
                composition: "Hydrochlorothiazide 12.5mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 25,
                discount: 10,
                price: 23,
                desc: "Thiazide diuretic.",
                uses: "Hypertension, Edema",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Furosemide 40mg",
                image: "💊",
                prescription: true,
                composition: "Furosemide 40mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 35,
                discount: 12,
                price: 31,
                desc: "Loop diuretic.",
                uses: "Edema, Heart failure",
                storage: "Store below 30°C"
            },
            {
                name: "Torsemide 10mg",
                image: "💊",
                prescription: true,
                composition: "Torsemide 10mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 55,
                discount: 12,
                price: 48,
                desc: "Loop diuretic.",
                uses: "Edema, Heart failure",
                storage: "Store at room temperature"
            },
            {
                name: "Spironolactone 25mg",
                image: "💊",
                prescription: true,
                composition: "Spironolactone 25mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 45,
                discount: 10,
                price: 41,
                desc: "Potassium-sparing diuretic.",
                uses: "Edema, Heart failure, Hypertension",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Spironolactone 50mg",
                image: "💊",
                prescription: true,
                composition: "Spironolactone 50mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 75,
                discount: 10,
                price: 68,
                desc: "Potassium-sparing diuretic.",
                uses: "Edema, Heart failure, Hypertension",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Eplerenone 25mg",
                image: "💊",
                prescription: true,
                composition: "Eplerenone 25mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 295,
                discount: 10,
                price: 266,
                desc: "Selective aldosterone blocker.",
                uses: "Heart failure, Post-MI",
                storage: "Store below 25°C"
            },
            // Combination BP Medicines
            {
                name: "Amlong A",
                image: "💊",
                prescription: true,
                composition: "Amlodipine 5mg + Atenolol 50mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 95,
                discount: 15,
                price: 81,
                desc: "BP combination therapy.",
                uses: "Hypertension",
                storage: "Store below 25°C"
            },
            {
                name: "Telma AM",
                image: "💊",
                prescription: true,
                composition: "Telmisartan 40mg + Amlodipine 5mg",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 195,
                discount: 12,
                price: 172,
                desc: "ARB + CCB combination.",
                uses: "Hypertension",
                storage: "Store at room temperature"
            },
            {
                name: "Aztor 10",
                image: "💊",
                prescription: true,
                composition: "Atorvastatin 10mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 95,
                discount: 15,
                price: 81,
                desc: "Statin for cholesterol.",
                uses: "High cholesterol, Heart protection",
                storage: "Store below 25°C"
            },
            {
                name: "Aztor 20",
                image: "💊",
                prescription: true,
                composition: "Atorvastatin 20mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 145,
                discount: 15,
                price: 123,
                desc: "Statin for cholesterol.",
                uses: "High cholesterol, Heart protection",
                storage: "Store below 25°C"
            },
            {
                name: "Rosuvastatin 10mg",
                image: "💊",
                prescription: true,
                composition: "Rosuvastatin 10mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 165,
                discount: 15,
                price: 140,
                desc: "Statin for cholesterol.",
                uses: "High cholesterol",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Rosuvastatin 20mg",
                image: "💊",
                prescription: true,
                composition: "Rosuvastatin 20mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 225,
                discount: 15,
                price: 191,
                desc: "Statin for cholesterol.",
                uses: "High cholesterol",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Rosuvastatin 40mg",
                image: "💊",
                prescription: true,
                composition: "Rosuvastatin 40mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 345,
                discount: 12,
                price: 304,
                desc: "High-dose statin for cholesterol.",
                uses: "High cholesterol, CV Risk Reduction",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Clopidogrel 75mg",
                image: "💊",
                prescription: true,
                composition: "Clopidogrel 75mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 95,
                discount: 15,
                price: 81,
                desc: "Antiplatelet medicine.",
                uses: "Heart attack prevention, Stroke prevention",
                storage: "Store below 25°C"
            },
            {
                name: "Aspirin 75mg",
                image: "💊",
                prescription: true,
                composition: "Aspirin 75mg",
                unit: "Strip of 14",
                quantity: "1 Strip",
                mrp: 25,
                discount: 10,
                price: 23,
                desc: "Low-dose aspirin for heart.",
                uses: "Heart attack prevention",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Ecosprin 75mg",
                image: "💊",
                prescription: true,
                composition: "Aspirin 75mg (Enteric coated)",
                unit: "Strip of 14",
                quantity: "1 Strip",
                mrp: 28,
                discount: 10,
                price: 25,
                desc: "Enteric coated aspirin.",
                uses: "Heart attack prevention, Stroke prevention",
                storage: "Store below 25°C"
            },
            {
                name: "Ecosprin AV 75/10",
                image: "💊",
                prescription: true,
                composition: "Aspirin 75mg + Atorvastatin 10mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 125,
                discount: 12,
                price: 110,
                desc: "Heart protection combination.",
                uses: "CV Risk Reduction",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Ecosprin AV 75/20",
                image: "💊",
                prescription: true,
                composition: "Aspirin 75mg + Atorvastatin 20mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 165,
                discount: 12,
                price: 145,
                desc: "Heart protection combination.",
                uses: "CV Risk Reduction",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Clopitab A 75",
                image: "💊",
                prescription: true,
                composition: "Clopidogrel 75mg + Aspirin 75mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 145,
                discount: 12,
                price: 128,
                desc: "Dual antiplatelet therapy.",
                uses: "Post-stent, Heart attack",
                storage: "Store below 25°C"
            },
            {
                name: "Prasugrel 10mg",
                image: "💊",
                prescription: true,
                composition: "Prasugrel 10mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 295,
                discount: 10,
                price: 266,
                desc: "Antiplatelet for stent patients.",
                uses: "Post-stent, ACS",
                storage: "Store at room temperature"
            },
            {
                name: "Ticagrelor 90mg",
                image: "💊",
                prescription: true,
                composition: "Ticagrelor 90mg",
                unit: "Strip of 14",
                quantity: "1 Strip",
                mrp: 695,
                discount: 10,
                price: 626,
                desc: "Antiplatelet for ACS.",
                uses: "Acute coronary syndrome",
                storage: "Store below 30°C"
            },
            {
                name: "Warfarin 5mg",
                image: "💊",
                prescription: true,
                composition: "Warfarin 5mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 35,
                discount: 10,
                price: 32,
                desc: "Blood thinner.",
                uses: "Clot prevention, AF, DVT",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Rivaroxaban 10mg",
                image: "💊",
                prescription: true,
                composition: "Rivaroxaban 10mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 445,
                discount: 10,
                price: 401,
                desc: "Novel oral anticoagulant.",
                uses: "DVT, PE, AF",
                storage: "Store below 25°C"
            },
            {
                name: "Rivaroxaban 20mg",
                image: "💊",
                prescription: true,
                composition: "Rivaroxaban 20mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 595,
                discount: 10,
                price: 536,
                desc: "Novel oral anticoagulant.",
                uses: "DVT, PE, AF",
                storage: "Store below 25°C"
            },
            {
                name: "Dabigatran 110mg",
                image: "💊",
                prescription: true,
                composition: "Dabigatran 110mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 495,
                discount: 10,
                price: 446,
                desc: "Novel oral anticoagulant.",
                uses: "AF, DVT prevention",
                storage: "Store in original container"
            },
            {
                name: "Apixaban 5mg",
                image: "💊",
                prescription: true,
                composition: "Apixaban 5mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 545,
                discount: 10,
                price: 491,
                desc: "Novel oral anticoagulant.",
                uses: "AF, DVT, PE",
                storage: "Store below 30°C"
            },
            // Heart Care Medicines
            {
                name: "Isosorbide Mononitrate 20mg",
                image: "💊",
                prescription: true,
                composition: "Isosorbide Mononitrate 20mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 55,
                discount: 10,
                price: 50,
                desc: "Nitrate for angina.",
                uses: "Angina, Chest pain",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Sorbitrate 5mg",
                image: "💊",
                prescription: true,
                composition: "Isosorbide Dinitrate 5mg",
                unit: "Strip of 30",
                quantity: "1 Strip",
                mrp: 45,
                discount: 10,
                price: 41,
                desc: "Sublingual nitrate.",
                uses: "Acute angina",
                storage: "Store below 25°C"
            },
            {
                name: "Nitroglycerin Spray",
                image: "💊",
                prescription: true,
                composition: "Nitroglycerin 0.4mg/spray",
                unit: "Bottle",
                quantity: "200 doses",
                mrp: 295,
                discount: 10,
                price: 266,
                desc: "Sublingual spray for angina.",
                uses: "Acute angina attack",
                storage: "Store at room temperature"
            },
            {
                name: "Ranolazine 500mg",
                image: "💊",
                prescription: true,
                composition: "Ranolazine 500mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 245,
                discount: 12,
                price: 216,
                desc: "Anti-anginal medicine.",
                uses: "Chronic angina",
                storage: "Store below 25°C"
            },
            {
                name: "Trimetazidine 35mg MR",
                image: "💊",
                prescription: true,
                composition: "Trimetazidine 35mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 95,
                discount: 12,
                price: 84,
                desc: "Metabolic anti-anginal.",
                uses: "Angina, Heart protection",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Ivabradine 5mg",
                image: "💊",
                prescription: true,
                composition: "Ivabradine 5mg",
                unit: "Strip of 14",
                quantity: "1 Strip",
                mrp: 225,
                discount: 10,
                price: 203,
                desc: "Heart rate reducing agent.",
                uses: "Stable angina, Heart failure",
                storage: "Store below 25°C"
            },
            {
                name: "Digoxin 0.25mg",
                image: "💊",
                prescription: true,
                composition: "Digoxin 0.25mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 25,
                discount: 10,
                price: 23,
                desc: "Cardiac glycoside.",
                uses: "Heart failure, AF",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Sacubitril/Valsartan 50mg",
                image: "💊",
                prescription: true,
                composition: "Sacubitril 24mg + Valsartan 26mg",
                unit: "Strip of 14",
                quantity: "1 Strip",
                mrp: 695,
                discount: 10,
                price: 626,
                desc: "ARNI for heart failure.",
                uses: "Heart failure with reduced EF",
                storage: "Store below 25°C"
            },
            // Diabetic Care Products
            {
                name: "OneTouch Select Strips",
                image: "📏",
                prescription: false,
                composition: "Glucose Test Strips",
                unit: "Box",
                quantity: "50 Strips",
                mrp: 850,
                discount: 12,
                price: 748,
                desc: "Blood glucose test strips.",
                uses: "Blood Glucose Monitoring",
                storage: "Store in dry place"
            },
            {
                name: "Contour Plus Strips",
                image: "📏",
                prescription: false,
                composition: "Glucose Test Strips",
                unit: "Box",
                quantity: "50 Strips",
                mrp: 795,
                discount: 12,
                price: 700,
                desc: "Blood glucose test strips.",
                uses: "Blood Glucose Monitoring",
                storage: "Store cap closed tightly"
            },
            {
                name: "Glucometer Device",
                image: "🩺",
                prescription: false,
                composition: "Blood Glucose Monitor",
                unit: "Device",
                quantity: "1 Unit",
                mrp: 1495,
                discount: 20,
                price: 1196,
                desc: "Digital blood glucose monitor.",
                uses: "Home glucose testing",
                storage: "Store in a dry place"
            },
            {
                name: "Lancets (100 pack)",
                image: "📌",
                prescription: false,
                composition: "Sterile Lancets",
                unit: "Box",
                quantity: "100 Lancets",
                mrp: 195,
                discount: 10,
                price: 176,
                desc: "Sterile lancets for blood sampling.",
                uses: "Blood glucose testing",
                storage: "Store in original packaging"
            },
            {
                name: "Insulin Syringes (U-40)",
                image: "💉",
                prescription: false,
                composition: "Insulin Syringes 1ml",
                unit: "Pack",
                quantity: "10 Syringes",
                mrp: 95,
                discount: 10,
                price: 86,
                desc: "Disposable insulin syringes.",
                uses: "Insulin injection",
                storage: "Store in a dry place"
            },
            {
                name: "Insulin Syringes (U-100)",
                image: "💉",
                prescription: false,
                composition: "Insulin Syringes 1ml",
                unit: "Pack",
                quantity: "10 Syringes",
                mrp: 110,
                discount: 10,
                price: 99,
                desc: "Disposable insulin syringes.",
                uses: "Insulin injection",
                storage: "Store in a dry place"
            },
            {
                name: "BP Monitor Digital",
                image: "🩺",
                prescription: false,
                composition: "Digital BP Monitor",
                unit: "Device",
                quantity: "1 Unit",
                mrp: 1995,
                discount: 15,
                price: 1696,
                desc: "Automatic digital BP monitor.",
                uses: "Home BP monitoring",
                storage: "Store in a dry place"
            },
            {
                name: "Pulse Oximeter",
                image: "🩺",
                prescription: false,
                composition: "Digital Pulse Oximeter",
                unit: "Device",
                quantity: "1 Unit",
                mrp: 895,
                discount: 20,
                price: 716,
                desc: "Fingertip pulse oximeter.",
                uses: "SpO2 and pulse monitoring",
                storage: "Store in a dry place"
            },
            {
                name: "Diabetic Foot Cream",
                image: "🧴",
                prescription: false,
                composition: "Urea + Aloe Vera",
                unit: "Tube",
                quantity: "100g",
                mrp: 295,
                discount: 10,
                price: 266,
                desc: "Foot care cream for diabetics.",
                uses: "Dry feet, Cracked heels",
                storage: "Store below 30°C"
            },
            {
                name: "Sugar Free Natura",
                image: "🍬",
                prescription: false,
                composition: "Sucralose",
                unit: "Bottle",
                quantity: "500 pellets",
                mrp: 245,
                discount: 10,
                price: 221,
                desc: "Zero calorie sweetener.",
                uses: "Sugar substitute",
                storage: "Store in a dry place"
            },
            {
                name: "Sugar Free Gold",
                image: "🍬",
                prescription: false,
                composition: "Aspartame",
                unit: "Bottle",
                quantity: "300 pellets",
                mrp: 195,
                discount: 10,
                price: 176,
                desc: "Low calorie sweetener.",
                uses: "Sugar substitute",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Stevia Natural Sweetener",
                image: "🌿",
                prescription: false,
                composition: "Stevia Extract",
                unit: "Bottle",
                quantity: "200g",
                mrp: 345,
                discount: 12,
                price: 304,
                desc: "Natural zero calorie sweetener.",
                uses: "Natural sugar substitute",
                storage: "Store in an airtight container"
            },
            {
                name: "Diabetic Atta",
                image: "🌾",
                prescription: false,
                composition: "Multi-grain low GI flour",
                unit: "Pack",
                quantity: "1 kg",
                mrp: 145,
                discount: 10,
                price: 131,
                desc: "Low glycemic index flour.",
                uses: "Diabetic friendly flour",
                storage: "Store in an airtight container"
            },
            {
                name: "Diabetic Cookies",
                image: "🍪",
                prescription: false,
                composition: "Sugar-free cookies",
                unit: "Pack",
                quantity: "200g",
                mrp: 175,
                discount: 10,
                price: 158,
                desc: "Sugar-free cookies for diabetics.",
                uses: "Healthy snacking",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Omega-3 Fish Oil",
                image: "💊",
                prescription: false,
                composition: "EPA 180mg + DHA 120mg",
                unit: "Bottle",
                quantity: "60 capsules",
                mrp: 395,
                discount: 15,
                price: 336,
                desc: "Heart health supplement.",
                uses: "Heart health, Cholesterol",
                storage: "Store in refrigerator"
            },
            {
                name: "CoQ10 100mg",
                image: "💊",
                prescription: false,
                composition: "Coenzyme Q10 100mg",
                unit: "Bottle",
                quantity: "30 capsules",
                mrp: 495,
                discount: 12,
                price: 436,
                desc: "Heart and energy supplement.",
                uses: "Heart health, Energy",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Fenugreek Capsules",
                image: "💊",
                prescription: false,
                composition: "Fenugreek Seed Extract 500mg",
                unit: "Bottle",
                quantity: "60 capsules",
                mrp: 295,
                discount: 12,
                price: 260,
                desc: "Natural blood sugar support.",
                uses: "Blood sugar management",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Bitter Melon Extract",
                image: "💊",
                prescription: false,
                composition: "Karela Extract 500mg",
                unit: "Bottle",
                quantity: "60 capsules",
                mrp: 245,
                discount: 12,
                price: 216,
                desc: "Natural diabetes support.",
                uses: "Blood sugar management",
                storage: "Store below 25°C"
            },
            {
                name: "Cinnamon Extract",
                image: "💊",
                prescription: false,
                composition: "Ceylon Cinnamon 500mg",
                unit: "Bottle",
                quantity: "60 capsules",
                mrp: 275,
                discount: 12,
                price: 242,
                desc: "Natural blood sugar support.",
                uses: "Blood sugar, Metabolism",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Chromium Picolinate",
                image: "💊",
                prescription: false,
                composition: "Chromium 200mcg",
                unit: "Bottle",
                quantity: "60 tablets",
                mrp: 245,
                discount: 10,
                price: 221,
                desc: "Blood sugar support mineral.",
                uses: "Glucose metabolism",
                storage: "Store below 25°C"
            },
            {
                name: "Alpha Lipoic Acid 300mg",
                image: "💊",
                prescription: false,
                composition: "Alpha Lipoic Acid 300mg",
                unit: "Bottle",
                quantity: "30 capsules",
                mrp: 445,
                discount: 12,
                price: 392,
                desc: "Antioxidant for nerve health.",
                uses: "Diabetic neuropathy, Antioxidant",
                storage: "Store in refrigerator"
            },
            {
                name: "Berberine 500mg",
                image: "💊",
                prescription: false,
                composition: "Berberine HCl 500mg",
                unit: "Bottle",
                quantity: "60 capsules",
                mrp: 595,
                discount: 10,
                price: 536,
                desc: "Natural blood sugar support.",
                uses: "Blood sugar, Cholesterol",
                storage: "Store in a cool, dry place"
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

//* DOMContentLoaded - Main Initialization */
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return; // Not a product page

    // Check what type of page we're on
    const categoryId = document.body.dataset.category; // For category pages
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search') || '';

    // Determine which products to show
    let productsToShow = [];
    let pageTitle = 'All Products';

    if (categoryId) {
        // Category page - show only products from this category
        const category = storeData.find(cat => cat.id === categoryId);
        if (category) {
            productsToShow = category.products.map(p => ({ ...p, categoryName: category.category, categoryIcon: category.icon }));
            pageTitle = category.category;
        }
    } else {
        // Products page - show all products
        storeData.forEach(cat => {
            cat.products.forEach(product => {
                productsToShow.push({ ...product, categoryName: cat.category, categoryIcon: cat.icon });
            });
        });
    }

    // Apply search filter if present
    if (searchQuery) {
        const term = searchQuery.toLowerCase();
        productsToShow = productsToShow.filter(p =>
            p.name.toLowerCase().includes(term) ||
            p.composition.toLowerCase().includes(term) ||
            p.uses.toLowerCase().includes(term)
        );
        pageTitle = `Search Results for "${searchQuery}"`;

        // Update page title and count
        const pageTitleEl = document.getElementById('page-title');
        const productCountEl = document.getElementById('product-count');
        if (pageTitleEl) pageTitleEl.textContent = pageTitle;
        if (productCountEl) productCountEl.textContent = `Found ${productsToShow.length} products`;

        // Fill search inputs with query
        const searchInput = document.getElementById('search-input');
        const searchInputDesktop = document.getElementById('search-input-desktop');
        if (searchInput) searchInput.value = searchQuery;
        if (searchInputDesktop) searchInputDesktop.value = searchQuery;
    }

    // Render products
    if (productsToShow.length === 0) {
        mainContent.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try searching with different keywords</p>
                <a href="products.html" class="btn-primary">View All Products</a>
            </div>
        `;
    } else {
        // Create product grid
        const grid = document.createElement('div');
        grid.classList.add('product-grid');

        productsToShow.forEach(product => {
            const card = createProductCard(product);
            grid.appendChild(card);
        });

        mainContent.appendChild(grid);
    }

    // Cart Modal Logic
    setupCartListeners();

    // Search Listeners - Redirect to products page with search query
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchInputDesktop = document.getElementById('search-input-desktop');
    const searchBtnDesktop = document.getElementById('search-btn-desktop');

    function performSearch(query) {
        const trimmedQuery = query.trim();
        if (trimmedQuery) {
            window.location.href = `products.html?search=${encodeURIComponent(trimmedQuery)}`;
        } else {
            window.location.href = 'products.html';
        }
    }

    // Mobile search
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch(searchInput.value);
        });
    }
    if (searchBtn) {
        searchBtn.addEventListener('click', () => performSearch(searchInput?.value || ''));
    }

    // Desktop search
    if (searchInputDesktop) {
        searchInputDesktop.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch(searchInputDesktop.value);
        });
    }
    if (searchBtnDesktop) {
        searchBtnDesktop.addEventListener('click', () => performSearch(searchInputDesktop?.value || ''));
    }

    // Mobile Menu
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuBtn && mobileNav) {
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
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
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
