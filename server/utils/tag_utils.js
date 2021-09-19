require("dotenv").config();
const Company = require('../models/Company');
const { findCompany } = require("./company_utils");


exports.upvote = async (name, id) => {
    let company = await findCompany(name);
    
    if (company) {
        let reviews = company.reviews;
        let reviewIdx;
        for (let i = 0; i < reviews.length; i++) {
            if (reviews[i]._id == id) {
                reviewIdx = i;
            }
        }

        let review = reviews[reviewIdx];
        review.votes = review.votes + 1;

        reviews.splice(reviewIdx, 1);
        reviews.push(review);
        
        company.reviews = reviews;
        await company.save();
        company = await findCompany(name);
        return [200];
    } else {
        return [400, "Error: could not find company"]
    }

};

exports.findTags = async (name, tag) => {
   let company = await findCompany(name);
   let tags = company.tags;
   console.log(tags);
   let newTags = tags.filter(x => x.toLowerCase().includes(tag.toLowerCase()));
   console.log(newTags);
   return newTags;
}