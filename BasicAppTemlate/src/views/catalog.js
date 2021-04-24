import { html } from '../../node_modules/lit-html/lit-html.js';
import {  } from '../api/data.js';

const catalogTemplate = (data) => html`
`;

const itemTemplate = (item) => html`
`;

export async function catalogPage(ctx) {
    const data; //get data
    
    ctx.render(catalogTemplate(data));
}