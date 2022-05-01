const bcrypt=require('bcryptjs');
const Users=[{
name:'admin',
email:'admin@admin.com',
password:bcrypt.hashSync('123456',10),
isAdmin:true
},
{name:'mubashir',
email:'mubashir@mubashir.com',
password:bcrypt.hashSync('12345',10),
isAdmin:false
},
{name:'mustafa',
email:'mustafa@mustafa.com',
password:bcrypt.hashSync('1234',10),
isAdmin:false
},
{name:'misbah',
email:'misbah@misbah.com',
password:bcrypt.hashSync('123',10),
isAdmin:false
},

]

module.exports=Users;