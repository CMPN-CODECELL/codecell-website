import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSpider } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";

const preHackathonDay = [
  {
    title: "Problem Statement Release",
    description: "Problem statements will be released 2 days before the main day.",
    iconBg: "#383E56",
    date: "2 Days Before",
  },
  {
    title: "Doubt-Solving & PS Allotments",
    description: "A doubt-solving session and problem statement allotments will take place one day before the main day.",
    iconBg: "#E6DEDD",
    date: "1 Day Before",
  },
];

const day1Events = [
  {
    title: "Hackathon Begins",
    description: "Onboarding starts at 8:30 AM; the hackathon officially kicks off at 9:30 AM.",
    iconBg: "#383E56",
    date: "Day 1: 8:30 AM",
  },
  {
    title: "First Round Evaluations",
    description: "Teams submit presentations by 12 PM for the first evaluation round. Shortlisted teams will proceed to the mentoring session and resume coding.",
    iconBg: "#E6DEDD",
    date: "Day 1: 12:00 PM",
  },
  {
    title: "Second Round Evaluations",
    description: "By 6 PM, Further shortlisted team will submit final code and updated presentations. Results of shortlisted teams for the next day's final round are announced by 9 PM.",
    iconBg: "#383E56",
    date: "Day 1: 6:00 PM",
  },
];

const day2Events = [
  {
    title: "Final Round",
    description: "Coding resumes at 8:30 AM, followed by mentoring and final presentations by the top teams.",
    iconBg: "#E6DEDD",
    date: "Day 2: 8:30 AM",
  },
  {
    title: "Closing Ceremony",
    iconBg: "#E6DEDD",
    date: "Day 2: 2:00PM - 3:00 PM",
  },
];

function Timeline() {
  const getIcon = (index) => (index % 2 === 0 ? <FaSpider /> : <GiSpiderWeb />);

  return (
    <section className="bg-[#121211] text-white" id="timeline">
      <div className="container mx-auto px-2 py-2">
        <h2 className="internal-headings" data-text="Timeline">
          Timeline
        </h2>
      </div>
      <div className="container mx-auto">
        <h4 className="text-center my-3 drop-shadow-xl text-3xl font-bold text-white">
          Pre Hackathon Day
        </h4>
        <VerticalTimeline>
          {preHackathonDay.map((entry, index) => (
            <VerticalTimelineElement
              key={index}
              date={entry.date}
              icon={getIcon(index)}
              iconStyle={{ background: entry.iconBg, color: "#f00" }}
            >
              <h3 className="vertical-timeline-element-title">
                {entry.title}
              </h3>
              <p className="vertical-timeline-element-description">
                {entry.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <h4 className="text-center my-3 drop-shadow-xl text-3xl font-bold text-white">
          Day 1
        </h4>
        <VerticalTimeline>
          {day1Events.map((entry, index) => (
            <VerticalTimelineElement
              key={index}
              date={entry.date}
              icon={getIcon(index)}
              iconStyle={{ background: entry.iconBg, color: "#f00" }}
            >
              <h3 className="vertical-timeline-element-title">
                {entry.title}
              </h3>
              <p className="vertical-timeline-element-description">
                {entry.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <h4 className="text-center my-3 drop-shadow-xl text-3xl font-bold text-white">
          Day 2
        </h4>
        <VerticalTimeline>
          {day2Events.map((entry, index) => (
            <VerticalTimelineElement
              position={index % 2 === 0 ? "right" : "left"}
              key={index}
              date={entry.date}
              icon={getIcon(index)}
              iconStyle={{ background: entry.iconBg, color: "#f00" }}
            >
              <h3 className="vertical-timeline-element-title">
                {entry.title}
              </h3>
              <p className="vertical-timeline-element-description">
                {entry.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;
