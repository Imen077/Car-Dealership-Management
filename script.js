class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}


class Dealership {
    constructor() {
        this.cars = [];
    }

    addCar(car) {
        this.cars.push(car);
    }

    removeCar(index) {
        this.cars.splice(index, 1);
    }

    getAllCars() {
        return this.cars;
    }
}


class UI {
    static displayCars(dealership) {
        const carList = document.querySelector('#carList');
        carList.innerHTML = ''; // Clear current list
        dealership.getAllCars().forEach((car, index) => UI.addCarToList(car, index));
    }

    static addCarToList(car, index) {
        const carList = document.querySelector('#carList');

        const li = document.createElement('li');
        li.innerHTML = `
            ${car.year} ${car.make} ${car.model}
            <button class="delete" data-index="${index}">Delete</button>
        `;
        carList.appendChild(li);
    }

    static deleteCarFromList(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.remove();
        }
    }

    static clearFields() {
        document.querySelector('#make').value = '';
        document.querySelector('#model').value = '';
        document.querySelector('#year').value = '';
    }
}


document.querySelector('#carForm').addEventListener('submit', (e) => {
    e.preventDefault();

  
    const make = document.querySelector('#make').value;
    const model = document.querySelector('#model').value;
    const year = document.querySelector('#year').value;

 
    if (make === '' || model === '' || year === '') {
        alert('Please fill in all fields');
    } else {
      
        const car = new Car(make, model, year);

   
        dealership.addCar(car);


        UI.displayCars(dealership);

        UI.clearFields();
    }
});


document.querySelector('#carList').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // Remove car from dealership
        const index = e.target.getAttribute('data-index');
        dealership.removeCar(index);

 
        UI.displayCars(dealership);
    }
});


const dealership = new Dealership();
