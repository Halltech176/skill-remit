import { motion } from "framer-motion";
import Header from "../Common/Header";
import PhoneImage from "./PhoneImage";
import MobileApp from "./MobileApp";
import MapPinLine from "../../assets/MapPinLine.png";
import Envelope from "../../assets/Envelope.png";
import Phone from "../../assets/Phone.png";
const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <div className="flex md:justify-evenly mx-10 md:mx-0 justify-center flex-wrap items-center my-16 md:my-7">
          <motion.div
            initial={{ opacity: 0, transform: "translateX(-20rem)" }}
            whileInView={{ opacity: 1, transform: "translateX(0rem)" }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            {" "}
            <h1 className="text-primary my-3  font-semibold text-3xl">
              About Us{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              sed morbi eget pretium turpis sed nam. Donec nunc, pellentesque
              nibh nibh vitae arcu mattis pellentesque sollicitudin. Velit sed
              eros, nisl quisque venenatis. Egestas mi ligula arcu consectetur
              ac vestibulum sit accumsan. Enim sit enim leo et pretium, enim
              risus. Sit arcu proin nunc, lobortis diam purus. Nunc augue
              quisque gravida et pharetra commodo. Fermentum etiam sed et
              egestas. Donec orci vestibulum amet amet pretium et ac.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Pretium sed morbi
              eget pretium turpis
            </p>
          </motion.div>
          <div>
            <motion.div
              className="md:my-0 my-10"
              initial={{ opacity: 0, transform: "translateX(20rem)" }}
              whileInView={{ opacity: 1, transform: "translateX(0rem)" }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              {" "}
              <PhoneImage />{" "}
            </motion.div>
          </div>
        </div>
        <div className="md:my-5">
          <MobileApp />
        </div>
        <div className="flex md:flex-nowrap flex-wrap justify-center px-5 md:px-10  md:my-10 md:justify-evenly ">
          <motion.div
            initial={{ opacity: 0, transform: "translateX(-20rem)" }}
            whileInView={{ opacity: 1, transform: "translateX(0rem)" }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-primary py-1 md:py-24"
          >
            <h1 className="md:text-5xl text-2xl font-semibold my-3">
              {" "}
              Contact Us{" "}
            </h1>
            <h1 className="md:text-5xl text-2xl font-semibold my-3">
              {" "}
              Get In touch today{" "}
            </h1>
            <div className="my-10">
              <p className="flex my-3 items-center">
                <span className="mr-5">
                  {" "}
                  <img src={Phone} alt="phone" />{" "}
                </span>
                <span>+2348085546073 </span>
              </p>
              <p className="flex my-3 items-center">
                <span className="mr-5">
                  {" "}
                  <img src={Envelope} alt="Envelope" />{" "}
                </span>
                <span>support@unknow.com </span>
              </p>
              <p className="flex my-3 items-center">
                <span className="mr-5">
                  <img src={MapPinLine} alt="MapPinLine" />{" "}
                </span>
                <span>
                  Polystar 2nd Roundabout, Lekki Phase 1 105102, Lagos{" "}
                </span>
              </p>
            </div>
          </motion.div>
          <motion.form
            // initial={{ opacity: 0, transform: "translateX(20rem)" }}
            // whileInView={{ opacity: 1, transform: "translateX(0rem)" }}
            // viewport={{ once: false }}
            // transition={{ duration: 0.5 }}
            className="md:p-10 p-5 my-5 md:my-0 shadow-lg"
          >
            <section className="md:flex block justify-between">
              <div className="flex flex-col mx-3">
                <label className="text-primary text-xl font-semibold">
                  First Name{" "}
                </label>
                <input
                  className="shadow-md text-info font-semibold text-md py-2 px-3 my-2"
                  placeholder="first name"
                  style={{ border: "1px solid #EFF0F7" }}
                  type="text"
                />
              </div>
              <div className="flex flex-col mx-3">
                <label className="text-primary text-xl font-semibold">
                  Last Name{" "}
                </label>
                <input
                  className="shadow-md py-2 text-info px-3 my-2"
                  placeholder="first name"
                  style={{ border: "1px solid #EFF0F7" }}
                  type="text"
                />
              </div>
            </section>
            <div className="flex flex-col mx-3">
              <label className="text-primary text-xl font-semibold">
                Email{" "}
              </label>
              <input
                className="shadow-md text-info font-semibold py-2 px-3 my-2"
                placeholder=""
                style={{ border: "1px solid #EFF0F7" }}
                type="text"
              />
            </div>
            <div className="flex flex-col mx-3">
              <label className="text-primary text-xl font-semibold">
                Message{" "}
              </label>
              <textarea
                cols="10"
                rows="7"
                className="shadow-md font-semibold text-info py-2 px-3 my-2"
                placeholder="Please type your message here"
                style={{ border: "1px solid #EFF0F7" }}
                type="text"
              />
            </div>
            <button className="btn mx-3 my-5"> Send Message </button>
          </motion.form>
        </div>
      </motion.div>
    </>
  );
};
export default About;
