import '../Work/work.css'
import work from '../../utils/workData'
import WorkCard from '../../components/WorkCard/WorkCard'


const Work = () => {

 
    return (
      <main>
       <div className="work-title">Work</div>
       <div className="work-cont">
          <WorkCard data={work} />
       </div>
  </main>
  
    );
  };

export default Work;