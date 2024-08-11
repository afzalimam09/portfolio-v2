"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const component = pathname.split("/")[1] || "about";

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {navLinks.map(({ id, title, link }) => (
                    <li key={id} className="navbar-item">
                        <Link
                            className={`navbar-link ${
                                component === title.toLowerCase()
                                    ? "active"
                                    : ""
                            }`}
                            href={link}
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
