// Load blogs when page opens
window.onload = function () {
    displayBlogs();
};

function addBlog() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if (title === "" || content === "") {
        alert("Please fill all fields!");
        return;
    }

    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    blogs.push({ title: title, content: content });

    localStorage.setItem("blogs", JSON.stringify(blogs));

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    displayBlogs();
}

function displayBlogs() {
    let blogList = document.getElementById("blogList");
    blogList.innerHTML = "";

    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    blogs.forEach((blog, index) => {
        let div = document.createElement("div");
        div.className = "blog";

        div.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.content}</p>
            <button onclick="deleteBlog(${index})">Delete</button>
        `;

        blogList.appendChild(div);
    });
}

function deleteBlog(index) {
    let blogs = JSON.parse(localStorage.getItem("blogs"));

    blogs.splice(index, 1);

    localStorage.setItem("blogs", JSON.stringify(blogs));

    displayBlogs();
}