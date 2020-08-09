import React from "react"

import styles from "./WorkCard.module.css"

function WorkCard({ img, title, description, tags }) {

    function arrayToTags(tags) {
        return tags.map(tag => ( <span key={tag}>#{tag}</span> ));
    }

    return (
        <div className={styles.WorkCard}>
            <img src={img} alt=""/>
            <div className={styles.cardInfo}>
                <span className={styles.title}>{title}</span>
                <p className={styles.description}>{description}</p>
                <div className={styles.tagList}>
                    {arrayToTags(tags)}
                </div>
                <button>VISIT WORK</button>
            </div>
        </div>
    )
}

export default WorkCard