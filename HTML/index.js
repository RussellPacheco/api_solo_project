// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://instagram47.p.rapidapi.com/location_search?search=Tokyo",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "9abdb45f15mshc53524d0b4a510bp1483cajsn671ac3d7f57c",
// 		"x-rapidapi-host": "instagram47.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay * 1000))

async function poop() {
    console.log("poop")
    await sleep(2)
    console.log("p22222oop")
}

poop()


const settings2 = {
	"async": true,
	"crossDomain": true,
	"url": "https://instagram47.p.rapidapi.com/location_posts?locationid=110556885632390",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "9abdb45f15mshc53524d0b4a510bp1483cajsn671ac3d7f57c",
		"x-rapidapi-host": "instagram47.p.rapidapi.com"
	}
};

let ownerID = []

$.ajax(settings2).done(function (response) {
    for (let i=0;i<10;i++) {
        ownerID.push(response.body.edge_location_to_top_posts.edges[i].node.owner.id)
    }

    console.log(ownerID)
    getSomething()
});


async function getSomething() {

    await sleep(2)

    for (let i=0;i<ownerID.length;i++) {

        console.log("getting data")

        const settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://instagram47.p.rapidapi.com/public_user_posts?userid=${ownerID[i]}`,
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "9abdb45f15mshc53524d0b4a510bp1483cajsn671ac3d7f57c",
                "x-rapidapi-host": "instagram47.p.rapidapi.com"
            }
        };
    
        $.ajax(settings).done(function (response) {
            console.log(response)
        })

        await sleep(2)
    }
}
