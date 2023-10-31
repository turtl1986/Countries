import { useNavigate } from 'react-router-dom'
import cardStyle from './card.module.css'

export function Card({...item}){

const navigate=useNavigate()

    return(
        <div className={cardStyle.card} >
        <img className={cardStyle.card__img} src={item.flags.png} alt={item.flags.alt} onClick={()=>{navigate(`/countries/${item.name.common}`)}} />
        <div className={cardStyle.card__description}>
        <span className={cardStyle.card__name}>{item.name.common}</span>
        <div className={cardStyle.card__information}>
            <p className={cardStyle.card__item}><span className={cardStyle.card__text}>population:</span>{item.population}</p>
            <p className={cardStyle.card__item}><span className={cardStyle.card__text}>region:</span>{item.region}</p>
            <p className={cardStyle.card__item}><span className={cardStyle.card__text}>capital:</span>{item.capital[0]}</p>
        </div>
        </div>
    </div>
    )
   
}