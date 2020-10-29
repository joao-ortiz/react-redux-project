const { default: ProjectSummary } = require("./ProjectSummary");

import ProjectSummary from './ProjectSummary'

function ProjectList() {
     return (
         <div className="project-list section">
             <ProjectSummary />
         </div>
     )
 }

 export default ProjectList