import React  from 'react';
import { graphql, Link } from 'gatsby';
import { HeadFC,useStaticQuery } from 'gatsby';
interface ILayout {
    children : any,
    title:string,
}
export const Head: HeadFC = () => <title>aaaaa</title>
export default function Layout({children,title}:ILayout){
    const data = useStaticQuery<Queries.seoDataQuery>(graphql`
query seoData {
  site{
    siteMetadata{
      title
    }
  }
}
`);
console.log(data);
    return (
        <div>
            <h1>로고 : {data.site?.siteMetadata?.title}</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/aboutus">About-us</Link></li>
                </ul>
            </nav>
            <h1>{title}</h1>
            <main>{children}</main>
            <footer>푸터</footer>
        </div>
        
    )
}
