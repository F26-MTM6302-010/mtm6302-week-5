// console.log("JS File Connected")
// Command + / to add or remove a single line comment

const $bodyTag = document.querySelector('body')

const $newSection = document.createElement('section')
$newSection.id = "groceries"

$bodyTag.appendChild($newSection)

$newSection.insertAdjacentHTML("afterbegin", `<h2>Groceries</h2>`)

$newSection.insertAdjacentHTML("beforeend", `<ul id="grocery-list"><ul>`)

let $groceryItems = ["apples", "banana", "dog food", "milk", "eggs", "bread"]
const $groceryUl = document.getElementById("grocery-list")

// option + Shift + A to comment out multiple highlighted lines or control + Shift + A on windows
/* for ($item of $groceryItems) {
    $groceryUl.insertAdjacentHTML("beforeend", `<li>${$item}</li>`)
}
 */


/* $groceryItems.forEach(function ($item) {
    $groceryUl.insertAdjacentHTML("beforeend", `<li>${$item}</li>`)
}) */

// $groceryItems.forEach($item => $groceryUl.insertAdjacentHTML("beforeend", `<li>${$item}</li>`))

let $listItems = []
$groceryItems.forEach($item => $listItems.push(`<li>${$item}</li>`))

$groceryUl.insertAdjacentHTML("beforeend", $listItems.join(''))

/* create an addItem funciton that allows us to add a new item to the list 
and display the updated list on page */

// create a function that accepts the new item
function addItem(item) {
    // add the item to the groceryItems array
    $groceryItems.push(item)

    // display the new item on the page
    $groceryUl.insertAdjacentHTML("afterbegin", `<li>${item}</li>`)
}

// add a removeItem fucntion that accepts the item to be removed as parameter

function removeItem(thing) {
    // filter the array based on the thing
    $groceryItems = $groceryItems.filter(item => item !== thing)

    // display the filtered array on the page
    // map each item from the $groceryItems array inside $listITems array by adding the HTML template
    $listItems = $groceryItems.map(item => `<li>${item}</li>`)

    // clear the Ul before adding new list items
    $groceryUl.innerHTML = ""

    $groceryUl.insertAdjacentHTML("beforeend", $listItems.join(''))
}