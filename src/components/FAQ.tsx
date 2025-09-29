'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do all featured casinos hold UK licenses?",
      answer: "Indeed, each gambling site we endorse possesses complete UK Gambling Commission authorization. This guarantees they comply with stringent requirements for customer safety, fair play, and responsible gaming practices."
    },
    {
      question: "What's your selection process for featured casinos?",
      answer: "Our evaluation considers multiple aspects including regulatory compliance, game selection, promotional packages, support quality, payment methods, and overall user satisfaction. Only top-tier establishments earn a spot on our platform."
    },
    {
      question: "How current are your promotional offers?",
      answer: "We maintain regular updates to our bonus data, though casino terms may change. We recommend verifying the latest promotional details and playthrough requirements directly on each operator's platform prior to registration."
    },
    {
      question: "Can I trust these gambling sites?",
      answer: "Without question. Each recommended operator employs SSL encryption for transaction security, holds UK Gambling Commission licensing, and adheres to comprehensive responsible gaming protocols."
    },
    {
      question: "Is there a cost for using your comparison platform?",
      answer: "Not at all, our service remains entirely free. While we may earn commission when visitors register via our referral links, this never influences our assessments or the promotions available to you."
    },
    {
      question: "What if I encounter issues with a casino?",
      answer: "Initially, reach out to the casino's support team directly. Should your concern remain unresolved, you may escalate the matter to the UK Gambling Commission or utilize their Alternative Dispute Resolution (ADR) mechanism."
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
            All the essential information about our casino suggestions
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