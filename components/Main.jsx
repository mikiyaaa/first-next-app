import React from 'react'
import Headline from './Headline'
import Contents from './Contents'

import classes from './Main.module.css'

const Main = (props) => {

  return (
    <main className={classes.main}>
        <Headline page={props.page} onClick={props.onClick}>
            <code className={classes.code}>pages/{props.page}.js</code>
        </Headline>
        <Contents />
    </main>
  )
}

export default Main