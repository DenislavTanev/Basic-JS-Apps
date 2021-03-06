import { html } from '../../node_modules/lit-html/lit-html.js';
import { getFilteredRecords } from '../api/data.js';

const searchTemplate = (onSubmit) => html`
<section id="search-page" class="content">
    <h1>Search</h1>
    <form id="search-form" @submit=${onSubmit}>
        <p class="field search">
            <input type="text" placeholder="Search by article title" name="search">
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">
        
    </div>
</section>`;

const resultTemplate = (item, onSubmit) => html`
<section id="search-page" class="content">
    <h1>Search</h1>
    <form id="search-form" @submit=${onSubmit}>
        <p class="field search">
            <input type="text" placeholder="Search by article title" name="search">
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">
        ${item.length == 0 ? html`<h3 class="no-articles">No matching articles</h3>`: item.map(itemTemplate)}
    </div>
</section>`;

const itemTemplate = (item) => html`
<a class="article-preview" href="/details/${item._id}">
    <article>
        <h3>Topic: <span>${item.title}</span></h3>
        <p>Category: <span>${item.category}</span></p>
    </article>
</a>`;

export async function searchPage(ctx) {
    ctx.render(searchTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const titleToSearch = formData.get('search');

        const item = await getFilteredRecords(titleToSearch);
        ctx.render(resultTemplate(item, onSubmit));
    }
}