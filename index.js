const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());

app.get('/.well-known/assetlinks.json',async (req,res) => {
    res.json([
        {
            "relation": [
                "delegate_permission/common.handle_all_urls"
            ],
            "target": {
                "namespace": "android_app",
                "package_name": process.env.PACKAGE,
                "sha256_cert_fingerprints": [
                    process.env.SHA
                ]
            }
        }
    ]);
})
app.get('/', async (req, res) => {
    res.json();
});

app.listen(3000,() => {
    console.log('Server running on port 3000');
})