const express = require("express");
const router = express.Router();

const { Login, Signup, Logout, GetUserId } = require("../controller/AuthController");

const {
	AddItem,
	ItemInfo,
	ShowAllItem,
	ItemByCategory,
	DeleteItem,
	UpdateItem,
	LastFiveItem,
	filterItemByCategoryAndDate,
} = require("../controller/ItemController");

const {
	reviewFeedback,
	reviewFeedbackFetch,
} = require("../controller/ReviewController");

const {authenticate, authorizedAdmin} = require("../middleware/authenticationMiddleware");

//auth controller
router.post("/login", Login);

router.post("/signup", Signup);

router.post("/logout", Logout);

//auth controllerres.end

//items controller start
router.post("/additem", authenticate, AddItem);

router.get("/allitem", ShowAllItem);

router.get("/item/:id", ItemInfo);

router.get("/item/category/:category", ItemByCategory);

router.delete("/item/:id", DeleteItem);

router.put("/item/:id", UpdateItem);

router.get("/lastfiveitems", LastFiveItem);

router.post("/filteritem", filterItemByCategoryAndDate);

//items controller end

router.post("/review", reviewFeedback);
router.get("/review", reviewFeedbackFetch);


router.get("/getuserId", authenticate, GetUserId);

module.exports = router;
