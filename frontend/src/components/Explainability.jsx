export default function Explainability({ result }) {
  if (!result || !Array.isArray(result.explanation)) return null;

  const labels = ["Revenue", "Debt", "Volatility", "Liquidity"];
  const shapValues = result.explanation[0] || [];

  return (
    <div className="card">
      <h3>Explainability (Key Risk Drivers)</h3>

      {shapValues.map((val, idx) => (
        <p key={idx}>
          <strong>{labels[idx]}:</strong>{" "}
          {val > 0 ? "Increases risk" : "Reduces risk"} (
          {Number(val).toFixed(3)})
        </p>
      ))}
    </div>
  );
}
