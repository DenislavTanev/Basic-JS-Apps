import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { logout } from './api/data.js';

import { homePage } from './views/home.js';
import { catalogPage } from './views/catalog.js';

import {  } from './views/.js';//profile page 

import { editPage } from './views/edit.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';

import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

const main = document.querySelector('');//

page('/', renderMiddleware, homePage);
page('/catalog', renderMiddleware, catalogPage);

page('/', renderMiddleware, );//for profile

page('/details/:id', renderMiddleware, detailsPage);
page('/create', renderMiddleware, createPage);
page('/edit/:id', renderMiddleware, editPage);

page('/register', renderMiddleware, registerPage);
page('/login', renderMiddleware, loginPage);

//check id
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
    const token = sessionStorage.getItem('authToken');
    if(token != null) {//check attributes
        document.querySelector('.user').style.display = 'inline-block';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'inline-block';
    }
}