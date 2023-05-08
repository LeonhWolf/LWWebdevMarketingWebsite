import UseIdAnchors from "../utils/UseIdAnchors";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import css from "./NavbarFooterTemplate.module.scss";

interface IProps {
  doAddNavbarMargin: boolean;
  children: React.ReactElement | React.ReactElement[];
}

function NavbarFooterTemplate(props: IProps) {
  return (
    <UseIdAnchors>
      <div
        className={`h-100 d-flex flex-column justify-content-between ${
          props.doAddNavbarMargin && css["add-navbar-margin"]
        }`}
      >
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </UseIdAnchors>
  );
}

export default NavbarFooterTemplate;
