import React from "react";
import styles from './Message.module.css';

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props:MessagePropsType) {
    return (
        <div className={styles.message}>
            <div className={styles.itemContainer}>

                    <img className={styles.img} src={props.avatar}  alt="avatar"/>

                <div className={styles.messageContainer}>

                    <div className={styles.corner}></div>

                    <div className={styles.contentMessage}>
                        <div className={styles.name}>{props.name}</div>
                        <div>{props.message}</div>
                        <div className={styles.time}>{props.time}</div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Message;
