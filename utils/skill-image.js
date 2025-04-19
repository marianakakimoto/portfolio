import angular from '../app/assets/svg/skills/angular.svg';
import aws from '../app/assets/svg/skills/aws.svg';
import canva from '../app/assets/svg/skills/canva.svg';
import css from '../app/assets/svg/skills/css.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import figma from '../app/assets/svg/skills/figma.svg';
import firebase from '../app/assets/svg/skills/firebase.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import materialui from '../app/assets/svg/skills/materialui.svg';
import microsoftoffice from '../app/assets/svg/skills/microsoftoffice.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import react from '../app/assets/svg/skills/react.svg';
import nextJS from '../app/assets/svg/skills/nextjs.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';

// Criação do objeto de mapeamento das skills
const skillMap = {
  html,
  css,
  javascript,
  typescript,
  react,
  nextjs: nextJS,
  bootstrap,
  docker,
  angular,
  mongodb: mongoDB,
  mysql,
  java,
  aws,
  firebase,
  git,
  figma,
  materialui,
  canva,
  microsoftoffice,
};

// Função para retornar o ícone da skill
export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase().replace(/\s/g, ''); // Remove espaços
  return skillMap[skillID] || null; // Retorna null se a skill não for encontrada
};

// Componente para renderizar a imagem da skill (Exemplo em React)
const SkillIcon = ({ skill }) => {
  const icon = skillsImage(skill);

  // Só renderiza a imagem se houver um ícone válido
  if (!icon) return null;

  return <img src={icon} alt={skill} />;
};

// Exemplo de renderização múltipla de skills
const SkillsList = ({ skills }) => {
  return (
    <div>
      {skills.map((skill, index) => {
        const icon = skillsImage(skill);
        return icon ? (
          <img key={index} src={icon} alt={skill} />
        ) : null; // Não renderiza nada se o ícone for null
      })}
    </div>
  );
};

