const card = document.querySelector(`.card`);
const content = document.createElement('div');

card.addEventListener(`mouseenter`, ()=>{
    content.classList.add(`content`)
    content.innerHTML = `<h2> Pespi Cola </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sed illo assumenda neque nesciunt consectetur, omnis qui corrupti sit maiores?</p>
    <a href=""> Buy Now</a>`
    card.appendChild(content);
})

card.addEventListener('mouseleave',()=>{
    content.classList.remove(`content`)
    card.removeChild(content);
})