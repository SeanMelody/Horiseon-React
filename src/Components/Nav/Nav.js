import React from 'react'
import { Link } from "react-router-dom"; //Lets you link pages
import styles from "./NavStyles"

const Nav = () => {
    return (
        <nav style={styles.navStyles}>
            <h1>Horiseon</h1>
            <div style={styles.linksAlign}>
                <Link to="#search-engine-optimization" style={styles.linkStyles}>
                    <p>Search Engine Optimization</p>
                </Link>
                <Link to="#online-reputation-management" style={styles.linkStyles}>
                    <p>Online Reputation Management</p>
                </Link>
                <Link to="#social-media-marketing" style={styles.linkStyles}>
                    <p>Social Media Marketing</p>
                </Link>
            </div>
        </nav>
    )
}

export default Nav
