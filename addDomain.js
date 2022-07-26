function addDomain(domainName = '') {
  `dokku domains:add litt ${domainName}`;
  `dokku letsencrypt:enable litt`;
}

module.exports = addDomain;