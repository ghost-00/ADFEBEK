import "./styles/services.scss";
import { useTranslation } from "react-i18next";
import { AccessAlarm } from "@mui/icons-material";

function Services() {
  const { t } = useTranslation();
  return (
    <section id="services">
      <div>
        <h1>{t("services")}</h1>
      </div>
      <div className="services">
        <div className="box green-box">
          <h2>Service #1</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div id="icon">
            <AccessAlarm sx={{ fontSize: 100 }} />
          </div>
        </div>
        <div className="box red-box">
          <h2>Service #2</h2>
          <div id="icon">
            <AccessAlarm sx={{ fontSize: 100 }} />
          </div>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem. Ut enim ad minima veniam.
          </p>
        </div>
        <div className="box green-box">
          <h2>Service #3</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
          <div id="icon">
            <AccessAlarm sx={{ fontSize: 100 }} />
          </div>
        </div>
        <div className="box red-box">
          <h2>Service #4</h2>
          <div id="icon">
            <AccessAlarm sx={{ fontSize: 100 }} />
          </div>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
