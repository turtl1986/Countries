import './tab.css'
import { SetStateAction, useState } from 'react'

export function Tab() {
  const [tab, setTab] = useState(1)

  const handleClickTab = (index: number) => {
    setTab(index)
  };

  return (
    <div className="tabs__container">
      <ul className="tabs__list">
        <li
          className={tab === 1 ? "tab tab--active" : "tab"}
          onClick={() => handleClickTab(1)}
        >
          Первая
        </li>
        <li
          className={tab === 2 ? "tab tab--active" : "tab"}
          onClick={() => handleClickTab(2)}
        >
          Вторая
        </li>
      </ul>

      <div className="container__content">
        <div className={tab===1?"content content--active":"content"}>
          <span className="content__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </span>
        </div>

        <div className={tab===2?"content content--active":"content"}>
          <span className="content__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            numquam explicabo voluptatem ipsum, voluptate in fugit voluptatibus
            quis eos sapiente iusto blanditiis dicta culpa, reprehenderit
            exercitationem! Quia ipsum non aut?
          </span>
        </div>
      </div>
    </div>
  )
}
