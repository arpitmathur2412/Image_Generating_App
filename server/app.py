from flask import Flask

app=Flask(__name__)

@app.route("/python",methods=['GET'])
def index():
    return "Hello world"

if __name__ == "__main__":
    app.run(port=5000,debug=True)