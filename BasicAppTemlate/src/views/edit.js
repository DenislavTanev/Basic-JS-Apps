import { html } from '../../node_modules/lit-html/lit-html.js';
import { editRecord } from '../api/data.js';//

const editTemplate = (data, onSubmit) => html`
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const data = await getItemById(id);

    ctx.render(editTemplate(data,onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        //initialize formData

        if (true) {
            return alert('');
        }//check for alerts

        await editRecord(data._id, {
        });//make request

        ctx.page.redirect(``);//redirect to correct page
    }
};