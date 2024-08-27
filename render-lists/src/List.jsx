function List() {

    const fruits = [{ id: 1, name: "apple", calories: 75 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 }];

    // sort by name
    //fruits.sort((a, b) => a.name.localeCompare(b.name));//Alphabetical order
    //fruits.sort((a, b) => b.name.localeCompare(a.name));//Reverse alphabetical order
    //fruits.sort((a, b) => a.calories - b.calories);//Lowest to Highest
    fruits.sort((a, b) => b.calories - a.calories);//Highest to Lowest

    // filter by calories
    const lowCalFruit = fruits.filter(fruit => fruit.calories < 100)

    const listItems = fruits.map(fruit => <li key={fruits.id}>{fruit.name}: &nbsp; {fruit.calories}</li>)

    return (<ol>{listItems}</ol>)

}
export default List