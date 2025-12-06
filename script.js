// For Navbar Scroll Behavior 

window.addEventListener("scroll", function () {
    const navbar = this.document.getElementById("navbar"); //getting the navbar element via id

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled"); // adding the scrolled class after scroll behavior to manipulate navbar style in css
    } else {
        navbar.classList.remove("scrolled"); // removing this class when scrolled-up 
    }
}); 


// For Activating the Class Buttons 

const buttons = document.querySelectorAll(".classes-btn");

/*For activating the yoga button when the page loads*/
document.getElementById("yoga").classList.add("active");

/*For activating the clicked button*/
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

// For Choosing Classes via Buttons 
let button = document.querySelector(".class-buttons"); // selecting the buttons and class details div
let classes = document.querySelector(".class-details");

button.addEventListener("click", (e) => {
    classes.classList.remove("class-details");
    void classes.offsetWidth; 
    classes.classList.add("class-details");
    switch (e.target.id) {  //using switch-case to go to the selected sport type
        case "yoga":
            yoga(); // calling out corresponding function below 
            break;
        case "group":
            group();
            break;
        case "solo":
            solo();
            break;
        case "stretching":
            stretching();
            break;
        default: 
            return;
    }
});

function yoga() {
    document.querySelectorAll(".class-details h3")[0].innerHTML = "Why Are Your Yoga?";
    document.querySelectorAll(".class-details p")[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ut omnis voluptatibus ab corrupti qui quia aliquam optio aliquid. Est excepturi rerum, dicta at aspernatur hic blanditiis unde eius praesentium?`;
    document.querySelectorAll(".class-details h3")[1].innerHTML = "When comes Your Yoga Time?";
    document.querySelectorAll(".class-details p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:000am`;
    document.querySelectorAll(".class-details p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:000am`;
    document.querySelectorAll(".class-details p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:000am`;
    document.querySelector(".class-details img").src = "images/yoga.jpg";
}

function group() {
    document.querySelectorAll(".class-details h3")[0].innerHTML = "Why Are Your Group?";
    document.querySelectorAll(".class-details p")[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ut omnis voluptatibus ab corrupti qui quia aliquam optio aliquid. Est excepturi rerum, dicta at aspernatur hic blanditiis unde eius praesentium?`;
    document.querySelectorAll(".class-details h3")[1].innerHTML = "When comes Your Group Time?";
    document.querySelectorAll(".class-details p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:000am`;
    document.querySelectorAll(".class-details p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:000am`;
    document.querySelectorAll(".class-details p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:000am`;
    document.querySelector(".class-details img").src = "images/group.webp";
}

function solo() {
    document.querySelectorAll(".class-details h3")[0].innerHTML = "Why Are Your Solo?";
    document.querySelectorAll(".class-details p")[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ut omnis voluptatibus ab corrupti qui quia aliquam optio aliquid. Est excepturi rerum, dicta at aspernatur hic blanditiis unde eius praesentium?`;
    document.querySelectorAll(".class-details h3")[1].innerHTML = "When comes Your Solo Time?";
    document.querySelectorAll(".class-details p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:000am`;
    document.querySelectorAll(".class-details p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:000am`;
    document.querySelectorAll(".class-details p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:000am`;
    document.querySelector(".class-details img").src = "images/solo.jpg";
}

function stretching() {
    document.querySelectorAll(".class-details h3")[0].innerHTML = "Why Are Your Stretching?";
    document.querySelectorAll(".class-details p")[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ut omnis voluptatibus ab corrupti qui quia aliquam optio aliquid. Est excepturi rerum, dicta at aspernatur hic blanditiis unde eius praesentium?`;
    document.querySelectorAll(".class-details h3")[1].innerHTML = "When comes Your Stretching Time?";
    document.querySelectorAll(".class-details p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:000am`;
    document.querySelectorAll(".class-details p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:000am`;
    document.querySelectorAll(".class-details p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:000am`;
    document.querySelector(".class-details img").src = "images/stret.webp";
}


// For BMI Calculation 

let arrow = document.querySelector(".arrow"); // getting the arrow class and height, weight id's with querySelector
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");

function updateBMI() { // calling the update bmi function

    let h = parseFloat(height.value); // parsing the string values from inputs into numerical values
    let w = parseFloat(weight.value);

    if (!h || !w || h <= 0 || w <= 0) { // checking if the h / w is empty or smaller than 0
        arrow.style.left = "0%";
        return;
    } 

    let bmi = w / ((h / 100) ** 2); // calculating bmi 

    let left = mapBMI(bmi); // calling the mapBMI function to show the result on the chart via y axis

    if (left < 0) left = 0; // if the result is below 0, arraw stays on 0
    if (left > 100) left = 100; // if the result exceeds 100, arrow stays on 100

    arrow.style.left = left + "%";
}

function mapBMI(bmi) { // to turn the bmi result into the corresponding graphic position in the chart
                       // this function works on the principle that each bmi category takes up differing pixel sizes 
                       // in the chart. 
                       

    // Underweight
    if (bmi < 18.5) {
        return (bmi / 18.5) * 14; // this section takes up 14% of the chart
    }

    // Normal

    if (bmi < 25) {
        return 14 + ((bmi - 18.5) / (25 - 18.5)) * (36 - 14); // this section takes up 22% of the chart
    }

    // Overweight

    if (bmi < 30) {
        return 36 + ((bmi - 25) / (30 - 25)) * (60 - 36); // this section takes up 24% of the chart
    }

    // Obese
    
    if (bmi < 35) {
        return 60 + ((bmi - 30) / (35 - 30)) * (84 - 60); // this section takes up 24% of the chart
    }

    // Extremely Obese

    return 84 + ((bmi - 35) / 10) * (100 - 84); // this section takes up 16% of the chart
}

weight.addEventListener("input", updateBMI); // adding event listeners to the inputs to call out the updateBMI function
height.addEventListener("input", updateBMI);


