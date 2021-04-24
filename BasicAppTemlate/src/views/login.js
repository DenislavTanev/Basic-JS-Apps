import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';

const loginTemplate = (onSubmit) => html`
`;

export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        //initialize formData

        await login();//make request

        ctx.setUserNav();
        ctx.page.redirect('/');//redirect to correct page
    }
}