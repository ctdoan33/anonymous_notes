var note=require('../controllers/notes.js');
module.exports=function(app){
	app.get("/notes", function(req, res){
		note.all(req, res);
	});
	app.post("/notes", function(req, res){
		note.create(req, res);
	});
	app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
};