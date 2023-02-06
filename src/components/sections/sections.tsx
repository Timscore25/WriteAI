import './sections.css';
import Faq from './faq/faq';
{/*import Cards from './cards/cards';*/} 

function Sections() {
    return (
        <div className="sections">
        <section>
          <div className="section-content first-section">
            <Faq />
          </div>
        </section>
                                            {/* Pricing */} 
         {/*
         <section>
          <div className="section-content second-section">
          <Cards />
          </div>
        </section>
        */}
      </div>
    );
}

export default Sections;