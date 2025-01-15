import { FaSpider } from 'react-icons/fa';
import { useState } from 'react';

function Faq() {
  const faqData = [
    {
      question: "How can I register for the hackathon?",
      answer: "You can register for the hackathon by visiting our registration page and filling out the required details. Make sure to register before the deadline.",
    },
    {
      question: "What are the judging criteria?",
      answer: "Projects will be judged based on creativity, technical difficulty, design, and impact. Judges will look for innovative solutions that address real-world problems.",
    },
    {
      question: "Are there any prerequisites to participate?",
      answer: "There are no specific prerequisites to participate. However, having a basic understanding of coding and problem-solving skills will be beneficial.",
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
