import pickle
from feature_extraction import extract_features
from phish_llm import generate
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

with open("phishing_model.pkl", "rb") as f:
    model = pickle.load(f)

test_url = "http://google.com"


@app.route('/predict', methods=['POST'])
def predict():
    url = request.json.get("url")
    if not url:
        return jsonify({'error': 'No URL provided'}), 400
    features = extract_features(url)
    print(features)
    prediction = model.predict(features)[0]
    probability = model.predict_proba(features)[0]
    confidence = max(probability)
    return jsonify({'result': "Phising" if int(prediction) == 1 else "Not Phishing", 'confidence' : round(confidence * 100 , 2)})

@app.route('/llm-analyze', methods=['POST', 'OPTIONS'])
@cross_origin()
def llm_analyze():
    print("hi i hit this end point why no working?")
    if request.method == 'OPTIONS':
        return '', 200 #seeing if acknowledging the req can debug this
    
    data = request.get_json()
    input_text = data.get("text", "")
    if not input_text:
        return jsonify({"error": "No text provided"}), 400

    try:
        from phish_llm import generate
        import json

        output = generate(input_text)         
        json_output = json.loads(output)      
        return jsonify(json_output)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True)


