import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function RiskChart({ result }) {
  if (!result) return null;

  const data = {
    labels: ["Revenue", "Debt", "Volatility", "Liquidity"],
    datasets: [
      {
        label: "Risk Drivers",
        data: [
          result.input?.revenue || 0,
          result.input?.debt || 0,
          result.input?.volatility || 0,
          result.input?.liquidity || 0
        ],
        backgroundColor: "#2563eb"
      }
    ]
  };

  return (
    <div className="card">
      <h3>Risk Factor Distribution</h3>
      <Bar data={data} />
    </div>
  );
}
