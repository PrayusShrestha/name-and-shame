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
        let company = await Company.model.findOne({ 'name': companyName });
        if (company) {
            return company;
        } else {
            return null;
        }
    }
};

exports.autoSearch = async (companyName) => {
    let companies = Company.find(
        { $text: { $search: companyName } },
        { score: { $meta: "textScore" } }
     ).sort( { score: { $meta: "textScore" } } );
    
    if (companies) {
        return companies
    } else {
        return []
    }


    // Company.find({ 'name': { '$regex': nameToSearch, '$options': 'i' } }, (err, companies) => {
    //     res.send(companies);
    // });

};

