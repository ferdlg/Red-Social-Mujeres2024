// src/pages/page.jsx
import React from "react";
import Layout from "../components/layout/layout"; // Asegúrate de que tu layout esté correctamente configurado
import Feed from "../components/post/feed"

export const Page = () => {
    return (
        <Layout>
            <Feed /> {/* Renderiza Feed dentro del Layout */}
        </Layout>
    );
};

export default Page;
