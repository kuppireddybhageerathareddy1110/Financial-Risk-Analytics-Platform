from sqlalchemy import Column, Integer, Float, String
from app.database import Base

class RiskRecord(Base):
    __tablename__ = "risk_records"

    id = Column(Integer, primary_key=True)
    revenue = Column(Float)
    debt = Column(Float)
    volatility = Column(Float)
    liquidity = Column(Float)
    risk_score = Column(Float)
    risk_level = Column(String(20))
