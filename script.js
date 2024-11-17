const items=[]

    function loadItems(){
        const orderContainer= document.getElementById("order-container")
        orderContainer.innerHTML=""
        for(i=0;i<items.length;i++){
            orderContainer.innerHTML += `<div class="stu-card">${randomEmoji()} ${i+1+')'} ${items[i]} <br> </div>`
        }
    }
    loadItems()

    function addItems(){
        const orderInput = document.getElementById("order-name")
        items.push(orderInput.value)
        orderInput.value=""
        loadItems()
    }

    function removeItems(){
        const orderInput = document.getElementById("order-name")
        const removeIndex= items.indexOf(orderInput.value)
        items.splice(removeIndex,1)
        loadItems()
        orderInput.value=""
    }
    
    function randomEmoji(){
    const emojis=['🍔','🍟','🥞','🍖','🥚','🍕','🥙','🍲',
        '🥗','🍝','🍚','🍜','🍰','🍩','🥕','🍑','🍉','🍅'
        ,'🍆','🍇','🫘','🍵','☕','🥞'];
        const min=0;
        const max=emojis.length-1;
        const randomIndex=Math.floor(Math.random()*(max-min+1))+min;
        return emojis[randomIndex];
}