import React from 'react';
import Layout from '../compronents/layout';
import { HeadFC } from 'gatsby';

function AboutUs() {
    return (
        <Layout title="About us">
            <div>
                <p>Hello!! We are selling home appliances. We will always introduce only quality products.</p>
            </div>
        </Layout>
        
    );
}
export default AboutUs;
export const Head: HeadFC = () => <title>About us</title>
