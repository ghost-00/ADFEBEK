import PhotoGallery from "react-photo-gallery";
import itachi from "../assets/slider/itachi.jpg";
import luffy from "../assets/slider/luffy.jpg";
import naruto from "../assets/about/naruto.jpg";
import seven from "../assets/about/seven.jpg";
import { useTranslation } from "react-i18next";
import "./styles/about.scss";

function About() {
  const { t } = useTranslation();
  const photos = [
    {
      src: luffy,
      width: 4,
      height: 3,
    },
    {
      src: naruto,
      width: 3,
      height: 4,
    },
    {
      src: seven,
      width: 4,
      height: 3,
    },
  ];
  return (
    <section id="about" className="about about-section">
      <div className="flex-container">
        <div>
          <h1>{t("aboutUs")}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="about-gallery">
          <PhotoGallery
            photos={photos}
            columns={2}
            margin={1}
            direction={"row"}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
