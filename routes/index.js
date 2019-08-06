const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// Express will serve up production assets
// If no API routes are hit, send the React app
router.use(function (req, res) {
  if (process.env.NODE_ENV === 'production') {
    console.log("this app is running as prod")
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  } else {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  }
});

module.exports = router;
