import React from 'react'
import styles from "./CardStyles"

const CardTwo = () => {
    return (
        <div style={styles.CardSection}>
            <img className="float-right" style={styles.CardImage} src="./images/online-reputation-management.jpg"
                alt="Online Reputation Management" />
            <h2 style={styles.CardTitle}>Online Reputation Management</h2>
            <p>
                The web is full of opinions, and some of these can be negative. Social media allows anyone with an
                internet connection to say whatever they want about your business. Online Reputation Management
                gives
                you the control over what potential customers see when they search for your business.
                </p>
        </div>
    )
}

export default CardTwo
