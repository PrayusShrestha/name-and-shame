require("dotenv").config();
const Company = require('../models/Company');
const { findCompany } = require("./company_utils");
const { v4: uuidv4} = require('uuid');

exports.addReview = async (name, title, timestamp, trashiness, description, tags)=> {
    let company = await findCompany(name);

    if (company) {
        let reviews = company.reviews;
        let companyTags = company.tags;
        console.log(reviews[0]);
        let review = {
            "title": title,
            "timestamp": timestamp,
            "trashiness": trashiness,
            "description": description,
            "votes": 0,
            "tags": tags,
            "_id": uuidv4()
        }
        reviews.push(review);
        company.reviews = reviews;
        for (tag of tags) {
            if (!companyTags.includes(tag)) companyTags.push(tag);
        }
        company.tags = companyTags;
        await company.save();
        // const res = await Company.updateOne({ 'name': company}, {'reviews': reviews});
        return [200];
    } else {
        return [400, "Error: Could not find company"];
    }
}