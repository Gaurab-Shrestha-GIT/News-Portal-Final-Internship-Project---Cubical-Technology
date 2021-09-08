exports.homeRoutes = (req, res) => {
  res.render("index");
};

exports.adminProfile = (req, res) => {
  res.render("adminProfile");
};

exports.login = (req, res) => {
  res.render("loginsignup/login");
};

exports.signup = (req, res) => {
  res.render("loginsignup/signup");
};
//NEWS
exports.addNews = (req, res) => {
  res.render("news/addNews");
};

exports.addNewsCategory = (req, res) => {
  res.render("news/addNewsCategory");
};

exports.allNews = (req, res) => {
  res.render("news/allNews");
};

exports.newsDetails = (req, res) => {
  res.render("news/newsDetails");
};

//Videos
exports.addVideos = (req, res) => {
  res.render("videos/addVideos");
};

exports.addVideosCategory = (req, res) => {
  res.render("videos/addVideosCategory");
};

exports.allVideos = (req, res) => {
  res.render("videos/allVideos");
};

exports.videosDetails = (req, res) => {
  res.render("videos/videosDetails");
};

//ManageUser Route
exports.manageUserDetails = (req, res) => {
  res.render("manageUserDetails");
};
