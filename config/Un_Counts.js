var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var Un_CountSchema = new Schema({
	
  count: {
		type: String
	},
	entry_date: {
		type: String
  }
});

// This creates our model from the above schema, using mongoose's model method
module.exports = mongoose.model("Un_Counts", Un_CountSchema);
