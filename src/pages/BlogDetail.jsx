import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import data from '../data.js';

function BlogDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        console.log("Id", id)
        getBlogById();
    }, [id]);

    const getBlogById = () => {
        const foundPost = data.find((post) => post.id === parseInt(id));
        if (foundPost) {
            setPost(foundPost);
            console.log("Result", foundPost);
        }
    };

    if (!post) return <div>Loading...</div>;

    return (
        <div className='px-6 md:px-20 lg:px-56 mt-10'>
            <h3 className='text-red-500 text-[12px]'>{post.tag}</h3>
            <h3 className='text-[23px] font-bold'>{post.title}</h3>
            <div className='flex items-center mt-5'>
                <div className='ml-2'>
                    <h3 className='font-bold text-[12px]'>{post.author}</h3>
                    <h3 className='text-gray-500 text-[10px]'>{post.date}</h3>
                </div>
            </div>
            <img src={post.coverImage} className='rounded-2xl mt-5 mb-5 w-full' />
            <ReactMarkdown children={post.description} escapeHtml={false} className='leading-9' />
        </div>
    );
}

export default BlogDetail;
