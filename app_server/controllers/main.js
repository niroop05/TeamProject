/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Yeager Groceries' });
    };
module.exports = {
    index
    };