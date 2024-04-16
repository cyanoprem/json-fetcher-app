const postNum = document.getElementById('postNum')
const getBtn = document.getElementById('getBtn')
const postTitle = document.getElementById('postTitle')
let postNumber = 0


const savePostNum = (event) => {
  postNumber = event.target.value
}

const getPost = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`)
  const data = await response.json()
  const {title} = data
  postTitle.innerText = `Post title: ${title}`
}

postNum.addEventListener('change', savePostNum)
getBtn.addEventListener('click', getPost)



