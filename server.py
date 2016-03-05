from jinja2 import StrictUndefined

from flask import Flask, render_template, make_response, redirect, request, flash, session

app = Flask(__name__)
app.secret_key = "HyrVFG2jcVlpN0qH"

app.jinja_env.undefined = StrictUndefined

@app.route('/')
def render_pages(**kwargs):
    """
    Serves the appropriate HTML page for each route
    """
    return make_response(open('templates/index.html').read())


if __name__ == "__main__":
    app.run(debug = True)