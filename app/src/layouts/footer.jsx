import "./footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <ul className="social">
          <li className="social-item">
            <a href="#" target="_blank" className="btn social">
              <span className="icon twitter"></span>
            </a>
          </li>
          <li className="social-item">
            <a href="#" target="_blank" className="btn social">
              <span className="icon youtube"></span>
            </a>
          </li>
          <li className="social-item">
            <a href="#" target="_blank" className="btn social">
              <span className="icon telegram"></span>
            </a>
          </li>
          <li className="social__item">
            <a href="#" target="_blank" className="btn social">
              <span className="icon whatsapp"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p className="desc copyright">© All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
