import React from 'react';
import { motion, useAnimation } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // Range from 0 to 100
  category: string; // 'frontend', 'backend', or 'other'
}

const skillsData: Skill[] = [
  { name: 'JavaScript', level: 80, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'React.js', level: 90, category: 'frontend' },
  { name: 'Node.js', level: 75, category: 'backend' },
  { name: 'Express', level: 75, category: 'backend' },
  { name: 'Postgres', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  // Add more skills as needed
];

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => {
  return (
    <div className="mb-4">
      <p className="mb-2 text-lg font-semibold">{name}</p>
      <div className="bg-gray-300 h-6 rounded-full overflow-hidden">
        <div
          className="bg-blue-500 h-full rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0 },
  };

  const animateSkills = async () => {
    await controls.start('visible');
  };

  React.useEffect(() => {
    animateSkills();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.8 }}
      className="mt-10"
    >
      <h2 className="text-3xl font-bold mb-8 text-blue-500">Skills</h2>
      <div className="flex flex-row justify-between items-center">
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Frontend</h3>
          {skillsData
            .filter((skill) => skill.category === 'frontend')
            .map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4 mr-12">Backend</h3>
          {skillsData
            .filter((skill) => skill.category === 'backend')
            .map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4 mr-12">Other</h3>
          {skillsData
            .filter((skill) => skill.category === 'other')
            .map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
