import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({locals, url, cookies}) => {   
    
    console.log("OVERVIEW SERVER PAGE LOAD ORDERS CREATE--> +page.server.ts: -- COOKIE VALUE: ", cookies.get('DEBUG'));

    /*const user = locals.session.data.user;
    const queryResponse: APIResponse<ProductQuery> = await QueryService.query(user.access_token, url.searchParams.toString());
    console.log("SERVER PAGE LOAD ORDERS CREATE--> +page.server.ts");*/
    
    return {
        query: {}
    };
};
