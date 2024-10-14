const express = require("express");
const router = express.Router();

const { Login, Signup, Logout, GetUserId, getUserInformation } = require("../controller/UserController");

const {
	AddItem,
	ItemInfo,
	ShowAllItem,
	ItemByCategory,
	DeleteItem,
	UpdateItem,
	LastFiveItem,
	filterItemByCategoryAndDate,
	specificUserCreatedPostDetails
	
} = require("../controller/ItemController");

const {
	reviewFeedback,
	reviewFeedbackFetch,
} = require("../controller/ReviewController");

const {authenticate, authorizedAdmin} = require("../middleware/authenticationMiddleware");

//auth controller
router.post("/login", Login);

router.post("/signup", Signup);

router.get("/logout", Logout);

router.get("/getuserId", authenticate, GetUserId);

router.get("/userInfo/:id",getUserInformation);

//auth controllerres.end

//items controller start
router.post("/additem", authenticate, AddItem);

router.get("/allitem", ShowAllItem);

router.get("/item/:id", ItemInfo);

router.get("/item/category/:category", ItemByCategory);

router.delete("/item/:id", DeleteItem);

router.get("/userPostDetails/:id",specificUserCreatedPostDetails)

router.put("/item/:id", UpdateItem);

router.get("/lastfiveitems", LastFiveItem);

router.post("/filteritem", filterItemByCategoryAndDate);

//items controller end

router.post("/review", reviewFeedback);
router.get("/review", reviewFeedbackFetch);



module.exports = router;
