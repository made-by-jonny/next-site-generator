import React from "react"
import {frontMatter as posts} from './posts/*.mdx'

const formatPath = (p) => p.replace(/\.mdx$/, '')

 const Page = () =>
    <>
        <h1>Home Page</h1>
        <ul>
            {posts.map(({__resourcePath, title, summary}) => 
                <li key={__resourcePath}>
                    <a href={formatPath(__resourcePath)}>
                        {title}
                    </a>
                    <p>{summary}</p>    
                </li>
            )}
        </ul>
    </>

export default Page