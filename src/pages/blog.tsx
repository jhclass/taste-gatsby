import React from 'react';
import Layout from '../compronents/layout';
import { HeadFC,graphql,PageProps,Link} from 'gatsby';

function Blog({data}:PageProps<Queries.MyDataQuery>) {
    console.log(data.allMdx.nodes);
    return (
        <Layout title="Blog">
            <p>The most recent news from my Blog</p>
            <div className='grid'>
                {data.allMdx.nodes.map((datas,i) =><article key={i}>
                    <h2><Link to={`/blog/${datas.frontmatter?.slug}`}>{datas.frontmatter?.title}</Link></h2>
                    <div>
                        카테고리: {datas.frontmatter?.category}
                        <br/>
                        작성자: {datas.frontmatter?.author}
                        <br/>
                        작성일: {datas.frontmatter?.date}
                    </div>
                    <p>{datas.excerpt}<span><Link to={`/blog/${datas.frontmatter?.slug}`}>[자세히보기]</Link></span></p>
                </article>)}
            </div>
           
        </Layout>
       
    );
}

export const query = graphql`
    query MyData {
        allMdx {
            nodes {
            excerpt(pruneLength: 50)
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