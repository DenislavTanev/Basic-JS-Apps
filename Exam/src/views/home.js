import { html } from '../../node_modules/lit-html/lit-html.js';
import { getRecentRecord } from '../api/data.js';

const homeTemplate = (jsArticle, cSharpArticle, javaArticle, pythonArticle) => html`
<section id="home-page" class="content">
    <h1>Recent Articles</h1>
    <section class="recent js">
        <h2>JavaScript</h2>
        ${jsArticle.length != 0 ? jsArticle.map(articleTemplate) 
            : html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
    <section class="recent csharp">
        <h2>C#</h2>
        ${cSharpArticle.length != 0 ? cSharpArticle.map(articleTemplate) 
            : html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
    <section class="recent java">
        <h2>Java</h2>
        ${javaArticle.length != 0 ? javaArticle.map(articleTemplate) 
            : html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
    <section class="recent python">
        <h2>Python</h2>
        ${pythonArticle.length != 0 ? pythonArticle.map(articleTemplate) 
            : html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
</section>`;

const articleTemplate = (item) => html`
<article>
    <h3>${item.title}</h3>
    <p>${item.content}</p>
    <a href="/details/${item._id}" class="btn details-btn">Details</a>
</article>`;

export async function homePage(ctx) {
    const articles = await getRecentRecord();
    const jsArticle = articles.filter(a => a.category == 'JavaScript');
    const cSharpArticle = articles.filter(a => a.category == 'C#');
    const javaArticle = articles.filter(a => a.category == 'Java');
    const pythonArticle = articles.filter(a => a.category == 'Python');

    ctx.render(homeTemplate(jsArticle, cSharpArticle, javaArticle, pythonArticle));
};
