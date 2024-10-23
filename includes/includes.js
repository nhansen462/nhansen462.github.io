const nav = document.querySelector('nav')
nav.innerHTML = ""

const footer = document.querySelector('footer')
footer.innerHTML = ""

;[
    [ 'Home', '../index.html' ],
    [ 'Carousel', '../carousel/carousel.html' ],
    [ 'Todo List', '../todo/todo.html' ],
    [ 'Pokemon', '../pokemon/pokemon.html' ]
]
.forEach(([ name, url ]) => {
    const page = document.createElement('a')
    page.href = url
    page.textContent = name
    nav.append(page)
})

const fullName = document.createElement('h6')
fullName.title = "Nicholas Hansen"
fullName.textContent = "Nicholas Hansen"
footer.append(fullName)

const course = document.createElement('h6')
course.title = "Modern Javascript"
course.textContent = "Modern Javascript"
footer.append(course)