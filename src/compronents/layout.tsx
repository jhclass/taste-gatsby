import React  from 'react';
import { Link } from 'gatsby';
import { HeadFC } from 'gatsby';
interface ILayout {
    children : any,
    title:string,
}
export const Head: HeadFC = () => <title>aaaaa</title>
export default function Layout({children,title}:ILayout){
    return (
        <div>
            <h1>로고</h1>
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
