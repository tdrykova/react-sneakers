import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import React from 'react'

function App() {
  const [cartOpened, setCartOpened] = React.useState(false)
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])

  // promise 
  // fetch только при первом запуске (рендере) 
  React.useEffect(() => {
    fetch('https://6308b10b722029d9ddd5d31f.mockapi.io/items').then(response => {
    return response.json();
    }).then(json => {
      setItems(json);
    })
  }, [])
  // если items или cartOpened изменятся не вызывай fetch
  
  const onAddToCart = (obj) => {
    // лучше добавлять данные не через первую переменную cartItems
    // setCartItems([...cartItems, obj])
    
    setCartItems(prev => [...prev, obj]) // в уроках по useState
  }

  return (
    <div className="wrapper clear">
    {/* {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null} */}
    {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)}/>
    
      <div className="content p-40">

      <div className="d-flex align-center justify-between mb-40">
        <h1>Все кроссовки</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          <input placeholder="Поиск ...">

          </input>
        </div>
      </div>

        <div className="d-flex flex-wrap">
        
          {
            items.map((item) => (
              <Card
                title={item.title}
                price={item.price}
                imgUrl={item.imgUrl}
                onClickFavorite={() => console.log('Добавили в закладки')}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))
          }
        </div>
       

      </div>
    </div>
  );
}

export default App;
