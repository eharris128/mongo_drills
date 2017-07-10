//Three commands

//1

// Build a query to filter the data set. Find all of the restaurants which have:
// The cuisine set to something other than "Not Listed/Not Applicable"
// The borough set to something other than "Missing"
// At least one grade
// None of the grades set to "Not Yet Graded"
// None of the scores set to -1

db.restaurants.find( { $and: 
    [ 
        {
            "cuisine" : { $ne: "Not Listed/Not Applicable" } 
        },
        {
            "borough" : { $ne: "Missing" }
        }, {
            "grades.length" : { $gte: 1 }
            }
    ]   
} ).count();

db.restaurants.find("grades.length" : { $gte: 1} ).count();


//2

// How many restaurants were filtered out?


//3

// Ignoring your filter (i.e. querying all of the restaurants):
// Create a list of all of the cuisines offered by the restaurants, with no duplicates
// Find the first five restaurants with the lowest positive score in one of their gradings.
// Find the restaurants which have only been graded A.