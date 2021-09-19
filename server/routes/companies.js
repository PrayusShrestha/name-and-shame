const Company = require('../models/Company');
const { findCompany, createCompany, autoSearch } = require('../utils/company_utils');
const { upvote, findTags } = require('../utils/tag_utils');

const { addReview } = require('../utils/review_utils');


module.exports = (app) => {
    // Gets a list of all companies
    app.get('/companies', async (req, res) => {
        companies = await findCompany();
        res.json({ "companies": companies });
    }); 
    
    app.get('/companies/search/:name', async (req, res) => {
        let companies = await autoSearch(req.params.name);
        res.json({'companies': companies});
    });

    // Add company
    app.post('/companies', async (req, res) => {
        const json = req.body;
        const name = json.name;
        const industry = json.industry;
        
        const [statusCode, err] = await createCompany(name, industry);
        res.json({
            "status": statusCode,
            "message": err
        });
    });

    app.get('/companies/:name', async (req, res) => {
        let company = await findCompany(req.params.name);
        res.send(company);
    });

    app.get('/companies/:name/:tag', async (req, res) => {
        let tags = await findTags(req.params.name, req.params.tag);
        res.send(tags);
    });

    // Create a review
    app.post('/companies/:name', async (req, res) => {
        // This is broken
        const json = req.body;

        let status, err = await addReview(
            json.timestamp,
            json.trashiness,
            json.description
        );
    });

    app.post('company/:timestamp', async (req, res) => {
        let [status, err] = await upvote(req.params.timestamp);
        if (status == 200) {
            res.send(200);
        } else {
            res.status(400).json({ error: err });
        }
    })
}

