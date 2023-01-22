const socket=io('http://localhost:3000');
const form=document.getElementById('send-container');
const messageInput= document.getElementById("messageInp");
const meassageContainer=document.getElementById(".container")






const append=(message,position)=>{
    const messageElement=document.createElement('div')
    messageElement.innerText=message;
    messageElement.classList.add('message')
    messageElement.classList.add(position);
    meassageContainer.append(messageElement)
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message=messageInput.ariaValueMax;
    append(`you: ${message}`,'right');
    socket.emit('send',message);
    messageInput.value=''
})


const name=prompt("Enter your name")
socket.emit('new-user-joined',name);

socket.on('user-joined',data =>{
    append(`${name} joined the chat`,"right")

})
socket.on('receive',data =>{
    append (`${data.name} :${data.message}`,'left')
});
socket.on('leave',name =>{
    append (`${data.name} left the chat`,'left')
});
