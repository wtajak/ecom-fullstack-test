import fs from 'fs';
import path from 'path';

export default (app) => {
    app.get('/api/products', (req, res) => {
        fs.readFile((path.resolve(__dirname, './products.json')), (err, resp) => {
            if (err) {
                res.status(500).send('Something went wrong');
            }

            res.send(resp);
        });
    });
};