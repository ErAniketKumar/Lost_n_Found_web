const express = require("express");
const router = express.Router();

const { Login, Signup, Logout } = require("../controller/AuthController");

const {
	AddItem,
	ItemInfo,
	ShowAllItem,
	ItemByCategory,
	DeleteItem,
    UpdateItem
} = require("../controller/ItemController");

//auth controller
router.post("/login", Login);

router.post("/signup", Signup);

router.post("/logout", Logout);

//auth controllerres.end

//items controller start
router.post("/additem", AddItem);

router.get("/allitem", ShowAllItem);

router.get("/item/:id", ItemInfo);

router.get("/item/category/:category", ItemByCategory);

router.delete("/item/:id",DeleteItem);

router.put("/item/:id",UpdateItem)

module.exports = router;
