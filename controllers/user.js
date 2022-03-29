import { v4 as uuidv4 } from "uuid";
let users = [];
export const getUsers = (req, res) => {
  res.send(users);
};
export const createUsers = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with name ${user.firstname} added to database`);
};
export const getUser= (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
  
    res.send(foundUser);
  };
  export const deleteUSer =(req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`Users with id ${id} gets deleted`);
  };
  export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;
    const userToBeUpdated = users.find((user) => user.id === id);
  
    if (firstname) {
      userToBeUpdated.firstname = firstname;
    }
    if (lastname) {
      userToBeUpdated.lastname = lastname;
    }
    if (age) {
      userToBeUpdated.age = age;
    }
    res.send(`user with id ${id} updated successfully`);
  };
