import mysql from 'serverless-mysql'

const db = mysql({
    config:{
        host : 'localhost',
        database : 'instagram',
        user : 'root',
        password : 'kd8787'
    }
})

export default db;