import React,{useEffect} from 'react';
import './Syrus.css'
import Banner from "../../components/syruscomponents/Banner"
import Header from "../../components/syruscomponents/Header"
import Domain from "../../components/syruscomponents/Domain"
import Timeline from "../../components/syruscomponents/Timeline"
import Gallery from "../../components/syruscomponents/Gallery"
import Faq from "../../components/syruscomponents/Faq"
import SyrusFooter from "../../components/syruscomponents/SyrusFooter"
import Sponsor from "../../components/syruscomponents/Sponsor"
import SyrusScrollToTop from "../../components/syruscomponents/SyrusScrollToTop"
import SponsorUs from '../../components/syruscomponents/SponsorUs';

function Syrus() {
  useEffect(() => {
        document.body.classList.add("syrus-page");

        return () => {
            document.body.classList.remove("syrus-page");
        };
    }, []);
  return (
    <>
        <Header />
        <Banner />
        <Sponsor />
        <Timeline />
        <Domain />
        <Gallery />
        <Faq />
        <SyrusFooter />
        <SyrusScrollToTop />
    </>
  )
}

export default Syrus