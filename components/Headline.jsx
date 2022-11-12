import React from 'react'
import styles from '../styles/Home.module.css'

const Headline = ({ page }) => {
    return (
        <div>
            <h1 className={styles.title}>
                <a href="https://nextjs.org">{page} Page</a>
            </h1>
            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/{page}.js</code>
            </p>
        </div>
  )
}

export default Headline