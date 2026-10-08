export const projectsData = [
  {
    "id": 1,
    "name": "DocGraph AI",
    "description": "Created a hybrid RAG system combining dense HNSW vector search with semantic graph traversals over Neo4j (GraphRAG). Orchestrated an asynchronous multi-agent FastAPI backend migrated to the Gemini Batch API to eliminate OOMs and rate-limit errors. Designed a write-time entity resolution engine using inline HNSW vector blocking with a 3-way similarity decision boundary to canonicalize entities across thousands of documents and prevent graph fragmentation.",
    "tools": [
      "Python",
      "FastAPI",
      "Neo4j",
      "React"
    ],
    "role": "Full-Stack GraphRAG Document Intelligence",
    "code": "https://github.com/ACHINTYA0410/DocGraph_AI",
    "demo": "",
    "category": "AI & Agents",
    "summary": "Document intelligence powered by vector search and knowledge graphs."
  },
  {
    "id": 2,
    "name": "MeshPay",
    "description": "Engineered a Spring Boot backend for offline UPI payments routed through a Bluetooth-style mesh network, using RSA-OAEP + AES-256-GCM encryption. Implemented atomic exactly-once settlement via ConcurrentHashMap CAS on SHA-256 ciphertext hashes to prevent duplicate-storm debits. Built a gossip-protocol mesh simulator with TTL-based hop propagation and a 5-stage bridge ingestion pipeline backed by optimistic-locking JPA transactions.",
    "tools": [
      "Java",
      "Spring Boot",
      "JPA",
      "H2"
    ],
    "role": "Mesh-Routed Deferred Settlement Engine",
    "code": "https://github.com/ACHINTYA0410/MeshPay",
    "demo": "",
    "category": "Backend Systems",
    "summary": "Encrypted offline payments across a simulated mesh network."
  },
  {
    "id": 3,
    "name": "Classroom Assistant",
    "description": "Built an adaptive learning web app for students with ADHD, targeting Grade 2–5 Mathematics with Lottie animations and attention check-in breaks. Designed Teaching, Quiz, and Report agents orchestrated through graph-based routing with logged decisions. Used Supabase pgvector RAG to ground explanations in curriculum content and rewrite them by grade and learning style. Tracked per-topic mastery and misconception tags so quizzes target weak spots in real time.",
    "tools": [
      "React",
      "TypeScript",
      "Supabase",
      "Google Gemini"
    ],
    "role": "Multi-Agent AI Tutor",
    "code": "https://github.com/ACHINTYA0410/Classroom_Assistant",
    "demo": "",
    "category": "AI & Agents",
    "summary": "An adaptive mathematics tutor with coordinated AI agents."
  },
  {
    "id": 4,
    "name": "Citizen Saathi - Agentic AI Civic Assistant",
    "description": "Orchestrated a 3-agent pipeline (Planner, Retriever, Advisor) that recommends Indian government welfare schemes, decomposing each user query into retrieval and advisory sub-tasks. Architected hybrid retrieval fusing Supabase pgvector semantic search and live Tavily web scraping to anchor responses in curated scheme data and current web results. Applied RAG-grounded synthesis with deterministic eligibility rules in the Advisor agent, eliminating hallucinated recommendations across 50+ supported schemes. Deployed on Vercel with Supabase, swapping between Groq (Llama 3.3) and NVIDIA NIM (Llama 3.1) through environment configuration.",
    "tools": [
      "FastAPI",
      "React",
      "LangChain",
      "Supabase pgvector",
      "Groq",
      "NVIDIA NIM"
    ],
    "role": "Full Stack & AI Engineer",
    "code": "https://github.com/ACHINTYA0410",
    "demo": "",
    "category": "AI & Agents",
    "summary": "Government welfare discovery with retrieval and eligibility checks."
  },
  {
    "id": 5,
    "name": "TravelBuddy - Ride-Sharing Web Application",
    "description": "Created a full-stack ride-sharing platform where users schedule trips, request rides, and manage bookings. Developed RESTful APIs on Node.js and MongoDB powering ride requests, booking workflows, and user notifications. Crafted a responsive React and Tailwind CSS interface for scheduling and managing rides across devices.",
    "tools": [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB"
    ],
    "role": "Full Stack Developer",
    "code": "https://github.com/achintya0410/travelbuddy",
    "demo": "",
    "category": "Full Stack",
    "summary": "Trip scheduling, ride requests, and booking management."
  },
  {
    "id": 6,
    "name": "Event RSVP & Management Platform",
    "description": "Delivered a full-stack RSVP platform with MVC architecture and secure bcrypt-hashed JWT authentication for event organizers and attendees. Streamed live attendance updates over WebSockets and validated APIs through Jest and Postman tests.",
    "tools": [
      "Node.js",
      "Express",
      "MongoDB",
      "React",
      "WebSockets",
      "JWT",
      "Nodemailer"
    ],
    "role": "Full Stack Developer",
    "code": "",
    "demo": "",
    "category": "Full Stack",
    "summary": "Event organization with secure sign-in and live attendance."
  }
];
