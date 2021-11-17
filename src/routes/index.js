import express from 'express';
import { loggedInMessage, loggedOutMessage, formText, welcomeMessage } from './displayText.js';

const router = express.Router();

const requireAuth = (req, res, next) => { (req.session?.isLoggedIn) ? next() : res.status(403).send("not permitted") }

router.get('/', (req, res) => { (req.session?.isLoggedIn) ? res.send(loggedInMessage) : res.send(loggedOutMessage) })

router.get('/logout', (req, res) => { req.session = undefined; res.redirect('/login') })

router.get('/protected', requireAuth, (req, res) => {res.send(welcomeMessage) })

router.get('/login', (req, res) => { res.send(formText) })

router.post('/login', (req, res) => {
    const {email, password} = req.body
    if (!email || !password) res.send(`Invalid Credentials`)
    if (email === "john@me.com" && password === "123456") {
        // Mark this person logged in as as registered user
        req.session = { isLoggedIn: true }
        res.redirect("/")
    }
 })




export { router }