import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/fssp_logo_en.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "./hamburger";

const Navigation = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");

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

    const toggleDropdown = (item) => {
        setActiveDropdown(activeDropdown === item ? null : item);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Search for:", searchValue);
        // TODO: implement search navigation
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="filler"></div>

                <div className="logo">
                    <img
                        src="https://www.fssp.org/wp-content/uploads/2016/08/cropped-titre.jpg"
                        alt="FSSP logo"
                    />
                </div>

                {/* Hamburger */}
                <Checkbox
                    checked={menuOpen}
                    onChange={() => setMenuOpen(!menuOpen)}
                />

                {/* Nav List */}
                <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            className="nav-item"
                            onMouseEnter={() =>
                                !menuOpen && item.subpages && setActiveDropdown(item.name)
                            }
                            onMouseLeave={() =>
                                !menuOpen && item.subpages && setActiveDropdown(null)
                            }
                        >
                            <div
                                className="nav-button"
                                onClick={() => item.subpages && toggleDropdown(item.name)}
                            >
                                {item.path ? (
                                    <Link to={item.path} className="nav-link">
                                        {item.name}
                                    </Link>
                                ) : (
                                    <span>{item.name}</span>
                                )}

                                {item.subpages && (
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className={`arrow-icon ${activeDropdown === item.name ? "open" : ""
                                            }`}
                                    />
                                )}
                            </div>

                            {item.subpages && activeDropdown === item.name && (
                                <ul
                                    className={`dropdown ${activeDropdown === item.name ? "open" : ""
                                        }`}
                                >
                                    {item.subpages.map((sub) => (
                                        <li key={sub.name} className="dropdown-item">
                                            <Link to={sub.path}>{sub.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Search Bar */}
                <div className="search-div">
                    <div className={`search-bar ${searchOpen ? "active" : ""}`}>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="search-icon"
                            onClick={() => setSearchOpen(!searchOpen)}
                        />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
