import os
import pandas as pd
import joblib
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CSV_PATH = os.path.join(BASE_DIR, "risk_data.csv")
MODEL_PATH = os.path.join(BASE_DIR, "../../models/risk_model.pkl")

df = pd.read_csv(CSV_PATH)

X = df[["revenue", "debt", "volatility", "liquidity"]]
y = df["risk_score"]

pipeline = Pipeline([
    ("scaler", StandardScaler()),
    ("model", RandomForestRegressor(
        n_estimators=400,
        max_depth=8,
        random_state=42
    ))
])

pipeline.fit(X, y)

joblib.dump(pipeline, MODEL_PATH)

print("✅ Risk model trained and saved")
