import SimpleImageSlider from "react-simple-image-slider";
import Itachi from "../assets/slider/itachi.jpg";
import luffy from "../assets/slider/luffy.jpg";

function Slider() {
  const images = [Itachi, luffy];
  return (
    <div>
      <SimpleImageSlider
        width="100%"
        height="80vh"
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
}

export default Slider;
