import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What time are your services?",
    answer: "Our main Sunday services vary by location. For example, our Sutton campus meets at 10:30 AM, while Manchester meets at 11:00 AM. Check the Locations section above for specific times for your nearest campus."
  },
  {
    question: "Do you have programs for children?",
    answer: "Yes! We have a vibrant Kids Ministry called 'Kingdom Kids' that runs concurrently with our Sunday services. We provide a safe, fun, and biblical environment for children aged 3-11."
  },
  {
    question: "Is there parking available?",
    answer: "Most of our locations have free on-site parking or designated parking areas nearby. Our welcome team will be outside to direct you to the best spots when you arrive."
  },
  {
    question: "What should I wear?",
    answer: "We are a casual and diverse church family. You'll see everything from jeans and t-shirts to suits and traditional dress. Come in whatever makes you feel comfortable!"
  },
  {
    question: "How can I get involved?",
    answer: "The best way to get connected is to attend our 'Welcome Home' brief after the service, or join a Life Group. Speak to any of our welcome team members to find out more."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-main dark:text-white">Frequently Asked Questions</h2>
          <p className="mt-3 text-text-muted dark:text-gray-400">Everything you need to know about visiting us</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden bg-white dark:bg-[#251e30] transition-all duration-200 hover:border-primary/40"
            >
              <button
                className="flex items-center justify-between w-full p-6 text-left cursor-pointer focus:outline-none"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-bold text-text-main dark:text-white pr-8">
                  {faq.question}
                </span>
                <span className={`material-symbols-outlined transform transition-transform duration-300 text-primary ${openIndex === index ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-text-muted dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;