const items=["chai"];
function randomEmoji(){
    const emojis=['🍔','🍟','🥞','🍖','🥚','🍕','🥙','🍲',
        '🥗','🍝','🍚','🍜','🍰','🍩','🥕','🍑','🍉','🍅'
        ,'🍆','🍇','🫘','🍵','☕','🥞'];
        const min=0;
        const max=emojis.length-1;
        const randomIndex=Math.floor(Math.random()*(max-min+1))+min;
        return emojis[randomIndex];
}

function loadItems(){
    const orderContainer=document.getElementById("container-box");
    orderContainer.innerHTML="";

    for(let i=0; i<items.length; i++){
    orderContainer.innerHTML += `<div class='ordercard'>
    ${randomEmoji()} ${i+1+')'} ${items[i]}
    </div>`
    }
}
loadItems();

function addItem(){
    const itemInput=document.getElementById("order-item");
    items.push(itemInput.value);
    itemInput.value="";
    loadItems();
}

function removeItems(){
    const itemIndex=items.indexOf(itemInput.value);
    items.splice(itemIndex,1);
    loadItems();
    itemInput.value="";
}