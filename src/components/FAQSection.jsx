import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { faqs } from "../data/siteData";
import "../style/FAQSection.css";

export default function FAQSection({ faqData = faqs }) {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId((previousId) => (previousId === id ? null : id));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">

        {/* =================================
            LEFT — FAQ INTRO
        ================================= */}

        <div className="faq-intro">

          <span className="faq-eyebrow">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2>
            Everything you need
            <br />
            to know before
            <br />
            <em>your visit.</em>
          </h2>

          <p>
            Have more questions? Our team is always happy to
            help you plan a peaceful and personalized spa
            experience.
          </p>

          <a
            href="#contact"
            className="faq-contact-link"
          >
            <span>Still have questions?</span>

            <ArrowUpRight
              size={17}
              strokeWidth={1.7}
            />
          </a>

        </div>


        {/* =================================
            RIGHT — IMAGE + FAQ
        ================================= */}

        <div className="faq-right">

          {/* =================================
              SPA IMAGE
          ================================= */}

          <div className="faq-image-wrapper">

            <img
              src="/images/services/34.png"
              alt="Delight Spa relaxing treatment room"
              className="faq-image"
              loading="lazy"
            />

            <div className="faq-image-overlay" />

            <div className="faq-image-frame" />

            <div className="faq-image-content">

              <span className="faq-image-label">
                Delight Spa
              </span>

              <h3>
                Relax.
                <br />
                Restore.
                <br />
                Reconnect.
              </h3>

            </div>

            <span className="faq-image-number">
              01
            </span>

          </div>


          {/* =================================
              FAQ LIST
          ================================= */}

          <div className="faq-list">

            {faqData.map((faq, index) => {

              const isOpen = activeId === faq.id;

              return (
                <div
                  className={`faq-item ${
                    isOpen ? "faq-item-open" : ""
                  }`}
                  key={faq.id}
                >

                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >

                    <span className="faq-question-left">

                      <span className="faq-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="faq-question-text">
                        {faq.question}
                      </span>

                    </span>


                    <span
                      className="faq-toggle-icon"
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus
                          size={18}
                          strokeWidth={1.5}
                        />
                      ) : (
                        <Plus
                          size={18}
                          strokeWidth={1.5}
                        />
                      )}
                    </span>

                  </button>


                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`faq-answer-wrapper ${
                      isOpen
                        ? "faq-answer-visible"
                        : ""
                    }`}
                  >

                    <div className="faq-answer">

                      <p>
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}