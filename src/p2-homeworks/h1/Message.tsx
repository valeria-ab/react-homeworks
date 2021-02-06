import React from 'react';
import styles from './Message.module.css';

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.message}>

                <img className={styles.avatar} src={props.avatar} alt="avatar"/>

                    <div className={styles.angle} />

                    <div className={styles.contentMessage}>
                        <div className={styles.name}>{props.name}</div>
                        <div className={styles.text}>{props.message}</div>
                        <div className={styles.time}>{props.time}</div>
                    </div>



        </div>
    );
}

export default Message;
