import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Thomas Tilahun',
        email: 'thomas@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        
    },
    {
        name: 'Henok Eyob',
        email: 'henok@example.com',
        password: bcrypt.hashSync('123456', 10),
       
    },
]

export default users