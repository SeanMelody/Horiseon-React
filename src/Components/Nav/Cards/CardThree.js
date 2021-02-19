import React from 'react'
import styles from "./CardStyles"

const CardThree = () => {
    return (
        <div style={styles.CardSection}>
            <img className="float-left" style={styles.CardImage} src="./images/search-engine-optimization.jpg"
                alt="Search Engine Optimization" />
            <h2 style={styles.CardTitle}>Search Engine Optimization</h2>
            <p>
                The dominance of mobile internet use means that users are searching for the right business as they
                travel, shop, or sit on their couch at home. Search Engine Optimization (SEO) allows you to increase
                your visibility and find the right customers for your business.
            </p>
        </div>
    )
}

export default CardThree
