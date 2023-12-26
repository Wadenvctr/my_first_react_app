import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";
import {useFetching} from "../hooks/useFetching"
import PostService from "../API/PostService"
import Loader from '../components/UI/loader/Loader'

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching( async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
    //console.log(error)
  })

  const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
    const response = await PostService.getCommentsByPostId(id)
    setComments(response.data)
   // console.log(comError)
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])
  

  return (
      <div>
      <h1>Пост {params.id}</h1>
      {isLoading
      ? <Loader/>
      : <div>{post.title}</div>
      }
      <h3>Комментарии</h3>
      {isComLoading
      ?<Loader/>
      :<div>
        {
        comments.map((comm) => {
        <div style={{marginTop:15}}>
          <h4>{comm.email}</h4>
          <div>{comm.body}</div>
        </div>
        {console.log(comm)}
      })
      }</div>
      }
      <footer>
        <Link to={"/posts"}>
          <MyButton>Назад</MyButton>
        </Link>
      </footer>
    </div>
  )
  }
export default PostIdPage
