/* import React, { useEffect, useState } from "react";
import Hero from "../../components/SyrusComponents/Hero/Hero";
import Domain from "../../components/SyrusComponents/Domain/Domain";
import Timeline from "../../components/SyrusComponents/Timeline/Timeline";
import Gallery from "../../components/SyrusComponents/Gallery/Gallery";
import Faq from "../../components/SyrusComponents/Faq/Faq";
import SyrusFooter from "../../components/SyrusComponents/SyrusFooter/SyrusFooter";
import Sponsor from "../../components/SyrusComponents/Sponsor/Sponsor";
import PrizePool from "../../components/SyrusComponents/PrizePool/PrizePool";
import SyrusScrollToTop from "../../components/SyrusComponents/SyrusScrollToTop/SyrusScrollToTop";
import Navbar from "../../components/SyrusComponents/Navbar";
import CallAMentor from "../../components/SyrusComponents/CallAMentor/CallAMentor";
import ScrollReveal from "../../components/SyrusComponents/ScrollReveal/ScrollReveal";
import React from "react"; */
import ComingSoon from "./comingsoon/comingsoon";
import "./Syrus.css";
/*const REDIRECT_TO_UNSTOP_LINK = import.meta.env.VITE_UNSTOP_REG_FORM_URL;
const REDIRECT_TO_UNSTOP_FLAG = false;*/

function Syrus() {
  /*const [mentorOpen, setMentorOpen] = useState(false);

 useEffect(() => {
   if (REDIRECT_TO_UNSTOP_FLAG) {
     window.location.href = REDIRECT_TO_UNSTOP_LINK;
   }
 }, []);

 return (
   <div className="syrus-page">
     <Navbar onCallMentor={() => setMentorOpen(true)} />
     <Hero onCallMentor={() => setMentorOpen(true)} />
     <ScrollReveal>
       <Sponsor />
     </ScrollReveal>
     <ScrollReveal>
       <PrizePool />
     </ScrollReveal>
     <ScrollReveal>
       <Timeline />
     </ScrollReveal>
     <ScrollReveal>
       <Domain />
     </ScrollReveal>
     <ScrollReveal>
       <Faq />
     </ScrollReveal>
     <ScrollReveal>
       <Gallery />
     </ScrollReveal>
     <SyrusFooter />
     <SyrusScrollToTop />
     <CallAMentor isOpen={mentorOpen} onClose={() => setMentorOpen(false)} />
   </div>
 ); */
  return <ComingSoon />;
}

export default Syrus;
