import classNames from 'classnames';
import React, { FC, ReactElement } from 'react';
import { Theme } from '../../Constants/@types';
import { useThemeContext } from '../../Context/Theme';

import styles from './FormContainer.module.css'

type FormContainerProps = {
    title: string
    children: ReactElement
}

const FormContainer:FC<FormContainerProps> = ({title, children}) => {
    const {theme} = useThemeContext()
    return(
        <div className={classNames(styles.container, {[styles.darkContainer] : theme === Theme.Dark})}>
        <div>
          <div className={styles.goBackButton}>{'Back to home'}</div>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.formContainer}>{children}</div>
    </div>
    )
}


export default FormContainer; 