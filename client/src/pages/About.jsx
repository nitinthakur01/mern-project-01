export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <h1>About Mern App</h1>
              <p>
                <b>MongoDB :</b> It is a popular open-source, NoSQL,
                document-oriented database management system. Mongodb is
                designed to store and manage large volumes of data in a flexible
                and scalable manner
              </p>
              <p>
                <b>Express :</b> It is a popular web application framework for
                Node.js. It provides a set of features for building web and
                mobile applications, APIs, and more.
              </p>
              <p>
                <b>React :</b> It is a popular open-source JavaScript library
                developed by Facebook for building user interfaces. It is known
                for its declarative and component-based approach to building
                UIs.
              </p>
              <p>
                <b>Node :</b> It is an open-source, cross-platform JavaScript
                runtime environment that allows developers to build server-side
                and networking applications.
              </p>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="400"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
