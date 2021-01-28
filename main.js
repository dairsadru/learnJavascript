//Задание № 1 Вывести числа от 1 до 10

for (let a = 0; a <= 10; a++) {
    if (a == 0) {
        document.write(a + " - это ноль  <br/>")
    } else if (a % 2 == 0) {
        document.write(a + " - это четное число <br/>");
    } else {
        document.write(a + " - это нечетное число <br/>");
    }
}
// Задание № 2 Вывести в консоль значения

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задание № 3 

const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
products.forEach(item => {
    item.price = item.price - item.price * 0.15;
});
console.log(products);

// Задание № 4  не успел сделать