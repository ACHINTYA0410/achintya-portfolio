export const experiences = [
  {
    "id": 1,
    "title": "Technology Intern",
    "company": "LEAD Group (Leadership Boulevard Pvt. Ltd.), Mumbai, India",
    "duration": "May 2026 - July 2026",
    "details": [
      "Built AR Co-Pilot, an Accounts Receivable validation platform using FastAPI, SQLAlchemy, React, and TypeScript, automating manual PO reviews of about 20 minutes each.",
      "Engineered a 3-stage PO reconciliation pipeline using AWS S3, ORP MySQL references, and a vision LLM to extract 5–20 line items per PO and flag unauthorized lines.",
      "Designed a 2-stage decision engine combining LLM semantic item matching with deterministic Python quantity comparison and verdict logic.",
      "Shipped a provider-agnostic LLM layer using Groq with AWS Bedrock fallback via LangChain, plus a finance-editable matching-rules studio.",
      "Extended the platform with a deal-validation service reconciling PAN records from Google Sheets against HubSpot CRM through an n8n government-lookup webhook, producing 5 audit verdicts."
    ]
  },
  {
    "id": 2,
    "title": "Software Development Intern",
    "company": "Fudr, Jaipur, India",
    "duration": "May 2025 - July 2025",
    "details": [
      "Restructured Swagger/OpenAPI documentation for a production Spring Boot backend using GroupedOpenApi, organizing 66 controllers into module-specific groups, tags, and definitions.",
      "Implemented field-level data exposure control with @JsonView and hid internal endpoints from public documentation.",
      "Integrated MySQL data flows, provisioned Redis, replaced hardcoded values with constants, and refactored legacy configurations.",
      "Resolved production issues involving JVM arguments, dependency conflicts, security manager constraints, and Spring Boot bean dependency cycles."
    ]
  }
];
