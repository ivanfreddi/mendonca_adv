import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./specialized.css";

const Specialized = ({ text, faq }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <article>
      <div className="container">
        <div className="article-text">
          <h2>
            <strong>{text.title}</strong>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: text.description }} />
        </div>
        <div className="faq">
          <h3>Perguntas Frequentes</h3>
          {faq.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${
                  activeIndex === index ? "no-hover" : ""
                }`}
                onClick={() => toggleAccordion(index)}
                id={`faq-question-${index}`}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h4>
                  <strong>{faq.question}</strong>
                </h4>
                <FiChevronDown
                  aria-label={`Abrir resposta para: ${faq.question}`}
                  className={`icon ${activeIndex === index ? "open" : ""}`}
                />
              </button>
              <div
                className={`faq-answer ${activeIndex === index ? "open" : ""}`}
                id={`faq-answer-${index}`}
                aria-labelledby={`faq-question-${index}`}
              >
                <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Specialized;
