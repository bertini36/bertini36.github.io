const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'myblog.git',
        user: {
            name: 'bertini36',
            email: 'albertopouquiros@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)