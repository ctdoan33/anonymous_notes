var mongoose=require('mongoose');
var NoteSchema=new mongoose.Schema({
	note: {type: String, required: [true, "Note is required"], minlength: [3, "Note must be at least 3 characters"]}
}, {timestamps: true});
mongoose.model("Note", NoteSchema);