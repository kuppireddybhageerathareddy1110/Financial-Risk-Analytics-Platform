const FEATURES = ["Revenue", "Debt", "Volatility", "Liquidity"];

export default function RiskDashboard({ result, error }) {
  if (error) {
    return (
      <div className="card error">
        <h2>Risk Assessment Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!result) return null;

  const { risk_score, risk_level, explanation } = result;

  // SHAP output format: [[v1, v2, v3, v4]]
  const shapValues =
    Array.isArray(explanation) && Array.isArray(explanation[0])
      ? explanation[0]
      : [];

  return (
    <div className={`card risk ${risk_level.toLowerCase()}`}>
      <h2>Risk Assessment</h2>

      <div className="metric">
        <span className="label">Risk Score</span>
        <span className="value">{Number(risk_score).toFixed(3)}</span>
      </div>

      <div className="metric">
        <span className="label">Risk Level</span>
        <span className={`badge ${risk_level.toLowerCase()}`}>
          {risk_level}
        </span>
      </div>

      {shapValues.length > 0 && (
        <div className="explain">
          <h3>Explainability (Key Risk Drivers)</h3>
          <ul>
            {shapValues.map((val, idx) => (
              <li key={FEATURES[idx]}>
                <strong>{FEATURES[idx]}:</strong>{" "}
                {val > 0 ? "Increases risk" : "Reduces risk"} (
                {Number(val).toFixed(3)})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
