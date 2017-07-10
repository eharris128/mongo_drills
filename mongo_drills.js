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
        }, 
        {
            "grades" : { $ne: [] }
            },
        {
            "grades.grade" : { $ne: 'Not Yet Graded'}
        },
        {
            "grades.score" : { $gte: 0}
        }
    ]   
} ).count();





//2

// How many restaurants were filtered out?

    //original total - 25359
db.restaurants.find({}).count();

    //filtered total - 24030
db.restaurants.find( { $and: 
    [ 
        {
            "cuisine" : { $ne: "Not Listed/Not Applicable" } 
        },
        {
            "borough" : { $ne: "Missing" }
        }, 
        {
            "grades" : { $ne: [] }
            },
        {
            "grades.grade" : { $ne: 'Not Yet Graded'}
        },
        {
            "grades.score" : { $gte: 0}
        }
    ]   
} ).count();

//3

//mongo ds153652.mlab.com:53652/sandbox -u devdev -p devdev1
// Ignoring your filter (i.e. querying all of the restaurants):
// Create a list of all of the cuisines offered by the restaurants, with no duplicates
db.runCommand({
    distinct: "restaurants", key: "cuisine"
});
    

// Find the first five restaurants with the lowest positive score in one of their gradings.
db.restaurants.find({
    "grades.score" : { $eq: 2}
}).limit(5).pretty();

// Find the restaurants which have only been graded A.
db.restaurants.find({
    "grades": {"$not": {"$elemMatch":{"grade":{$nin:["A"]}}}}
}).pretty();