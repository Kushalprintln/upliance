import React from "react";
import styles from './Background.module.css'
export default function Background({level}) {
    const divs = []
    for (let i = 1; i <= level; i++) {
        divs.push(<div className={styles.level}>{i}</div>)
    }
    return (
        <div className={styles.background}>
            {divs}
        </div>
    )
}