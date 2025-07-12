from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

RECOMMENDED_PRODUCTS = {
    "bag": [
        {
            "title": "STRUTT Canvas Reusable Tote Bag – Organic Cotton, 15 kg Capacity",
            "score": 90,
            "url": "https://www.amazon.in/dp/B0C81MCL8X"
        },
        {
            "title": "COTTONTHEME Organic Cotton Tote Bag",
            "score": 88,
            "url": "https://www.amazon.in/dp/B0DJZ2JY8R"
        },
        {
            "title": "Ecodott Heavy‑Duty Canvas Tote",
            "score": 89,
            "url": "https://www.amazon.in/dp/B0CV5WGW6F"
        }
    ],
    "toothbrush": [
        {
            "title": "Rusabl Organic Bamboo Toothbrush (Pack of 4)",
            "score": 88,
            "url": "https://www.amazon.in/dp/B07W77TJZP"
        }
    ],
    "bottle": [
        {
            "title": "Milton Thermosteel Flip Lid Flask 1000 ml",
            "score": 85,
            "url": "https://www.amazon.in/dp/B07FNDHM3N"
        },
        {
            "title": "Milton Thermosteel Flip Lid Flask 500 ml",
            "score": 84,
            "url": "https://www.amazon.in/dp/B00MIYM0VS"
        }
    ],
    "container": [
        {
            "title": "Borosil Klip‑N‑Store Glass Container 240 ml",
            "score": 88,
            "url": "https://www.amazon.in/dp/B07HZ4QFPQ"
        },
        {
            "title": "SignoraWare Borosilicate Glass Rectangle Container",
            "score": 90,
            "url": "https://www.amazon.in/dp/B0753ZSGGM"
        },
        {
            "title": "Cutting EDGE Square Glass Container",
            "score": 85,
            "url": "https://www.amazon.in/dp/B098F75HHL"
        },
        {
            "title": "FineDine Glass Meal Prep Storage Set",
            "score": 87,
            "url": "https://www.amazon.in/dp/B0722CY615"
        }
    ],
    "garbage bag": [
        {
            "title": "Presto! Compostable Garbage Bags (Medium, 180‑Count)",
            "score": 83,
            "url": "https://www.amazon.in/dp/B0821PN8L4"
        },
        {
            "title": "SuperBio Compostable Garbage Bags (33 Gal, 40‑Count)",
            "score": 85,
            "url": "https://www.amazon.in/dp/B09MFBVG5N"
        },
        {
            "title": "ECO SOUL Compostable Garbage Bags (24×32 in, Pack of 10)",
            "score": 82,
            "url": "https://www.amazon.in/dp/B0CP3RQPY7"
        }
    ],
    "plate": [
        {
            "title": "Palm Naki Round Palm Leaf Plates – 40 Pack (10\" Compostable)",
            "score": 82,
            "url": "https://www.amazon.in/dp/B081PDMLN1"
        },
        {
            "title": "ECO SOUL Palm Leaf Square Plates – 50 Pack (6\" Compostable)",
            "score": 84,
            "url": "https://www.amazon.in/dp/B08D7H74SP"
        },
        {
            "title": "Sumeet Stainless Steel Dinner Plates – Set of 6",
            "score": 86,
            "url": "https://www.amazon.in/dp/B08XR15FSQ"
        }
    ],
    "notebook": [
        {
            "title": "Recycled Paper A5 Notebook – 160 Sheets",
            "score": 86,
            "url": "https://www.amazon.in/dp/B0DYJ2ZZNR"
        }
    ],
    "pen": [
        {
            "title": "GreenSouls Bamboo Refillable Pen Set (3‑Pack)",
            "score": 87,
            "url": "https://www.amazon.in/dp/B07TWKTQGW"
        }
    ],
    "grocery": [
        {
            "title": "24 Mantra Organic Unpolished Toor Dal – 1 kg",
            "score": 85,
            "url": "https://www.amazon.in/dp/B00L925NJQ"
        },
        {
            "title": "Organic Tattva Toor Dal – 1 kg",
            "score": 86,
            "url": "https://www.amazon.in/dp/B00M57ULF0"
        },
        {
            "title": "Nu Organic Brown Basmati Rice – 500 g",
            "score": 84,
            "url": "https://www.amazon.in/dp/B0D8WLG3Y8"
        },
        {
            "title": "Pure & Sure Brown Basmati Rice – 1 kg",
            "score": 83,
            "url": "https://www.amazon.in/dp/B017KJ5CTW"
        }
    ],
    "straw": [
        {
            "title": "Rusabl Stainless Steel Straws (4 pcs) with Cleaning Brush",
            "score": 82,
            "url": "https://www.amazon.in/dp/B07KQYD7C1"
        },
        {
            "title": "Earthism Reusable Stainless Steel Straws Set (4 pcs) + Pouch",
            "score": 85,
            "url": "https://www.amazon.in/dp/B08MB38PP8"
        }
    ],
    "tshirt": [
        {
            "title": "TOUCH Sustainable Men's Organic Cotton T‑Shirt",
            "score": 88,
            "url": "https://www.amazon.in/dp/B0DMJVZJFR"
        },
        {
            "title": "Woodwose Organic Cotton Men's T‑Shirt",
            "score": 86,
            "url": "https://www.amazon.in/dp/B06XBWBX63"
        }
    ],
    "pants": [
        {
            "title": "Hand‑Loom Pure Organic Cotton Pants",
            "score": 87,
            "url": "https://www.amazon.in/dp/B0CKXCY67S"
        },
        {
            "title": "Laas GOTS‑Certified Organic Cotton Pants",
            "score": 85,
            "url": "https://www.amazon.in/dp/B0D4W2L4F3"
        }
    ],
    "cutlery": [
        {
            "title": "Frenchware Stainless Steel Spoon & Fork Set (12‑pc)",
            "score": 88,
            "url": "https://www.amazon.in/dp/B0BFHVF69H"
        },
        {
            "title": "Orren Living Stainless Steel Spoon & Fork Set (12‑pc)",
            "score": 86,
            "url": "https://www.amazon.in/dp/B0DM9BDGQ6"
        }
    ]
}


@app.route("/api/recommendations")
def get_recommendations():
    category = request.args.get("category", "").lower()
    results = RECOMMENDED_PRODUCTS.get(category, [])
    return jsonify(results)


if __name__ == "__main__":
    app.run(debug=True)
