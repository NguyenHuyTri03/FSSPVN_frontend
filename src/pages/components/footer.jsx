import { Link } from "react-router-dom";
import logo from "../../assets/fssp_emblem.png";
import "./footer.css";

const menuItems = [
    { name: "TRANG CHỦ", path: "/" },
    {
        name: "PHỤNG VỤ", path: "/",
    },
    {
        name: "HỌC HỎI", path: "/"
    },
    { name: "TIN TỨC", path: "/news" },
    {
        name: "TẠI VIỆT NAM", path: "/"
    },
    { name: "FSSP", path: "/fssp" },
    { name: "HỖ TRỢ", path: "/support" },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <img src={logo} alt="FSSP logo" />
                    <h1>FSSP</h1>
                </div>

                <div className="footer-nav">
                    {menuItems.map((item) => (
                        <div key={item.name} className="footer-column">
                            <h4>
                                <Link className="footer-column" to={item.path}>{item.name}</Link>
                            </h4>
                        </div>
                    ))}
                </div>

                <hr></hr>

                <div className="contact">
                    {/* <h1>CONTACT</h1> */}
                    <div>
                        <h4>Phone: 0123456789</h4>
                        <h4>Email: example@email.com</h4>
                        <Link className="member" to={"/login"}>Member login</Link>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} FSSP VN. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
