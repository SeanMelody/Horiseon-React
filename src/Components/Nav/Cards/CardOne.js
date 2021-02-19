import React from 'react'
import styles from "./CardStyles"

const CardOne = () => {
    return (
        <div style={styles.CardSection}>
            <img className="float-left" style={styles.CardImage} src="./images/social-media-marketing.jpg"
                alt="Social Media Marketing" />
            <h2 style={styles.CardTitle}>Social Media Marketing</h2>
            <p>
                Social media continues to have a sizable influence on buying habits. Social media marketing helps
                you
                determine which platforms are suited to your brand, using analytics to find the right markets and
                increase your lead generation.
            </p>
        </div>
    )
}

export default CardOne
