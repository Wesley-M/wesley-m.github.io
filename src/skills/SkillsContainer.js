import React from "react"

import styles from "./SkillsContainer.module.css"

function SkillsContainer({ type, children }) {
    return (
        <div className={styles.SkillsContainer}>
            <p className={styles.skillType}>{type}</p>
            <div className={styles.skills}>
                {children}
            </div>
        </div>
    )
}

export default SkillsContainer