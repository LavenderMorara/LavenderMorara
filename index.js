document.addEventListener('DOMContentLoaded', ()=>{
    let form=document.querySelector('#shoppinhForm');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        makeShoppingList(e.target.shoppingItem.value)
        form.reset()
    })
})
function makeShoppingList(shoppingItem){
    let p =document.createElement('p');
    let btn =document.createElement('button');
    btn.addEventListener ('click',clearItem);
    btn.textContent='clear';
    p.textContent=`${shoppingItem}`;
    p.appendChild(btn);
    document.querySelector('#shoppingList_container').appendChild(p);
}
function clearItem(e){
    e.target.parentNode.remove();
}
