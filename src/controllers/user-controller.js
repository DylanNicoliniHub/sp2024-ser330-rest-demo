// Dummy user data (replace this with a database in a real-world application)
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

getUsers = function (req, res) {
    console.log('get users request recieved')

    res.status(200).json(users)
}

createUser = function (req, res){
        console.log('create request recieved')

    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(user);
    res.status(201).json(user);
}
module.exports = {
  getUsers: getUsers,
  createUser: createUser
};