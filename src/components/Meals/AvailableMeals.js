import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: '스시',
    description: '최고급 생선과 채소',
    price: 22.99,
  },
  {
    id: 'm2',
    name: '팔로프',
    description: '우즈벡 특산 음식!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: '갈비찜',
    description: '최고의 한국 음식 중 하나',
    price: 12.99,
  },
  {
    id: 'm4',
    name: '이탈리아 파스타',
    description: '이탈리안 셰프의 스페셜 파스타',
    price: 18.99,
  },
]

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
