import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js'

const registerTemplate = (onSubmit) => html`
`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        //initialize formData
 
        // if (username == '' || email == '' || password == '' || repass == '') {
        //     return alert('All fields are required!');
        // }
        // if (password != repass) {
        //     return alert('Passwords dont\'t match!');
        // }

        await register();//make request

        ctx.setUserNav();
        ctx.page.redirect('/');//redirect to correct page
    }
}