const express = require("express");
const router = express.Router();

const {
  getUserById,
  getUser,
  updateUser,
  getAllUsers,
  deleteUser
} = require("../controllers/user");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");

router.param("userId", getUserById);

//get route
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.get("/users", getAllUsers);

//update route
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

//delete route
router.delete("/user/:userId", isSignedIn, isAuthenticated, deleteUser);



module.exports = router;
