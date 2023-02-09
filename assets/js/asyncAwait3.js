let cl = console.log;

const blogcontainer = document.getElementById("blogcontainer")
let blogs = [
    { tittle: "Angular 15 update", content: "It support standalone component" },
    { tittle: "ES6 - promise", content: "ES6 gives us promise to handel Async oprations" }
]

function createBlog(blog) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // api call
            let error = Math.random() >= .2 ? false : true;
            if (!error) {
                blogs.push(blog);
                resolve(`post is created successfully !!!`);
                // callBackFun()
            } else {
                reject(`Something went wrong while creating a post`);
            }
        }, 2000);
    })

}

function fetchdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= .2 ? false : true;
            if (!error) {
                resolve(`Posts are fetched successfully !!!`);
                templatingCard(blogs)
            } else {
                reject(`Something went wrong while Fetching Posts`);
            }
        }, 1000);
    })
}

function templatingCard(arr) {
    let result = ``;
    arr.forEach(b => {
        result += `
                     <div class="card mb-4">
                        <div class="card-header">${b.tittle}</div>
                        <div class="card-body">${b.content}</div>
                    </div>
                  `
    });
    blogcontainer.innerHTML = result;
}
// createBlog({ tittle: "ES7 - Async Await", content: "ES7 gives us Async Await to handel Async oprations" }, fetchdata)

async function init() {
    try {
        await createBlog({ tittle: "ES7 - Async Await", content: "ES7 gives us Async Await to handel Async oprations" })
        let result = await fetchdata();
        Swal.fire({
            icon: 'success',
            title: result,
            showConfirmButton: true,
            timer: 1000
        })
        templatingCard(blogs)
    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: err,
            timer: 1000
        })
    }
}
init()