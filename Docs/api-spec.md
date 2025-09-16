# API Specification

## GET /api/health
- Returns: `{ status: "ok" }`

## POST /api/predict
- Body: `{ symptoms: [...] }`
- Returns: `{ disease: "...", confidence: 0.0 }`
