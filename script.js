// The simpliest way to create JavaScript objects is the Object literal

// crearing variable myCamera with 2 attributes (example of object literal)

var myCamera = {
  brand: "Nikon"
  color: "Red"
}
myCamera.brand
>> "Nikon"

// Creating Objects through function = Constructor
f
function Camera(design, format, accessories){
	this.design = design;
	this.format = format;
	this.accesoriess = accessories
}

// Creating a new instance of Camera; myCamera
// This way objects has defined attributes at creation of instance
var myCamera = new Camera ("Plate", "32mm", "Tripod");

// There ar etwo ways how we can access the attributes ot methods of the object:
// 1. square-bracket notation(can be used to retrieve attributes whose names must be notated with quotes)
var = myBike {
	brand: "BMX"
	"wheels": 4
}

myBike["wheels"]
>> 4

// 2.dot notation(can be used for attribute names that can be notated without using quotes)

var = myBike {
	brand: "BMX"
	wheels: 2
}

myBike.brand
>> 2

// Storing functions in objects

// Functions can also be easily stored on attributes of an object:

function Bag(brand, color, material) {
	this.brand = brand;
	this.color = color;
	this.materia = material
	this.torba = function() {
		return "I have  " + "this.color" + "this.material"	 + "this.band" + "bag"
		}
	
}
var myBag = new Bag("Benetton", "Black", "Leather");

// In this context, functions are known as methods. 
// To access the method, we have to  use () after the attribute name the function has:

myBag.torba()
>>"I have black leather Benetton bag"

// Prototypes
// In JAvaScript we can add functionality through object attributes using its PROTOTYE, so we can modify an object and its instance 
// after they have been defined initialy.

function Bag(brand, color, material) {
	this.brand = brand;
	this.color = color;
	this.materia = material
	this.torba = function() {
		return "I have  " + "this.color" + "this.material"	 + "this.band" + "bag"
		}
	
}
var myBag = new Bag("Benetton", "Black", "Leather");

// modiffing the object using prototype

Bag.prototype.madeIn = 
  function(madeIn){
  	this.madeIn = madeIn
  }

  Bag.prototype.madeIn = "Italy"

  // Prototypical Objects
  // Starting with one object and extending to anotherone and adding a new argument.

  function Movie(title, year, runtime) {
    this.title = title;
    this.year = year;
    this.runtime = runtime;
  }

  function Documentary() {
  	  this.country = arguments[3];
  	  Movie.apply(this, arguments)
  }
  
  Documentary.prototype.country = new Movie();

  var documentary = new Movie("The Cove", 2009, "92mm", "USA");


// Write a method that lists the properties of a JavaScript object. (Hint: loops!)
//For... in loop
  var i;
  for (i in object) {
  	console.log(i);
  }
  
  var i;
  var mycolors = new Arrey();
  mycolors[0] = "red";
  mycolors[1] = "green";
  mycolors[2] = "blue";
  for (i in mycolors){
  	console.log(mycolors[i]);
  }

 // Implement an object model that allows you to store strings that represent a Photo. Your model should include an Album object that can contain many Photo objects in its photos attribute. Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. Each Photo should tell you the photo's file name and the location the photo was taken in. Create instances of each object defined to prove that your object model works.

function Album(photos) {
	// craeting an atrribute photos to add properies of photo(object)
	this.photos = [];
	// adding a method addPhoto of the Album object to add a new photo 
	this.addPhoto = function(photo) {
		this.photos.push(photo);
	};
	// adding a method listPhoto to list all photos
	this.listPhoto = function(){
		return this.photos
	};
	// adding a method getPhoto to access a specific photo in  the arrey
	this.getPhoto =function(i){
		return this.photos[i];
	};
}

// creating constructor Photo with two attributes fileName and location

function Photo(fileName, location) {
  this.faleName = fileName;
  this.location = location;

  // Creating a direct insatnces of the Photo
}
 var myPhoto = new Photo("photo.jpg","Belgrade");
 var nextPhoto = new Photo ("photo2.jpg", "NYC");
 // creating an ampty Album to add photos (empty arrey)
 var myAlbum = new Album();

 // Adding a method to the Album object
 // myAlbum.add = add;

// Calling the methods 
 myAlbum.addPhoto(myPhoto);
 myAlbum.addPhoto(nextPhoto);
 myAlbum.getPhoto(1);




// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.



// create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied. getCurrentValue should return the last answer returned from multiply.

function Multiplier(){
	var lastValue = 1;
	this.getCurrentValue = function(){
		return lastValue
	};
}

this.multiply = function(i){
   lastValue = lastValue * i;
   return lastValue;
}

y = new Multiplier();

y.multiply(3);
y.getCurrentValue();

y.multiply(7);
y.getCurrentValue();


// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.


// Creating construction function of Person object with prototipical attributes for Person(fname, last name)

function Person(fname, lname) {
	this.fname = fname;
	this.lname = lname;
	this.name = function(){
		return this.fname + " " +this.lname
	};
}

// creating constructor for Teacher Object 

function Teacher() {
	this.subject = arguments[2];
	// passing the  atrributes(fname and lname) to the Teacher object
	Person.apply(this, arguments);

}
	

	// creating a constructor for Student Object 

function Student() {
	// adding a major argument
	this.major = arguments[2];
	// passing the  atrributes(fname and lname) to the Student object
	Person.apply(this, arguments);
}

// creating a Teacher and Student
Teacher.prototype = new Person();
Student.prototype = new Person();

// creating instances 

var nTeacher = new Teacher("Tina", "Ani", "Philosophy");
var nStudent = new Student("Srdjan", "Radovic", "Spanish Literature")



function School() {
	this.teachers = [];
	this.students = [];

	this.addTeacher = function(teacher) {
		this.teachers.push(teacher);
	};
	this.addStudent = function(student) {
		this.students.push(student);
	};

}
var nTeacher = new Teacher("Tina", "Ani", "Philosophy");
var nStudent = new Student("Srdjan", "Radovic", "Spanish Literature")
var nSchool = new School();
nSchool.addTeacher(nTeacher);
nSchool.addStudent(nStudent);







