import express from "express";

import { createUsers, deleteUSer, getUser, getUsers, updateUser } from "../controllers/user.js";

const router = express.Router();
router.get("/", getUsers);
router.post("/", createUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUSer);
router.patch("/:id",updateUser);

export default router;
// import express from "express";
// import { v4 as uuidv4 } from 'uuid';

// const router =express.Router();
// let users = [];
// //     {
// //     firstame:"abhi",
// //     lastname:"mulik",
// //     age:25,
// // },
// // {
// //     firstame:"abhi",
// //     lastname:"mulik",
// //     age:25,
// // }
// // ]
// router.get('/',(req,res)=>{
//     // console.log(users);
//     res.send(users);
//     // res.send('hello')
// });
// router.post('/',(req,res)=>{
//     const user = req.body;
//     // const userId = uuidv4();
//     // const userWithId ={...user , id:userId};
//     // const userWithId = {...user,id:uuidv4()};
//     // users.push(userWithId);
//     users.push({...user,id:uuidv4()})
//     // console.log('POST ROUTE REACHED');
//     // console.log(req.body);
//     // console.log(`User with name ${user.firstname} added to database`);
//     res.send(`User with name ${user.firstname} added to database`);
//     // res.send('POST ROUTE REACHED');
//     // res.send(req.body);
// });
// router.get('/:id',(req,res)=>{
//     const {id} =req.params;
//     const foundUser = users.find((user)=>user.id === id)
//     // console.log(req.params)
//     // res.send(req.params);
//     res.send(foundUser);
// });
// router.delete('/:id',(req,res)=>{
//     const {id} =req.params;
//     users = users.filter((user) => user.id!==id)
//     res.send(`Users with id ${id} gets deleted`);
//     // res.send(users);
// });

// router.patch('/:id',(req,res)=>{
//     const {id}=req.params;
//     const {firstname,lastname,age}=req.body;
//     const userToBeUpdated = users.find((user) =>user.id === id)

//     if(firstname){
//         userToBeUpdated.firstname=firstname;
//     }
//     if(lastname){
//         userToBeUpdated.lastname=lastname;
//     }
//     if(age){
//         userToBeUpdated.age=age;
//     }
// res.send(`user with id ${id} updated successfully`)
// })

// export default router;
