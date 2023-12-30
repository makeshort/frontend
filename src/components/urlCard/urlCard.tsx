import styles from './urlCard.module.css';
import React from "react";

interface Url {
    uuid: string,
    url: string,
    alias: string,
}

interface Props {
    Url: Url,
}

const UrlCard: React.FC<Props> = (props) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.item}>
                    { props.Url.url }
                </div>

                <div className={styles.item}>
                    {"-->"}
                </div>

                <div className={styles.item}>
                    { "sh.jus1d.ru/s/" + props.Url.alias }
                </div>

                <div className={`${styles.item} ${styles.delete}`}>
                    {"{del} -->"}
                </div>
            </div>
        </>
    );
}

export default UrlCard;