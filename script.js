let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

function addBlog() {

    let title = document.getElementById("blogTitle").value;
    let content = document.getElementById("blogContent").value;

    if(title === "" || content === ""){
        alert("Please fill all fields");
        return;
    }

    blogs.push({
        title,
        content
    });

    localStorage.setItem("blogs", JSON.stringify(blogs));

    document.getElementById("blogTitle").value = "";
    document.getElementById("blogContent").value = "";

    displayBlogs();
}

function displayBlogs(){

    let blogList = document.getElementById("blogList");

    blogList.innerHTML = "";

    blogs.forEach((blog,index)=>{

        blogList.innerHTML += `

        <div class="tracked-card">

            <h3>${blog.title}</h3>

            <div class="btns">

                <button onclick="viewBlog(${index})">View</button>

                <button onclick="editBlog(${index})">Edit</button>

                <button onclick="deleteBlog(${index})">Delete</button>

            </div>

        </div>

        `;
    });

}

function viewBlog(index){

    alert(
        "Title: " + blogs[index].title + "\n\n" +
        blogs[index].content
    );
}

function editBlog(index){

    let newTitle = prompt("Edit Title", blogs[index].title);

    let newContent = prompt("Edit Blog", blogs[index].content);

    if(newTitle && newContent){

        blogs[index].title = newTitle;
        blogs[index].content = newContent;

        localStorage.setItem("blogs", JSON.stringify(blogs));

        displayBlogs();
    }
}

function deleteBlog(index){

    blogs.splice(index,1);

    localStorage.setItem("blogs", JSON.stringify(blogs));

    displayBlogs();
}

displayBlogs();