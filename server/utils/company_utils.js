require("dotenv").config();
const Company = require('../models/Company');

exports.findCompany = async (companyName="") => {
    if (companyName === "") {
        companies = await Company.find().exec();
        if (companies) {
            return companies;
        } else {
            return [];
        }
    } else {
        let company = await Company.findOne({ 'name': companyName });
        console.log(company);
        if (company) {
            return company;
        } else {
            return null;
        }
    }
};

exports.createCompany = async (name, industry) => {
    let newCompany = new Company({
        name: name,
        industry: industry,
        reviews: [],
        tags: []
    });

    console.log(newCompany);

    error = 200;
    try {
        await newCompany.save();
    } catch (err) {
        return [400, err]; 
    }

    return [200, null];
};
exports.autoSearch = async (companyName) => {
    let companies = await Company.find({ 'name': { '$regex': companyName, '$options': 'i' } });
    if (companies) {
        return companies
    } else {
        return []
    }
};

