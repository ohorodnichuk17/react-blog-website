import Search from "../components/Search.jsx";
import IntroPost from "../components/IntroPost.jsx";
import Blogs from "../components/Blogs.jsx";
import {useEffect, useState} from "react";
import data from "../data.js";

function Home() {
    const [post, setPost]=useState([]);
    const [orgPost, setOrgPost]=useState([]);

    useEffect(()=>{
        getPost();
    },[]);
    const getPost = () => {
        const result = data.map(item => ({
            id: item.id,
            title: item.title,
            desc: item.description,
            tag: item.tag,
            coverImage: item.coverImage,
        }));
        setPost(result);
        setOrgPost(result);
    };

    const filterPost=(tag)=>{
        if(tag=='All')
        {
            setPost(orgPost);
            return ;
        }
        const result=orgPost.filter(item=>item.tag==tag);
        setPost(result);
    };

    return (
        <div >

            <Search selectedTag={(tag)=>filterPost(tag)} />
            {post.length>0? <IntroPost post={post[0]} />:null}
            {post.length>0?  <Blogs posts={post}/>:null}

        </div>
    );
}

export default Home