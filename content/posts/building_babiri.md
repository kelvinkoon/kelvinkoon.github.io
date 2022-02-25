---
title: "Building babiri.net"
date: 2022-02-22
tags: ["project", "babiri", "full-stack"]
draft: false
---

## Prologue

### A Children's Game

In 2005, I received a copy of Pokémon Emerald for the Nintendo Game Boy. This would be my gateway to the Pokémon franchise, as I'd end up sinking countless hours into the series of games. I have fond memories challenging all the leaders at the Battle Frontier, capturing Shadow Lugia at Citadark Isle, hunting for secret base flags in The Underground, and many more through the years. However, it wasn't until high school I discovered the Pokémon competitive scene.

In the summer after my first year at UBC, I had the privilege of representing Canada at the Pokémon World Championships. Prior to this, I had been mostly attending local tournaments for the past 3 years. I decided to travel out of Canada for the 2016 season to make a bid for a Worlds invite. Through my efforts, I managed to place Top 16 at Oregon Regionals, Top 4 at [Seattle Regionals](https://www.pokemon.com/us/play-pokemon/spring-regional-championships-2016/teams/washington-masters/#team-kelvin-koon-masters-division-semi-finalist), and 1st at a stacked [Midseason Showdown](https://www.youtube.com/watch?v=tWtzO6odj-o) to secure my Worlds invite and a travel stipend to Nationals. Though I had mediocre placings at Nationals and Worlds, it was an unforgettable experience living out my childhood dream of vying for the Pokémon World Champion title.

### babiri V1

At the beginning of 2020, I wrote [babiri V1](https://github.com/kelvinkoon/babiri_v1) to help players gain insight on Pokémon Showdown's competitive metagame. Though I wasn't actively competing in Pokémon any longer, I thought there was potential in bringing data-driven analytics to the competitive scene. There was precedence for tools aimed at competitive players with sites such as [Pikalytics](https://www.pikalytics.com/) and VGCStats. What started as a single Python script writing to a CSV file became a tool with quite the following; the site garnering 100k visitors in its first few months and was even featured on the [Pokésports Podcast](https://www.youtube.com/watch?v=ZYbqsDLq994). Though the community was quite happy with babiri, it's been long overdue for a rewrite as tech debt and tight coupling have made it difficult to add new features.

Following my last internship and graduation, I had 2 months without any commitments, which was the perfect time to tackle the rewrite. Though the end product is simple, there were some interesting abstractions and design decisions in babiri's backend and data pipeline. At the time of writing, I have indefinitely put the frontend on hold due to work commitments. However, I intend to deploy a fully functioning site at some point in the future.

## Teambuilding as a Problem

To compete in a Pokémon tournament, one must build a Pokémon team first. [Aaron Traylor](https://attraylor.github.io/) eloquently explains the complexity found within competitive Pokémon teambuilding.

> This game is unique among zero-sum strategy games for several reasons, but mainly because of its emphasis on the "draft" phase: both players select their action space within the game, and afterwards make actions in the environment. The draft phase is common in other games that AI systems have successfully played (League of Legends, DotA 2, Honor of Kings), but in Pokémon, the draft phase is scaled up to an astronomically large state space (roughly 10^200), meaning the game will require novel research before an AI can achieve superhuman strength.

Teambuilding is arguably the most complex aspect of Pokémon. A team is comprised of 6 individual Pokémon. Each Pokémon has an item slot and 4 moveslots. Furthermore, there are different EV spreads (ie. builds) in how a Pokémon is trained. For instance, [Thundurus](https://www.smogon.com/dex/ss/pokemon/thundurus/vgc21/) functions very differently with an offensive build compared to a defensive build. Many players would agree a robust team should maximize its number of positive matchups while minimizing its weak matchups. Since no team is perfect, it becomes a balance of accepting which matchups should be consistently won and which matchups are worth compromising.

### Data-Driven Pokémon

It is common for competitive players to spend months refining a team through multiple iterations. For instance, my friends and I piloted the same archetype for 5 months during the 2016 season up until Nationals. Great teams have effective answers to common current metagame fixtures; for instance, players may opt to build teams with a positive matchup against the popular Groudon / Xerneas archetype, as one would expect this team to frequently appear at tournaments. Metagame trends shift as the season progresses, as players improve their teams and innovate new ideas.

There were few tools focused on the competitive metagame landscape from Pokémon Showdown data. Pikalytics offers monthly reports of competitive usage stats from [Smogon servers](https://www.smogon.com/stats/2022-01/), but there was a niche in offering granular team data on a daily basis. In particular, the manual process of searching for top ranked ladder users and querying individual public replays on Pokémon Showdown was time-consuming and monotonous. Ultimately, I wanted to build a tool where daily team snapshots would be automatically extracted from replay logs based on top ranked users for each format. Insights such as time-series individual Pokémon usage and team archetypes trends would be accessible all in one place, providing valuable teambuilding insight for all players. With a public API, anyone could use this data for their own research purposes (eg. ML, data visualization, etc).

## Rewrite Objectives

There were a few notable objectives I aimed to hit for the backend and data pipeline rewrite.

-   **Open-Source**: It was exciting seeing interest in open-source contributions following the first release. Making it open-source would help other developers make similar tools, as I've also received many questions on how I implemented certain features. It also provides transparency, as babiri is against botting to scout for private team replays.
-   **Tests**: I've come to appreciate well-written tests since the first iteration. Though not the most exciting part of development, tests are crucial in saving developers from massive headaches when pushing new features.
-   **CI/CD**: Continuous Integration / Continuous Development is especially valuable with more than one developer on the project. Automating tests and formatting helps ensure consistent and functioning code is merged. Github Actions was fairly easy to set up a workflow for the project.
-   **Additional Formats**: Given the vast number of available formats, it was important to consider an easy way to provision adding or removing formats from the data pipeline and server.

## Tech Stack

The rewrite featured a few changes in its tech stack to better suit the project.

### Golang

The backend server was implemented in [Go](https://go.dev/), which was surprisingly pleasant to work with for the project. [Mux](https://github.com/gorilla/mux) was used as the web framework of choice. Having learned it for CPEN431 last year, Go's familiarity was also an asset for timely development. babiri V1's backend was written in JavaScript (JS) since the web development tutorials I learned from were heavily catered to JS. Another consideration was writing the backend in Python with a framework such as Flask or Django. However, both JS and Python lack static typing checks as interpreted languages. I strongly prefer languages where the compiler throws clear and concise error messages. In particular, working at Tesla taught me the care needed with developing sizeable systems in Python. Go's fast compile times, strong typing system, and simple deployment (ie. building a binary) are its strongest assets. However, I encountered some issues with documentation for certain libraries given Go is a newer language. Furthermore, working with generics would've been appreciated (though it is coming in [Go 1.18](https://tip.golang.org/doc/go1.18)). Nonetheless, Go has made itself a favourite of mine for backend development.

### Python

[Python](https://www.python.org/) was used extensively for the data pipeline due to its familiarity, as it is my comfort language of choice. babiri V1's data pipeline also featured Python, as the language's succinct syntax and fantastic data scraping capabilities made it a suitable candidate. In particular, the [`requests`](https://docs.python-requests.org/en/latest/) and [`beautifulsoup4`](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) libraries combined with regex greatly simplified data parsing. Python also features great tooling support, such as [`black`](https://black.readthedocs.io/en/stable/) for formatting and [`mypy`](http://mypy-lang.org/) for static type checking.

### MongoDB

Choosing a NoSQL database provided flexibility to store any kind of incoming data. I didn't spend much time considering alternatives, as I expected to work with relatively simple queries. [Mongo Atlas](https://www.mongodb.com/atlas/database), MongoDB's cloud service, made hosting and connecting to an instance a breeze. I initially considered DynamoDB, but MongoDB's free tier was sufficient for the project. The only issue I encountered was MongoDB's free tier blocked certain operations (eg. `$in`), which meant rewriting certain queries to use available operations.

### AWS Lambda

[AWS Lambda](https://aws.amazon.com/lambda/) was the perfect tool for deploying the data pipeline. Previously, the data pipeline was hosted on an EC2 instance but I was dissatisfied with the resources consumed as it was only needed once every 24 hours. Leveraging AWS Lambda's "pay as you run" model made it cost-effective and scalable. Lambda supporting [Docker](https://www.docker.com/) images through [Elastic Container Registry](https://aws.amazon.com/ecr/) also helped streamline deployment.

### AWS EC2

I opted to host the server on an [EC2](https://aws.amazon.com/ec2/) instance due to Go's ease of deployment. The deployment process is handled with Docker building the binary and spinning up a container. Due to my inexperience with the AWS Lambda / API Gateway stack, I was overly cautious of potential skyrocketing costs with hosting a public API. Fewer things (eg. my wallet) were likely to go wrong with an EC2 deployment.

## Data Pipeline

### Module Architecture

The data pipeline is comprised of 3 main modules: `DataExtractor`, `LogHandler`, and `ModelTransformer`. It is named after [Drilbur](https://www.serebii.net/pokedex-swsh/drilbur/), the mole Pokémon. Below is a diagram representing data flow between modules.

![Data Extractor Architecture](/images/Data_Extractor_Architecture.png)

The `DataExtractor` ingests, parses, and extracts replay data. The Lambda handler passes the format to run as an argument. The log retrieval process is as follows:

1. Retrieve the users from the [Pokémon Showdown ranked ladder](https://pokemonshowdown.com/ladder) for the specified format.
2. Iterate through the users retrieved. Given a user, find all available [replay logs](https://replay.pokemonshowdown.com/).
3. Given the list of replay logs, find the most recent for the specified format and pass it to the `LogHandler`. If no replays for the format are found, skip to the next user.

An uncommonly known tip is one can access a replay's data by appending `.json`. For instance, `https://replay.pokemonshowdown.com/gen8vgc2020-1197324298` would become `https://replay.pokemonshowdown.com/gen8vgc2020-1197324298.json`. The log is also directly accessible by appending `.log` instead.

The `LogHandler` processes logs into an internal [`ParsedUserReplay`](https://github.com/kelvinkoon/babiri_v2/blob/master/src/data_pipeline/models/replay_metadata.py#L30) model. Upon `feed` being called, the logs are sanitized to make regex parsing easier (eg. accounting for alternate-form Pokémon in team preview). Below is an example of an unsanitized and sanitized log:

```
|poke|p1|Dragapult, L50, F|
|poke|p1|Zacian-*, L50|
|poke|p1|Torkoal, L50, F|
|poke|p1|Charizard, L50, F|
|poke|p1|Indeedee-F, L50, F|
|poke|p1|Whimsicott, L50, M|
|poke|p2|Pyukumuku, L50, M|
|poke|p2|Sneasel, L50, F|
|poke|p2|Urshifu-*, L50, F|
|poke|p2|Lapras, L50, F|
|poke|p2|Toxapex, L50, F|
|poke|p2|Eternatus, L50|
--------------------------
|poke|p1|Dragapult|
|poke|p1|Zacian|
|poke|p1|Torkoal|
|poke|p1|Charizard|
|poke|p1|Indeedee-F|
|poke|p1|Whimsicott|
|poke|p2|Pyukumuku|
|poke|p2|Sneasel|
|poke|p2|Urshifu|
|poke|p2|Lapras|
|poke|p2|Toxapex|
|poke|p2|Eternatus|
```

From the sanitized log, regex parses the replays to populate the `ParsedUserReplay`, which acts as the internal state shared with `ModelTransformer`. The abstraction makes adding future new properties (eg. items) easier. The `ModelTransformer` finally converts the fields from `ParsedUserReplay` to the [database models](https://github.com/kelvinkoon/babiri_v2/blob/master/src/data_pipeline/models/db_models.py).

### Infrastructure

The `DataExtractor` is deployed as a private AWS Lambda function. To trigger a run everyday, the Lambda function is connected to a scheduled EventBridge event with a cron expression. The EventBridge event sends a payload following the format of `{"format": [FORMAT]}`. For every format supported, an EventBridge trigger is required.

As previously mentioned, ECR is used to easily deploy Docker images to AWS Lambda. Although it is currently manually configured, I may explore integrating the process into CI using [AWS Actions](https://github.com/aws-actions/amazon-ecr-login).

## Server

### Caching

### Deployment

## Future Work

## Conclusion

### Special Thanks
