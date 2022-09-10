const displayBox1_img = document.querySelector("#displayBox1 img")
const displayBox1_name = document.querySelectorAll("#displayBox1 h1")
const displayBox1_text = document.querySelectorAll("#displayBox1 p")
const displayBox1_div = document.querySelectorAll("#displayBox1 div")
const displayBox2_img = document.querySelector("#displayBox2 img")
const displayBox2_name = document.querySelectorAll("#displayBox2 h1")
const displayBox2_text = document.querySelectorAll("#displayBox2 p")
const displayBox2_div = document.querySelectorAll("#displayBox2 div")

let foodBox = []
let drinkBox = []
let foodDrink_img = ["dist/img/cocaCola.png","dist/img/iceMilk.png","dist/img/oceanBreeze.png"]
let foodDrink_name = ["Coca Cola","Milky Shake","Ocean Breeze"]
let foodDrink_price = ["Rp10.000","Rp15.000","Rp15.000"]
let foodDrink_desc = ["Enakan ini daripada pepsi","Susu yang dikocok","Kukubima energy tapi warna biru"]
let foodDish_img = ["dist/img/pizzaA.png","dist/img/pizzaB.png","dist/img/pizzaC.png"]
let foodDish_name =["Pizza Meaty Brocolli","Pizza Meaty Cheese","Pizza Tomato Cheese"]
let foodDish_price =["Rp50.000","Rp70.000","Rp52.500"]
let foodDish_desc =["Pizza dengan topping daging dan brokoli","Pizza dengan topping daging dan keju","Pizza dengan topping tomat dan keju"]
class foodDish_Class {
    constructor(img,name,price,desc){
        this.img = img;
        this.name = name;
        this.price = price;
        this.desc = desc;
    }
}
for (let i = 0; i < foodDish_name.length; i++) {
    let foodWrap = new foodDish_Class(foodDish_img[i],foodDish_name[i],foodDish_price[i],foodDish_desc[i])
    foodBox.push(foodWrap)
}
for (let i = 0; i < foodDrink_name.length; i++) {
    let foodWrap = new foodDish_Class(foodDrink_img[i],foodDrink_name[i],foodDrink_price[i],foodDrink_desc[i])
    drinkBox.push(foodWrap)
}

for (let i = 0; i < foodDish_name.length; i++) {
    const addDish = document.getElementById("addDish")
        const divDish = document.createElement('div');
        divDish.classList.add('swiper-slide','bg-white','w-full','h-full','flex','flex-col','rounded-xl')
            const divDish_Child = document.createElement('div')
            divDish_Child.classList.add("w-full","h-5/6","flex","justify-center","items-center","relative")
            divDish.appendChild(divDish_Child)
            // Element 1 divDish_Child
                const divDish_Element = document.createElement('div')
                divDish_Element.classList.add("h-16","w-full","bg-primarylGreen","rounded-xl","absolute","-top-1")
                divDish_Child.appendChild(divDish_Element)
                    const ImgDish = document.createElement('img')
                    ImgDish.classList.add("w-full","h-full","object-center","object-cover","opacity-20","rounded-xl","shadow-lg","shadow-primaryGreen")
                    ImgDish.setAttribute("src",foodBox[i].img)
                    divDish_Element.appendChild(ImgDish)
            // Element 2 divDish_Child
                const divDish_Element2 = document.createElement('div')
                divDish_Element2.classList.add("h-24","w-24","rounded-full","absolute","top-3")
                divDish_Child.appendChild(divDish_Element2)
                    const ImgDish2 = document.createElement('img')
                    ImgDish2.classList.add("w-full","h-full","object-center","object-cover","rounded-full","transition","ease-in-out","delay-0","active:scale-50","duration-300")
                    ImgDish2.setAttribute("src",foodBox[i].img)
                    divDish_Element2.appendChild(ImgDish2)
            //-------------------------------------------//
            const divDish_Child2 = document.createElement("div")
            divDish_Child2.classList.add("px-2","py-2","w-full","h-full","flex","flex-col","items-center")
            divDish.appendChild(divDish_Child2)
            //Element 1 divDish_Child2
                const divTextDish = document.createElement("div")
                divTextDish.classList.add("h-2/5","flex","items-end","justify-center")
                const nameDish = document.createElement("h1")
                const textNode = document.createTextNode(foodBox[i].name)
                nameDish.appendChild(textNode)
                nameDish.classList.add("text-base","text-center","text-primarylGreen","leading-5")
                divTextDish.appendChild(nameDish)
                divDish_Child2.appendChild(divTextDish)
            //Element 2 divDish_Child2
                const rateDish = document.createElement("div")
                rateDish.classList.add("grid","grid-cols-5","gap-1","mt-2","mb-2")
                divDish_Child2.appendChild(rateDish)
                    const svgStars = document.createElement('span')
                    svgStars.classList.add("fa","fa-star","text-yellow-400")
                    rateDish.appendChild(svgStars)
                    const svgStars1 = document.createElement('span')
                    svgStars1.classList.add("fa","fa-star","text-yellow-400")
                    rateDish.appendChild(svgStars1)
                    const svgStars2 = document.createElement('span')
                    svgStars2.classList.add("fa","fa-star","text-yellow-400")
                    rateDish.appendChild(svgStars2)
                    const svgStars3 = document.createElement('span')
                    svgStars3.classList.add("fa","fa-star","text-yellow-400")
                    rateDish.appendChild(svgStars3)
                    const svgStars4 = document.createElement('span')
                    svgStars4.classList.add("fa","fa-star","text-yellow-400")
                    rateDish.appendChild(svgStars4)
            //Element 3 divDish_Child2
                const priceDish = document.createElement("h1")
                let textNode1 = document.createTextNode(foodBox[i].price)
                priceDish.appendChild(textNode1)
                priceDish.classList.add('text-primaryGreen')
                divDish_Child2.appendChild(priceDish)
                addDish.appendChild(divDish)  
                
                ImgDish2.addEventListener("click", function addContainer(){
                    displayBox1_img.setAttribute("src",foodBox[i].img)
                    displayBox1_name[1].innerHTML = foodBox[i].name
                    displayBox1_text[0].innerHTML = foodBox[i].desc
                    displayBox1_text[1].innerHTML = foodBox[i].price
                    displayBox1_div[1].classList.add("hidden")
                    displayBox1_div[2].classList.remove("hidden")
                    displayBox1_div[4].classList.remove("hidden")
                    displayBox1_div[2].classList.add("animate-fade-in-down")
                    displayBox1_div[4].classList.add("animate-fade-in-down")
                    setTimeout(() => {
                        displayBox1_div[2].classList.remove("animate-fade-in-down")
                        displayBox1_div[4].classList.remove("animate-fade-in-down")
                    }, 500);
                })
}
for (let i = 0; i < foodDish_name.length; i++) {
    const addDrink = document.getElementById("addDrink")
        const divDish = document.createElement('div');
        divDish.classList.add('swiper-slide','bg-white','w-full','h-full','flex','flex-col','rounded-xl')
            const divDish_Child = document.createElement('div')
            divDish_Child.classList.add("w-full","h-5/6","flex","justify-center","items-center","relative")
            divDish.appendChild(divDish_Child)
            // Element 1 divDish_Child
                const divDish_Element = document.createElement('div')
                divDish_Element.classList.add("h-16","w-full","bg-primarylGreen","rounded-xl","absolute","-top-1")
                divDish_Child.appendChild(divDish_Element)
                    const ImgDish = document.createElement('img')
                    ImgDish.classList.add("w-full","h-full","object-center","object-cover","opacity-20","rounded-xl","shadow-lg","shadow-primaryGreen")
                    ImgDish.setAttribute("src",drinkBox[i].img)
                    divDish_Element.appendChild(ImgDish)
            // Element 2 divDish_Child
                const divDish_Element2 = document.createElement('div')
                divDish_Element2.classList.add("h-24","w-24","rounded-full","absolute","top-3")
                divDish_Child.appendChild(divDish_Element2)
                    const ImgDish2 = document.createElement('img')
                    ImgDish2.classList.add("w-full","h-full","object-center","object-cover","rounded-full","transition","ease-in-out","delay-0","active:scale-50","duration-300")
                    ImgDish2.setAttribute("src",drinkBox[i].img)
                    divDish_Element2.appendChild(ImgDish2)
            //-------------------------------------------//
            const divDish_Child2 = document.createElement("div")
            divDish_Child2.classList.add("px-2","py-2","w-full","h-full","flex","flex-col","items-center")
            divDish.appendChild(divDish_Child2)
            //Element 1 divDish_Child2
                const divTextDish = document.createElement("div")
                divTextDish.classList.add("h-2/5","flex","items-end","justify-center")
                const nameDish = document.createElement("h1")
                const textNode = document.createTextNode(drinkBox[i].name)
                nameDish.appendChild(textNode)
                nameDish.classList.add("text-base","text-center","text-primarylGreen","leading-5")
                divTextDish.appendChild(nameDish)
                divDish_Child2.appendChild(divTextDish)
            //Element 2 divDish_Child2
                const rateDish = document.createElement("div")
                rateDish.classList.add("grid","grid-cols-5","gap-1","mt-2","mb-2")
                divDish_Child2.appendChild(rateDish)
                    const svgStars = document.createElement('span')
                    svgStars.classList.add("fa","fa-star","text-yellow-400")
                    rateDish.appendChild(svgStars)
                    const svgStars1 = document.createElement('span')
                    svgStars1.classList.add("fa","fa-star","text-yellow-400")
                    rateDish.appendChild(svgStars1)
                    const svgStars2 = document.createElement('span')
                    svgStars2.classList.add("fa","fa-star","text-yellow-400")
                    rateDish.appendChild(svgStars2)
                    const svgStars3 = document.createElement('span')
                    svgStars3.classList.add("fa","fa-star","text-yellow-400")
                    rateDish.appendChild(svgStars3)
                    const svgStars4 = document.createElement('span')
                    svgStars4.classList.add("fa","fa-star","text-yellow-400")
                    rateDish.appendChild(svgStars4)
            //Element 3 divDish_Child2
                const priceDish = document.createElement("h1")
                let textNode1 = document.createTextNode(drinkBox[i].price)
                priceDish.appendChild(textNode1)
                priceDish.classList.add('text-primaryGreen')
                divDish_Child2.appendChild(priceDish)
                addDrink.appendChild(divDish)     
                
                ImgDish2.addEventListener("click", function addContainer(){
                    displayBox2_img.setAttribute("src",drinkBox[i].img)
                    displayBox2_name[1].innerHTML = drinkBox[i].name
                    displayBox2_text[0].innerHTML = drinkBox[i].desc
                    displayBox2_text[1].innerHTML = drinkBox[i].price
                    displayBox2_div[1].classList.add("hidden")
                    displayBox2_div[2].classList.remove("hidden")
                    displayBox2_div[4].classList.remove("hidden")
                    displayBox2_div[2].classList.add("animate-fade-in-down")
                    displayBox2_div[4].classList.add("animate-fade-in-down")
                    setTimeout(() => {
                        displayBox2_div[2].classList.remove("animate-fade-in-down")
                        displayBox2_div[4].classList.remove("animate-fade-in-down")
                    }, 500);
                })
}
