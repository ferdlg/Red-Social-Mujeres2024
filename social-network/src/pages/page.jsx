import React from "react";
import Post from "../components/post/post";
import Comments from "../components/comments/comments"
export const Page = ()=>{
    const examplePost = {
        title: 'Título de la Publicación',
        content: 'Contenido de la publicación aquí...',
        likes: 42,
        shares: 10,
      };
    return(
        <div>
            <Post
            post = {examplePost}
            ></Post>
            <Comments></Comments>
        </div>
    );
}