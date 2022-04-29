'use strict'

// TODO: Ví dụ 1

const OppoA31 = {
    //! Thuộc tính - Property : Mô tả thông tin của 1 đối tượng
    name: 'OppoA31',
    color: 'white',
    weight: 350,

    //! Phương thức - Method : Mô tả hành động của 1 đối tượng
    takePhoto() {
        console.log(this);
    },

    objChild: {
        name: 'Child Object',
        methodChild() {
            console.log(this);
        }
    }
}

console.log(OppoA31.objChild.methodChild());

// TODO: Ví dụ 2: Hàm tạo

function Car (name, color, width) {
    this.name = name;
    this.color = color;
    this.width = width;

    // this.run = function () {
    //     console.log('Running ...', this);
    // }
}

Car.prototype.run = function () {
    console.log('Running ...', this); 
}

const Mercedes540 = new Car('Mercedes 540', 'Black', 1500)
console.log(Mercedes540.run());

// TODO: Ví dụ 3: DOM

const button = document.querySelector('button');

button.onclick = function () {
    console.log(typeof this);
}

// TODO: This tham chiếu tới đối tượng global

// console.log(this); //! Window

function myFunc () {
    console.log(this);
}

window.myFunc()