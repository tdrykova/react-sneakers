function Drawer({ onClose, items = [] }) {
    return (
        // <div style={{display: 'none'}} className="overlay">
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">Корзина 
          <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="close" /></h2>

        <div className="items">
          {
            items.map((obj) => (
              <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: 'url(obj.imgUrl)'}} className="cartItemImg"> 
              </div>
              <div className="mr-20 flex">
                <p mb-5>{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
              </div>
            </div>
            
            )
          )
          }
        </div>


        <div className="cartTotalBlock">
        <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
              <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
          <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow"></img></button>
        </div>
        
      </div>
    </div>
    )
}

export default Drawer;