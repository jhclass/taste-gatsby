import React from 'react';
import Layout from '../compronents/layout';
import { HeadFC,graphql,PageProps,Link} from 'gatsby';

function Blog({data}:PageProps<Queries.MyDataQuery>) {
    console.log(data.allMdx.nodes);
    return (
        <Layout title="Blog">
            <p>The most recent news from my Blog</p>
            <ul>
                {data.allMdx.nodes.map((datas,i) =><li key={i}>
                    <h2><Link to={`/blog/${datas.frontmatter?.title}`}>{datas.frontmatter?.title}</Link></h2>
                    <div>
                        카테고리: {datas.frontmatter?.category}
                        <br/>
                        작성자: {datas.frontmatter?.author}
                        <br/>
                        작성일: {datas.frontmatter?.date}
                    </div>
                    <p>{datas.excerpt}</p>
                </li>)}
            </ul>
           
        </Layout>
       
    );
}

export const query = graphql`
    query MyData {
        allMdx {
            nodes {
            excerpt(pruneLength: 100)
            frontmatter {
                title
                category
                date
                author
                slug
            }
            body
            }
        }
    }
`;

export default Blog;
export const Head: HeadFC = () => <title>Blog | JHCLASS</title>