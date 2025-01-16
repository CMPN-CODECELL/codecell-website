import { FaSpider } from 'react-icons/fa';
import { useState } from 'react';

function Faq() {
  const faqData = [
    {
      question: "I do not have a lot of experience in coding. Can I still join this hackathon?",
      answer: "Yes, Syrus '25 is beginner-friendly. Even if you do not have a lot of experience, you can participate and learn new things.",
    },
    {
      question: "Where can I register for the hackathon?",
      answer: "Register via the registration links available on SYRUS's official website or through the Google form provided in the emails and WhatsApp messages.",
    },
    {
      question: "What is the required team size to participate?",
      answer: "The required team size to participate is 2-4 members.",
    },
    {
      question: "Can people from different branches/years form a team?",
      answer: "Yes, there are no restrictions in forming teams from diverse branches and years. However, all participants must be from VESIT only.",
    },
    {
      question: "Is there any entry fee for the registration?",
      answer: "No, Syrus is free for all the participants.",
    },
    {
      question: "What is the judging criteria for the hackathon?",
      answer: "The judging criteria for the hackathon will be based on your innovation and understanding of the problem statement. A detailed document containing the guidelines and judging criteria will be sent to all the registered teams.",
    },
    {
      question: "Are there any particular domains for the hackathon?",
      answer: "Yes, the hackathon will focus on the following domains: Web 2.0, Web 3.0, and GenAI",
    },
    {
      question: "Will there be any workshops or mentoring sessions?",
      answer: "Yes, there will be workshops and mentoring sessions conducted by industry experts to help participants with their projects and provide guidance.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <section className="bg-[#121211] text-white" id="faq-section">
      <div className="container mx-auto px-3 py-4">
        <h2 className="internal-headings" data-text="FAQS">FAQS</h2>
        <div className="max-w-6xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-[#ff3535] overflow">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-4 flex justify-between items-center bg-[#121211] hover:cursor-pointer transition-colors ${activeIndex === index ? 'text-[#ff3535] font-medium font-sans text-lg' : ""} `}
              >
                <span className="font-semibold">{item.question}</span>
                <FaSpider
                  className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
              >
                <p className="px-4 py-3 text-white">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
