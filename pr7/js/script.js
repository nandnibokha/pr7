// Ques-1

let student = document.getElementById('student');
let faculty = document.getElementById('faculty');
let peon = document.getElementById('peon');

class School {
    constructor(name, email, contact) {
        this.name = name;
        this.email = email;
        this.contact = contact;
    }
    student() {
        student.innerHTML = `Student Name : ${this.name} <br> Email : ${this.email} <br> Contact : ${this.contact}`;
    }
    faculty() {
        faculty.innerHTML = `Faculty Name : ${this.name} <br> Email : ${this.email} <br> Contact : ${this.contact}`;
    }
    peon() {
        peon.innerHTML = `Peon Name : ${this.name} <br> Email : ${this.email} <br> Contact : ${this.contact}`;
    }
}

let stu = new School("Nandni", "nandnibokha@gmail.com", 9667275882);
let fac = new School("Astha", "asthanakrani@gmail.com", 8562759373);
let pe = new School("Dhara", "dharachaudhary@gmail.com", 9573558362);

stu.student();
fac.faculty();
pe.peon();

// Ques-2

let father = document.getElementById('name');
let child = document.getElementById('age');

class Person {
    constructor(age) {
        this.age = age;
    }
    father() {
        father.innerHTML = `Father age: ${this.age}`;
    }
    child() {
        child.innerHTML = `Children age: ${this.age}`;
    }
}

let fat = new Person(52);
let chi = new Person(19);

fat.father();
chi.child();

// Ques-3

let employee = document.querySelector('.employee');

class Employee {
    constructor() {
        employee.innerHTML = 'My name is bokha nandni';
    }
}

let emp = new Employee();

// Ques-4

let cir = document.getElementById('circle');
let rect = document.getElementById('rectangle')

class Shape {
    constructor() {

    }
    circle(r) {
        cir.innerHTML = `Area of circle is : ${3.14 * r * r}`;
    }
    rectangle(l, h) {
        rect.innerHTML = `Area of rectangle is : ${l * h}`;
    }

}

let shape = new Shape();
let radius = 6;
let l = 5;
let h = 8;

let circle = shape.circle(radius);
let rectangle = shape.rectangle(l, h);

circle.cir();
rectangle.rect();