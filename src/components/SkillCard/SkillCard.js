



const SkillCard = ({ data }) => {

    return (
      
      <div>
        {data.length > 0 && (
            <div className="skill-cont">
                   {data.map(skill => (
                     <div className='skill-card'>
                         <img className="img-skill" src={skill.image} alt="skill" />
                     </div>
                     ))}
            </div>
           )}
      </div>
   
     
      
    );
  };
  
  export default SkillCard;