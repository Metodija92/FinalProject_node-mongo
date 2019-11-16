const mProducts = require('../models/products')

const getAll = (req, res) => {
    mProducts.getAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send(err);
    });
}

const getOne = (req, res) => {
    mProducts.getOne(req.params.id)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send(err);
    });
}

const save = (req, res) => {
    var data = req.body;
    let er = 0;
    if(data.productName == undefined || data.productName.length == 0){er++;}
    if(data.productType == undefined || data.productType.length == 0){er++;}
    if(data.productDescription == undefined || data.productDescription.length == 0){er++;}
    if(data.purchaseDate == undefined || data.purchaseDate.length == 0){er++;}
    if(data.productPrice == undefined || data.productPrice.length == 0){er++;}
    

    if(er == 0){
        mProducts.save(data)
        .then(() => {
            res.status(201).send('Created');
        })
        .catch(err => {
            res.status(500).send(err);
        });
    } else {
        res.status(400).send('Bad request');
    }
}

const replace = (req, res) => {
    var data = req.body;
    let er = 0;
    if(data.productName == undefined || data.productName.length == 0){er++;}
    if(data.productType == undefined || data.productType.length == 0){er++;}
    if(data.productDescription == undefined || data.productDescription.length == 0){er++;}
    if(data.purchaseDate == undefined || data.purchaseDate.length == 0){er++;}
    if(data.productPrice == undefined || data.productPrice.length == 0){er++;}

    if(er == 0){
        mProducts.replace(req.params.id, data)
        .then(() => {
            res.status(201).send('Replaced');
        })
        .catch(err => {
            res.status(500).send(err);
        });
    } else {
        res.status(400).send('Bad request');
    }
}

const update = (req, res) => {
    var data = req.body;
    mProducts.replace(req.params.id, data)
    .then(() => {
        res.status(201).send('Updated');
    })
    .catch(err => {
        res.status(500).send(err);
    });
}

const remove = (req, res) => {
    mProducts.remove(req.params.id)
    .then(() => {
        res.status(201).send('Removed');
    })
    .catch(err => {
        res.status(500).send(err);
    });
}

module.exports = {
    getAll,
    getOne,
    save,
    replace,
    update,
    remove
}