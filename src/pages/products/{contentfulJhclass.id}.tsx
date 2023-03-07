import React from 'react';
import Layout from '../../compronents/layout';
import {graphql,PageProps} from 'gatsby';
import {GatsbyImage,getImage} from 'gatsby-plugin-image'
export default function ProductDetail({data}:PageProps<Queries.ProductDeailQuery>){
    console.log(data);
    return (
        <Layout title={data.contentfulJhclass?.name!}>

            <div>
                <GatsbyImage image={getImage(data.contentfulJhclass?.preview?.gatsbyImageData!)!} alt={data.contentfulJhclass?.name!}/>
            </div>
            <div>{data.contentfulJhclass?.name}</div>
            <div>{data.contentfulJhclass?.price}</div>
            
        </Layout>

    );
}


export const query = graphql`
query ProductDeail($id:String) {
    contentfulJhclass(id: {eq:$id}) {
      id
      name
      price
      preview {
        gatsbyImageData(height: 650, placeholder: BLURRED)
      }
    }
  }
`;
