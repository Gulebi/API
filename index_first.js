const Joi = require('joi')
const express = require('express');
const app = express();

app.use(express.json());



const blocks = [
    { id: 1, name: 'block1' },
    { id: 2, name: 'block2' },
    { id: 3, name: 'block3' },
];



app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.get('/api/blocks', (req, res) => {
    res.send(blocks);
});



app.post('/api/blocks', (req, res) => {
    const { error } = validateBlock(req.body);

    if (error) {
        res.status(400);
        res.send(error.details[0].message);
        return;
    };

    const block = {
        id: blocks.length + 1,
        name: req.body.name
    };
    blocks.push(block);
    res.send(block);
});



app.put('/api/blocks/:id', (req, res) => {
    const block = blocks.find(b => b.id === parseInt(req.params.id));
    if (!block) {
        res.status(404);
        res.send('Block was not found.');
        return;
    }; // 404

    const { error } = validateBlock(req.body);

    if (error) {
        res.status(400);
        res.send(error.details[0].message);
        return;
    };

    block.name = req.body.name;
    res.send(block);
});

function validateBlock(block){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(block);
};



app.delete('/api/blocks/:id', (req, res) => {
    const block = blocks.find(b => b.id === parseInt(req.params.id));
    if (!block) {
        res.status(404);
        res.send('Block was not found.');
        return;
    }; // 404

    const index = blocks.indexOf(block);
    blocks.splice(index, 1);

    res.send(block);
});



app.get('/api/block/:id', (req, res) => {
    const block = blocks.find(b => b.id === parseInt(req.params.id));
    if (!block) {
        res.status(404);
        res.send('Block was not found.');
        return;
    }; // 404
    res.send(block);
});

app.listen(3000, () => console.log('Listening on port 3000...'));