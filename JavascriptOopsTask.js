//1. Class Movie

class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
 
  const movies = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG-13"),
    new Movie("Movie3", "Studio3", "R"),
    new Movie("Movie4", "Studio4", "PG"),
  ];
  
  const pgMovies = Movie.getPG(movies);
  console.log(pgMovies);

//2. UML Diagram to code

class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle [radius=${this.radius}, color=${this.color}]`;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

const myCircle = new Circle(2.5, "blue");

console.log("Radius:", myCircle.getRadius());
console.log("Color:", myCircle.getColor());
console.log("Area:", myCircle.getArea());
console.log("Circumference:", myCircle.getCircumference());
console.log("String representation:", myCircle.toString());


//3. Write a “person” class to hold all the details.

class Person {
    constructor(name, age, gender, occupation) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.occupation = occupation;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name}. I am ${this.age} years old, ${this.gender}, and work as a ${this.occupation}.`);
    }
  }
  
  const person1 = new Person("Ram", 30, "male", "software engineer");
  person1.introduce();
  
  const person2 = new Person("Jaanu", 25, "female", "teacher");
  person2.introduce();


  //4. write a class to calculate the Uber price.

  class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile) {
      this.baseFare = baseFare;
      this.costPerMinute = costPerMinute;
      this.costPerMile = costPerMile;
    }
  
    calculatePrice(distanceInMiles, timeInMinutes) {
      const fare = this.baseFare + (timeInMinutes * this.costPerMinute) + (distanceInMiles * this.costPerMile);
      return fare;
    }
  }
  
  const calculator = new UberPriceCalculator(15, 4, 10);
  
  const distance = 5;
  const time = 15;
  
  const price = calculator.calculatePrice(distance, time);
  console.log(`The price of the Uber ride is Rs.${price}.`);
  


  