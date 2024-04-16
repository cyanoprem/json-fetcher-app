const postId = document.getElementById('postId')
const getBtn = document.getElementById('getBtn')
const postTitle = document.getElementById('postTitle')
let postIdNumber = 0


const savePostId = (event) => {
  postIdNumber = event.target.value
}

const getPost = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postIdNumber}`)
  const data = await response.json()
  const {title} = data
  postTitle.innerText = `Post title: ${title}`
}

postId.addEventListener('change', savePostId)
getBtn.addEventListener('click', getPost)




