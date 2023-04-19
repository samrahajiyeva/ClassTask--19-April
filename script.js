let id = 1;
const cars = [
    {
        id: 0,
        engine: 1.5,
        price: 43900,
        image: "//cdn.group.renault.com/ren/mx/mex/personal-…home/Kwidnueva.jpg.ximg.xsmall.jpg/2216fc9594.jpg",
        km: 56000,
        model: "Havai Jolion",
        year: 2022,
    }
];



class Base {
    constructor() {
        this.id = id;
        this.isDeleted = false; 
        this.createdAt = new Date();
        this.modifiedAt = new Date();
        id++;
    }
}

class Car extends Base {
    constructor(engine , price , image , km  , model , year) {
        super();
        this.engine = engine;
        this.price = price 
        this.image = image;
        this.km = km;
        this.model = model;
        this.year = year;
    }
}



// let favCars = [];
const addnewCar = document.querySelector(".addNewCar");
const cardBody = document.getElementById("cards__body");
// let itemsCounter = document.getElementById("itemsCounter");
// const basketItemsBody = document.getElementById("basketItemsBody");
// const basketBtn = document.getElementsByClassName("dropBtn");



// create new car
function addCar(engine , price , image , km  , model , year) {
    let newCar = new Car(engine , price , image , km  , model , year);
    cars.push(newCar);
    renderList(cars);
}

// render function 
function renderList(array) {
    let innerHtml = "";
    for (let i = 0; i < array.length; i++) {
        const {id, engine , price , image , km  , model , year} = array[i];
        innerHtml += `
        <div class="items__main__card">
            <div class="items__main__card__img">
              <img
                src="${image}"
                alt="img"
              />
            </div>
            <div class="items__main__card__body">
              <h5 class="price">${price}AZN</h5>
              <p>${model}</p>
              <div id="card__spans">
                <div>
                    <span>${year} ,</span>
                    <span>${engine} ,</span>
                    <span>${km} km</span>
                </div>
                <div class="card__spans__dates">
                    <span>Baki</span>
                    <span>17.04.2023</span>
                    <span>13:29</span>
                </div>
                <button class="deleteItem same" id="deleteItem">Delete</button>
                <button class="addToBasket same" id="addToBasket">Add</button>
              </div>
            </div>
        </div>
        `
    }
    cardBody.innerHTML = innerHtml;
}


// add new flower to array
addnewCar.onclick = function() {
    let carEngine = prompt("Car Engine: ");
    let carPrice = prompt("Car Price: ");
    let carImage = prompt("Car Image:");
    let carKm = prompt("Car Km:");
    let carModel = prompt("Car Model:");
    let carYear = prompt("Car Year:");
    addCar(carEngine , carPrice , carImage , carKm ,carModel, carYear);
    console.log(products);
}

// function deleteProduct(id) {
//     let target = products.find(product => product.id == id);
//     let indexOfTarget = products.indexOf(target);
//     products.splice(indexOfTarget , 1);
//     renderList(products);
// }

// renderList(products);

// // adding to BASKET
// function addToBasket(id) {
//   let target = products.find(product => product.id == id);
//   console.log(target);
//   basketItems.push(target);
//   console.log(basketItems);
//   itemsCounter.innerHTML++;
//   renderBasket(basketItems);
// }

// renderList(products);

// function renderBasket(array) {
//     let innerHtml = ""; 
//     for (let i = 0; i < array.length; i++) {
//         const {id , name , price, image} = array[i];
//         innerHtml += `
//         <div class="items__main__card">
//         <div class="items__main__card__img">
//           <img
//             src="${image}"
//             alt="img"
//           />
//         </div>
//         <div class="items__main__card__body">
//           <p>${name}</p>
//           <div id="card__spans">
//             <span class="price">$${price}</span>
//             <button class="deleteItem same" id="deleteItem" onclick = "deleteProduct(${id})">Delete</button>
//           </div>
//         </div>
//       </div>
//         `
//     }
//     basketItemsBody.innerHTML = innerHtml;
// }