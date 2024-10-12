import React, { useEffect, useState } from 'react';
import Post from './post'; 
import './home.css'; 

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosts(data.slice(0, 15));
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="home">
            <h1 className="home-title">Publicaciones</h1>
            {loading ? (
                <p>Cargando publicaciones...</p>
            ) : (
                <div className="posts-container">
                    {posts.length > 0 ? (
                        posts.map(post => (
                            <Post key={post.id} post={{ 
                                title: post.title, 
                                content: post.body, 
                                likes: Math.floor(Math.random() * 100), 
                                shares: Math.floor(Math.random() * 50) 
                            }} />
                        ))
                    ) : (
                        <p>No hay publicaciones disponibles.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;

