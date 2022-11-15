import React from 'react'
import Headline from './Headline'
import Contents from './Contents'

import styles from '../styles/Home.module.css'

const Main = (props) => {

  return (
    <main className={styles.main}>
        <Headline page={props.page} onClick={props.onClick}>
            <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
        <Contents />
    </main>
  )
}

export default Main