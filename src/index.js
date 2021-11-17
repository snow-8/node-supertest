import { app } from "./app.js";

const start = () => {
    app.listen(4000, () => { console.log("listening !on port: 4000") })
}

start();