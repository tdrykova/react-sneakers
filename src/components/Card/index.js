import React from 'react';
import styles from './Card.module.scss'

function Card({ title, onClickFavorite, imgUrl, price, onPlus}) { // onClickPlus из App
    // const onClickButton = () => {
    //   alert(props.title)
    // }

    const [isAdded, setIsAdded] = React.useState(false)
   
    const onClickPlus = () => {
      onPlus({ title, imgUrl, price });
      setIsAdded(!isAdded)
    }

    React.useEffect(() => {
      console.log('Переменная изменилась')
    }, [isAdded]);

    return (
        <div className={styles.card}>
          <div className={styles.favourite} onClick={onClickFavorite}>
            <img src="/img/heart-unliked.svg" alt="unliked" />
          </div>
          
          <img width={133} height={112} src={imgUrl} alt="Sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {/* <button className="button" onClick={onClickButton}> */}
            <button> 
              <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus"></img>
            </button>
          </div>
      </div>
    )
}

export default Card;
