let cl = console.log;
const blogcontainer = document.getElementById("blogcontainer")
let blogs = [
    { tittle: "Angular 15 update", content: "It support satndalone component" },
    { tittle: "ES6 - promise", content: "ES6 gives us promise to handel Async oprations" }
]

function createBlog(blog, callBackFun) {
    setTimeout(() => {
        let error = Math.random() >= .5 ? false : true;
        if (!error) {
            blogs.push(blog);
            cl(blogs, `New blogs is created successfully !!!`);
            callBackFun()
        } else {
            cl(`Something went wrong creating a blog`);
        }
    }, 2000);
}
function fetchdata() {
    setTimeout(() => {
        let error = Math.random() >= .5 ? false : true;
        if (!error) {
            cl(blogs, `All blogs are fetched successfully !!!`);
            templatingCard(blogs)
        } else {
            cl(`Something went wrong while fetching data`);
        }
    }, 1000);
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
createBlog({ tittle: "ES7 - Async Await", content: "ES7 gives us Async Await to handel Async oprations" }, fetchdata)

// templatingCard(blogs)
// fetchdata
// callback hell