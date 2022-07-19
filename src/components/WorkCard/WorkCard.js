



const WorkCard = ({ data }) => {

    return (
      
      <div>
        {data.length > 0 && (
            <div className="card-cont">
                   {data.map(work => (
                     <div className='work-card'>
                       <div className='info-cont'>
                         <img className="img-size" src={work.image} alt="blck" />
                          <p className="work-name">{work.name}</p>
                          <p className="work-desc">{work.description}</p>
                       </div>
                       <div className="work-link-cont">
                       <a className="work-link" target="_blank"  rel="noreferrer" href={work.github}><i class="bi-github"></i>Github</a>
                       <a className="work-link" target="_blank"  rel="noreferrer" href={work.deployed}><i class="bi bi-globe2"></i>Deployed</a>
                       </div>
                     </div>
                     ))}
            </div>
           )}
      </div>
   
     
      
    );
  };
  
  export default WorkCard;