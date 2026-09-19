import https from 'https';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function run() {
  console.log('Fetching https://mphdgroup.com ...');
  const home = await fetchUrl('https://mphdgroup.com');
  console.log('Home status:', home.status);
  console.log('Render origin:', home.headers['x-render-origin-server']);
  console.log('HTML Length:', home.body.length);

  const scripts = [...home.body.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
  const links = [...home.body.matchAll(/href="([^"]+)"/g)].map(m => m[1]);

  console.log('Scripts in HTML:', scripts);
  console.log('Links in HTML:', links);

  for (const s of scripts) {
    const scriptUrl = s.startsWith('http') ? s : `https://mphdgroup.com${s}`;
    const res = await fetchUrl(scriptUrl);
    console.log(`Script ${scriptUrl} => Status ${res.status}, Length ${res.body.length}`);
    if (res.status !== 200) {
      console.error(`FAILED TO LOAD SCRIPT: ${scriptUrl}`);
    }
  }

  for (const l of links) {
    if (l.endsWith('.css')) {
      const linkUrl = l.startsWith('http') ? l : `https://mphdgroup.com${l}`;
      const res = await fetchUrl(linkUrl);
      console.log(`CSS ${linkUrl} => Status ${res.status}, Length ${res.body.length}`);
    }
  }
}

run().catch(console.error);
