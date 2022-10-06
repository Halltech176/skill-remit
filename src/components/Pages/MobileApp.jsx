import appstore from "../../assets/appstore.png";
import playstore from "../../assets/playstore.png";
import pattern1 from "../../assets/Pattern 3.png";
import pattern2 from "../../assets/Pattern 2.png";
const MobileApp = () => {
  return (
    <>
      <div className="download-app w-100 rounded-3xl relative md:max-w-4xl text-center mx-auto p-5 md:p-10 md:px-16 my-32 flex items-center flex-col justify-between">
        <span className="absolute  right-0 top-0">
          <img className="md:w-auto w-48" src={pattern1} alt="img" />
        </span>
        <span className="absolute  left-0 bottom-0">
          <img className="md:w-auto w-48" src={pattern2} alt="img" />
        </span>
        <h1 className="text-white md:tracking-wider md:leading-relaxed capitalize font-bold md:font-semibold md:text-4xl">
          Install our app to get Hired and Hire people for business faster{" "}
        </h1>
        <div className="flex my-4 md:my-10 justify-between">
          <span className="mx-1 md:mx-8">
            <img src={playstore} alt="playstore" />
          </span>
          <span className="mx-1 md:mx-8">
            <img src={appstore} alt="appstore" />
          </span>
        </div>
      </div>
    </>
  );
};
export default MobileApp;
