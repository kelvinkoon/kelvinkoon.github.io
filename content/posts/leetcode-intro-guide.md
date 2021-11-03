---
title: "LeetCode Intro Guide"
date: 2021-08-14
tags: ["leetcode", "interviews", "career"]
draft: false
---

## Prologue

The guide you are reading assumes you have taken [CPSC259](https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=259) if you are in ELEC or [CPSC221](https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=221) if you are in CPEN / CPSC, which are the introductory Data Structures and Algorithms (DS/A) courses offered at UBC. Although CPSC259 is less in-depth compared to CPSC221, the deficiencies can be remedied through practice. Even if you have not taken either course, the article can still provide take-aways to the current state of interviews.

The interview process may also include (but not limited to) take-home assignments, system design interviews, and behavioural rounds. This post will primarily focus on DS/A-style interviews since it's the most prevalent.

## What is LeetCode?

[LeetCode](https://leetcode.com/) (LC) is a website for software interview preparation focusing on DS/A. There are countless questions available for practice, spanning topics from Trees to Greedy Algorithms. Some topics you may have learned in classes, others you may not have. LC allows you to run your solution against their test-cases in any programming language. Python, C++, and Java are particularly common languages for tackling interviews, with Python being particularly popular for its succinct syntax.

## Reasons to do LC

**If you are aiming for large tech companies, you will have to invest time to practice DS/A questions.** LC is [notorious](https://twitter.com/mxcl/status/608682016205344768?lang=en) for being mandatory when interviewing at companies such as Amazon, Microsoft, Google, etc. The technical interviews will almost always consist of questions akin to LC. They may be conducted on a shared development environment online or on a whiteboard for in-person on-site interviews.

For many, DS/A interviews are not representative of the day-to-day responsibilities of a software engineer. You likely won't have to implement a LRU Cache or understand how A\* pathfinding works for what you work on. That being said, practicing DS/A has improved my ability to approach and reason about problem-solving. Parts of the process such as generating good test-cases are fundamental to writing robust programs.

**If you are not aiming for large tech companies, you will likely not have to invest as much time practicing DS/A questions.** Local companies may choose to run through your resume or domain-specific knowledge. For instance, a networking company may ask about UDP vs TCP. What you get asked is very dependent on the company, team, and position. Be warned, DS/A questions may still be found at smaller companies. In particular, if you are looking for your first internship, I would not stress about LC beyond what's been taught in your coursework.

LC is primarily aimed at Software Engineering roles. Other roles such as Firmware or Systems Engineering may be asked fewer LC questions. Preference may be given to take-home assignments or questions closer ground to their work.

## Preparation Resources

Coming from CPSC259 / CPSC221, you should be acquainted with the concept of time complexity (ie. Big O notation). However, you may not be as familiar with space complexity (especially in the case of CPSC259).

It is important to be familiar with the time / space complexity of common data structures. Asking yourself why one data structure has a specific property can help develop the time / space complexity intuition. Time and space complexity are often trade-offs. You may be able to run your solution in O(n^2) time and O(1) space, but the interviewer may want a lower time complexity. In many cases, you'll find the solution can be converted to an O(n) time and O(n) space complexity through using additional data structures such as a hash map.

For a refresher in time / space complexity, I highly recommend this [video](https://www.youtube.com/watch?v=D6xkbGLQesk) and this [guide](https://www.freecodecamp.org/news/10-common-data-structures-explained-with-videos-exercises-aaff6c06fb2b/). This [cheat sheet](https://www.bigocheatsheet.com/) has also been helpful for many. As you practice, the time and space complexity of data structures will become more familiar.

## DS/A Preparation

A common remark among students is which questions should one prioritize. LC is already divided into DS/A categories, so one approach may be to work through your weakest category until you feel comfortable with the questions provided. Anecdotally, I did not study any graph questions during my internship search since I felt the investment did not justify the likelihood I'd receive one. Similarly, friends have opted to not study Dynamic Programming since the company hadn't historically asked them. Do what you think is best for what you want to achieve.

For a holistic overview of interview questions, I highly recommend reading this [post](https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions). The questions provided encompass many frequently occuring topics or build to more complex topics. I would argue the provided list is generally sufficient for most internship / full-time interviews. I've also created a [Google Sheet](https://docs.google.com/spreadsheets/d/1O6lu-27mkdEfQAFfMB43vcqZRF57ygtJO2tCDw2ZQaY/edit?usp=sharing) to keep track of your own progress.

If there is limited time prior to your interview, I would recommend prioritizing Arrays, Strings, Trees, and Linked Lists. The aforementioned topics are fairly common in interviews, particularly:

-   Array: [Two Sum](https://leetcode.com/problems/two-sum/), [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/), [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)
-   String: [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/), [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
-   Tree: [Same Tree](https://leetcode.com/problems/same-tree/), [Maximum Depth of a Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/), [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
-   Linked List: [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/), [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/), [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)

Likewise, it's okay to be less familiar with certain question categories. For instance, Dynamic Programming questions will likely show up less than Array questions due to their difficulty. For internships, you will likely not be asked Hard questions, but it doesn't hurt to practice them.

### Paid Resources

LeetCode Premium is the paid service offered which will provide you with questions sorted by company interview frequency (eg. Top 50 Questions asked by Microsoft). In my experience, the accuracy varies but Premium also unlocks exclusive questions which may be useful in preparation. Furthermore, Premium provides you with mock interviews based on company-specific questions. I've personally found LC Premium useful but not necessary given the subscription price. If you have a group willing to split the cost, it may be worth looking into.

There are paid video services such as InterviewCake to provide explanations alongside problems. Having tried one of these services, I do not think they are worth the subscription for similar reasons as LC Premium. The quality of services is also widely varied; if you intend on purchasing a subscription, do your homework on the reviews. The "Discuss" tab on LC is often sufficient for breaking down questions.

### Additional Resources

The following are commonly cited resources for interview preparation.

-   [Cracking the Coding Interview](https://www.crackingthecodinginterview.com/)
-   [MIT's Introduction to Algorithms Lecture Series](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/video-lectures/)
-   [HackerRank](https://www.hackerrank.com/)

## Approaching the Question

A common mistake is for the interviewee to immediately start writing code after the question is asked. It is an expectation the interviewee discusses the approach and assumptions before writing anything. I recommend finding friends who are also preparing for interviews to facilitate mock interviews. [CoderPad](https://coderpad.io/) is a great codesharing environment for simulating interviews. It takes time to practice verbalizing your thought process during an interview.

To illustrate an approach, I'll be going over the process using [Two Sum](https://leetcode.com/problems/two-sum/) as an example.

    ```
    Given an array of integers nums and an integer target,
    return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution,
    and you may not use the same element twice.

    You can return the answer in any order.

    ----

    Example 1:

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Output: Because nums[0] + nums[1] == 9, we return [0, 1].
    ```

1. Read the prompt and ask questions to clarify assumptions. In particular, ask about possible input types. For instance, ask about empty strings, non-positive numbers, and edge-cases such as searching for non-existent keys in a dictionary.
    > "What should I return if an empty array is given?"
2. Go over sample inputs and outputs. This is a good opportunity to make sure you understand what the interviewer is asking for.
3. Explain your thought process to the interviewer. If you're unsure, **it's okay to ask the interviewer for hints on where to start**. You can start with a "brute-force" solution and optimize through the interview.
    > "It is possible to generate every single combination using two loops to find the correct combination."
4. Start writing code. Explain what you are doing as you write. Verbalizing your thought process allows the interviewer to understand and help should you get stuck. You don't need to explain everything, just the main implementation details.

    ```python
    def two_sum(nums, target):
        for i in range(len(nums)-1):
            for j in range(i, len(nums)):
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
    > _"If you store the values, you can compute the combinations in one traversal. If we do 'target - current', we can check if we've already seen one of the values. This will be O(n) run-time and O(n) space complexity since it's we go through nums once."_
7. You'll likely be asked to explain time and space complexity at the end. Be conscious of your complexity as you discuss the solution.

During the interview, additional factors such as nerves may affect your performance. I've found keeping track of time during the interview useful, as I have a tendency to be slow in implementing solutions. As you go through more interviews, you'll figure out what works best for you and what you may need to work on.

## Building Your Understanding

LC has a Discuss tab featuring solutions from other users. Often, there are esoteric one-liner or uncommented solutions that are unhelpful to those beginning the problem. I recommend attempting each question for a period of time before looking at solutions for hints (eg. 15 min for Easy, 45 min for Medium). This allows you to keep moving forwards in your practice. Upon looking at the solution, give yourself time to continue implementing your solution. It is also important to revisit some of the problems you've previously completed after a certain time to keep yourself practiced. You'll learn the most from implementing solutions without outside references or help.

If you're looking for video resources, I recommend [BackToBackSWE](https://www.youtube.com/c/BackToBackSWE/videos) for LC question walkthroughs. Many channels provide walkthroughs, but none are as thorough and clear as their channel.

## Parting Words

Practice makes perfect. And more often than not, practice is more fun with friends. The process can be stressful, so don't forget to take breaks.

Special thanks to the upper-year ECE students who helped with proofreading the original document.
