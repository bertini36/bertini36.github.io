const ghpages = require('gh-pages');
const fs = require('fs');

fs.writeFile('dist/CNAME', 'albertopou.dev', function(err) {});
ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'https://github.com/bertini36/bertini36.github.io.git',
        user: {
            name: 'bertini36',
            email: 'albertopouquiros@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)