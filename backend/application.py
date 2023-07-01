from flask import Flask
from flask import request
from menu import get_menu


app = Flask(__name__)


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
    app.run(host='0.0.0.0:3000', port=3000)