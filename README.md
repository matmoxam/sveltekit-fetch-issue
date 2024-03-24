# sveltekit-fetch-issue
This repo demonstrates the server load functions being triggered when a fetch call is done

## Steps to run
1. npm install
2. npm run dev
3. Navigate to http://localhost:<port-num>/sverdle
4. Navigate to http://localhost:<port-num>/
5. The following should be displayed in the console:  
   LAYOUT SERVER LOAD --> +layout.server.ts --  This is for debugging  
   MAIN SERVER PAGE LOAD --> +page.server.ts: -- COOKIE VALUE:  This is for debugging  
   MAIN SERVER PAGE LOAD --> +page.server.ts: -- COOKIE VALUE:  This is for debugging

7. Click the "Test Now" Button  
  The following should be added to the console output demonstrating the double load issue and the no cookies being present:  
  LAYOUT SERVER LOAD --> +layout.server.ts --  undefined  
  MAIN SERVER PAGE LOAD --> +page.server.ts: -- COOKIE VALUE:  undefined  
  LAYOUT SERVER LOAD --> +layout.server.ts --  undefined  
  MAIN SERVER PAGE LOAD --> +page.server.ts: -- COOKIE VALUE:  undefined  
