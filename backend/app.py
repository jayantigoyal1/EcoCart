from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/products")
def get_products():
    return jsonify([
    {
        "id": 1,
        "name": "Eco Bottle",
        "brand": "EcoBrand",
        "price": 599,
        "originalPrice": 899,
        "ecoScore": 91
    },
    {
        "id": 2,
        "name": "Green Bag",
        "brand": "GreenStuff",
        "price": 299,
        "originalPrice": 499,
        "ecoScore": 87
    }
])


if __name__ == "__main__":
    app.run(debug=True)
