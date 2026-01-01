from pydantic import BaseModel

class RiskInput(BaseModel):
    revenue: float
    debt: float
    volatility: float
    liquidity: float
