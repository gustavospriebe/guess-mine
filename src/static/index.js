const socket = io("/");

socket.on("hello", () => console.log("Somebody says hello"));


setTimeout(() => socket.emit("helloGuys"), 4000)