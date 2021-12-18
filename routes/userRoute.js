const express= require('express');
const {models} =require('mongoose');
const { addUser } = require('../controllers/user.controller');


const Router = express.Router();



Router.post("/addUser",addUser);

module.exports= Router;