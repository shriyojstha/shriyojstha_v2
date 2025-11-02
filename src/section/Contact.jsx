import React, { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExp from "./ContactExp";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const formRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, isLoading] = useState(false);
  const handleSubmit = async(e) => {
    e.preventDefault();
    isLoading(true);

try {
  await emailjs.sendForm(
    import.meta.env.VITE_APP_EMAILJS_SERVICEID,
    import.meta.env.VITE_APP_EMAILJS_TEMPLATEID,
    formRef.current,
    import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  );

  setEmail("");
  setName("");
  setMessage("");
} catch (error) {
  console.log(error);
}finally{
  isLoading(false);
}

    
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full px-5 md:px-10">
        <TitleHeader
          title="Questions? Ideas? Just drop me a message."
          sub="📬 Get in Touch
"
        />

        <div className="mt-16 grid-12-cols">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Name: </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="Email">Email: </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="Message">Message: </label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">{loading ? "Submitting" : "submit"}</p>
                    <div className="arrow-wrapper">
                      <img src="images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          <div className="min-h-96 xl:col-span-7">
            <div className="w-full h-full  hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExp />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
