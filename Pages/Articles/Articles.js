import React, { useState } from "react";
import { Button } from '@mantine/core';
import articlesArray  from "./data/articlesItems";
import { Pagination } from '@mantine/core';
import "./Articles.scss";

export function Articles() {
    const [show, setShow] = useState({ value:'' });
    const [oneArticle, setOneArticle] = useState (false);
    const [indexOfArticle, setIndexOfArticle] = useState(null);
    const hideFormClass = show.value ? 'hide' : '';

    const [articles] = useState(articlesArray);
    const [pageNumber, setPageNumber] = useState(1);
    const articlePerPage = 2;
    const lenghtOfStringToShow = 280;

    const displayArticles = articles.slice(oneArticle ? indexOfArticle : (pageNumber - 1) * articlePerPage, oneArticle ? (indexOfArticle + 1) :  (pageNumber*articlePerPage)).map(article => {
    const renderButton = () => {
        if(oneArticle) {
            return (
                <Button
                onClick={() => hideArticle()}
                className="ButtonArticle"
                type="submit"
                variant="light"
                radius="md"
                size="xs">
                Wróć do listy
                </Button>
            )
        } else if (article.contentOfArticle.length>lenghtOfStringToShow) {
            return (
                <Button
                onClick={() => showArticle((article.id))}
                className="ButtonArticle"
                type="submit"
                variant="light"
                radius="md"
                size="xs">
                Czytaj więcej...
                </Button>
            )
        } 
    }
    if(oneArticle) {
        return (
            <li key={article.id} className="list-group-article list-group-one-article">
                <h2 className="one-article-title">{article.title}</h2>
                <img src={article.image} alt="image" className="one-article-image" />
                <span className="one-article-content" dangerouslySetInnerHTML={{__html: article.contentOfArticle}}>
                </span>
                {renderButton()}
            </li>
            )
    } else {
        return (
            <li key={article.id} className="list-group-article">
                <h2 className="article-title">{article.title}</h2>
                <img src={article.image} alt="image" className={`article-image image-nr-${article.id}`} />
                <span className={`article-content article-content-${article.id}`} dangerouslySetInnerHTML={{__html: article.contentOfArticle.substring(0, lenghtOfStringToShow)+'...'}}>
                </span>
                {renderButton()}
            </li>
            )
    }
    });
    function changePage(page) {
        setPageNumber(page);
    }
    function PaginationArticle() {
        if(!oneArticle) {
            return <Pagination className="pagination-articles" data={articles} total={Math.ceil(articles.length/articlePerPage)} onChange={(page)=>changePage(page)} page={pageNumber} radius="lg" withEdges />;
        }
        
    }
    function showArticle(articleId) {
        setOneArticle(true);
        const indexArticle = articles.findIndex(item => item.id === articleId);
        setIndexOfArticle(indexArticle);
    }

    function hideArticle() {
        setOneArticle(false);
        setIndexOfArticle(null);
    }
    return (
        <div>
            <ul className="list-group-articles">
                {displayArticles}
            </ul>   
            <PaginationArticle /> 
        </div>
    )
}

export default Articles;