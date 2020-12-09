const User  = require('../models/user');
exports.getAllUser = (req, res) => {
    User.find()
    .then((User)=>{ res.json(User)})
    .catch((error)=>{res.json(error)});
};

exports.getUser = (req, res) => {
    res.set('Content-Type', 'text/html');

    res.send('get user with id : '+req.params.id);
};

exports.createUser = (req, res) => {
    console.log(req.body);
    var user = new User({
        nom:req.body.nom,
        email:req.body.email,
        tel:req.body.tel
    });
    user.save()
    .then(()=>{ res.json("success")})
    .catch((error)=>{res.json(error)});
    
};

exports.updateUser = (req, res) => {
    res.set('Content-Type', 'text/html');

    res.send('Update user with ID'+req.params.id);
};

exports.deleteUser = (req, res) => {
    res.set('Content-Type', 'text/html');

    res.send('Delete user with ID'+req.params.id);
};