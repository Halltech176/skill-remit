import iphone1 from "../../assets/iPhone1.png";
import iphone2 from "../../assets/iPhone2.png";
const PhoneImage = () => {
  return (
    <>
      <div className="flex phone_image">
        <span>
          <img className="w-72 -mr-16 mt-10 " src={iphone2} alt="iphone1" />
        </span>
        <span>
          <img className="w-48 -ml-10" src={iphone1} alt="iphone2" />
        </span>
      </div>
      {/* </div> */}
    </>
  );
};
export default PhoneImage;
