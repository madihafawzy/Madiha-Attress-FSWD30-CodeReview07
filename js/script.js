class Person {

  constructor( name, surname, age, gender, img, rating, like) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.img = img;
    this.rating = rating;
    this.like = 0;
    
  }

 
  render(i) {
    let msg ='';
     msg+= `
    <div class="pers class="col-lg-2 col-md-6 col-sm-12 col-xs-12">
        <div class="pictuer">
          <img src="${this.img}">
        </div>
        <div class="text">
          <h4> Name: ${this.name}</h4>
          <h4> Surname: ${this.surname}</h4>
          <p> Gender: ${this.gender}</p>
          <p> Age: ${this.age}</p>
      

          <button onclick="like(`+ i +`)"><i class="glyphicon glyphicon-thumbs-up"></i>Like</button>
          <span class="like`+ i +`">${this.like} </span>
          <img src="img/like.png">
        </div>
      </div>
      `;
    return msg;
  }
}


function like (index){
  persAll[index].like=persAll[index].like+1;
  document.getElementById('like' + index).innerHTML=persAll[index].like;
           }



var persAll = [
  new Person("John", "Doe", 25, "male", "img/boy1.jpg"),
  new Person("Jane", "Doe", 29,  "female",  "img/girl1.jpg"),  
  new Person("Maxina", "Musterman", 22,"female", "img/girl2.jpg"),
  new Person("Max", " Musterman", 28, "male", "img/boy2.jpg"),
  new Person("Amina", "Hend", 34, "female",  "img/girl3.jpg"),
  new Person("Andro", "Pulla", 33,  "male", "img/boy3.jpg"),  
  new Person("Lara", "Alexander", 24,"female", "img/girl4.jpg"),
  new Person("Angela", "Rider", 29, "female", "img/girl5.jpg"),  
  new Person("Fabio", "Kern", 31, "male", "img/boy4.jpg"),
  new Person("Suzana", "Gercic", 33,  "female", "img/girl6.jpg"),  
  new Person("Richie", "Otaru", 31,"male", "img/boy5.jpg"),
  new Person("George", "Matrin", 33, "male", "img/boy6.jpg")
  ];


//function  for index.html - page

function allList() {
  let allList = document.getElementById("allPerson");
  for (var i = 0; i < persAll.length; i++) {

    allList.innerHTML += persAll[i].render(i);
  }
}



//Function for girls.html - page

function onlyWomen() {
  let allList = document.getElementById("women");
  for (var i = 0; i < persAll.length; i++) {
       if (persAll[i].gender == "female") {
    allList.innerHTML += persAll[i].render(i);
  }
}
}



//Function for boys.html - page

function onlyMen() {
  let allList = document.getElementById("men");
  for (var i = 0; i < persAll.length; i++) {
       if (persAll[i].gender == "male") {
    allList.innerHTML += persAll[i].render(i);
  }
}
}