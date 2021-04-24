import { html } from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`
`;

export async function homePage(ctx) {
    ctx.render(homeTemplate());
};