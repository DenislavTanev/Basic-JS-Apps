import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { logout } from './api/data.js';

import { welcomePage } from './views/welcome.js';
import { editPage } from './views/edit.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { profilePage } from './views/profile.js';
import { allMemesPage } from './views/allMemes.js';


const main = document.querySelector('main');

page('/', renderMiddleware, welcomePage);
page('/allMemes', renderMiddleware, allMemesPage);
page('/my-profile', renderMiddleware, profilePage);
page('/details/:id', renderMiddleware, detailsPage);
page('/create', renderMiddleware, createPage);
page('/edit/:id', renderMiddleware, editPage);
page('/register', renderMiddleware, registerPage);
page('/login', renderMiddleware, loginPage);

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    setUserNav();
    page.redirect('/');
});

setUserNav();
page.start();

function renderMiddleware(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    if(userId != null) {
        document.querySelector('.user').style.display = 'inline-block';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'inline-block';
    }
}