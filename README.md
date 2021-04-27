****THIS WAS CREATED DURING MY TIME AT CODE CHRYSALIS****

# Instagram API
### Accessing Japan's most popular users



## Table of Contents

1.  [Introduction](#introduction)
1.  [Overview](#overview)
1.  [Environment](#environment)
    1.  [Installing Dependencies](#installing-dependencies)
1.  [Available Endpoints](#available-endpoints)
    1.  [Queries](#queries)
    1.  [Mutations](#mutations)
1. [Accessing the API](#accessing-the-api)
1.  [Contributing](#contributing)


## Introduction

Welcome to the Instagram API showing you Japan's most popular users and their posts. Here you have access the multiple endpoints that show you a user, their follower numbers, popularity rankings, and of course, posts. 

In this readme, I will provide you with more details on what backend techonlogies were used in the creation of the project. As well, showing you the available endpoints for your own personal use. 

## Overview

### Environment

Here we used several technologies for providing the API server. 

* TypeScript
* Apollo-Server
* Type GraphQL
* TypeORM
* Nodemon
* Dot-ENV

#### Installing Dependencies

After cloning the repo, to install depedencies:

```shell
npm install [OR] yarn install
```


## Available Endpoints

The following endpoints are available for your enjoyment!


### Queries

- [ ] `getUsers`
- [ ] `getUser(username: REQUIRED STRING)`
- [ ] `getMostPopular`
- [ ] `getImages`
- [ ] `getUserImages(username: REQUIRED STRING)`
- [ ] `getVideos(username: REQUIRED STRING)` ***STILL UNDER CONSTRUCTION
- [ ] `getLocation(username: REQUIRED STRING)`



### Mutations

- [ ] `createUser(data: {username: REQUIRED STRING, location: REQUIRED STRING, followers: REQUIRED NUMBER, popularity: OPTIONAL})`
- [ ] `addImage(data: {link: REQUIRED STRING, username: REQUIRED STRING})`
- [ ] `addVideo(data: {link: REQUIRED STRING, username: REQUIRED STRING})` ***STILL UNDER CONSTRUCTION
- [ ] `updateUser(username: REQUIRED STRING)`
- [ ] `updatePopularity()` When called, this will reorder the poplarity of all users based on follower count.



## Accessing the API

For accessing the API, utilize the following code

```shell
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
      .then(res => console.log(data))
```


## Contributing

If you would like to contribute, please contact me via Github!
