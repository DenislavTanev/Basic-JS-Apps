import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteRecord } from '../api/data.js';//

const detailsTemplate = (item, isOwner, onDelete) => html`
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const item = await getItemById(id);
    const userId = sessionStorage.getItem('userId');

    ctx.render(detailsTemplate(item, item._ownerId == userId, onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this item?');
        if (confirmed) {
            await (deleteRecord(item._id));
            ctx.page.redirect('/');//redirect to correct page
        }
    }
}