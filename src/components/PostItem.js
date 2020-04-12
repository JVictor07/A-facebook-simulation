import React from 'react'

function PostAuthor({author, date, content}) {
  return (

    <section className="post-author">

      <div className="post-author-perfil">

        <img src={author.avatar} alt="avatar"/>

        <div>
          <h2>{author.name}</h2>
          <span>{date}</span>
        </div>

      </div>
              
      <div>
        <p>{content}</p>
      </div>

    </section>

  )
}

function PostComment({comments}){

  return (

      comments.map(comment => (
      
        <section className="post-comments" key={comment.id}>

          <img src={comment.author.avatar} alt="avatar"/>

          <div className="text">
            <h2>{comment.author.name}</h2>
            <p>{comment.content}</p>
          </div>

        </section>

      ))
  )
}

function PostItem ({author, date, content, comment}){
  return (
    <div className="post">
      <PostAuthor author={author} date={date} content={content}/>
      <PostComment key={comment.id} comments={comment}/>
    </div>
  )
}


export default PostItem