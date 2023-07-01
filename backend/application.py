from flask import Flask
from flask import request
from flask_cors import CORS
from menu import get_menu


app = Flask(__name__)
CORS(app)


@app.route("/", methods=["GET"])
def index():
    return "text parser:)"


@app.route("/", methods=['POST'])
def get_items():
    #print(request.get_json()) # -> {'post_text': 'テストテストテスト'}
    data = request.get_json()
    text = data['ingredients']
    return get_menu(text)


if __name__ == "__main__":
    app.debug = True
    app.run(host='127.0.0.1', port=5000)