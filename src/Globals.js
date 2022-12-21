import { io } from "socket.io-client";

global.socket = io("http://localhost:8080", {
    query: {
        newconn: true,
    }
});