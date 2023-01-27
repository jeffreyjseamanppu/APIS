const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('Hello API World');
});

/*
app.get('/api/games',(req, res) => {
    res.send(['MarioBros','Castlevania','Zelda','MK Tysons KO']);
});
*/
/*
app.get('/api/games/:id', (req, res) => {
    res.send(req.params.id);
});
*/
/*
app.get('/api/games/:title/:publisher/:year', (req, res) => {
    res.send(req.params);
});
*/
app.get('/api/games/:title/:publisher', (req, res) => {
    res.send([req.params, req.query]);
});

const ppugames =
[   {
        id:1,
        title: 'MarioBros'
    },
    {   id:2,
        title: 'Zelda'
    },
    {   id:3,
        title: 'DoubleDribble'
    },
    {   id:4,
        title: 'Ethans KnockOut'
    }
];

app.get('/api/games',(req, res) => {
    res.send(ppugames);
});

//query data
app.get('/api/games/:id',(req, res) => {
    const game = ppugames.find(g => g.id === parseInt(req.params.id));
    if(!game) return res.status(404).send('The game with ID given was not found');
    res.send(game);
});
























const port = process.env.PORT || 4004;
app.listen(port, () => console.log(`Listening to port ${port}`));