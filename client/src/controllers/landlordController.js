exports.homePage = (req, res) => {
    res.render('index', { title: "Slumlords are us" });
}

exports.listAllTenants = async (req, res, next) => {
    try {
        const allTenants = await allTenants.find();
        console.log("this route is working");
        res.render('all_tenants', { title: "All Tenants", allTenants});
        // res.json(allTenants);
    }
    catch (errors) {
        next(errors);
    }
}

// Add a property to the database
const createProperty = (req, res, next) => {
    const property = new Property(req.body)
    tenant.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        res.status(200).json({
            message: "Property Successfully Added!"
        })
    })
    console.log("success");
}