import joblib
import pandas as pd

MODEL_PATH = "models/risk_model.pkl"
FEATURES = ["revenue", "debt", "volatility", "liquidity"]

model = joblib.load(MODEL_PATH)

def predict_risk(data):
    """
    data: list in order [revenue, debt, volatility, liquidity]
    """

    # ✅ Always use DataFrame with feature names
    df = pd.DataFrame([data], columns=FEATURES)

    score = model.predict(df)[0]

    if score > 0.7:
        level = "High"
    elif score > 0.4:
        level = "Medium"
    else:
        level = "Low"

    return score, level
