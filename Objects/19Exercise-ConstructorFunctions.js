// Use constructor function to create a bloging engine.

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post = new Post('My Post', 'This is the body the post', 'John');
console.log(post);