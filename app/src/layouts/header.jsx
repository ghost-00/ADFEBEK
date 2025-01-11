import "./header.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

function Header() {
  const { t } = useTranslation();
  return (
    <header>
      <nav className="nav-bar">
        <div className="logo">ADFEBEK</div>
        <div className="menu" id="menu">
          <Link
            className="menu-item"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={20}
            duration={750}
          >
            {t("aboutUs")}
          </Link>
          <Link
            className="menu-item"
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={20}
            duration={750}
          >
            {t("services")}
          </Link>
          <Link
            className="menu-item"
            activeClass="active"
            to="gallery"
            spy={true}
            smooth={true}
            offset={20}
            duration={750}
          >
            {t("gallery")}
          </Link>
          <Link
            className="menu-item"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={20}
            duration={750}
          >
            {t("contact")}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
