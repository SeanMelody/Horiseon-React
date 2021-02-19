import React from 'react'
import styles from "./CardStyles"

const CardLeft = (props) => {
    return (
        <div style={styles.CardSection}>
            <img className="float-left" style={styles.CardImage} src={props.image}
                alt="Social Media Marketing" />
            <h2 style={styles.CardTitle}>{props.title}</h2>
            <p>
                {props.description}
            </p>
        </div>
    )
}


export default CardLeft
