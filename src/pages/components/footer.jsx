import { Link } from "react-router-dom";
import logo from "../../assets/fssp_logo_en.png";
import "./footer.css";

const menuItems = [
    { name: "TRANG CHỦ", path: "/" },
    {
        name: "PHỤNG VỤ",
        subpages: [
            { name: "THÁNH LỄ", path: "/liturgy/mass" },
            { name: "KINH THẦN VỤ", path: "/liturgy/sacraments" },
            { name: "BÍ TÍCH VÀ PHỤ TÍCH", path: "/liturgy/calendar" },
            { name: "THÁNH NHẠC", path: "/liturgy/prayers" },
        ],
    },
    {
        name: "HỌC HỎI",
        subpages: [
            { name: "THÁNH KINH", path: "/learning/catechism" },
            { name: "KINH NGUYỆN", path: "/learning/articles" },
            { name: "SÁCH KHÁC", path: "/learning/videos" },
        ],
    },
    { name: "TIN TỨC", path: "/news" },
    {
        name: "TẠI VIỆT NAM",
        subpages: [
            { name: "CỘNG ĐOÀN THÁNH GIOAN THEOPHANE", path: "/vn/parishes" },
            { name: "HÌNH ẢNH VÀ VIDEO", path: "/vn/events" },
        ],
    },
    { name: "FSSP", path: "/fssp" },
    { name: "HỖ TRỢ", path: "/support" },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="info">
                    <div className="footer-logo">
                        <img src="https://www.fssp.org/wp-content/uploads/2016/08/cropped-titre.jpg" alt="FSSP logo" />
                    </div>

                    <div className="contact">
                        <h1>CONTACT</h1>
                        <h4>Phone: </h4>
                        <h4>Email: </h4>
                        <Link to={"/login"}>Member login</Link>
                    </div>
                </div>

                <div className="footer-nav">
                    {menuItems.map((item) => (
                        <div key={item.name} className="footer-column">
                            <h4>
                                {item.path ? (
                                    <Link className="footer-column" to={item.path}>{item.name}</Link>
                                ) : (
                                    item.name
                                )}
                            </h4>
                            {item.subpages && (
                                <ul>
                                    {item.subpages.map((sub) => (
                                        <li key={sub.name}>
                                            <Link className="subpage" to={sub.path}>{sub.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} FSSP VN. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
