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
          <p>{text.description}</p>
          <p>{text.description1}</p>
          <p>{text.description2}</p>
        </div>
        <div className="faq">
          <h2>Perguntas Frequentes</h2>
          {faq.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${
                  activeIndex === index ? "no-hover" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <h4>
                  <strong>{faq.question}</strong>
                </h4>
                <span>
                  <FiChevronDown
                    className={`icon ${activeIndex === index ? "open" : ""}`}
                  />
                </span>
              </div>
              <div
                className={`faq-answer ${activeIndex === index ? "open" : ""}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Specialized;
