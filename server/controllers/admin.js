module.exports = {
    async adminPage (ctx)  {
        const title = 'admin';
        await ctx.render('admin',{
            title
        });
    }
}