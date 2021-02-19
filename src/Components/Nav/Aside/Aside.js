import React from 'react'
import styles from "./AsideStyles"

const Aside = () => {
    return (
        <div className="col-md-3" style={styles.AsideStyles}>
            <div>
                <h3>Lead Generation</h3>
                <img style={styles.AsideImage} src="./images/lead-generation.png"
                    alt="Lead Generation" />
                <p>
                    Inbound strategies for lead generation require less work for your business,
                    bringing customers directly to your website.
            </p>

            </div>
            <div>
                <h3>Brand Awareness</h3>
                <img style={styles.AsideImage} src="./images/brand-awareness.png" alt="Brand Awarenes" />
                <p>
                    Users find your business through paid and organic searches,
                    increasing the search ranking and visibility for your business.
            </p>
            </div>
            <h3>Cost Management</h3>
            <img style={styles.AsideImage} src="./images/cost-management.png" alt="Cost Management" />
            <p>
                As the search ranking for your business increases, your advertising costs decrease,
                and you no longer need to advertise your page.
            </p>
        </div>
    )
}

export default Aside
