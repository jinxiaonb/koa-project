module.exports = {
    testJsonPost( ctx ) {
        let formData = ctx.request.body;
        console.log(formData);
        ctx.body = formData;
    },
    testJsonGet(ctx){
        const query = ctx.query;
        const querystring = ctx.querystring;
        const requery = ctx.request.query;
        const requerystring = ctx.request.querystring;
        console.log(query);
        console.log(querystring);
        console.log(requery);
        console.log(requerystring);
        ctx.body = {
            query,querystring,requery,requerystring
        };
    }


}