from flask import Flask, request, jsonify, send_from_directory, render_template_string
import json
import os

app = Flask(__name__)

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/tableau.json', methods=['GET'])
def tab():
    return send_from_directory('.', 'index.html')

@app.route('/tree.json', methods=['GET'])
def get_tree():
    return send_from_directory('.', 'tree.json')

@app.route('/save', methods=['POST'])
def save_tree():
    data = request.json
    with open('tree.json', 'w') as f:
        json.dump(data, f, indent=4)
    return jsonify({"status": "success"}), 200



if __name__ == '__main__':
    app.run(debug=True)
