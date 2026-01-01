import shap
import joblib
import pandas as pd

MODEL_PATH = "models/risk_model.pkl"
FEATURES = ["revenue", "debt", "volatility", "liquidity"]

model = joblib.load(MODEL_PATH)
rf = model.named_steps["model"]
explainer = shap.TreeExplainer(rf)


def explain(data):
    df = pd.DataFrame([data], columns=FEATURES)
    shap_values = explainer.shap_values(df)
    return shap_values.tolist()
