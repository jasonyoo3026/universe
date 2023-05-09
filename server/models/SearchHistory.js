const { model, Schema } = require('mongoose');

const searchHistorySchema = new Schema({
  keyword: String,
  createdAt: String
});

module.exports = model('SearchHistory', searchHistorySchema);
