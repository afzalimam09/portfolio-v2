import BackButton from "@/components/BackButton";
import { portfolio } from "@/constants";

interface Params {
    params: {
        slug: string;
    };
}

const SingleProject = ({ params }: Params) => {
    const { slug } = params;

    // Ensure slug is always a string
    const slugString = Array.isArray(slug) ? slug[0] : slug || "";

    // Extract projectId from slug
    const projectId = Number(slugString.split("-")[0]) || 0;
    const project: any = portfolio[projectId - 1] || {};

    return (
        <article className="single">
            <header>
                <BackButton />
                <h3 className="h3">{project.name || "Project Name"}</h3>
            </header>
            <section>
                <h3 className="h3">{project.title || "Project Title"}</h3>
                <ul className="testimonials-list has-scrollbar">
                    {project.images?.map((item: any, index: number) => (
                        <li key={index} className="testimonials-item">
                            <figure className="project-img">
                                <img
                                    src={item}
                                    alt={project.title || "Project Image"}
                                />
                            </figure>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="desc">
                <p>{project.firstPara || "Description not available"}</p>
                <h4 className="h4">Key Features</h4>
                {project.features?.map((item: any) => (
                    <p key={item.id}>
                        <b>{item.title}:</b> {item.desc}
                    </p>
                ))}
                <p>
                    {project.lastPara || "Additional information not available"}
                </p>
            </section>
            <section>
                <h4 className="h4">Tech Stacks</h4>
                <div className="techstack-list">
                    {project.techstacks?.map((item: any, index: number) => (
                        <p className="techstack" key={index}>
                            {item}
                        </p>
                    ))}
                </div>
            </section>
            <section>
                <h4 className="h4">Deployed Links</h4>
                <div className="deployed-links">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo
                        </a>
                    )}
                    {project.api && (
                        <a
                            href={project.api}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            API Documentation
                        </a>
                    )}
                </div>
            </section>
        </article>
    );
};

export default SingleProject;
