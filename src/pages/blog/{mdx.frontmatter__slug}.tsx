import React from 'react';
import Layout from "../../compronents/layout";
import {graphql,PageProps, HeadFC} from "gatsby";
interface IBlogPostProps{
  data:Queries.PostDetailQuery,
  children:any
}
export default function BlogPost({data,children}:IBlogPostProps){
    console.log('children',children);
    return(
        <Layout title="Blog Post">
            <div>
              <h2>Title. {data.mdx?.frontmatter?.title}</h2>
              <div>
                Category. <span>{data.mdx?.frontmatter?.category}</span><br/>
                Writer. <span>{data.mdx?.frontmatter?.author}</span><br/>
                Date. <span>{data.mdx?.frontmatter?.date}</span><br/>
              </div>
              <hr/>
              <div style={{marginBottom:"20px"}}>
                Detail. {children}
              </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
query PostDetail($frontmatter__slug:String) {
    mdx(frontmatter: {slug: {eq: $frontmatter__slug}}) {
      body
      children {
        id
      }
      frontmatter {
        author
        category
        date
        slug
        title
      }
      excerpt
    }
  }

`;

export const Head = ({data}:IBlogPostProps) => <title>{data.mdx?.frontmatter?.title} | Blog</title>