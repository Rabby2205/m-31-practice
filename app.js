document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '2px solid red';
    container.style.padding = '8px';
    container.style.backgroundColor = 'green';
    // container.style.color = '#ffffff';
    container.style.color = 'white';

})
function backGroundButton() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = '#F19666';
        friend.style.margin = '10px';
        friend.style.padding = '5px';
        const container = document.getElementById('friend-container');
        container.style.color = 'white'
        const buttons = document.getElementById('buttons');
        buttons.style.margin = '5px';
        friend.style.border = '2px solid lime';
        friend.style.borderRound = '20px';
        friend.style.paddingLeft = '50px';


    }


}
document.getElementById('add-friend').addEventListener('click', function () {

    const container = document.getElementById('friend-container')// inside this section we will increase friend list .
    const friendDiv = document.createElement('div');//creating a div .
    friendDiv.classList.add('friend') //inside the friend add class list.
    friendDiv.innerHTML = `  
    <h3 class="friend-name">New Friend Added</h3>
    <p>Lorem, ipsum dolor.</p>`;//created a div with those element . 
    container.appendChild(friendDiv);//seted element at friendDiv.


})