---
title: "LeetCode Intro Guide"
date: 2021-08-14
tags: ["career"]
draft: false
---

_This guide was written during the 2021 academic year. As such, the info presented may be outdated._

The guide you are reading assumes you have taken CPSC259 if you are in ELEC or CPSC221 if you are in CPEN / CPSC, which are the introductory Data Structures and Algorithms (DS/A) courses offered at UBC. Though CPSC259 is less in-depth compared to CPSC221, additional reading will remedy the differences. Even if you haven't taken either course, I hope the article can still provide insight to the current state of tech interviews.

The interview process may include (but is not limited to) take-home assignments, system design interviews, and behavioural rounds. This post will primarily focus on DS/A-style interviews since it's the most prevalent.

## What is LeetCode?

[LeetCode](https://leetcode.com/) (LC) is a website for software interview preparation focusing on DS/A. The questions available span countless topics such as Trees, Greedy Algorithms, and even bit manipulation. Some topics you may have learned in classes, others you may not have. LC allows you to run your solution against their test-cases in any programming language. Python is the most common language for tackling interviews for its succinct syntax.

## Why Should I Care?

**If you are aiming for large tech companies, you will have to invest time to practicing DS/A questions.** LC is [notorious](https://news.ycombinator.com/item?id=15713801) for being mandatory when interviewing at companies such as Amazon, Microsoft, Google, etc. They may be conducted on a shared development environment online (e.g. HackerRank) or on a whiteboard for on-site interviews.

For many, DS/A interviews are not representative of the day-to-day software engineering responsibilities. You likely won't have to implement a LRU Cache or understand how A\* pathfinding works for your tasks. That being said, practicing DS/A has _somewhat_ improved my ability to approach and reason about problem-solving. Generating meaningful test-cases and noting assumptions are cornerstones to writing robust software.

**If you are not aiming for large tech companies, you will likely not have to invest as much time practicing DS/A questions.** Smaller companies may choose to focus more on your past experience or test domain-specific knowledge. For instance, a mobile hotspot company may ask about UDP vs TCP differences. What is asked is dependent on the company, team, and position. Be warned, DS/A questions may still be found at smaller companies. If you are looking for your first internship, I would not stress about LC beyond what's been taught in your coursework.

LC is primarily aimed at Software Engineering roles. Other roles such as Firmware or Systems Engineering may be asked fewer LC questions. Preference may be given to take-home assignments or questions closer ground to their work.

## Preparation Resources

You should be acquainted with the concept of time complexity (ie. Big O notation) from your coursework. However, you may not be as familiar with space complexity (especially in the case of CPSC259).

Be familiar with the time / space complexity of common data structures. Focus on specific data structure properties to develop the time / space complexity intuition so it's second nature (e.g. hash maps provide instant look-up). Time and space complexity are often trade-offs. You may be able to run your solution in O(n^2) time and O(1) space, but the interviewer may want a lower time complexity. What's important is communicating the trade-offs to the interviewer.

For a refresher in time / space complexity, I highly recommend this [video](https://www.youtube.com/watch?v=D6xkbGLQesk). This [cheat sheet](https://www.bigocheatsheet.com/) has also been helpful for many. As you practice, the time and space complexity of data structures will become more familiar.

## DS/A Preparation

A common sentiment is which questions should you prioritize among the 1,000s available. LC is already divided into DS/A categories, so one approach is to work through your weakest category until you feel comfortable. Another is to ignore questions which you think are less likely to be asked (e.g. ignoring graph questions for internships). Do what you think is best for what you want to achieve as it is unsustainable to worry about every single question.

For a holistic overview of interview questions, I highly recommend reading this [post](https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions). The questions provided encompass many frequently occuring topics or build to more complex topics. I would argue the provided list is generally sufficient for most internship / full-time interviews.

If there is limited time prior to your interview, I would recommend prioritizing Arrays, Strings, and Trees. The aforementioned topics are fairly common in interviews, particularly:

-   Array: [Two Sum](https://leetcode.com/problems/two-sum/), [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/), [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)
-   String: [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/), [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
-   Tree: [Same Tree](https://leetcode.com/problems/same-tree/), [Maximum Depth of a Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/), [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)

For internships, you will likely not be asked Hard questions, but it doesn't hurt to practice them.

### Paid Resources

LeetCode Premium is the paid service offered which will provide you with questions sorted by company interview frequency (e.g. Top 50 Questions asked by Microsoft). In my experience, the accuracy varies but Premium also unlocks exclusive questions which may be useful in preparation. Furthermore, Premium provides you with mock interviews based on company-specific questions. I've found LC Premium useful but not necessary given the subscription price. If you have a group willing to split the cost, it may be worth looking into.

There are paid interview services to provide explanations alongside problems. Having tried one, I do not think they are worth the subscription for similar reasons as LC Premium. The quality of services is also widely varied; if you intend on purchasing a subscription, do your homework on the reviews. The "Discuss" tab on LC is often sufficient for breaking down questions.

### Additional Resources

The following are commonly cited resources for interview preparation.

-   [Cracking the Coding Interview](https://www.crackingthecodinginterview.com/)
-   [MIT's Introduction to Algorithms Lecture Series](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/video-lectures/)
-   [HackerRank](https://www.hackerrank.com/)

## Approaching the Question

A common mistake is for the interviewee to immediately start writing code after the question is asked. It is an expectation the interviewee discusses the approach and assumptions before writing anything. I recommend finding friends who are also preparing for interviews to facilitate mock interviews. [CoderPad](https://coderpad.io/) is a great codesharing environment for simulating interviews. It takes time to practice verbalizing your thought process during an interview.

To illustrate an approach, I'll be going over the process using [Two Sum](https://leetcode.com/problems/two-sum/) as an example.

1. **Read the prompt and ask questions to clarify assumptions.** In particular, ask about possible input types. For instance, ask about empty strings, non-positive numbers, and edge-cases such as searching for non-existent keys in a dictionary.
    > _"What should I return if an empty array is given?"_
2. Go over sample inputs and outputs. This is a good opportunity to make sure you understand what the interviewer is asking for.
3. Explain your thought process to the interviewer. If you're unsure, **it's okay to ask the interviewer for hints on where to start**. You can start with a "brute-force" solution and optimize through the interview.
    > _"It is possible to generate every single combination using two loops to find the correct combination."_
4. Start writing code. Explain what you are doing as you write. Verbalizing your thought process allows the interviewer to understand and help should you get stuck. You don't need to explain everything, just the main implementation details.

    ```python
    def two_sum(nums, target):
       for i in range(len(nums)-1):
           for j in range(i+1, len(nums)):
               if nums[i] + nums[j] == target:
                   return [i, j]
       # Assume we never reach this point
       return []
    ```

5. Run the interviewer through your code with an example input. This is an opportunity to catch your own mistakes as you run through it.
6. If the interviewer asks you to optimize the solution, there's a good chance a more efficient solution exists.Think about the time / space trade-offs. Hash tables are often the first data structure I think about when asked to optimize.

    > _"The solution given is O(n^2) where n is the length of nums. Maybe we can use a hash map to store values we've seen."_

    ```python
    def two_sum(nums, target):
       seen = {}
       for i in range(len(nums)):
           potentialTarget = target - nums[i]
           if potentialTarget in seen:
               return [seen[potentialTarget], i]
           else:
               seen[nums[i]] = i
       # Assume we never reach here
       return []
    ```

    > _"If you store the values, you can compute the combinations in one traversal. If we do 'target - current', we can check if we've already seen one of the values. This will be O(n) run-time and O(n) space complexity since it'll go through the nums array once."_

7. You'll likely be asked to explain time and space complexity at the end. Be conscious of your complexity as you discuss the solution.

During the interview, additional factors such as nerves may affect your performance. I've found keeping track of time during the interview useful, as I have a tendency to be slow in implementing solutions. As you go through more interviews, you'll figure out what works best for you and what you may need to work on.

## Building Your Understanding

LC has a Discuss tab featuring solutions from other users. Often, there are esoteric one-liner or uncommented solutions that are unhelpful to those beginning the problem. I recommend attempting each question for a period of time before looking at solutions for hints (eg. 15 min for Easy, 45 min for Medium). This allows you to keep moving forwards in your practice. Upon looking at the solution, give yourself time to continue implementing your solution. It is also important to revisit some of the problems you've previously completed after a certain time to keep yourself practiced. You'll learn the most from implementing solutions without outside references or help.

If you're looking for video resources, I recommend [BackToBackSWE](https://www.youtube.com/c/BackToBackSWE/videos) for LC question walkthroughs. Many channels provide walkthroughs, but none are as thorough and clear as their channel.

> _May the odds be ever in your favour_

Special thanks to the upper-year ECE students who helped with proofreading the original document.
