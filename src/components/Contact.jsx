import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "./Hoc";
import { slideIn } from "../utils/motion";
import { e } from "maath/dist/index-0332b2ed.esm";

// template_1jtmgbd
// template_ue6pu6f
// XXFrRKLgI6o8fFwCS
const Contact = () => {
  const formRef = useRef();
  const [Form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...Form, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send("service_y5l3cjg", "template_96r3llk", {
      from_name: Form.name,
      to_name: "Shokat",
      from_email: Form.email,
      to_email: "dgsjczhvzzh@gmail.com",
      message: Form.message,
    },
    "XXFrRKLgI6o8fFwCS"
  ).then(()=>{
    setLoading(false);
    alert("Message sent successfully!");
    setForm({
      name: "",
      email: "",
      message: "",
    }), (error) => {
      setLoading(false);
      console.error("Failed to send email: ", error);}
  })
};

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h2 className={styles.sectionHeadText}>Contact .</h2>
        <form
          action=""
          ref={formRef}
          onSubmit={(e) => {
            handlesubmit(e);
          }}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              placeholder="Whats your name"
              name="name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              onChange={handleChange}
              value={Form.name}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email </span>
            <input
              type="email"
              placeholder="Whats your Email"
              name="email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              onChange={handleChange}
              value={Form.email}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows={7}
              placeholder="What Do You want to Say"
              name="message"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              onChange={handleChange}
              value={Form.message}
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
