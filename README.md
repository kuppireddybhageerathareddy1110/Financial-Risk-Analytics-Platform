
# Financial Risk Analytics Platform

An **enterprise-grade, explainable financial risk assessment system** built using **FastAPI, React (Vite), Machine Learning, and SHAP explainability**.  
The platform evaluates financial risk based on key indicators and provides **transparent, interpretable insights** suitable for real-world financial decision-making.

---

## 🚀 Key Features

- **Risk Scoring Engine**
  - Predicts a continuous risk score (0–1)
  - Classifies risk into **Low / Medium / High**
- **Explainable AI (XAI)**
  - SHAP-based feature attribution
  - Clear explanation of *why* a risk decision was made
- **Interactive Frontend**
  - Built with **React + Vite**
  - Clean, enterprise-style UI
- **Backend API**
  - FastAPI-based REST endpoints
  - Input validation and domain constraints
- **Visualization**
  - Risk factor distribution charts
- **Production-Oriented Design**
  - Separation of API, ML, and UI layers
  - Defensive validation against invalid financial inputs

---

## 🧠 Risk Indicators Used

| Feature      | Description |
|--------------|------------|
| Revenue      | Annual revenue |
| Debt         | Outstanding liabilities |
| Volatility   | Market / business volatility (0–1) |
| Liquidity    | Liquidity ratio (0–1) |

---

## 🏗️ Architecture Overview

```

financial-risk-analytics-platform/
│
├── backend/
│   ├── app/
│   │   ├── api/           # FastAPI routes
│   │   ├── ml/            # ML model + SHAP explainability
│   │   ├── schemas/       # Pydantic schemas
│   │   └── main.py        # FastAPI entry point
│   ├── models/            # Trained ML model
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/
│   │   └── api.js         # Backend API calls
│   └── package.json
│
├── database/              # (Optional) DB schema / extensions
└── README.md

````

---

## ⚙️ Tech Stack

### Backend
- **FastAPI**
- **Scikit-learn**
- **SHAP**
- **Pandas**
- **Joblib**

### Frontend
- **React**
- **Vite**
- **Chart.js**
- **Modern CSS**

---

## ▶️ How to Run the Project

### 1️⃣ Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
````

Backend runs at:

```
http://localhost:8000
```

API docs:

```
http://localhost:8000/docs
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔍 Example API Request

**POST** `/risk/analyze`

```json
{
  "revenue": 50000,
  "debt": 10000,
  "volatility": 0.3,
  "liquidity": 0.6
}
```

**Response**

```json
{
  "risk_score": 0.54,
  "risk_level": "Medium",
  "explanation": [[0.10, 0.08, -0.02, -0.05]],
  "input": {
    "revenue": 50000,
    "debt": 10000,
    "volatility": 0.3,
    "liquidity": 0.6
  }
}
```

---

## 🧾 Explainability (SHAP)

The system provides **feature-level explanations** showing:

* Which factors increase risk
* Which factors reduce risk
* The magnitude of each contribution

This makes the model **auditable, transparent, and regulator-friendly**.

---

## 🛡️ Validation & Safety

* Enforces financial domain constraints
* Prevents out-of-distribution inputs
* Conservative risk behavior (no extreme jumps)

---

## 🎯 Use Cases

* Financial Risk Analysis
* Credit Risk Evaluation
* Investment Due Diligence
* FinTech / Banking ML Systems
* Explainable AI Demonstrations

---

## 📈 Future Enhancements

* Financial ratio–based features
* Confidence / uncertainty scoring
* MySQL persistence & audit logs
* PDF risk reports
* Role-based access control

---

## 👨‍💻 Author

**Kuppireddy Bhageeratha Reddy**
Computer Science Engineer | Data Science | AI/ML
GitHub: [https://github.com/kuppireddybhageerathareddy1110](https://github.com/kuppireddybhageerathareddy1110)

---

## 📜 License

This project is licensed for **educational and portfolio use**.
<img width="1370" height="797" alt="image" src="https://github.com/user-attachments/assets/1ed204e3-466a-4c8e-94c2-95bb2a916fbc" />
<img width="1648" height="925" alt="image" src="https://github.com/user-attachments/assets/6016e189-1880-46db-a6bd-ece771369f80" />
