import Unstop from '../../assets/sponsors/Unstop.png';  
import Uptiq from '../../assets/sponsors/Uptiq.png';  
import Sprect from '../../assets/sponsors/Sprect.png';  
import Certificate from '../../assets/sponsors/Certificate.png';
import Fueler from '../../assets/sponsors/Fueler.png';
import Github from '../../assets/sponsors/Github.png';
import InterviewBuddy from '../../assets/sponsors/InterviewBuddy.png';
import InterviewCake from '../../assets/sponsors/InterviewCake.png';
import XYZ from '../../assets/sponsors/XYZ.png';

function Sponsor() {
  return (
    <section id="sponsors" className="bg-[#121211] py-6 text-white">
      <div className='container mx-auto px-2 mt-3 py-2'>
        <h2 className="internal-headings" data-text="OUR SPONSORS">OUR SPONSORS</h2>
      </div>
      <div className="main_sponsor">
        <div className="mainSponsorgrid">
          <div className="sponsorCategory">
              <h3 className="text-xl font-bold text-center my-4">Powered by</h3>
              <div className="mainSponsorgridDiv flex flex-wrap justify-center gap-4">
              <div  className="sponsorItem">
                    <img src={Unstop} alt="unstop.png" className="sponsor_img w-40" />
                </div>
            </div>
            </div>
            <div className="sponsorCategory">
              <h3 className="text-xl font-bold text-center my-4">Title Sponsor</h3>
              <div className="mainSponsorgridDiv flex flex-wrap justify-center gap-4">
              <div  className="sponsorItem">
                    <img src={Uptiq} alt="unstop.png" className="sponsor_img w-40" />
                </div>
            </div>
            </div>
            <div className="sponsorCategory">
              <h3 className="text-xl font-bold text-center my-4">Operations Partner</h3>
              <div className="mainSponsorgridDiv flex flex-wrap justify-center gap-4">
              <div  className="sponsorItem">
                    <img src={Github} alt="unstop.png" className="sponsor_img w-40" />
                </div>
            </div>
            </div>
            <div className="sponsorCategory">
              <h3 className="text-xl font-bold text-center my-4">Networking Partner</h3>
              <div className="mainSponsorgridDiv flex flex-wrap justify-center gap-4">
              <div  className="sponsorItem">
                    <img src={Sprect} alt="unstop.png" className="sponsor_img w-40" />
                </div>
            </div>
            </div>
        </div>
      </div>

      <div className="main_sponsor">
        <div className="sponsor-container">
          <div className="sponsorCategory">
              <h3>Certificate Partner</h3>
              <div className="Certificate_sponserItems flex flex-wrap justify-center gap-4">
              <div  className="sponsorItem">
                    <img src={Certificate} alt="unstop.png" className="sponsor_img w-40" />
                </div>
            </div>
            </div>
        </div>
      </div>
      <div className="main_sponsor">
        <div className="sponsor-container">
          <div className="sponsorCategory">
              <h3>Associate Sponsors</h3>
              <div className="assosiateSponsorItems flex flex-wrap justify-center gap-4">
              <div  className="sponsorItem">
                    <img src={Fueler} alt="unstop.png" className="sponsor_img w-40" />
                </div>
                <div  className="sponsorItem">
                    <img src={InterviewBuddy} alt="unstop.png" className="sponsor_img w-40" />
                </div>
                <div  className="sponsorItem">
                    <img src={InterviewCake} alt="unstop.png" className="sponsor_img w-40" />
                </div>
                <div  className="sponsorItem">
                    <img src={XYZ} alt="unstop.png" className="sponsor_img w-40" />
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsor;
