import Unstop from '../../assets/sponsors/Unstop.png';  
import Uptiq from '../../assets/sponsors/Uptiq.png';  
import Sprect from '../../assets/sponsors/Sprect.png';  
import Certificate from '../../assets/sponsors/Certificate.png';
import Fueler from '../../assets/sponsors/Fueler.png';
import Github from '../../assets/sponsors/Github.png';
import InterviewBuddy from '../../assets/sponsors/InterviewBuddy.png';
import InterviewCake from '../../assets/sponsors/InterviewCake.png';
import XYZ from '../../assets/sponsors/XYZ.png';
import Appwrite from '../../assets/sponsors/Appwrite.png';
import Rotary from "../../assets/sponsors/Rotary.png";

const majorSponsors = [
  {
    id: 1,
    className: "UnstopDiv",
    sponsorType: "Powered",
    filerText: "By",
    img: Unstop,
    alt: "unstop.png",
  },
  {
    id: 2,
    className: "uptiqDiv",
    sponsorType: "Title",
    filerText: "Sponsor",
    img: Uptiq,
    alt: "Uptiq.png",
  },
  {
    id: 3,
    className: "githubDiv",
    sponsorType: "Operations",
    filerText: "Partner",
    img: Github,
    alt: "Github.png",
  },
  {
    id: 4,
    className: "sprectDiv",
    sponsorType: "Networking",
    filerText: "Partner",
    img: Sprect,
    alt: "Sprect.png",
  },
  {
    id: 5,
    className: "sprectDiv",
    sponsorType: "Sustainability",
    filerText: "Partner",
    img: Rotary,
    alt: "Sprect.png",
  }
]

const associateSponsors = [
  {
    id: 1,
    img: Fueler,
    alt: "fueler.png"
  },
  {
    id: 2,
    img: InterviewBuddy,
    alt: "interviewBuddy.png"
  },
  {
    id: 3,
    img: InterviewCake,
    alt: "interviewCake.png"
  },
  {
    id: 4,
    img: XYZ,
    alt: "xyz.png"
  },
  {
    id: 5,
    img: Appwrite,
    alt: "appwrite.png"
  }
]

function Sponsor() {
  return (
    <>
    <section id="sponsors" className="bg-[#121211] py-6 text-white">
      <div className='container mx-auto px-2 mt-3 py-2'>
        <h2 className="internal-headings" data-text="OUR SPONSORS">OUR SPONSORS</h2>
      </div>
      <div className="main_sponsor">
        <div className="mainSponsorgrid">
          {majorSponsors.map((sponsor)=>(
            <div key={sponsor.id} className={sponsor.className}>
              <h3 className="break-text">
                <span>{sponsor.sponsorType}</span>
                <span>{sponsor.filerText}</span>
              </h3>
              <img src={sponsor.img} alt={sponsor.alt} className="sponsor_img" />
            </div>
          ))}
        </div>
      </div>

      <div className="main_sponsor">
        <div className="sponsor-container">
          <div className="CertificateCategory">
              <h3>Certificate Partner</h3>
              <div className="Certificate_sponserItems">
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
              <div className="assosiateSponsorItems">
              {associateSponsors.map((sponsor)=>(
                <div className="sponsorItem" key={sponsor.id}>
                  <img src={sponsor.img} alt={sponsor.alt} className="sponsor_img w-40" />
                </div>
              ))}
            </div>
            </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Sponsor;
