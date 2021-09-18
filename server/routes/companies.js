const Company = require('../models/Company');
const Review = require('../models/Review');
const Tag = require('../models/Tag');
const { findCompany } = require('../utils/company_utils');



module.exports = (app) => {
    // Gets a list of all companies
    app.get('/companies', async (req, res) => {
        companies = await findCompany();
        console.log(companies)
        res.send(companies);
    }); 
    
    // Add company
    app.post('/companies', (req, res) => {
        const json = req.body;
        const name = json.name;
        const industry = json.industry;
        
        let status = createCompany(name, industry);
        res.send
        
        const new_company = new Company({
            name: company.name,
            industry: company.industry
        });
        
        newCompany.save(function(err) {
            if (err) {
                res.status(400).json({ error: 'Error. Most likely duplicate key.' });
            }
            res.status(200);
        });

    });

    app.get('/companies/:name', (req, res) => {
        let company = findCompany(req.params.name);
        res.send(company);
    });

    app.post('/companies/:name', (req, res) => {
        // This is broken
        const review = req.body;
        const newReview = new Review({
            timestamp: review.timestamp,
            trashiness: review.trashiness,
            description: review.description,
        });
        
        newReview.save(function(err) {
            if (err) {
                console.log(err);
            }
        });
        
        const company = Company.findOne({ 'name': req.params.name });
        console.log(company.reviews);
        res.send(200);
        
        Company.findOneAndUpdate(
            { 'name': req.params.name }, 
            company,
            {new: true}
            );
    });

    app.get('/companies/search/:name', (req, res) => {
        const nameToSearch = req.params.name;
        Company.find({ 'name': { '$regex': nameToSearch, '$options': 'i' } }, function(err, companies) {
            res.send(companies);
        });
    });
}

