import { useState } from "react"

function MyComponent() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])

    function handleAddFood() {

        const newFood = document.getElementById("food-input").value;
        document.getElementById("food-input").value = "";

        setFoods(prevFoods => [...prevFoods, newFood])



    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index))
    }



    return (<>
        <div>
            <h2>List of food</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>

            <input type="text" id="food-input" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add food</button>
        </div>
    </>)

}
export default MyComponent  