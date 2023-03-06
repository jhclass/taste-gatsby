import React from 'react';
import Layout from "../../compronents/layout";
import {graphql,PageProps} from "gatsby";
export default function BlogPost({data}:PageProps<Queries.PostDetailQuery>){
    console.log(data);
    return(
        <Layout title="Blog Post">
            <div>
              <h2>{data.mdx?.frontmatter?.title}</h2>
              <div>
                <span>{data.mdx?.frontmatter?.category}</span>
                <span>{data.mdx?.frontmatter?.author}</span>
                <span>{data.mdx?.frontmatter?.date}</span>
              </div>
              <hr/>
              <div style={{marginBottom:"20px"}}>
                {data.mdx?.excerpt}
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