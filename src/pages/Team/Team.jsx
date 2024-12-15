import React, { Suspense, useRef, useState } from "react";
import "./Team.css";
import Accordion from "react-bootstrap/Accordion";
import CodecellNav from "../../components/Navbar/Navbar";
import Card from "../../components/misc/Card/Card";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/misc/Loading/Loading";

const Team = () => {
  const faculty = [
    {
      name: "Dr. Nupur Giri",
      designation: "HOD, Computer Department",
      social: "https://www.linkedin.com/in/dr-nupur-giri-6635a542/",
      photo: "/teamImages/Faculty/nupurgiri.jpg",
    },
    {
      name: "Dr. Prashant Kanade",
      designation: "Incharge",
      social: "https://www.linkedin.com/in/dr-prashant-kanade-33abb816/",
      photo: "/teamImages/Faculty/prashantkanade.jpg",
    },
    {
      name: "Prof. Richard Joseph",
      designation: "Coordinator",
      social: "https://www.linkedin.com/in/richard-joseph-720044176/",
      photo: "/teamImages/Faculty/richardjoseph.jpg",
    },
  ];
  const be = [
    {
      name: "Vedant Pawar",
      designation: "Student Head",
      social: "https://www.linkedin.com/in/vedant-pawar/",
      photo: "/teamImages/BE/VedantPawar.jpg",
    },
    {
      name: "Piyush Chugeja",
      designation: "Sr. Tech Manager",
      social: "https://www.linkedin.com/in/piyushchugeja/",
      photo: "/teamImages/BE/PiyushChugeja.jpg",
    },
    {
      name: "Attreyee Mukherjee",
      designation: "Sr. Tech Manager",
      social: "https://www.linkedin.com/in/attreyeem/",
      photo: "/teamImages/BE/AttreyeeMukherjee.jpg",
    },
    {
      name: "Himesh Hotwani",
      designation: "Sr. Tech Manager",
      social: "https://www.linkedin.com/in/himesh-hotwani-87a6b7247/",
      photo: "/teamImages/BE/HimeshHotwani.jpg",
    },
    {
      name: "Sadhak Kumar",
      designation: "Sr. Tech Manager",
      social: "https://www.linkedin.com/in/sadhak-kumar-085041214/",
      photo: "/teamImages/BE/SadhakKumar.jpg",
    },
    {
      name: "Saumya Tripathi",
      designation: "Sr. PR Manager",
      social: "https://www.linkedin.com/in/saumya-tripathi754222a/",
      photo: "/teamImages/BE/SaumyaTripathi.jpg",
    },
    {
      name: "Sakshi Kirmathe",
      designation: "Sr. PR Manager",
      social: "https://www.linkedin.com/in/sakshikirmathe/",
      photo: "/teamImages/BE/SakshiKirmathe.jpg",
    },
    {
      name: "Aditya Mangtani",
      designation: "Sr. PR Manager",
      social: "https://www.linkedin.com/in/adityamangtani/",
      photo: "/teamImages/BE/AdityaMangtani.jpg",
    },
    {
      name: "Manasi Sharma",
      designation: "Sr. Graphics Designer",
      social: "https://www.linkedin.com/in/manasi-sharma-bbb947243/",
      photo: "/teamImages/BE/ManasiSharma.jpg",
    },
    {
      name: "Ajay Iyer",
      designation: "Sr. Graphics Designer",
      social: "https://www.linkedin.com/in/ajay-iyer-92515b247/",
      photo: "/teamImages/BE/AjayIyer.jpg",
    },
    {
      name: "Manav Keswani",
      designation: "Sr. Ambassador",
      social: "https://www.linkedin.com/in/manav-keswani-012a20204/",
      photo: "/teamImages/BE/ManavKeswani.jpg",
    },
    {
      name: "Yashodhan Sharma",
      designation: "Sr. Ambassador",
      social: "https://www.linkedin.com/in/yashodhan-sharma-205173233/",
      photo: "/teamImages/BE/YashodhanSharma.jpg",
    },
  ];
  const te = [
    {
      name: "Chinmay Desai",
      designation: "Jr. Tech Manager",
      social: "https://www.linkedin.com/in/chinmay-desai-b72005233/",
      photo: "/teamImages/TE/ChinmayDesai.jpg",
    },
    {
      name: "Hannan Chougle",
      designation: "Jr. Tech Manager",
      social: "https://www.linkedin.com/in/abdul-hannan-chougle-78840a252/",
      photo: "/teamImages/TE/HannanChougle.jpg",
    },
    {
      name: "Gautam Rai",
      designation: "Jr. Tech Manager",
      social: "https://www.linkedin.com/in/gautam-rai-01184324a/",
      photo: "/teamImages/TE/GautamRai.jpg",
    },
    {
      name: "Latish Adwani",
      designation: "Jr. Tech Manager",
      social: "https://www.linkedin.com/in/latish705/",
      photo: "/teamImages/TE/LatishAdwani.jpg",
    },
    {
      name: "Vedika Walhe",
      designation: "Jr. Tech Manager",
      social: "https://www.linkedin.com/in/vedika-walhe-1ab1b2287/",
      photo: "/teamImages/TE/VedikaWalhe.jpg",
    },
    {
      name: "Joel Dias",
      designation: "Jr. Tech Manager",
      social: "https://www.linkedin.com/in/joel-dias-882576282/",
      photo: "/teamImages/TE/JoelDias.jpg",
    },
    {
      name: "Anisha Shankar",
      designation: "Jr. PR Manager",
      social: "https://www.linkedin.com/in/anisha-shankar-/",
      photo: "/teamImages/TE/AnishaShankar.jpg",
    },
    {
      name: "Ishwari Dehadray",
      designation: "Jr. PR Manager",
      social: "https://www.linkedin.com/in/ishwari-dehadray-684498264/",
      photo: "/teamImages/TE/IshwariDehadray.jpg",
    },
    {
      name: "Harshita Lohana",
      designation: "Jr. PR Manager",
      social: "https://www.linkedin.com/in/harshita-lohana-142784321/",
      photo: "/teamImages/TE/HarshitaLohana.jpg",
    },
    {
      name: "Saniya Dangat",
      designation: "Jr. Graphics Designer",
      social: "https://www.linkedin.com/in/saniya-dangat-55b26a287/",
      photo: "/teamImages/TE/SaniyaDangat.jpg",
    },
    {
      name: "Atharva Deore",
      designation: "Jr. Graphics Designer",
      social: "https://www.linkedin.com/in/atharva-deore-68283a256/",
      photo: "/teamImages/TE/AtharvaDeore.jpg",
    },
    {
      name: "Eshan Vijay",
      designation: "Jr. Ambassador",
      social: "https://www.linkedin.com/in/eshanvijay/",
      photo: "/teamImages/TE/EshanVijay.jpg",
    },
    {
      name: "Shaanveer Singh",
      designation: "Jr. Ambassador",
      social: "https://www.linkedin.com/in/shaanveer-singh/",
      photo: "/teamImages/TE/ShaanveerSingh.jpg",
    },
    {
      name: "Simran Karamchandani",
      designation: "Jr. Ambassador",
      social: "https://www.linkedin.com/in/simran-karamchandani-32030a2a3/",
      photo: "/teamImages/TE/SimranKaramchandani.jpg",
    },
  ];
  const se = [
    {
      name: "Pankaj Gupta",
      designation: "SE. Tech Manager",
      social: "https://www.linkedin.com/in/pankajgupta0695/",
      photo: "/teamImages/SE/PankajGupta.jpg",
    },
    {
      name: "Yash Katiyara",
      designation: "SE. Tech Manager",
      social: "https://www.linkedin.com/in/yash-katiyara/",
      photo: "/teamImages/SE/YashKatiyara.jpg",
    },
    {
      name: "Sahil Tanwani",
      designation: "SE. Tech Manager",
      social: "https://www.linkedin.com/in/sahil-tanwani-bb44012b4/",
      photo: "/teamImages/SE/SahilTanwani.jpg",
    },
    {
      name: "Veda Patki",
      designation: "SE. Tech Manager",
      social: "https://www.linkedin.com/in/veda-patki-07974b319/",
      photo: "/teamImages/SE/VedaPatki.jpg",
    },
    {
      name: "Harshita Sewani",
      designation: "SE. PR Manager",
      social: "https://www.linkedin.com/in/harshita-sewani-64b26730a/",
      photo: "/teamImages/SE/HarshitaSewani.jpg",
    },
    {
      name: "Aanchal Gupta",
      designation: "SE. PR Manager",
      social: "https://www.linkedin.com/in/aanchal-gupta-4b710419b/",
      photo: "/teamImages/SE/AanchalGupta.jpg",
    },
    {
      name: "Jai Bhatia",
      designation: "SE. Graphics Designer",
      social: "https://www.linkedin.com/in/jai-bhatia-b1281a30a/",
      photo: "/teamImages/SE/JaiBhatia.jpg",
    },
    {
      name: "Preetika Khilnaney",
      designation: "SE. Graphics Designer",
      social: "https://www.linkedin.com/in/preetika-khilnaney/",
      photo: "/teamImages/SE/PreetikaKhilnaney.jpg",
    },
    {
      name: "Gaurang Gade",
      designation: "SE. Ambassador",
      social: "https://www.linkedin.com/in/gaurang-gade-43b08628b/",
      photo: "/teamImages/SE/GaurangGade.jpg",
    },
    {
      name: "Priyanka Ochaney",
      designation: "SE. Ambassador",
      social: "https://www.linkedin.com/in/priyanka-ochaney-a14b40274/",
      photo: "/teamImages/SE/PriyankaOchaney.jpg",
    },
  ];

  const [activeEventKey, setActiveEventKey] = useState("0");
  const facultyRef = useRef(null);
  const beRef = useRef(null);
  const teRef = useRef(null);
  const seRef = useRef(null);

  const handleClickToggle = (eventKey, eventRef) => {
    if (eventKey === activeEventKey) {
      setActiveEventKey("");
    } else {
      setActiveEventKey(eventKey);
      setTimeout(() => {
        eventRef.current.scrollIntoView({
          behavior: "smooth",
          inline: "nearest",
        });
      }, 400);
    }
  };

  return (
    <div id="team">
      <CodecellNav />
      <div className="meet-the-team">
        Meet The&nbsp;<span>CodeCell</span>&nbsp;Team
      </div>
      <Accordion flush defaultActiveKey="0">
        <Accordion.Item
          className="team-section faculty"
          eventKey="0"
          ref={facultyRef}
        >
          <div className="team-wrapper">
            <Accordion.Header
              className="team-title"
              onClick={() => handleClickToggle("0", facultyRef)}
            >
              <span>Faculty advisors</span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="team-cards">
                {faculty.map((card) => (
                  <Card card={card} key={card.name} />
                ))}
              </div>
            </Accordion.Body>
          </div>
        </Accordion.Item>
        <Accordion.Item
          className="team-section be-members"
          eventKey="1"
          ref={beRef}
        >
          <div className="team-wrapper">
            <Accordion.Header
              className="team-title"
              onClick={() => handleClickToggle("1", beRef)}
            >
              <span>BE Members</span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="team-cards">
                {be.map((card) => (
                  <Card card={card} key={card.name} />
                ))}
              </div>
            </Accordion.Body>
          </div>
        </Accordion.Item>
        <Accordion.Item
          className="team-section te-members"
          eventKey="2"
          ref={teRef}
        >
          <div className="team-wrapper">
            <Accordion.Header
              className="team-title"
              onClick={() => handleClickToggle("2", teRef)}
            >
              <span>TE Members</span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="team-cards">
                {te.map((card) => (
                  <Card card={card} key={card.name} />
                ))}
              </div>
            </Accordion.Body>
          </div>
        </Accordion.Item>
        <Accordion.Item
          className="team-section se-members"
          eventKey="3"
          ref={seRef}
        >
          <div className="team-wrapper">
            <Accordion.Header
              className="team-title"
              onClick={() => handleClickToggle("3", seRef)}
            >
              <span>SE Members</span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="team-cards">
                {se.map((card) => (
                  <Card card={card} key={card.name} />
                ))}
              </div>
            </Accordion.Body>
          </div>
        </Accordion.Item>
      </Accordion>

      <Footer />
    </div>
  );
};

export default Team;
