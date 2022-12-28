import React, { useEffect, useState } from 'react'
import CreatePost from '../../../components/user/createPost/CreatePost'
import Post from '../../../components/user/post/Post'
import axios from '../../../config/axios'
import Spinner from '../../../components/Spinner'
import NullPost from '../../../components/other/nullPost/Nulldefault'
import { useSearchParams } from 'react-router-dom'
import { FcAddImage } from "@react-icons/all-files/fc/FcAddImage";


function ColumnTwo() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchParams] = useSearchParams()


    useEffect(() => {
        setLoading(true)
        let postId = searchParams.get('postId')
        if (postId) {
            axios.get('/post/' + postId).then((result) => {
                console.log(result,'home succes');
                setLoading(false)
                if (result.data.post?.postId) {
                    setPosts([result.data.post])
                } else {
                    setPosts([])
                }
            }).catch((error) => {
                console.log(error,'home');
                setLoading(false)
                setPosts([])
            })
        } else {
            console.log('start post');
            // axios.get('/post').then((result) => {
            //     console.log(result,'post');
            //     setLoading(false)
            //     setPosts(result.data.posts)
            // }).catch((error)=>{
            //     setLoading(false)
            //     setPosts([])
            //     console.log(error,'post error');
            // })
        }

    }, [])

    return (
        <div>
            <div className="user-home-two">
                <div className="createPost">
                    <CreatePost />
                </div>
                <div className="all-post">
                    {loading ?
                        <Spinner />
                        :
                        <>
                            {posts[0] ?
                                <>
                                    {posts.map((item) => {

                                        return <Post data={item} />
                                    })}
                                </> : <NullPost icon={<FcAddImage />} header='Let start' desc='Add post and Follow friends' />}
                        </>}
                </div>
            </div>
        </div>
    )
}

export default ColumnTwo