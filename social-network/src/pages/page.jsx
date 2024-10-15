import React from "react";
import Comments from "../components/comments/comments"
import Layout from "../components/layout/layout";
import PostList  from "../components/post/postList";

export const Page = ()=>{
    return(
        <div>
            <Layout>
            <PostList></PostList>
            </Layout>
            
        </div>
    );
}