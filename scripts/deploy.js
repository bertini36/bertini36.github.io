const ghpages = require('gh-pages');

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