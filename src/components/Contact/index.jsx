import { useState, useEffect } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { MdOutlinePlace } from "react-icons/md";

import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const contacts = [
    {
      icon: <LuPhoneCall aria-hidden="true" />,
      name: "Telefone",
      link: "https://wa.me/5551980582577?text=Ol%C3%A1",
      address: "(51) 98058-2577",
      description: "Ligar para nosso telefone",
    },
    {
      icon: <FaWhatsapp aria-hidden="true" />,
      name: "WhatsApp",
      link: "https://wa.me/5551980582577?text=Ol%C3%A1",
      address: "(51) 98058-2577",
      description: "Enviar mensagem pelo WhatsApp",
    },
    {
      icon: <LuMail aria-hidden="true" />,
      name: "E-mail",
      link: "mailto:contato@mendoncadv.com.br",
      address: "contato@mendoncadv.com.br",
      description: "Enviar e-mail",
    },
    {
      icon: <MdOutlinePlace aria-hidden="true" />,
      name: "Endereço físico (Somente com agendamento)",
      description: "localização somente com agendamento",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    whatsApp: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    message: "",
    type: "",
  });

  useEffect(() => {
    let timeoutId;

    if (submitStatus.message) {
      timeoutId = setTimeout(() => {
        setSubmitStatus({ message: "", type: "" });
      }, 5000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [submitStatus.message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function sendEmail(e) {
    e.preventDefault();
    setSubmitStatus({ message: "", type: "" });

    try {
      await emailjs.send(
        "service_f6gcq3g",
        "template_pbj38in",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          whatsApp: formData.whatsApp,
        },
        "35WOStmWnPds9kcEp"
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        whatsApp: "",
        message: "",
      });

      setSubmitStatus({
        message:
          "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        type: "success",
      });
    } catch (error) {
      setSubmitStatus({
        message: "Erro ao enviar mensagem. Por favor, tente novamente.",
        type: "error",
      });
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title">Entre em contato</h2>
        <div className="contact-content">
          <form
            className="form"
            onSubmit={sendEmail}
            aria-label="Formulário de contato"
          >
            <h3 className="form-title">Escreva sua mensagem:</h3>

            <input
              id="name"
              name="name"
              className="input"
              type="text"
              placeholder="Nome completo"
              required
              value={formData.name}
              onChange={handleChange}
              aria-label="Nome completo"
            />

            <input
              id="email"
              name="email"
              className="input"
              type="email"
              placeholder="Seu melhor e-mail"
              value={formData.email}
              onChange={handleChange}
              aria-label="E-mail"
            />

            <input
              id="subject"
              name="subject"
              className="input"
              type="text"
              placeholder="Assunto"
              required
              value={formData.subject}
              onChange={handleChange}
              aria-label="Assunto"
            />

            <input
              id="whatsApp"
              name="whatsApp"
              className="input"
              type="tel"
              placeholder="WhatsApp"
              required
              value={formData.whatsApp}
              onChange={handleChange}
              aria-label="WhatsApp (Formato: (99) 99999-9999)"
              aria-describedby="whatsapp-hint"
            />

            <textarea
              id="message"
              name="message"
              className="input textarea"
              placeholder="Digite sua mensagem..."
              required
              value={formData.message}
              onChange={handleChange}
              aria-label="Mensagem"
            />

            <button type="submit" className="form-btn" aria-live="polite">
              Enviar
            </button>

            {submitStatus.message && (
              <div
                className={`submit-status ${submitStatus.type}`}
                aria-live="polite"
              >
                {submitStatus.message}
              </div>
            )}
          </form>

          <div className="contact-right">
            {contacts.map((contact, index) => (
              <div key={index} className="contacts">
                <a
                  href={contact.link}
                  className="icon"
                  aria-label={contact.description}
                >
                  {contact.icon}
                </a>
                <a
                  href={contact.link}
                  className="info"
                  {...(contact.name !== "E-mail" && { target: "_blank" })}
                >
                  {contact.name} <span>{contact.address}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
