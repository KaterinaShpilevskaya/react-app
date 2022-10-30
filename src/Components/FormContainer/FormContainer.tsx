import classNames from 'classnames';
import React, { FC, ReactElement } from 'react';

//@ts-ignore
import styles from './FormContainer.module.css'

type FormContainerProps = {
    title: string
    children: ReactElement
}

const FormContainer:FC<FormContainerProps> = ({title, children}) => {
    return(
        <div className={classNames(styles.container)}>
        <div>
          <div className={styles.goBackButton}>{'Back to home'}</div>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.formContainer}>{children}</div>
    </div>
    )
}


export default FormContainer; 