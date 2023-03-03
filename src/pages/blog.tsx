import React from 'react';
import Layout from '../compronents/layout';
import { HeadFC,graphql,PageProps } from 'gatsby';

function Blog({data}:PageProps<Queries.BlogTitlesQuery>) {
    console.log(data.allFile.nodes);
    return (
        <Layout title="Blog">
            <p>The most recent news from my Blog</p>
            <ul>
            {data.allFile.nodes.map((datas,i)=><li key={i}>{datas.name}</li>)}
            </ul>
           
        </Layout>
       
    );
}

export const query = graphql`
    query BlogTitles {
        allFile {
            nodes {
                name
            }
        }
    }
`;

export default Blog;
export const Head: HeadFC = () => <title>Blog | JHCLASS</title>