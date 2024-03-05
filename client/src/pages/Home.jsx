export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>It is an aim not a dream</p>

              <h1>Welcome to Mern Stack Developement</h1>

              <p>
                The MERN Stack combines the most recent technologies for
                building high-end web apps. Multiple frameworks, databases,
                libraries, and other tools are used to create these apps.
              </p>
              <p>
                It comprises several open-source parts, including MongoDB,
                React, Node.js, and Express.js. MongoDB, Express.js, and Node.js
                help you build the backend of an application, while React powers
                the frontend
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn secondary-btn">connect now</button>
                </a>
                <a href="/about">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
