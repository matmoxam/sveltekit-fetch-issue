
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, cookies}) => {
    
    console.log("LAYOUT SERVER LOAD --> +layout.server.ts -- ", cookies.get("DEBUG"));

    return {
		session: {}
		
	};
};