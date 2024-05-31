//  window.alert(' this is only a Test')
// let some = window.prompt('Please enter your Name:')
// alert('Welcome' + " " + some)

const contact = document.getElementById('contact');
contact.style.height = '300px'

const sec = document.getElementById('test');
sec.style.color = 'var(--seventh-color)';
sec.style.position = 'relative';
sec.style.top = '4em'
sec.style.textShadow = '3px 3px 6px black'

const secTeo = document.getElementById('test2');
secTeo.style.color = 'var(--seventh-color)';
secTeo.style.fontSize = '1.5em';
secTeo.style.textShadow = '3px 3px 6px black';


const secCare = document.querySelector('.fa-house');
secCare.style.color = 'green';
 
const homeSec = document.querySelector("#homeColor");
homeSec.style.color = "red";

const navNav = document.querySelectorAll('section');
navNav.forEach(navNav =>{
    navNav.style.background = 'var(--darkBlue)'
    navNav.style.width = "60%";
    navNav.style.boxShadow = "-40px 30px 100px black";
    navNav.style.border = "1px solid yellow";
    navNav.style.color = 'white'

})

const newEl  = document.getElementById('newDiv')
const sideNav = document.createElement('p')
newEl.textContent = "Hi and Welcome this our:  services!";
newEl.style.position = 'relative';
newEl.style.top = '500px'
newEl.style.right = '47em';
newEl.style.bottom = '-200px';
newEl.style.borderRadius = "30%"
newEl.style.width = '15em';
newEl.style.textAlign = 'center';
newEl.style.color = 'var(--darkBlue)';
newEl.style.fontWeight = 'bold'
newEl.style.background = 'var(--primary-color)';
newEl.style.boxShadow = '2px 2px 2px black';
newEl.appendChild(sideNav);


let text = document.getElementById('newDiv');


text.addEventListener('click', () =>{
text.style.background = 'lightblue';
        if(text.textContent == "services!"){
            text.textContent = " Contact!"
        }  else{
            text.textContent = " form!"
        }

})

const footer = document.body
    footer.addEventListener('click', () =>{

       if(document.body.style.background === 'gray' ){
        document.body.style.background = 'var(--darkBlue)';
       } else {
        document.body.style.background = 'gray';
       }

    })

    const hover = document.querySelectorAll('#services .serList');
   hover.forEach(link => {
        link.style.color = 'var(--seventh-color)';
        link.style.borderBottom = '1px solid white'
   })

   const foot = document.getElementById('foot');
   foot.addEventListener('mouseenter', ()=>{
        foot.style.background = 'var(--darkBlue)';
   })

   const list = document.querySelector('a');
   list.addEventListener('mouseenter', () =>{
            list.style.background = 'white';
            list.style.fontSize = '1em';
            list.style.color = 'red';
            list.style.textShadow = 'none'

            list.addEventListener('mouseleave', ()=>{
                list.style.background = 'var(--darkBlue)';
                list.style.color = 'white';
                list.style.textShadow = '2px 2px 3px black'
                list.style.borderRadius = '50%';
                list.style.border = '2px solid var(--h1-color)'
            })
   })

 


