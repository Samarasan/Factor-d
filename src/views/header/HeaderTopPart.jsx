import React from 'react'
import { useStyles } from '../../hooks/useMuiStyle'

const HeaderTopPart = () => {
    const classes=  useStyles()
  return (
    <div className={classes.topPart}>
        <p>Reach Us At :<span style={{fontWeight:'550',fontSize:'18px'}}> +91 89170917910 </span></p>
    </div>
  )
}

export default HeaderTopPart