import React from 'react';
import Layout from '../compronents/layout';
import { HeadFC,graphql,PageProps } from 'gatsby';

function Blog({data}:PageProps<Queries.MyDataQuery>) {
    console.log(data.allMdx.nodes);
    return (
        <Layout title="Blog">
            <p>The most recent news from my Blog</p>
            <ul>
                {data.allMdx.nodes.map((datas,i) =><li key={i}>
                    <h3>{datas.excerpt}</h3>
                </li>)}
            </ul>
           
        </Layout>
       
    );
}

export const query = graphql`
    query MyData {
        allMdx {
            nodes {
            excerpt(pruneLength: 15)
            frontmatter
            body
            }
        }
    }
`;

export default Blog;
export const Head: HeadFC = () => <title>Blog | JHCLASS</title>