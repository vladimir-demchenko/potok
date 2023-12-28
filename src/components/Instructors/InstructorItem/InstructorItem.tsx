import cls from './InstructorItem.module.scss'

export default function InstructorItem() {
  return (
    <div className={cls.InstSlide}>
      <img className={cls.img} src='/img/мила.png' />
      <div className={cls.info}>
        <div className={cls.header}>
          <h3 className={cls.name}>Мила</h3>
          <p className={cls.subtext}>инструктор</p>
        </div>
        <p className={cls.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ipsa quos at aliquid praesentium? Culpa quia iure illo ea autem ipsum dolores, nostrum, amet molestiae ex blanditiis? Consequuntur officia aspernatur nemo magnam aliquam eaque eveniet mollitia laudantium voluptate, dolore fuga.</p>
        <p className={cls.pos}>Хатха-йога</p>
      </div>
    </div>
  )
}