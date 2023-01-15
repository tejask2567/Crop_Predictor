from flask import Flask, request, jsonify, render_template
import pickle
#import sklearn
from sklearn.neighbors import KNeighborsClassifier
import pandas as pd
import numpy as np
from flask_cors import CORS, cross_origin
import json

model = pickle.load(open('model.pkl', 'rb'))
app = Flask(__name__)
CORS(app)

res = list()


def listToString(s):

    # initialize an empty string
    str1 = ""

    # traverse in the string
    for ele in s:
        str1 += ele

    # return string
    return str1


class SetEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, set):
            return list(obj)
        return json.JSONEncoder.default(self, obj)


@app.route("/", methods=['POST'])
@cross_origin()
def predict():
    temp = int(request.json['input1'])
    hum = int(request.json['input2'])
    rain = int(request.json['input3'])
    user_input = [[temp, hum, rain]]
    df_2 = pd.DataFrame(user_input, columns=[
        'temperature', 'humidity', 'rainfall'])
    y_pred = model.predict(df_2)
    temp = np.array_str(y_pred)
    result = temp.split("['")[1].split("']")[0]
    # print(result)
    return jsonify({'display_text': result})


if __name__ == "__main__":
    app.run()
