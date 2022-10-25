import React, { useEffect, useState } from "react";
import { Button } from '@mantine/core';
import articlesArray  from "./data/articlesItems";
import { Pagination } from '@mantine/core';
import "./Articles.scss";

export function Articles() {
    const [oneArticle, setOneArticle] = useState (false);
    const [articles] = useState(articlesArray);
    const [pageNumber, setPageNumber] = useState(1);
    const [start, setStart] = useState();
    const [stop, setStop] = useState();
    const [width, setWidth] = useState(window.innerWidth);
    const articlePerPage = 2;
    const lenghtOfStringToShow = 200;

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }

    function resizeWindow() {
        setStart((pageNumber - 1) * articlePerPage);
        setStop(pageNumber * articlePerPage);
        if(width<=768) {
            setStart(0);
            setStop(articles.length);
        }
    }
    
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        resizeWindow();
    }, [pageNumber, width]);

    const displayArticles = articles.slice(start,stop).map(article => {
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
        if(!oneArticle && width>768) {
            return <Pagination className="pagination-articles" data={articles} total={Math.ceil(articles.length/articlePerPage)} onChange={(page)=>changePage(page)} page={pageNumber} radius="lg" withEdges />;
        }
        
    }
    function showArticle(articleId) {
        setOneArticle(true);
        const indexArticle = articles.findIndex(item => item.id === articleId);
        setStart(indexArticle);
        setStop(indexArticle + 1);
    }

    function hideArticle() {
        setOneArticle(false);
        resizeWindow();
    }
    return (
        <div className="Article-content">
            <ul className="list-group-articles">
                {displayArticles}
            </ul>   
            <PaginationArticle /> 
        </div>
    )
}

export default Articles;