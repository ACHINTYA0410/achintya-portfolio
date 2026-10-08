import git from '../app/assets/svg/skills/git.svg';
import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import python from '../app/assets/svg/skills/python.svg';
import fastapi from '../app/assets/svg/skills/fastapi.svg';

const skillIcons = {
  "javascript": javascript,
  "mongodb": mongoDB,
  "mysql": mysql,
  "java": java,
  "python": python,
  "git": git,
  "fastapi": fastapi,
};

export const skillsImage = (skill) => skillIcons[skill.toLowerCase()];
