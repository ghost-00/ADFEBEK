import PhotoGallery from "react-photo-gallery";
import itachi from "../assets/slider/itachi.jpg";
import { useTranslation } from "react-i18next";

function Gallery() {
  const { t } = useTranslation();
  const photos = [
    {
      src: itachi,
      width: 4,
      height: 3,
    },
    {
      src: itachi,
      width: 4,
      height: 3,
    },
    {
      src: itachi,
      width: 4,
      height: 3,
    },
  ];
  return (
    <section id="gallery">
      <div className="gallery">
        <div>
          <h1>{t("gallery")}</h1>
        </div>
        <PhotoGallery photos={photos} />
      </div>
    </section>
  );
}

export default Gallery;
