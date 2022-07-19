import '../Skills/skills.css'
import skill from '../../utils/skillData'
import SkillCard from '../../components/SkillCard/SkillCard'


const Skills = () => {

 
    return (
      <main>
       <div className="skill-title">Skills</div>
       <div className="skill-cont">
          <SkillCard data={skill} />
       </div>
  </main>
  
    );
  };

export default Skills;