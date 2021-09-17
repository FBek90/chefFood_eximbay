import {Fragment} from 'react'

import HeaderCartButton from './HeaderCartButton'
import mealsImage from '../../assets/meals.jpeg'
import classes from './Header.module.css'

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ChefFoods</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="맛있는 음식이 가득한 식탁!" />
      </div>
    </Fragment>
  )
}

export default Header
