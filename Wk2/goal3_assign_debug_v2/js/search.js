// Create privatized scope using a self-executing function
(function(){

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's) //shows the results page
	var resultsDIV = document.getElementById("results");            //fixed error - added semicolon
		searchInput = document.forms[0].search;                     //fixed error - added semicolon
		currentSearch = '';
	
	// Validates search query
	var validate = function(query){                                 //fixed error - changed spelling

		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){                              //fixed error - replaced = with ===
			query = query.substring(1, query.length);                 //creates the list of search results
		};
		while(query.charAt(query.length-1) === "") {
            query = query.substring(0, query.length - 1);
        };                                                          //fixed error -added curly brace

		// Check search length, must have 3 characters

		if(query.length < 3){
			alert('Your search query is too small, try again.');      //fixed - added ending quote

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
		};

		search(query);
	};

	// Finds search matches
	var search = function(query){                                   //fixed error - added curly brace

		// split the user's search query string into an array
		var queryArray = query.split(" ");                         //fixed error - changed .join to .split

		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');
			var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);       //fixed error - changed to Camel Case to .toLowerCase

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++) {
                var qitem = queryArray[ii].toLowerCase();                  //fixed error - changed to Camel Case to .toLowerCase

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem);
                if (compare !== -1) {
                    results.push(db[i]);
                };
            };                  //fixed error -added curly brace
        };                      //fixed error -added curly brace

		results.sort();

                                                                      // verified - console.log("Am i getting to line 66?");

		// Check that matches were found, and run output functions
		if(results.length === 0){                                     // changed to ===
			noMatch();
		}else{
			showMatches(results);
		};
	};

                                                                      // verified console.log("Am i getting to line 76?");

	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};

                                                                       // verified - console.log("Am i getting to line 87?");

	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',
			title,
			url
            ;

                                                              //verified console.log("Am i getting to line 98?");

                                                             // console.log("Is the line BEFORE the for loop working?");

                                                             //checked value of j - console.log("what is the value of results.length? " + results.length);

		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){

                                                                              //verified -  console.log("Is my for loop working?");

			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].substring(0, titleEnd);                           //fixed error - changed from camel case to lower case

			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);

			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {
        var query = searchInput.value;
        validate(query);                                    //fixed error-changed spelling

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;
    };                              //fixed error -added curly brace

})();