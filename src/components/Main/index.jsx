import React from 'react'
import Contents from 'src/components/Contents'
import Headline from 'src/components/Headline'

import classes from 'src/components/Main/Main.module.css'

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