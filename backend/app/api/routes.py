from fastapi import APIRouter
from app.schemas.risk import RiskInput
from app.ml.model import predict_risk
from app.ml.explain import explain

router = APIRouter()


@router.post("/risk/analyze")
def analyze_risk(input: RiskInput):

    # -------------------------------
    # ✅ DOMAIN VALIDATION (ADD HERE)
    # -------------------------------

    if input.revenue <= 0:
        raise HTTPException(
            status_code=400,
            detail="Revenue must be greater than zero"
        )

    if input.debt < 0:
        raise HTTPException(
            status_code=400,
            detail="Debt cannot be negative"
        )

    if input.debt > 10 * input.revenue:
        raise HTTPException(
            status_code=400,
            detail="Debt-to-revenue ratio exceeds supported range"
        )

    if input.volatility < 0 or input.volatility > 1:
        raise HTTPException(
            status_code=400,
            detail="Volatility must be between 0 and 1"
        )

    if input.liquidity < 0 or input.liquidity > 1:
        raise HTTPException(
            status_code=400,
            detail="Liquidity must be between 0 and 1"
        )

    # -------------------------------
    # ✅ SAFE ML INFERENCE
    # -------------------------------

    data = [
        input.revenue,
        input.debt,
        input.volatility,
        input.liquidity
    ]

    score, level = predict_risk(data)
    explanation = explain(data)

    return {
        "risk_score": float(score),
        "risk_level": level,
        "explanation": explanation,
        "input": input.dict()
    }
