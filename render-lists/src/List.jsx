import proptypes from 'prop-types'

function List(props) {

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calories}</li>)

    return (
        <>
            <h3 className="list-category">Category: {category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    )

}

List.defaultProps = {
    items: [],
    category: "Category",
}

List.proptypes = {
    category: proptypes.string,
    items: proptypes.arrayOf(proptypes.shape({
        id: proptypes.number,
        name: proptypes.string,
        calories: proptypes.number
    }))
}
export default List