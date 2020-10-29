function ProjectDetails(props) {
    const id = props.match.params.id

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card_content">
                    <span className="card-title">
                        Project Title - {id}
                    </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eum excepturi molestias maiores blanditiis fuga rerum odio consectetur perspiciatis, corrupti asperiores animi alias possimus aut, libero quasi illo sequi autem!</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by me</div>
                    <div>29th October, 5pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails