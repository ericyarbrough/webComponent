import { topHeadlineUrl } from './newsApi.js'
import './news-article.js'

window.addEventListener('load', () => { 
  fetchNews();
})

async function fetchNews() {
  const res = await fetch(topHeadlineUrl);
  const json = await res.json();

  console.log(json.articles);
  const main = document.querySelector('main');

  json.articles.forEach(article => {
    const el = document.createElement('news-article');
    el.article = article;
    main.appendChild(el);
  });

}