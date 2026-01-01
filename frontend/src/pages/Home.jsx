import { useState } from "react";
import RiskForm from "../components/RiskForm";
import RiskDashboard from "../components/RiskDashboard";
import RiskChart from "../components/RiskChart";
import Explainability from "../components/Explainability";

export default function Home() {
  const [result, setResult] = useState(null);

  return (
    <div className="container">
      <h1>Financial Risk Analytics Platform</h1>
      <p className="subtitle">
        Explainable, data-driven financial risk assessment
      </p>

      <RiskForm setResult={setResult} />
      <RiskDashboard result={result} />
      <RiskChart result={result} />
      <Explainability result={result} />
    </div>
  );
}
