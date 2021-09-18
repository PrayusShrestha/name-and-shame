require("dotenv").config();
const Company = require('../models/Company');
const { findCompany } = require("./company_utils");


exports.upvote = async (name, timestamp) => {
    let company = findCompany(name);
    let reviews = [];
    
    if (company) {
        let reviews = company.reviews;
        for (let review of reviews) {
            if (review.timestamp == timestamp) {
                review.votes++;
            }
        }
        const res = await Company.updateOne({ name: 'name' }, { reviews: reviews });
        return [200];
    } else {
        return [400, "Error: could not find company"]
    }

};