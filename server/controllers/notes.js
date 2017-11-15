var mongoose=require('mongoose');
var Note=mongoose.model("Note");
module.exports={
	all: function(req, res){
		Note.find({}, function(err, notes){
			if(err){
				res.json(err);
			}else{
				res.json(notes);
			};
		});
	},
	create: function(req, res){
		var note=new Note(req.body);
		note.save(function(err){
			if(err){
				res.json(err);
			}else{
				res.json({success: true});
			}
		});
	}
}