---
title: "State Machines, Pipelines, and Pokémon"
date: 2023-01-03
tags: ["statsugiri", "aws", "project"]
draft: false
---

## Prologue

A year ago, I launched [babiri](/posts/building-babiri-net)'s open-source API. The project's development halted shortly after as I acclimated to full-time work. The service proceeded to implode a few months after, left in radio silence until recently. With the advent of 2023, I've acquired the bandwidth to focus on developing a new suite of robust data tools. In particular, I'm happy to share what I've learned from industry to productionalize projects intersecting with my interests.

This post primarily covers the architecture for the new pipeline for daily data ingest pertaining to [Pokémon Showdown](https://pokemonshowdown.com/) high-ranked teams.

### Alola, Statsugiri

[babiri](https://github.com/kelvinkoon/babiri_v1) was the name of the project since its inception in early 2020. Unfortunately, the `babiri.net` domain has been lost to the trenches of domain name registrars. I attempted to register `babiri.gg` through Namecheap while releasing the `babiri.net` domain from GoDaddy. However, my Namecheap transaction was refunded since I missed their verification email. By the time I realized, both domains had been parked (presumably by bots). I adopted the Statsugiri domain name as a pun after the newly introduced [sushi species](<https://bulbapedia.bulbagarden.net/wiki/Tatsugiri_(Pok%C3%A9mon)>) in the Paldea region.

### Pokémon Showdown Data Ingestion

The ingestion pipeline accomplishes an identical objective to the [previous pipeline](/posts/building-babiri-net/#data-pipeline). Given a format (eg. `gen9ou`), the highest-ranked players on the Pokémon Showdown ladder are retrieved. The most recent replay for the requested format is parsed for team information through regex. If a player has no public replays available (eg. private replays), the next highest-ranked player is used as a datapoint. This is repeated until 100 teams have been parsed.

## Infrastructure Autopsy

A few issues undermined the feasibility and maintainability of the first iteration.

### Tedious Deployments

I leveraged AWS [Lambda](https://aws.amazon.com/lambda/) for the pipeline and [EC2](https://aws.amazon.com/ec2/) for server hosting. While Lambda abstracted some infrastructure work, there was still a fair share of operations work to manually associate resources such as EventBridge triggers. It was particularly unscalable for redeploying Lambdas as I'd have to build the images locally and upload them to ECR via CLI for each Lambda. EventBridge was also an issue if I wanted to include more formats. Server deployment was unideal since I had to manage SSL and manually build images to deploy as well.

### Lack of Monitoring

There was little monitoring to notify when the pipeline or server failed. The only available mechanism was to check the server to see if new data had been published for the day.

### Singular Point-of-Failure

Deploying the server on a single manually provisioned micro EC2 instance meant the service would be down if anything happened. To achieve redundancy, I'd have to manually provision multiple EC2 instances which costs time and sanity.

### Accessibility

Accessing the API was possible through making requests, such as through CURL. For non-technical audiences, the easiest method of making a request is through the browser. Should you go this path, the result is a massive JSON object bordering unreadable. I needed a middle-ground for making the data accessible for anyone in the community.

## Infrastructure Changes

To address previous shortcomings, I adopted [AWS CDK](https://aws.amazon.com/cdk/) into the workflow. Leveraging infrastructure as code (IaC) allows for deterministic deployments since it synthesizes the CloudFormation template for you. Manual configuration is greatly reduced since CDK handles creating and updating resources for every deployment. It also provides the added benefit of modularizing my application into stacks for more granular deployments. This concept extends to creating different stacks for different environments (eg. prod vs dev). CDK makes it simple to provision dashboards and alarms as well. Though there are other IaC frameworks such as [Terraform](https://www.terraform.io/), I opted for CDK for its familiarity and simple interface. Vendor lock-in isn't a concern given the scale of the project.

I aimed to deliver the data within the first few weeks of January, preferably before [San Diego Regionals](https://victoryroadvgc.com/2023-san-diego/). Given the timeline of 2-3 weeks, delivering a full-stack application was out of the picture. Instead, I opted to deliver the information through Twitter via their API. This was intended to be a lightweight, "belts-n-suspenders" solution to serve the community while I focus on the site.

## PS Ingestion Pipeline V2

![PS Ingestion Architecture](/images/PsIngestionDesign.png "High-Level Design")

The high-level architecture features a few notable design choices.

### State Machines

The ingestion pipeline is orchestrated with AWS [Step Functions](https://aws.amazon.com/step-functions/). Replay retrieval, team parsing, and writing are contained within their own Lambdas. Step Functions is capable of running branches in parallel, allowing for writes across multiple destinations. Decoupling data flow from business logic helps reduce the invocation duration compared to a single Lambda configuration instead. I initially considered invocating each Lambda with [SNS](https://aws.amazon.com/sns/) to chain invocations with pub/sub, but couldn't avoid the SNS calls being synchronous. Though it's likely possible to make the calls asynchronous, Step Functions featured numerous advantages.

Error handling and retries are important as the system can't control the data Pokémon Showdown provides. At the Lambda level, most issues were concerns with dependencies on some quirks of the Pokémon Showdown server. Most notably, the requests to retrieve player replays experienced higher variance in latency. I suspect it's due to some players having a large number of replays, but specifying the first page only didn't improve the response time through my haphazard benchmarks. The latency spiked upwards of 30 seconds in the worst scenarios. Iterating through a minimum of 100 replays meant the latency was a potential risk to Lambda's 15 minute execution limit. Another theory was the Pokémon Showdown server suffered from intermittent cold starts resulting in slowdowns. I added [retries with backoff](https://www.peterbe.com/plog/best-practice-with-retries-with-requests) in an attempt to mitigiate the issue, but to no avail. I valued the pipeline running end-to-end reliably over correct data as the objective is to provide a variety of teams. I opted to skip to the next highest-ranked player if the replay request times out.

Another interesting issue involved how Pokémon Showdown validates usernames when searching for replays. From my investigation, the server only accepts alphanumeric characters. Non-alphanumeric characters such as underscores and spaces are ignored. Usernames are also case-insensitive. For example, `Cool user`, `cooluser`, `cool_user`, and `とてもcooluser` all register as the same username. Another factor is the registered username on ladder and in replays may not be identical due to the aforementioned validation since the server does not "correct" the username. Despite having to relearn regex every time I rewrite the project, I followed a regex pattern similar to this [Stack Overflow post](https://stackoverflow.com/questions/6053541/regex-every-non-alphanumeric-character-except-white-space-or-colon). I foresee more regex in the project's future, so this likely won't be the last time I see it.

### Payload Size Issues

### CI/CD Pipeline

### Credential Handling

### Future Integrations

### Current State

## Conclusion

### Treading Overengineering

### Special Thanks
