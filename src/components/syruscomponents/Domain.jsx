import { FaGlobe, FaCubes, FaRobot } from "react-icons/fa";

function Domain() {
  return (
    <section className="domain-section" id="domain">
    <div className=' container mx-auto px-2 py-2'>
      <h2 className="internal-headings" data-text="Domains">Domains</h2>
    </div>
        <div className="card-container">
        <div className="domain-card">
          <div className="icon-circle">
            <FaGlobe size={50} color="#fff"/>
          </div>
          <h1 className="domainMainHeading">Web 2.0</h1>
          <div className="overlay">
            <h3>Web2</h3>
            <p>Explore traditional web technologies that power the internet.</p>
          </div>
          </div>
          <div className="domain-card">
          <div className="icon-circle">
            <FaCubes size={50} />
          </div>
          <h1 className="domainMainHeading">Web 3.0</h1>
          <div className="overlay">
            <h3>Web3</h3>
            <p>Learn about decentralized web and blockchain technologies.</p>
          </div>
           </div>
           <div className="domain-card">
          <div className="icon-circle">
            <FaRobot size={50} />
          </div>
          <h1 className="domainMainHeading">Gen AI</h1>
          <div className="overlay">
            <h3>Generative AI</h3>
            <p>Discover Generative AI and its innovative applications.</p>
          </div>
          </div>
      </div>
    </section>
  );
}

export default Domain;