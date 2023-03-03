import React from 'react';
import Layout from '../compronents/layout';
import { HeadFC } from 'gatsby';
function Blog() {
    return (
        <Layout title="Blog">
            <p>The most recent news from my Blog</p>
        </Layout>
       
    );
}
export default Blog;
export const Head: HeadFC = () => <title>Blog | JHCLASS</title>