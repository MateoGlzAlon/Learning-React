function ProfilePicture() {

    const imageURL = "./src/assets/kuriboh.jpg"

    const handleClick = (e) => {
        console.log("OUCH")
        e.target.style.display = "none";
    }

    return (<img onClick={(e) => handleClick(e)} src={imageURL} alt="profile picture" ></img >)
}
export default ProfilePicture