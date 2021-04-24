import { html } from '../../node_modules/lit-html/lit-html.js';
import { editRecord, getRecordById } from '../api/data.js';

const editTemplate = (item, onSubmit) => html`
<section id="edit-page" class="content">
    <h1>Edit Article</h1>

    <form id="edit" action="#" method="" @submit=${onSubmit}>
        <fieldset>
            <p class="field title">
                <label for="title">Title:</label>
                <input type="text" name="title" id="title" placeholder="Enter title." value="${item.title}">
            </p>

            <p class="field category">
                <label for="category">Category:</label>
                <input type="text" name="category" id="category" placeholder="Enter category" value="${item.category}">
            </p>
            <p class="field">
                <label for="content">Content:</label>
                <textarea name="content" id="content">${item.content}</textarea>
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Save Changes">
            </p>

        </fieldset>
    </form>
</section>`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const data = await getRecordById(id);

    const categories = ['JavaScript', 'Java', 'C#', 'Python'];

    ctx.render(editTemplate(data, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get('title');
        const category = formData.get('category');
        const content = formData.get('content');
        
        if (!title || !category || !content) {
            return alert('All fields are required!');
        }
        if(!categories.includes(category, 0)) {
            return alert('Wrong category!');
        }

        await editRecord(data._id, {
            title,
            category,
            content
        });

        ctx.page.redirect(`/details/${data._id}`);
    }
};