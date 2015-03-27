# simpleDisqus
a directive to add discus to your angular site simplly


#how to use

add simpleDisqus to your required modules list

    angular.module('yourAPP', [..., 'simpleDisqus']

use the directive in your view

    <div disqus shortname="your_shortname_here"></div>

add other configuration variables to the window

    window.disqus_identifier = 'a unique identifier for each page where Disqus is present';
    window.disqus_title = 'a unique title for each page where Disqus is present';
    window.disqus_url = 'a unique URL for each page where Disqus is present';


that's it!
