import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './componant/list';


function App() {
  const [counter, setCounter] = useState(0)
  const [cardValue, setCardValue] = useState('')
  const [unitFlag, setUnitFlag] = useState(false)
  const [unitControl, setUnitControl] = useState('litre')
  const [shopCards, setShopCards] = useState([])

  const pluseHandler = () => {
    setCounter(counter + 1)
  }


  const minusHandler = () => {
    counter && setCounter(counter - 1)
  }

  const inpValueHandler = (event) => {
    setCardValue(event.target.value)
  }

  const falgHandler = () => {
    setUnitFlag(!unitFlag)
    if (unitFlag) {
      setUnitControl('litre')
    } else {
      setUnitControl('milliliter')
    }
  }

  const setCardHandler = () => {
    const shopCardObj = {
      title: cardValue,
      unit: unitControl,
      counts: counter,
      id: Math.random()
    }
    setShopCards([...shopCards, shopCardObj])
  }

  const removeHandler = (itemId) => {
    setShopCards(shopCards.filter((items) => itemId != items.id))
  }

  let newTitle
  const editorHandler = (items) => {
    const newEdit = shopCards.map((item) => {
      if (items.id == item.id) {
        return {
          ...item, title: <div className='editor-container'>
            <input onBlur={() => onBlured(item)} autoFocus className='edit-input' onChange={editTitle} />
          </div>
        }
      } else {
        return item
      }
    })
    setShopCards(newEdit)
  }

  function onBlured(item) {
    let setTitle = shopCards.map((items) => {
      if (items.id == item.id) {
        return {...items, title: newTitle}
      } else return items
    })
    setShopCards(setTitle)
  }

  function editTitle(event) {
    newTitle = event.target.value
  }


  return (
    <div className="App">
      <div className='main'>
        <div className='counter'>
          <button className='pluse-btn' onClick={pluseHandler}>pluse</button>
          <p>you chosed {counter}</p>
          <button className='minus-btn' onClick={minusHandler}>minus</button>
        </div>
        <input className='inp' onChange={inpValueHandler} type="text" />
        <div>
          <button className='unit-btn' style={{ backgroundColor: unitFlag ? '#EF9A9A' : '#A5D6A7' }} onClick={falgHandler}>litre</button>
          <button className='unit-btn' style={{ backgroundColor: unitFlag ? '#A5D6A7' : '#EF9A9A' }} onClick={falgHandler}>milliliter</button>
        </div>
        <button className='accept' onClick={setCardHandler}>accept</button>
      </div>
      <List shopCards={shopCards} removeHandler={removeHandler} editorHandler={editorHandler} />
    </div>
  );
}



export default App;
