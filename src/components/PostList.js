import React, {Component} from 'react'

import PostItem from './PostItem'

class PostList extends Component {
  
  state = {
    
    posts : [
      {
        id: 1,
        author: {
          avatar: "https://i.pravatar.cc/150?img=1",
          name: "Cristina"
        },
        date: "12 Apr 2020",
        content: "Lorem ipsum dolor sit amet.",
        comment: [
          {
            id:1,
            author:{
              avatar: "https://i.pravatar.cc/150?img=4",
              name: "Joe",
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam viverra"
          },
          {
            id:2,
            author:{
              avatar: "https://i.pravatar.cc/150?img=5",
              name: " Elizabeth",
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra, erat vitae auctor semper, nulla orci ornare nulla,"
          }
        ],
      },
      {
        id: 2,
        author: {
          avatar: "https://i.pravatar.cc/150?img=6",
          name: "William"
        },
        date: "12 Apr 2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra, erat vitae auctor semper, nulla orci ornare nulla, eu accumsan orci velit in nulla",
        comment: [
          {
            id:1,
            author:{
              avatar: "https://i.pravatar.cc/150?img=3",
              name: "Benjamin",
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra, erat vitae auctor semper, nulla orci ornare nulla, eu accumsan orci velit in nulla. Suspendisse et justo a justo ultrices accumsan. Fusce aliquam diam vitae varius pellentesque. Pellentesque molestie tellus ac justo ultricies, id pretium tortor vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam vestibulum eleifend pharetra."
          },
          {
            id:2,
            author:{
              avatar: "https://i.pravatar.cc/150?img=20",
              name: "Mila",
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra, erat vitae auctor semper, nulla orci ornare nulla, eu accumsan orci velit in nulla. Suspendisse et justo a justo ultrices accumsan. Fusce aliquam diam vitae varius pellentesque. Pellentesque molestie tellus ac justo ultricies, id pretium tortor vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam vestibulum eleifend pharetra."
          },{
            id:3,
            author:{
              avatar: "https://i.pravatar.cc/150?img=17",
              name: "Christopher",
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra, erat vitae auctor semper, nulla orci ornare nulla, eu accumsan orci velit in nulla. Suspendisse et justo a justo ultrices accumsan. Fusce aliquam diam vitae varius pellentesque. Pellentesque molestie tellus ac justo ultricies, id pretium tortor vehicula."
          }
        ],
      },
      {
        id: 3,
        author: {
          avatar: "https://i.pravatar.cc/150?img=7",
          name: "James"
        },
        date: "12 Apr 2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        comment: [
          {
            id:1,
            author:{
              avatar: "https://i.pravatar.cc/150?img=9",
              name: "Sophia",
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra, erat vitae auctor semper, nulla orci ornare nulla, eu accumsan orci velit in nulla. Suspendisse et justo a justo ultrices accumsan. Fusce aliquam diam vitae varius pellentesque. Pellentesque molestie tellus ac justo ultricies, id pretium tortor vehicula."
          }
        ],
      },
      {
        id: 4,
        author: {
          avatar: "https://i.pravatar.cc/150?img=10",
          name: "Abigail"
        },
        date: "12 Apr 2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra, erat vitae auctor semper, nulla orci ornare nulla, eu accumsan orci velit in nulla",
        comment: [
          {
            id:1,
            author:{
              avatar: "https://i.pravatar.cc/150?img=11",
              name: "Joseph",
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra, erat vitae auctor semper, nulla orci ornare nulla, eu accumsan orci velit in nulla. Suspendisse et justo a justo ultrices accumsan. Fusce aliquam diam vitae varius pellentesque. Pellentesque molestie tellus ac justo ultricies, id pretium tortor vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam vestibulum eleifend pharetra."
          }
        ],
      },
  ]

  }

  render() {
    const { posts } = this.state

    return(
      <main>

          {posts.map(post => (

            <PostItem
              key = {post.id}
              {...post}
            />

          ))}
          
      </main>
    )
  }

}

export default PostList