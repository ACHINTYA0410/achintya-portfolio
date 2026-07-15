export const projectsData = [
    {
        id: 1,
        name: 'Citizen Saathi - Agentic AI Civic Assistant',
        description: "Orchestrated a 3-agent pipeline (Planner, Retriever, Advisor) that recommends Indian government welfare schemes, decomposing each user query into retrieval and advisory sub-tasks. Architected hybrid retrieval fusing Supabase pgvector semantic search and live Tavily web scraping to anchor responses in curated scheme data and current web results. Applied RAG-grounded synthesis with deterministic eligibility rules in the Advisor agent, eliminating hallucinated recommendations across 50+ supported schemes. Deployed on Vercel with Supabase, swapping between Groq (Llama 3.3) and NVIDIA NIM (Llama 3.1) through environment configuration.",
        tools: ['FastAPI', 'React', 'LangChain', 'Supabase pgvector', 'Groq', 'NVIDIA NIM'],
        role: 'Full Stack & AI Engineer',
        code: 'https://github.com/ACHINTYA0410',
        demo: '',
    },
    {
        id: 2,
        name: 'TravelBuddy - Ride-Sharing Web Application',
        description: 'Created a full-stack ride-sharing platform where users schedule trips, request rides, and manage bookings. Developed RESTful APIs on Node.js and MongoDB powering ride requests, booking workflows, and user notifications. Crafted a responsive React and Tailwind CSS interface for scheduling and managing rides across devices.',
        tools: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
        role: 'Full Stack Developer',
        code: 'https://github.com/achintya0410/travelbuddy',
        demo: '',
    },
    {
        id: 3,
        name: 'Event RSVP & Management Platform',
        description: 'Delivered a full-stack RSVP platform with MVC architecture and secure bcrypt-hashed JWT authentication for event organizers and attendees. Streamed live attendance updates over WebSockets and validated APIs through Jest and Postman tests.',
        tools: ['Node.js', 'Express', 'MongoDB', 'React', 'WebSockets', 'JWT', 'Nodemailer'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },
