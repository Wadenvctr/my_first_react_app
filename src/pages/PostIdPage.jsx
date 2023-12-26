import React from 'react';
import { Link, useParams } from 'react-router-dom';
const PostIdPage = () => {
    console.log(useParams())
    const {id} = useParams();
    return (
        <div>
            <h1>Пост {id}</h1>
            <Link to={'/posts'}>
            <footer>
                <h2>Вернуться к списку постов</h2>
            </footer>
            </Link>
        </div>
    );
};

export default PostIdPage;