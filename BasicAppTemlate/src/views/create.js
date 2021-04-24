import { html } from '../../node_modules/lit-html/lit-html.js';
import { createRecord } from '../api/data.js';

const createTemplate = (onSubmit) => html`
`;

export function createPage(ctx) {

    ctx.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        //initialize formData

        if (true) {
            return alert('');
        }//check for alerts
        
        await createRecord({
        });//make request

        ctx.page.redirect('/');//redirect to correct page
    }
}