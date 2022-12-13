import React from 'react'
import classes from 'src/components/Headline/Headline.module.css'

const Headline = ( props ) => {
    console.log(props);
    return (
        <div>
            <h1 className={classes.title}>
                <a href="https://nextjs.org">{props.page} Page</a>
            </h1>
            <p className={classes.description}>
                Get started by editing {props.children}
            </p>
            <button onClick={props.onClick}>Click Here!!</button>
        </div>
  )
}

export default Headline