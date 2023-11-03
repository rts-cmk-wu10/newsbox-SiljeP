const KEY = "X3CCZda4H2e4bv2yUieN2AI5m0U7njTV"

fetch(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${KEY}`)
    .then(function (response) {
        if (response.status !== 200)
            throw new Error("error message")
        return response.json()
    })
    .then (function(data){
		console.log(data);
	})

    .catch(function (error) {
        console.log(error) //her gribes fejlen, og man kan bruge den til 
        // noget eks. skrive den i konsollen eller paa siden
        // window.location.href = "/ups.html"
    })