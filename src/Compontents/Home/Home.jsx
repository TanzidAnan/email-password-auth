
const Home = () => {
    return (
        <div>
            <section>
                <div
                    className="hero min-h-[70vh]"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/Rgkcsjb/the-poster-of-thalapathy-vijays-68th-film-313712690-16x9-0.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;