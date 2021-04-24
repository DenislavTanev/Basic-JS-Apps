import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { logout } from './api/data.js';

import { homePage } from './views/home.js';
import { editPage } from './views/edit.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { myListingsPage } from './views/myListings.js';
import { catalogPage } from './views/catalog.js';
import { searchPage } from './views/search.js';

const main = document.getElementById('site-content');

page('/', renderMiddleware, homePage);
page('/catalog', renderMiddleware, catalogPage);
page('/search', renderMiddleware, searchPage);
page('/myListings', renderMiddleware, myListingsPage);
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
    const username = sessionStorage.getItem('username');
    if(username != null) {
        document.getElementById('userName').textContent = `Welcome ${username}`;
        document.getElementById('profile').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('profile').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}