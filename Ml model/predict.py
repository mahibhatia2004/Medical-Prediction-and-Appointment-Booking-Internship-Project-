from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    # TODO: connect ML model here
    return jsonify({'disease': 'unknown', 'confidence': 0.0})

if __name__ == '__main__':
    app.run(port=6000, debug=True)
