import Logo from "./Logo";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import call from "../../assets/call.png";
import message from "../../assets/message.png";
import location from "../../assets/location.png";
const Footer = () => {
  return (
    <>
      <div className="bg-normal">
        <div className="  flex  pt-10 md:pt-24 md:flex-nowrap flex-wrap md:px-20 px-5  text-white  justify-between">
          <div className="max-w-xs md:py-6">
            <div className="py-3">
              <Logo />
            </div>
            <p className=" text-sm md:text-base">
              Powerful Freelance Marketplace System with ability to change the
              Users (Freelancers & Clients)
            </p>
            <div className="flex my-5 ">
              <span className="mr-8">
                <img src={instagram} alt="instagram" />
              </span>
              <span className="mr-8">
                <img src={twitter} alt="twitter" />
              </span>
              <span className="mr-8">
                <img src={facebook} alt="facebook" />
              </span>
            </div>
          </div>
          <div className="max-w-xs">
            <h2 className="pb-4 text-orange-400 md:text-white font-medium text-md md:text-2xl">
              For Clients{" "}
            </h2>
            <ul className="text-sm  md:text-base">
              <li className="py-1  text-sm md:text-base">Find FreeLancers</li>
              <li className="py-1 font-thin">Post Project</li>
              <li className="py-1">Refund Policy</li>
              <li className="py-1">Privacy Policy</li>
            </ul>
          </div>
          <div className="max-w-xs">
            <h2 className="pb-4 text-orange-400 md:text-white font-medium text-md md:text-2xl">
              For FreeLancers
            </h2>
            <ul className="text-sm md:text-base">
              <li className="py-1">Find Work</li>
              <li className="py-1">Create Account</li>
            </ul>
          </div>
          <div className="max-w-xs">
            <h2 className="pb-4 text-orange-400 md:text-white  font-medium text-md md:text-2xl">
              {" "}
              Call Us{" "}
            </h2>
            <ul className="text-sm md:text-base">
              <li className="py-1 flex ">
                {" "}
                <span className="mr-4">
                  <img src={location} alt="location" />
                </span>
                <span>Nigeria</span>
              </li>
              <li className="py-1 flex ">
                {" "}
                <span className="mr-4">
                  <img src={message} alt="message" />
                </span>
                <span>+23409029032</span>
              </li>
              <li className="py-1 flex ">
                {" "}
                <span className="mr-4">
                  <img src={call} alt="call" />
                </span>
                <span>unknown@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center py-5 text-secondary font-normal">
          2022 Skil Remit Limited. All right reserved
        </p>
      </div>
    </>
  );
};
export default Footer;
