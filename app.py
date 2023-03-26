from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/generate-image', methods=['POST'])
def generate_image():
    prompt = request.json['prompt']

    # Générer l'image à l'aide de l'API DALL-E et récupérer l'URL de l'image
    # Vous devrez remplacer 'your_api_key_here' par votre clé API DALL-E
    headers = {'Authorization': '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'}
    data = {'prompt': prompt, 'num_images': 1}
    response = requests.post('https://api.openai.com/v1/images/generations', headers=headers, json=data)

    image_url = response.json()['data'][0]['url']

    return jsonify({'imageUrl': image_url})

if __name__ == '__main__':
    app.run(debug=True)
