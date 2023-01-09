import url from 'url';
import http from 'http';

const getBody = (html) => html.split('<body>')[1].split('</body>')[0];
const getTitle = (body) => body.match(/<h1>(.*?)<\/h1>/)[1];
const getLinks = (body) => (body.match(/href="\/(.*?)">/g) || [])
  .map((item) => item.match(/href="\/(.*?)">/)[1]);

const parseWIKI = (targetTitle, address, callback) => {
  const visitedLinks = [];
  const notVisitedLinks = [address];

  const iter = () => {
    const link = notVisitedLinks.pop();
    if (!link) {
      callback('Parsed all links, target page not found');
      return;
    }

    visitedLinks.push(link);

    const req = http.get(link, (res) => {
      const chunks = [];

      res.on('data', (buf) => {
        chunks.push(buf.toString())
      }).on('end', () => {

        const html = chunks.join('');
        const body = getBody(html);
        const title = getTitle(body);
        const links = getLinks(body);
        if (title === targetTitle) {
          callback(null, link);
          return;
        }
        // add only new unique links
        const allLinks = [...visitedLinks, ...notVisitedLinks];
        const propperLinks = links.map(l => {
          try {
            return new url.URL(l);
          } catch {
            const origin = new url.URL(link).origin
            return `${origin}/${l}`;
          }
        });
        const filtered = propperLinks.filter(l => !allLinks.includes(l));
        notVisitedLinks.push(...[...new Set(filtered)]);
        iter();
      })
    });

    req.on('error', callback);
  }

  iter();
};
