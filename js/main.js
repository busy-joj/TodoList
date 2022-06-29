const inputText = document.querySelector(".input-box-text")
const addBtn = document.querySelector(".input-box-btn")
const list = document.querySelector(".list")

const likeBtn = document.querySelectorAll('.like')
const checkBtn = document.querySelectorAll('.check')
const clearBtn = document.querySelectorAll('.clear')




function addList() {
    if (inputText.value.trim() === "") {
        return
    }

    //lick
    const like = document.createElement("span")
    const likeIcon = document.createElement("i")
    like.classList.add('like')
    likeIcon.classList.add("material-icons")
    likeIcon.innerText = "favorite_border"
    like.appendChild(likeIcon)

    //cont
    const cont = document.createElement("span")
    cont.classList.add('cont')
    cont.innerText = inputText.value

    //check
    const manage = document.createElement("span")
    const checkIcon = document.createElement("i")
    const clearIcon = document.createElement("i")
    manage.classList.add('manage')
    checkIcon.classList.add("material-icons", "check")
    clearIcon.classList.add("material-icons", "clear")
    checkIcon.innerText = "check"
    clearIcon.innerText = "clear"
    manage.append(checkIcon, clearIcon)

    const li = document.createElement("li")

    like.addEventListener('click', (e) => {
        const target = e.target;
        const text = target.innerText === "favorite" ? "favorite_border" : "favorite"
        target.innerText = text;
    })

    checkIcon.addEventListener('click', (e) => {
        const target = e.target.parentNode.parentElement;
        target.classList.add('done')
        console.log(target)
    })

    clearIcon.addEventListener('click', (e) => {
        const target = e.target.parentNode.parentElement;
        list.removeChild(target)
    })


    li.appendChild(like)
    li.appendChild(cont)
    li.appendChild(manage)
    list.appendChild(li)

    inputText.value = ""
    inputText.focus()
}

inputText.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
        addList()
    }
})
addBtn.addEventListener('click', addList)


