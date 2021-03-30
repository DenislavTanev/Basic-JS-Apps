import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMemes } from '../api/data.js';

const allMemesTemplate = (data, noMemes) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        ${noMemes ? html`<p class="no-memes">No memes in database.</p>` : data.map(itemTemplate)}
    </div>
</section>`;

const itemTemplate = (item) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${item.title}</p>
            <img class="meme-image" alt="meme-img" src=${item.imageUrl}>
        </div>
        <div id="data-buttons">
            <a class="button" href='/details/${item._id}'>Details</a>
        </div>
    </div>
</div>`;

export async function allMemesPage(ctx) {
    const data = await getMemes();
    const noMemes = true;

    if(data.length > 0){
        noMemes = false;
    }
    
    ctx.render(allMemesTemplate(data, noMemes));
}