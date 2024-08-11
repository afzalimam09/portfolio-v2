// import { MdClose } from "react-icons/md";
import { serviceList } from "@/constants";

const About = () => {
    // const [modal, setModal] = useState(testimonials[0]);
    // const [active, setActive] = useState(false);
    // const handleModal = (data) => {
    //     setActive(true);
    //     setModal(data);
    // };

    return (
        <article className="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>
                    I'm Full Stack Web Developer from Bengaluru, Karnatka,
                    India, completed B-Tech in Computer Science from KIST
                    College, Bhubaneshwar, Odisha in 2023.
                </p>

                <p>
                    I have completed several courses and projects related to web
                    development, including building a RESTful API. I am skilled
                    in Node.js, MongoDB, and MySQL, and have experience with
                    frontend technologies such as React, Redux, and Next.js.
                    Through these experiences, I have developed a strong
                    foundation in programming languages such as JavaScript,
                    Java, HTML, and CSS, as well as experience in creating
                    scalable and maintainable code.
                </p>
                <p>
                    In addition to my technical skills, I possess excellent
                    communication skills and enjoy working collaboratively with
                    others to achieve common goals. I am highly motivated,
                    detail-oriented, and possess a strong work ethic.
                </p>
                <a href="/afzal-resume.pdf" className="download-resume">
                    Download Resume
                </a>
            </section>

            <section className="service">
                <h3 className="h3 service-title">What i'm doing</h3>

                <ul className="service-list">
                    {serviceList.map((item: any) => (
                        <li key={item.id} className="service-item">
                            <div className="service-icon-box">
                                <img
                                    src={item.image}
                                    alt="Web development icon"
                                    width="40"
                                />
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">
                                    {item.title}
                                </h4>

                                <p className="service-item-text">{item.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* testimonials */}

            {/* <section className="testimonials">
                <h3 className="h3 testimonials-title">Testimonials</h3>

                <ul className="testimonials-list has-scrollbar">
                    {testimonials.map((item) => (
                        <li
                            onClick={() => handleModal(item)}
                            key={item.id}
                            className="testimonials-item"
                        >
                            <div className="content-card">
                                <figure className="testimonials-avatar-box">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        width="60"
                                    />
                                </figure>

                                <h4 className="h4 testimonials-item-title">
                                    {item.name}
                                </h4>

                                <div className="testimonials-text">
                                    <p>{item.comment}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section> */}

            {/* - testimonials modal */}

            {/* <div className={`modal-container ${active ? "active" : ""}`}>
                <div className={`overlay ${active ? "active" : ""}`}></div>

                <section className="testimonials-modal">
                    <button
                        onClick={() => setActive(false)}
                        className="modal-close-btn"
                    >
                        <MdClose />
                    </button>

                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img
                                src={modal.image}
                                alt="Daniel lewis"
                                width="80"
                            />
                        </figure>

                        <img
                            src="/images/icons/icon-quote.svg"
                            alt="quote icon"
                        />
                    </div>

                    <div className="modal-content">
                        <h4 className="h3 modal-title">{modal.name}</h4>
                        <p className="time">{modal.date}</p>

                        <div>
                            <p>{modal.comment}</p>
                        </div>
                    </div>
                </section>
            </div> */}

            {/* Clients  */}

            {/* <section className="clients">
                <h3 className="h3 clients-title">Clients</h3>

                <ul className="clients-list has-scrollbar">
                    {clients.map((item) => (
                        <li key={item.id} className="clients-item">
                            <a href={item.link}>
                                <img src={item.image} alt={item.title} />
                            </a>
                        </li>
                    ))}
                </ul>
            </section> */}
        </article>
    );
};

export default About;
