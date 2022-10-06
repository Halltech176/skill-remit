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
      <div className="my-24">
        <h1 className="text-center  text-primary text-2xl md:text-5xl font-semibold my-3">
          {" "}
          Frequently Asked Questions{" "}
        </h1>
        <div className="flex flex-col justify-center max-w-6xl mx-auto">
          {renderQuestions}
        </div>
      </div>
    </>
  );
};
export default Faqs;
