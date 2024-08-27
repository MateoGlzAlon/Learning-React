function Button() {

    let count = 0;

    /*  const handleClick = (name) => {
         if (count < 3) {
             count++;
             console.log(`${name} you clickes me! ${count} times`);
         } else {
             console.log(`${name} stop clicking me! : count = ${count}`);
         }
     } */

    const handleClick = (e) => {
        console.log(e);
        e.target.textContent = "ouch! 😥";
    }


    return (<button onClick={(e) => { handleClick(e) }}> Click me 😀</ button>)

}

export default Button