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

// const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay * 1000))

// const settings2 = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://instagram47.p.rapidapi.com/location_posts?locationid=110556885632390",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "9abdb45f15mshc53524d0b4a510bp1483cajsn671ac3d7f57c",
// 		"x-rapidapi-host": "instagram47.p.rapidapi.com"
// 	}
// };

// let ownerID = []

// $.ajax(settings2).done(function (response) {
//     for (let i=0;i<10;i++) {
//         ownerID.push(response.body.edge_location_to_top_posts.edges[i].node.owner.id)
//     }

//     console.log(ownerID)
//     getSomething()
// });


// let data = []

// async function getSomething() {

//     await sleep(2)

//     for (let i=0;i<ownerID.length;i++) {

//         console.log("getting data")

//         const settings = {
//             "async": true,
//             "crossDomain": true,
//             "url": `https://instagram47.p.rapidapi.com/public_user_posts?userid=${ownerID[i]}`,
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-key": "9abdb45f15mshc53524d0b4a510bp1483cajsn671ac3d7f57c",
//                 "x-rapidapi-host": "instagram47.p.rapidapi.com"
//             }
//         };
    
//         $.ajax(settings).done(function (response) {
//             data.push({username: ownerID[i], image: response.body.edges[0].node.display_url })            
//         })

//         await sleep(2)
//     }

//     console.log(data)
// }


const HOST = "http://localhost:8080"


async function getUsers() {

    fetch(HOST, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            { getImages {
                link
                user {
                    username
                    location
                    followers
                }
            } }`
        }),
      })
      .then(res => res.json())
      .then(res => {
        const data = res.data
        console.log(data)
        printToScreen(data)
      })



}

getUsers()

function printToScreen(data) {
    const rootEl = document.getElementById("root")        

    data.getImages.forEach(element => {
        const post = document.createElement("div")
        post.className = "posts"

        const nameEl = document.createElement("div")
        nameEl.innerText = `User: ${element.user.username}, Location: ${element.user.location}, Followers: ${element.user.followers}`
        nameEl.className = "names"

        const imgEl = document.createElement("img")
        imgEl.src = element.link
        imgEl.alt = " -------A sexy instagram image"

        nameEl.append(imgEl)

        post.appendChild(nameEl)

        rootEl.append(post)
    });
    
}