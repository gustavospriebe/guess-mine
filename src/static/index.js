const socket = io("/");

socket.on("hello", () => console.log("Somebody says hello"));
