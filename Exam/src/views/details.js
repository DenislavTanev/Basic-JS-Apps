import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteRecord, getRecordById } from '../api/data.js';

const detailsTemplate = (item, isOwner, onDelete) => html`
<section id="details-page" class="content details">
    <h1>${item.title}</h1>

    <div class="details-content">
        <strong>Published in category ${item.category}</strong>
        <p>${item.content}</p>

        <div class="buttons">
            ${isOwner ? html`
            <a href="javascript:void(0)" @click="${onDelete}" class="btn delete">Delete</a>
            <a href="/edit/${item._id}" class="btn edit">Edit</a>`: 
            html`<a href="/" class="btn edit">Back</a>`}
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const item = await getRecordById(id);
    const userId = sessionStorage.getItem('userId');

    ctx.render(detailsTemplate(item, item._ownerId == userId, onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this item?');
        if (confirmed) {
            await (deleteRecord(item._id));
            ctx.page.redirect('/');
        }
    }
}