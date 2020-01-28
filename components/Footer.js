import Nav from "./Nav";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center flex-wrap"
      style={{
        marginTop: "64px",
        marginBottom: "64px"
      }}
    >
      <div className="col mb-4">
        <Nav alignment="vertical" />
      </div>
      <div className="col mb-4">
        <h2 className="title">Reach out</h2>
        <Socials />
      </div>
      <div className="col mt-4">
        <h2 className="title">Featured Posts</h2>
        <div className="list-group">
          <div
            className="list-group-item"
            style={{ borderRadius: "12px 12px 0 0" }}
          >
            <h6>Coffee Runners Launch</h6>
            <small>January 31, 2020</small>
          </div>
          <div
            className="list-group-item"
            style={{ borderRadius: "0 0 12px 12px" }}
          >
            <h6>How Companies can Increase Prodcutivity with Coffee Breaks</h6>
            <small>January 16, 2020</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
