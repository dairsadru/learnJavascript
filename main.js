<<<<<<< HEAD
'use strict'

//Задание 1.1 
//es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    return this.price = this.price * (1 - 25 / 100)
}

let product = new Product("t-short", 100)

product.make25PercentDiscount();
console.log(product.price);

//es6
class Product1 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        return this.price = this.price * (1 - 25 / 100);
    }
}
let product1 = new Product1("t-short", 100)
//Задание 1.2
//es5
function Post1(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post1.prototype.edit = function (text) {
    return this.text = text;
}

function AttachedPost1(author, text, date, highlighted) {
    Post1.call(this, author, text, date);
    this.highlighted = highlighted;
}

AttachedPost1.prototype = Object.create(Post1.prototype);
AttachedPost1.prototype = AttachedPost1;

AttachedPost1.prototype.makeTextHighlighted = function () {
    return this.highlighted = true;
}

const a1 = new Post1("Василий", "тексе", "08.02.2020");
const b1 = new AttachedPost1("Иван", "текст", "08.02.2020", false);

b1.makeTextHighlighted();

console.log(a1.author);
console.log(b1.author);
console.log(b1.text);
console.log(b1.highlighted);

//es6
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}


class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = highlighted;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const a = new Post("Василий", "тексе", "08.02.2020")
const b = new AttachedPost("Иван", "текст", "08.02.2020", false)


b.makeTextHighlighted();

console.log(a.author);
console.log(b.author);
console.log(b.text);
console.log(b.highlighted);
console.log(a)
console.log(b)
=======
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
>>>>>>> cc40198366b824a553b39ef6dc92a89edeabbc0d
