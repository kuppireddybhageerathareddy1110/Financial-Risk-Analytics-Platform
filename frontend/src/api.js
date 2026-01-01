export async function analyzeRisk(payload) {
  const res = await fetch("http://localhost:8000/risk/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}
