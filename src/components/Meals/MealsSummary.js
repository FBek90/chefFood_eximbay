import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>맛있는 음식</h2>
      <p>
        제공되는 다양한 식사 중에서 가장 좋아하는 식사를 선택하고 맛있는 점심과 저녁 식사를 즐기십시오.
      </p>
      <p>
        우리의 모든 식사는 고품질 재료로 제 시간에 그리고 물론 경험 많은 셰프에 의해 조리됩니다!
      </p>
    </section>
  )
}

export default MealsSummary
