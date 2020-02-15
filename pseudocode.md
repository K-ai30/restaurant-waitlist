1. We need a front end with html, css, and JavaScript.
    - Bootstrap CDN
    - jQuery CDN
        -- Use AJAX to GET table data and also POST table data
    - Pages
        --index.html (home page)
        --tables.html (view tables)
        --make reservation.html (make reservation form)

2. We need a back end created using NodeJS and Express.

3. Create a couple of array variables that will hold my data
    -Main dining room tables (maximum of 5)
    -Waiting list tables (no maximum)

4. We need routes!
    - API routes
        --We need a GET route for our tables array AND for our waiting list array
        --We need a POST route to send new table info to our server so it can put the new table objects in the correct array
    - HTML routes
        --route for index.html ("/")
        --route for tables.html ("/tables")
        --route for make reservation.html ("/reserve")
        
5. jQuery
    -Use jQuery to post our table information to the server's POST route
    -We'll also use jQuery to GET table info when we populate our current table list / wait list

