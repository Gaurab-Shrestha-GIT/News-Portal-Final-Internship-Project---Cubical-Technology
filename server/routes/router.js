const { Router } = require("express");
const express = require("express");
const route = express.Router();
const services = require("../services/render");

// @description Root Router
// @method GET
route.get("/", services.homeRoutes);
//Admin Profile Route
route.get("/admin-profile", services.adminProfile);

//loginsignup
route.get("/login", services.login);
route.get("/signup", services.signup);

//News Route
route.get("/add-news", services.addNews);
route.get("/add-news-category", services.addNewsCategory);
route.get("/all-news", services.allNews);
route.get("/news-details", services.newsDetails);

//Videos Route
route.get("/add-videos", services.addVideos);
route.get("/add-videos-category", services.addVideosCategory);
route.get("/all-videos", services.allVideos);
route.get("/videos-details", services.videosDetails);

//Manage User
route.get("/manage-user-details", services.manageUserDetails);

module.exports = route;
