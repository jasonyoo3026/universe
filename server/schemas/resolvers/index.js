const postResolvers = require('./posts');
const userResolvers = require('./users');
const commentResolvers = require('./comments');
const SearchHistory = require('../../models/SearchHistory');

module.exports = {
  Query: {
    ...postResolvers.Query,
    ...userResolvers.Query,
    getTopKeywords: async () => {
      try {
        const topKeywords = await SearchHistory.aggregate([
          { $group: { _id: "$keyword", count: { $sum: 1 } } },
          { $sort: { count: -1 } },
          { $limit: 10 },
          { $project: { _id: 0, keyword: "$_id", count: 1 } },
        ]);
        return topKeywords;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...postResolvers.Mutation,
    ...commentResolvers.Mutation,
    saveSearch: async (_, { keyword }, context) => {
      const newSearch = new SearchHistory({
        keyword,
        createdAt: new Date().toISOString(),
      });

      const search = await newSearch.save();
      return search;
    },
  },
};
