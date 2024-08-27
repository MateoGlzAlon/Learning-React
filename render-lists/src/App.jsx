import './App.css'
import List from './List'

function App() {

  const fruits = [{ id: 1, name: "apple", calories: 75 },
  { id: 2, name: "orange", calories: 45 },
  { id: 3, name: "banana", calories: 105 },
  { id: 4, name: "coconut", calories: 159 },
  { id: 5, name: "pineapple", calories: 37 }];


  const vegetables = [{ id: 6, name: "potato", calories: 110 },
  { id: 7, name: "celery", calories: 15 },
  { id: 8, name: "carrots", calories: 25 },
  { id: 9, name: "corn", calories: 63 },
  { id: 10, name: "broccoli", calories: 50 }];

  // sort by name
  //fruits.sort((a, b) => a.name.localeCompare(b.name));//Alphabetical order
  //fruits.sort((a, b) => b.name.localeCompare(a.name));//Reverse alphabetical order
  //fruits.sort((a, b) => a.calories - b.calories);//Lowest to Highest
  //fruits.sort((a, b) => b.calories - a.calories);//Highest to Lowest

  // filter by calories
  //const lowCalFruit = fruits.filter(fruit => fruit.calories < 100)


  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && < List items={vegetables} category="Vegetables" />}
    </>
  )
}

export default App
