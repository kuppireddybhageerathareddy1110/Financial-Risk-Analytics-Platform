import { useState } from "react";
import { analyzeRisk } from "../api";

export default function RiskForm({ setResult }) {
  const [form, setForm] = useState({
    revenue: "",
    debt: "",
    volatility: "",
    liquidity: ""
  });

  const submit = async () => {
    const data = await analyzeRisk({
      revenue: Number(form.revenue),
      debt: Number(form.debt),
      volatility: Number(form.volatility),
      liquidity: Number(form.liquidity)
    });

    setResult(data);
  };

  return (
    <div className="card">
      <h2>Risk Inputs</h2>

      {Object.keys(form).map(key => (
        <input
          key={key}
          placeholder={key}
          value={form[key]}
          onChange={e =>
            setForm({ ...form, [key]: e.target.value })
          }
        />
      ))}

      <button onClick={submit}>Analyze Risk</button>
    </div>
  );
}
