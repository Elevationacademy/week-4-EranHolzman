// Exercise 1

const fetch = function (number){
    
   
$.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${number}`, function(result){
  console.log(result.items[0].volumeInfo.title) 
})

}
fetch(9782806269171)

Exercise 2


const fetch = function (queryType, queryValue){

   
    
    $.get(`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`, function(result){
      
        console.log(result.items[0].volumeInfo) 
    })
    
    }


fetch("isbn", 9789814561778)
fetch("title", "How to Win Friends and Influence People")


// EXERCISE 3


const fetch = function (queryType, queryValue){
    
    $.get(`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`, function(result){

    const array1 = [result]
    const title = result.items[0].volumeInfo.title
    const authors = result.items[0].volumeInfo.authors
    const ISBN = result.items[0].volumeInfo.industryIdentifiers[0].identifier
    
      
        array1.forEach(function (result) {
            console.log("The title is - " + title + ", The author is " + authors + ". The ISBN IS " + ISBN)
        });
    })
    
    }

    fetch("isbn", 9789814561778)
