import React from "react";
import "./CodeOfConduct.css";
import CodecellNav from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ScrollToTopButton from "../../components/misc/ScrollToTop/ScrollToTop";

const CodeOfConduct = () => {
  return (
    <div id="code-of-conduct">
      <CodecellNav />
      <div className="coc-container">
        <h1 className="coc-title">
          <span>CodeCell++</span>
          {"  "}
          <span className="title-rest">Code of Conduct</span>
        </h1>

        <section className="coc-section">
          <h2 className="coc-section-title">Applicability</h2>
          <p className="coc-text">
            This Code of Conduct applies to all CodeCell++ activities, including
            but not limited to:
          </p>
          <ul className="coc-list">
            <li>Workshops, bootcamps, and technical sessions</li>
            <li>Hackathons and buildathons (online and offline)</li>
            <li>Community meetings and collaborations</li>
            <li>
              Online platforms such as Discord, WhatsApp, GitHub, Google Meet,
              and social media
            </li>
            <li>
              Participants, organizers, speakers, mentors, volunteers, sponsors,
              and partners
            </li>
          </ul>
          <p className="coc-text coc-highlight">
            All members and attendees are expected to comply with this Code of
            Conduct at all times.
          </p>
        </section>

        <section className="coc-section">
          <h2 className="coc-section-title">
            <span className="section-number">1.</span> Expected Behavior
          </h2>
          <p className="coc-text">
            CodeCell++ is committed to creating a safe, inclusive, and respectful
            learning environment. We expect all participants to:
          </p>
          <ul className="coc-list">
            <li>
              Be respectful, kind, and professional in speech and behavior
            </li>
            <li>
              Welcome people of all backgrounds, experience levels, and
              identities
            </li>
            <li>
              Use inclusive language and be mindful of how words and actions may
              impact others
            </li>
            <li>Listen actively and allow space for everyone to participate</li>
            <li>
              Support a collaborative learning environment, especially for
              beginners
            </li>
            <li>Respect differing viewpoints and experiences</li>
            <li>Follow instructions given by organizers during events</li>
            <li>Credit others' work and respect intellectual property</li>
          </ul>
          <p className="coc-text coc-highlight">
            We believe that community growth happens when members uplift one
            another and act with empathy.
          </p>
        </section>

        <section className="coc-section">
          <h2 className="coc-section-title">
            <span className="section-number">2.</span> Unacceptable Behavior
          </h2>
          <p className="coc-text">
            The following behaviors are not tolerated in any CodeCell++ space:
          </p>
          <div className="coc-subsection">
            <h3 className="coc-subsection-title">
              Harassment, discrimination, or exclusion based on:
            </h3>
            <ul className="coc-list coc-list-nested">
              <li>Gender, gender identity or expression</li>
              <li>Age</li>
              <li>Sexual orientation</li>
              <li>Disability</li>
              <li>Physical appearance or body size</li>
              <li>Race, ethnicity, nationality</li>
              <li>Religion or political beliefs</li>
              <li>Academic department, year of study, or skill level</li>
              <li>Programming language, tools, or technical background</li>
            </ul>
          </div>
          <ul className="coc-list">
            <li>
              Intimidation, threats, stalking, or deliberate disruption of
              events
            </li>
            <li>
              Use of sexualized language, imagery, or behavior in any community
              space
            </li>
            <li>
              Dismissive or belittling behavior toward beginners or marginalized
              groups
            </li>
            <li>
              Recording, photographing, or sharing images/videos without
              explicit consent
            </li>
            <li>
              Sharing private messages or personal information without
              permission
            </li>
            <li>
              Plagiarism, misrepresentation of work, or unethical project
              submissions
            </li>
            <li>
              Any behavior that makes others feel unsafe, unwelcome, or
              disrespected
            </li>
          </ul>
          <p className="coc-text coc-warning">
            Even if harm is unintentional, impact matters more than intent.
          </p>
        </section>

        <section className="coc-section">
          <h2 className="coc-section-title">
            <span className="section-number">3.</span> Reporting and Support
          </h2>
          <p className="coc-text">
            If you experience or witness behavior that violates this Code of
            Conduct, please report it immediately.
          </p>
          <div className="coc-subsection">
            <h3 className="coc-subsection-title">How to Report</h3>
            <p className="coc-text">
              You may report concerns through any of the following channels:
            </p>
            <ul className="coc-list">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:tinkers_codecell.cmpn@ves.ac.in">
                  tinkers_codecell.cmpn@ves.ac.in
                </a>
              </li>
              <li>
                Directly contact any CodeCell++ organizing member, Student Head,
                or Co-Head
              </li>
              <li>
                Report privately via community moderators on Discord or WhatsApp
              </li>
            </ul>
          </div>
          <p className="coc-text">All reports will be:</p>
          <ul className="coc-list coc-list-check">
            <li>Taken seriously</li>
            <li>Handled confidentially</li>
            <li>Reviewed promptly and fairly</li>
          </ul>
          <p className="coc-text coc-highlight">
            CodeCell++ organizers are available to support anyone affected and
            will take appropriate steps to ensure safety.
          </p>
        </section>

        <section className="coc-section">
          <h2 className="coc-section-title">
            <span className="section-number">4.</span> Consequences of
            Violations
          </h2>
          <p className="coc-text">
            If a participant violates this Code of Conduct, CodeCell++ reserves
            the right to take appropriate action, including but not limited to:
          </p>
          <ul className="coc-list coc-list-consequences">
            <li>Verbal or written warning</li>
            <li>Removal from a session, workshop, or event</li>
            <li>Disqualification from hackathons or competitions</li>
            <li>
              Temporary or permanent ban from CodeCell++ activities and platforms
            </li>
            <li>
              Reporting to college authorities or local law enforcement if
              necessary
            </li>
          </ul>
          <p className="coc-text coc-highlight">
            Actions will be taken based on severity, context, and impact, with
            the goal of protecting the community.
          </p>
        </section>

        <section className="coc-section coc-commitment">
          <h2 className="coc-section-title">Our Commitment</h2>
          <p className="coc-text">
            CodeCell++ is committed to designing inclusive spaces, especially for
            those who are new, underrepresented, or traditionally excluded from
            tech communities. We continuously learn, improve, and adapt our
            practices to ensure our community remains welcoming, safe, and
            empowering for all.
          </p>
          <div className="coc-agreement">
            <p>
              By participating in CodeCell++ activities, you agree to uphold this
              Code of Conduct.
            </p>
          </div>
        </section>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default CodeOfConduct;
