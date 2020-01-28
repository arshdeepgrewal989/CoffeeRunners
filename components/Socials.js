import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faGooglePlusSquare
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => (
  <div className="list-group list-group-horizontal">
    <div className="list-group-item" style={{ borderRadius: "12px 0 0 12px" }}>
      <FontAwesomeIcon icon={faFacebookSquare} style={{ fontSize: "32px" }} />
    </div>
    <div className="list-group-item">
      <FontAwesomeIcon icon={faTwitterSquare} style={{ fontSize: "32px" }} />
    </div>
    <div className="list-group-item" style={{ borderRadius: "0 12px 12px 0" }}>
      <FontAwesomeIcon icon={faGooglePlusSquare} style={{ fontSize: "32px" }} />
    </div>
  </div>
);

export default Socials;
