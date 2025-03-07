function Domain() {
  return (
    <section className="domain-section" id="domain">
    <div className=' container mx-auto px-2 py-2'>
      <h2 className="internal-headings" data-text="THEME">THEME</h2>
    </div>
        {/* <div className="card-container">
        <div className="domain-card">
          <h1 className="domainMainHeading">Web 2.0</h1>
          </div>
          <div className="domain-card">
          <h1 className="genAifintech">Gen Ai For Fintech</h1>
           </div>
           <div className="domain-card">
          <h1 className="domainMainHeading">Agentic Ai</h1>
          </div>
      </div> */}
      <div className="newCard">
        <div className="newCard_content">
          <h1 className="genAifintech">Agentic Ai</h1>
          <p>Agentic AI enables autonomous decision-making by leveraging advanced generative AI models that learn, adapt, and act independently. It streamlines complex workflows and enhances automation across industries.</p>
        </div>
        <div className="newCard_content">
          <h1 className="genAifintech">Gen Ai For Fintech</h1>
          <p>Gen AI for Fintech revolutionizes financial services by integrating advanced AI models to enhance risk assessment, automate trading strategies, detect fraud, and provide personalized experiences.</p>
        </div>
      </div>
    </section>
  );
}

export default Domain;