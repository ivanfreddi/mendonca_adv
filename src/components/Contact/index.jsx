import { useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { MdOutlinePlace } from "react-icons/md";

import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const contacts = [
    {
      icon: <LuPhoneCall />,
      name: "Telefone",
      link: "https://wa.me/5551980582577?text=Ol%C3%A1",
      address: "(51) 98058-2577",
    },
    {
      icon: <FaWhatsapp />,
      name: "WhatsApp",
      link: "https://wa.me/5551980582577?text=Ol%C3%A1",
      address: "(51) 98058-2577",
    },
    {
      icon: <LuMail />,
      name: "E-mail",
      link: "mailto:contato@mendoncadv.com.br",
      address: "contato@mendoncadv.com.br",
    },
    {
      icon: <MdOutlinePlace />,
      name: "Endereço físico (Somente com agendamento)",
      link: "https://maps.app.goo.gl/ijQmEF57agbiRQ1KA",
      address: "Rua dos Andradas, 1560, Sala 905 - Centro - Porto Alegre/RS",
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      email: email,
      subject: subject,
      message: message,
      whatsApp: whatsApp,
    };

    emailjs
      .send(
        "service_f6gcq3g",
        "template_pbj38in",
        templateParams,
        "35WOStmWnPds9kcEp"
      )
      .then(() => {
        setName("");
        setEmail("");
        setSubject("");
        setWhatsApp("");
        setMessage("");
      });
  }

  return (
    <section id="contact">
      <div className="container">
        <h2>Entre em contato</h2>
        <div className="contact-content">
          <form className="form" onSubmit={sendEmail}>
            <h4 className="form-title">Escreva sua mensagem:</h4>
            <input
              className="input"
              type="text"
              placeholder="Nome completo"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
              className="input"
              type="email"
              placeholder="Seu melhor e-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              className="input"
              type="text"
              placeholder="Assunto"
              required
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />

            <input
              className="input"
              type="tel"
              placeholder="Whatsapp"
              required
              onChange={(e) => setWhatsApp(e.target.value)}
              value={whatsApp}
            />

            <textarea
              className="input textarea"
              placeholder="Digite sua mensagem..."
              required
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <input className="from-btn" type="submit" value="Enviar" />
          </form>

          <div className="contact-right">
            {contacts.map((contact, index) => (
              <div key={index} className="contacts">
                <a href={contact.link} className="icon">
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
