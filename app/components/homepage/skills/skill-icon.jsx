import Image from 'next/image';
import { skillsImage } from '@/utils/skill-image';
import { SiSpringboot, SiNodedotjs, SiRedis, SiSupabase, SiNeo4J, SiLangchain, SiPostman, SiSwagger, SiN8N } from 'react-icons/si';
import { FiDatabase, FiServer, FiSearch, FiUsers, FiCode, FiEye, FiMessageSquare, FiGitBranch, FiLayers, FiBox, FiShare2, FiCpu, FiTerminal } from 'react-icons/fi';
const icons = {
  'Spring Boot': SiSpringboot, 'Node.js': SiNodedotjs, Redis: SiRedis,
  Supabase: SiSupabase, Neo4j: SiNeo4J, LangChain: SiLangchain,
  Postman: SiPostman, 'Swagger/OpenAPI': SiSwagger, n8n: SiN8N,
  SQL: FiDatabase, 'REST APIs': FiServer, RAG: FiSearch,
  'Multi-Agent Systems': FiUsers, 'LLM Function Calling': FiCode,
  'Vision LLMs': FiEye, 'Prompt Engineering': FiMessageSquare,
  'Data Structures & Algorithms': FiGitBranch, 'Database Management Systems': FiLayers,
  OOP: FiBox, 'Computer Networks': FiShare2, 'Operating Systems': FiCpu,
};
export default function SkillIcon({ skill }) {
  const image = skillsImage(skill);
  const Icon = icons[skill] || FiTerminal;
  return <span className="skill-icon" aria-hidden="true">{image ? <Image src={image.src} alt="" width={30} height={30} /> : <Icon size={30} />}</span>;
}
