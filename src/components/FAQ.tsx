'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are all the casinos on this site licensed in the UK?",
      answer: "Yes, every casino we recommend is fully licensed by the UK Gambling Commission. This ensures they meet strict standards for player protection, fair gaming, and responsible gambling."
    },
    {
      question: "How do you choose which casinos to feature?",
      answer: "We evaluate casinos based on several factors including licensing, game variety, bonus offers, customer support quality, banking options, and overall player experience. Only the best casinos make it to our list."
    },
    {
      question: "Are the bonus offers accurate and up-to-date?",
      answer: "We regularly update our bonus information, but terms and conditions can change. Always check the casino's website for the most current bonus details and wagering requirements before signing up."
    },
    {
      question: "Is it safe to play at these casinos?",
      answer: "Absolutely. All recommended casinos use SSL encryption for secure transactions, are licensed by the UK Gambling Commission, and follow strict responsible gambling guidelines."
    },
    {
      question: "Do I need to pay anything to use this comparison site?",
      answer: "No, our service is completely free. We may receive compensation from casinos when you sign up through our links, but this doesn't affect our recommendations or the bonuses you receive."
    },
    {
      question: "What should I do if I have a problem with a casino?",
      answer: "First, contact the casino's customer support directly. If the issue isn't resolved, you can escalate it to the UK Gambling Commission or use their Alternative Dispute Resolution (ADR) service."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-300 text-lg">
            Everything you need to know about our casino recommendations
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-white font-semibold text-lg pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-yellow-400 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
