# NewsOutlet assignment

## Main tasks
* Create a homepage showing the latest news, sorted in reverse chronological order
(newest to oldest).
* Allow visitors to change the order of articles to alphabetical by title (a-z, z-a).
* Allow visitors to filter articles by Source (select only 1 publisher at a time).
* Create a detail page to show a single article's full content.

## Components
* Home page
    * Sort alphabetical
    * Filter by source
* Detail page
    * Multiple parts needed for render or can we output it (almost) at once..
* "API"
    * Preferable GraphQL, but out-of-scope for this assignment
    * Will use REST to begin, if time permits convert to GraphQL
    * **Endpoints needed:**
        * getHome, properties needed
            * source
            * publishedAt
            * title
            * description
            * urlToImage
            * url
        * getDetail, properties needed
          * title
          * author
          * source
          * urlToImage
          * content
    
    

