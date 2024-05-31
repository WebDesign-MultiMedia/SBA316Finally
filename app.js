window.alert(' this is only a Test')
let some = window.prompt('Please enter your Name:')
alert('Welcome' + " " + some)

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

const navNav = document.querySelectorAll('section');
navNav.forEach(navNav =>{
    navNav.style.background = 'var(--darkBlue)'
    navNav.style.width = "60%";
    navNav.style.boxShadow = "-40px 30px 100px black";
    navNav.style.border = "1px solid yellow";
    navNav.style.color = 'white'

})

    const h2 = document.querySelector('h1');
        h2.style.color = 'darkblue';
        h2.style.textShadow = "4px 4px 6px white";
        h2.style.paddingLeft = '110px';


const newEl  = document.getElementById('newDiv')
const sideNav = document.createElement('p')
newEl.textContent = "Hi and Welcome this our page!";
newEl.style.position = 'relative';
newEl.style.zIndex = '10'
newEl.style.top = '-400px'
newEl.style.right = '47em';
newEl.style.bottom = '-200px';
newEl.style.borderRadius = "30%"
newEl.style.width = '15em';
newEl.style.textAlign = 'center';
newEl.style.color = 'white';
newEl.style.fontWeight = 'bold'
newEl.style.background = 'var(--darkBlue)';
newEl.style.boxShadow = '2px 2px 2px black';
newEl.appendChild(sideNav);

const addListToNewDev = document.getElementById('newDev')
const newli = document.createDocumentFragment();



const footer = document.body.addEventListener('click', () =>{

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

   const list = document.querySelector('li a');
   list.addEventListener('mouseenter', () =>{
            list.style.fontSize = '1em';
            list.style.color = 'white';
            list.style.borderRadius = '50%';
            list.style.border = '2px solid white';



            list.addEventListener('mouseleave', ()=>{
                list.style.color = 'white';
                list.style.textShadow = '2px 2px 3px black'
                list.style.borderRadius = '50%';
                list.style.border = '2px solid var(--darkBlue)'
            })
   })

 const icon = document.querySelector('.fa-house');
 icon.style.color = 'white';
 icon.style.textShadow = '2px 2px 3px black'


const nav = document.querySelector('nav')
nav.style.background = 'var(--darkBlue)'
nav.style.height = '139px';

const navA = document.querySelectorAll('nav a')
navA.forEach(item =>{
    item.style.color = 'white';
    item.style.textShadow = '2px 2px 3px blue';
    item.addEventListener('mouseover', ()=>{
        item.style.color = 'red'
        item.style.textShadow = 'none';
        
        item.addEventListener('mouseleave', ()=>{
            item.style.color = 'white'
            item.style.textShadow = '2px 2px 1px red';
            item.style.fontSize = '1.1em';


        })

    })
})



    const message = document.getElementById('quickMessage');
    const quicky = document.createDocumentFragment();

    let qMessage = document.createElement('li');

    qMessage.textContent = 'Please fill out the form above for a quote about certain services'
    
    quicky.appendChild(qMessage);
    message.appendChild(quicky);

    const changeStyle = document.getElementById('quickMessage');
    changeStyle.style.color = 'red';
    changeStyle.style.listStyle = 'none'
    changeStyle.style.fontWeight = 'bold';




    

  function Validation(){
    let errorOne = document.forms['quoteForm']['question-section'].value;

    if(errorOne == ""){
        alert('What services do you need!!')
        return false;
    }
  }