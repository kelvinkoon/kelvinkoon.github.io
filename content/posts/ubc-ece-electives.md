---
title: "An ECE Electives Review"
date: 2021-10-24
tags: ["ubc", "academic"]
draft: false
---

## Prologue

UBC's Electrical and Computer Engineering department offers no shortage of advanced electives for upper year students. As someone who has a tendency to like too many things, I've worried about fitting all my interests into 12 credits. Though I ended up taking more credits than needed, the opportunity to dive into new fields was invaluable to my learning.

I'll be going over the advanced electives I took to hopefully help you decide which electives may (or may not) be suitable for you.

## Too Many Electives, Not Enough Time

You'd think I would've taken all the courses I wanted after spending 6 years at UBC. Unfortunately, workload and scheduling issues meant I decided to pursue other electives.

The electives listed are ones I would have taken given more semesters. I've also included details I've heard from previous students.

-   [CPEN411 (Computer Architecture)](https://ece.ubc.ca/courses/cpen-411/): The prominence of hardware for graphics and ML drew my interest in the course. Seemingly heavy workload with high expectations, which is on par with digital hardware courses here (eg. CPEN211).
-   [CPEN432 (Real-Time System Design)](https://ece.ubc.ca/courses/cpen-432/): Embedded courses aren't plentiful for ELEC and the opportunity to work with [FreeRTOS](https://www.freertos.org/) is neat. Without [CPEN331 (Operating Systems)](https://ece.ubc.ca/courses/cpen-331/) or [MATH220 (Mathematical Proof)](https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=MATH&course=220) credits, I felt underprepared (especially with using proofs for scheduling theory). Previous course offerings featured a heavy courseload, but curriculum and instructor changes have tried to address this.
-   [ELEC421 (Digital Signal and Image Processing)](https://ece.ubc.ca/courses/elec-421/): Despite struggling in [ELEC221](https://ece.ubc.ca/courses/elec-221/), I've heard good things about the course from my peers in terms of instructor and course content. Admittedly, I wouldn't have been too keen to touch MATLAB again.
-   [CPEN400D (Deep Learning)](https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPEN&course=400D): The course has fantastic instructors, what more you ask for? I opted to take ELEC400M due to scheduling conflicts.

## Advanced Electives Review

The course selection was heavily influenced by my work experience. As such, your mileage may vary depending on how interested you are in the topics presented. The writing is presented with the caveat these are my opinions and I would encourage you to speak with previous students as well for more insight.

### ELEC331 (Computer Communications)

> Analysis, design and implementation of computer networks and their protocols. Application layer protocols, transmission control protocol (TCP), Internet protocol (IP), routing algorithms, reliable data transfer, multiple access, Ethernet.

[ELEC331](https://ece.ubc.ca/courses/elec-331/) is an introduction on how the Internet works. Starting from the application layer, the course walks through each layer down to the bits in the physical layer. It is generally considered to be the ECE equivalent to [CPSC317](https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=317).

It's neat seeing how the Internet works under the hood through each layer of the OSI model. I enjoyed learning concepts such as how reliable protocols are built on unreliable layers since it answers questions involving how a service we use everyday functions (eg. how can users guarantee reliable data transfer? How DNS resolution work?) The course content does a sufficient job at instilling the fundamental concepts, at least to where one reasonably explain what happens when you visit a webpage.

The course is taken directly from the [Computer Networking: A Top-Down Approach](https://gaia.cs.umass.edu/kurose_ross/eighth.php) textbook. As such, there's quite a bit of memorization to the assessments. The slidesets help alleviate this issue, but it can still be overwhelming (particularly at the two lowest layers). The five assignments feature a mix of programming and WireShark labs. While the Python programming assignments are a gentle introduction to socket programming, the WireShark labs involve tedious packet generation and analysis that take longer than they should.

All in all, it's a popular elective for both ELEC and CPEN students. A fair courseload for a 4-credit course.

### CPEN442 (Introduction to Computer Security)

> Security risks, threats, and vulnerabilities from technical perspectives; cryptography; software and web security; access control, assurance, accountability; usable privacy and security; engineering of secure systems; cryptocurrencies.

[CPEN442](https://ece.ubc.ca/courses/cpen-442/) is an ambitious course, condensing all those security concepts into 12 weeks. It is the only computer security course offered at UBC at this time.

CPEN442 does well to provide a holistic introduction to cybersecurity at a level that feels applicable. For instance, the cryptography lectures discuss the Diffie-Hellman key exchange and the principles behind the discrete-log problems. Later in the course, you learn how protocols such as TLS (ie. encrypted Internet traffic) build from these mechanisms. The assignments try to build on this as you work through more applications such as implementing a VPN, executing web exploits, or simulating bitcoin mining.

The course is run as a flipped lecture. However, the pre-reading material often takes up to 2 hours since it covers so much ground. The class goes over practice questions during the lectures from the pre-reading material, which is helpful for the midterm / final. Moreover, the quizzes every class mean pre-reading is more-or-less mandatory. Combined with a lengthy term project and assignments, the course takes up to 15-20 hours per week. The assignments can also feel disconnected from the lecture (eg. you're left to your own devices to remember how to read Assembly for reversing binaries). The course is particularly punishing to those that fall behind the work since it does not stop.

If you want to learn more about the material, the [course website](https://blogs.ubc.ca/cpen442/) is updated every year. It is worth noting previous offerings of CPEN442 have also been pro-rated to a 75% average. Although I enjoyed the course, I cannot recommend it to everyone for its extremely high workload.

### CPEN431 (Design of Distributed Software Applications)

> Communications, processes, naming, synchronization, consistency and replication, fault tolerance, object-based middleware, and security technologies for distributed applications.

[CPEN431](https://ece.ubc.ca/courses/cpen-431/) tackles building robust and performant distributed systems. In essence, the course is about how servers can work together reliably since computer teamwork makes the computer dream work. The course is the ECE equivalent to [CPSC416](https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=416).

CPEN431 was a bit different for my semester due to a change in the instructor, though many core components remained the same. The course was taught in Go instead of Java, which was a first in the course's history (to my knowledge). The course also featured a report component where teams had to design a distributed system to ensure certain metrics were met. Using Go was a welcome change, but the report requirements were a bit open-ended for my liking.

The majority of the course is spent designing and implementing a distributed key-value store. The project was split into three milestones: bootstrapping the system, implementing fault-tolerance, and scaling performance. Along the way, teams learned about concepts such as [consistent hashing](https://en.wikipedia.org/wiki/Consistent_hashing), deploying to GCP using Docker, and various strategies to deal with node failures (eg. replication). The instructor left the project implementation open-ended to let teams determine the trade-offs in reliability and performance, which can be a good or bad thing depending on your expectations.

The course also put a heavy emphasis on academic papers, which is no surprise given the field's rich history. Papers such as [Chord](https://pdos.csail.mit.edu/papers/chord:sigcomm01/chord_sigcomm.pdf) and [DynamoDB](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf) could give teams direction on their project design. Other memorable papers include [Bitcoin](https://bitcoin.org/bitcoin.pdf), [Lamport Clocks](https://lamport.azurewebsites.net/pubs/time-clocks.pdf), and the [FALCON spy network](https://cs.nyu.edu/~mwalfish/papers/falcon-sosp11.pdf). I certainly did not understand every paper, but it was interesting having an undergrad course assign academia to read.

CPEN431 is filled to the brim with concepts, stemming from networking, systems, proofs, security, and more. If you don't mind the workload, it's a fantastic course to get your hands dirty with distributed computing.

### ELEC400M (Machine Learning Fundamentals)

> Linear models, support vector machines, gradient descent methods, multilayer perceptron, backpropagation algorithm, deep neural networks, clustering and density estimation, expectation-maximization algorithm, theory of generalization, VC dimensions, bias-variance trade-off, validation methods, regularization.

[ELEC400M](https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=ELEC&course=400M) is the credit-exclusive equivalent to [CPSC340 (Machine Learning and Data Mining)](https://ubc-cs.github.io/cpsc340/) and [CPSC330 (Applied Machine Learning)](https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=330). Being a 400x course, it is a newer offering from the ECE department. The above description was taken from the course syllabus.

The course content covers the bread-and-butter of an introductory machine learning course. The Jupyter Notebook assignments are laid out well so students learn to implement the various algorithms presented through the course (eg. PLA, K-Means Clustering).

The course is mildly unforgiving with its linear algebra prerequisites. For many, the last time they may have seen matrix math would have been MATH152 (a distant few years prior). That being said, you'll become reacquainted with the math as you progress through the assignments. Also worth noting, the later sections of the course (ie. everything past clustering and density estimation) focus heavily on statistics. It was personally a struggle to get through those chapters having little background.

ELEC400M's lectures are taken from the [Learning From Data](http://amlbook.com/) textbook. As such, the lectures may be dry since it is heavy on theory. The course content is also available as an online lecture playlist from CalTech found [here](https://www.youtube.com/watch?v=mbyG85GZ0PI&list=PLnIDYuXHkit4LcWjDe0EwlE57WiGlBs08), which may be the preferred learning method for some. With only 3 assignments and a final, the workload is relatively low compared to other 4th year electives offered.

For ELEC students, this is one of two ML electives you can take (the other being CPEN400D). For CPEN students, you may also have the option to take CPSC340 or CPSC330. CPSC340 may be a better fit if you are comfortable with math and are looking for more depth. On the other hand, CPSC330 may be for you if you're looking for less theory and more application.

## Parting Words

Electives let you explore what you like and (more importantly) don't like. Don't be afraid to explore new courses or ask senior students what their thoughts were. Most importantly, I hope you have fun with whatever courses you take. I'll redirect you to a great [post](https://danluu.com/learn-what/) that I'd encourage you to read about learning.

> "A lot of career advice I see is oriented towards career or success or growth. That kind of advice often tells people to have a long-term goal or strategy in mind. It will often have some argument that's along the lines of "a random walk will only move you sqrt(n) in some direction whereas a directed walk will move you n in some direction". I don't think that's wrong, but I think that, for many people, that advice implicitly underestimates the difficulty of finding an area that's suited to you4, which I've basically done by trial and error."
