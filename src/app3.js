import "./app3.css"
import $ from "jquery"
const $squaer = $('#app3 .square')

$squaer.on('click', () => {
    $squaer.toggleClass('active')
})