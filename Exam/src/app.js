import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { logout } from './api/data.js';

import { homePage } from './views/home.js';
import { catalogPage } from './views/catalog.js';
import { searchPage } from './views/search.js';

import { editPage } from './views/edit.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';

import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

const main = document.getElementById('main-content')

page('/', renderMiddleware, homePage);
page('/catalog', renderMiddleware, catalogPage);
page('/search', renderMiddleware, searchPage);

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
    const token = sessionStorage.getItem('authToken');
    if(token != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}