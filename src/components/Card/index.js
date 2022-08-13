import styles from './Card.module.scss'

function Card(props) {
    // const onClickButton = () => {
    //   alert(props.title)
    // }
   
    return (
        <div className={styles.card}>
          <div className={styles.favourite}>
          <img src="/img/heart-unliked.svg" alt="unliked" />
          </div>
          
          <img width={133} height={112} src={props.imgUrl} alt="Sneakers" />
          <h5>{props.title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{props.price} руб.</b>
            </div>
            {/* <button className="button" onClick={onClickButton}> */}
            <button className="button" onClick={props.onClick}> 
              <img width={11} height={11} src="/img/plus.svg" alt="plus"></img>
            </button>
          </div>
      </div>
    )
}

export default Card;
