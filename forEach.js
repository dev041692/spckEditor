// const squares = document.querySelectorAll('.squares');
// console.log(squares);

// squares.forEach((square) => {
//     square.addEventListener('click', clicked)
// })

// function clicked() {
//     alert("I have been clicked")
// }




const shopCart = [{
        item: "name",
        price: 50,
        inBasket: true
    },
    {
        item: "name2",
        price: 40,
        inBasket: true
    },
    {
        item: "name3",
        price: 50,
        inBasket: false
    }
];

// const discountPercentages = [10, 15, 20, 30, 35, 40, 45, 50];


// for (let i = 0; i < shopCart.length; i++){
//     console.log(shopCart[i].item);
// }

// shopCart.forEach((el) =>
//     console.log(el.item)
// )


// const links = document.querySelector('.ul li');

// links.forEach((link) => {
//     link.addEventListener('click', () => {
//         links.forEach((link) => link.classList.remove('.active'));
//         link.classList.add('.active');
//     })
// })




shopCart.forEach((el => {
    if (el.price >= 50) {
        console.log(`This items are £50 or more ${el.item}`);
    }

}))
