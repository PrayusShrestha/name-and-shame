require("dotenv").config();
const Company = require('../models/Company');
// const companies = require("../routes/companies");

exports.findCompany = async (companyName="") => {
    if (companyName === "") {
        companies = await Company.find().exec();
        if (companies) {
            return companies;
        } else {
            return [];
        }
    } else {
        let company = await Company.model.findOne({ 'name': companyName });
        if (company) {
            return company;
        } else {
            return null;
        }
    }
};

