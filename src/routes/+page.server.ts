import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({locals, url, cookies}) => {   
    
    console.log("MAIN SERVER PAGE LOAD --> +page.server.ts: -- COOKIE VALUE: ", cookies.get('DEBUG'));
    
    return {
        query: {}
    };
};
