
function addDomain(domainName = '') {
  // ln -s bla.litt.localhost/ sites/wowbla.localhost
  `dokku domains:add litt ${domainName}`;
  `dokku letsencrypt:enable litt`;
}

module.exports = addDomain;