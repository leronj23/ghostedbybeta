var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var CountSchema = new Schema({
	
	entry_date: {
		type: Date
	}
});

// This creates our model from the above schema, using mongoose's model method
module.exports = mongoose.model("Counts", CountSchema);
