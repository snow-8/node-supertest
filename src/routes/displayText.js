
export const loggedInMessage = `<div><div>You are logged in now.</div><a href="/logout">logout</a></div>`
export const loggedOutMessage = `<div><div>You are not logged.</div><a href="/login">login</a></div>`
export const welcomeMessage = `<div><div>Welcome</div></div>`

export const formText = `
<form action="/login" method="POST">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" placeholder="name@email.com" autocomplete="off">
    <br>
    <label for="password">Password</label>
    <input type="password" name="password" id="password" placeholder="password" autocomplete="off">
    <br>
    <button type="submit">Submit</button>
</form>
`