CREATE DATABASE financial_risk;
USE financial_risk;

CREATE TABLE risk_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    revenue FLOAT,
    debt FLOAT,
    volatility FLOAT,
    liquidity FLOAT,
    risk_score FLOAT,
    risk_level VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
