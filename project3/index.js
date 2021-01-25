const https = require('https');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const input = process.argv.slice(2)[0];

const cookie = 'hasCookie=true';
const hostname = 'codequiz.azurewebsites.net';

const options = {
    hostname,
    port: 443,
    path: '/',
    method: 'GET',
}

const request = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        const dom = new JSDOM(data);
        const nodeList = [...dom.window.document.querySelectorAll('tr > td')];
        let isFund = false;
         nodeList.map((node) => (node.innerHTML.trim()))
            .forEach((ele) => {
                if(isFund) {
                    console.log(ele);
                    isFund = false;
                }
                if(ele === input) isFund = true;
            });
    });
});

request.setHeader('Cookie', [cookie]);

request.on('error', (e) => {
    console.error(e);
});

request.end();