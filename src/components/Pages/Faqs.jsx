import { motion } from "framer-motion";
import Header from "../Common/Header";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import open1 from "../../assets/open1.png";
import open2 from "../../assets/open2.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Questions } from "./Questions";
const Faqs = () => {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState();
  const handleChange = (panel) => {
    setExpanded(!expanded ? panel : false);
    setActive(panel);
  };
  console.log(expanded);
  console.log(active);
  const renderQuestions = Questions.map((data, index) => {
    return (
      <Accordion
        key={index}
        className="border-primary p-1 md:p-7 my-3 md:my-7  "
        expanded={expanded === data.id}
        onChange={() => handleChange(data.id)}
      >
        <AccordionSummary
          expandIcon={
            active === data.id ? (
              <img className="w-6 md:w-auto" src={open1} />
            ) : (
              <img className="w-6 md:w-auto" src={open2} />
            )
          }
          //   aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <h1 className="text-primary font-semibold text-md md:text-xl">
            {data.text}
          </h1>
        </AccordionSummary>
        <AccordionDetails>
          <p>auto {data.message}</p>
        </AccordionDetails>
      </Accordion>
    );
  });
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <Header />
        <h1 className="text-center md:mt-10 mt-24 md:my-10 text-primary text-2xl md:text-5xl font-semibold my-3">
          {" "}
          Frequently Asked Questions{" "}
        </h1>
        <div className="flex flex-col justify-center mb-10 mx-5 md:max-w-6xl md:mx-auto">
          {renderQuestions}
        </div>
      </motion.div>
    </>
  );
};
export default Faqs;
