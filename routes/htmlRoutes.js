htmlRoutes = (app, path) => {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};


module.exports = htmlRoutes;