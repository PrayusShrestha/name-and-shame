const Company = require('../models/Company');
const { findCompany, createCompany, autoSearch } = require('../utils/company_utils');
const { upvote, findTags } = require('../utils/tag_utils');

const { addReview } = require('../utils/review_utils');


module.exports = (app) => {

    app.get('/tags/:name/:tag', async (req, res) => {
        console.log("tags");
        let tags = await findTags(req.params.name, req.params.tag);
        res.send(tags);
    });

    app.get('/companies/search/:name', async (req, res) => {
        let companies = await autoSearch(req.params.name);
        res.send(companies);
    });

    app.post('/companies/:name/:id', async (req, res) => {
        let [status, err] = await upvote(req.params.name, req.params.id);
        if (status == 200) {
            res.send(200);
        } else {
            res.status(400).json({ error: err });
        }
    });

    // Gets a list of all companies
    app.get('/companies', async (req, res) => {
        companies = await findCompany();
        res.json({ "companies": companies });
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

    // Create a review
    app.post('/companies/:name', async (req, res) => {
        const json = req.body;

        let status, err = await addReview(
            req.params.name,
            json.title,
            json.timestamp,
            json.trashiness,
            json.description,
            json.tags
        );

        res.json({ 'status': status, 'msg': err });
    });   
}

