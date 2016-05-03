var low = require('lowdb');
var storage = require('lowdb/file-sync');

var db = low('db.json', { storage: storage });

~function add() {
    var posts = db('posts');
    var size = posts.size();
    posts.push({ title: 'Title ' + Date.now(), id: typeof size != 'object' ? size + 1 : 1 });
    console.log(db.object.posts)
    add()
}()

console.log(db.object.posts);