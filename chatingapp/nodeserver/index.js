const io =require('socket.io')(3000)
const user={};

io.on('connection',socket=>{
    socket.on("user-joined",name=>{
        user[socket.id]=name;
        socket.broadcast.emit("user-joined",name);
    })
    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message,name:user[socket.id]})
    });
    socket.on('disconnect',message=>{
        socket.broadcast.emit('left',user[socket.id]);
        delete user[socket.id];
    })
})