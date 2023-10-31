import noteApp from "../images/noteApp.png";
import birthdayList from "../images/BirthdayList.JPG";
import toursList from "../images/ToursList.JPG";
import reviews from "../images/Revievs.JPG";


const projects = [
    {image: noteApp, title: "Note App", text:"Using add button to add text into array and when clicked on text note is deleted from array", gitHub:""},
    {image: birthdayList, title: "Birthday List", text:"Use of react Hook (useState) passing props from array and use of onClick to delete single item or all items from array", gitHub: "https://kresimirbruketa.github.io/BirthdayList/"},
    {image: toursList, title: "Tours List", text:"Fetching data with Axios in React, deleting item from array (useState) and refreshing page", gitHub: "https://kresimirbruketa.github.io/ToursList/"},
    {image: reviews, title: "Revievs App", text:"Destructuring object and use of object properties, onClick move to next or prev object", gitHub: "https://kresimirbruketa.github.io/Reviev_object/"}
];

export default projects;


