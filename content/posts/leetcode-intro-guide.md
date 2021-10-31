---
title: "LeetCode Intro Guide"
date: 2021-08-14
tags: ["leetcode", "interviews"]
draft: false
---

## Prologue

The guide you are reading assumes you have taken [CPSC259](https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=259) if you are in ELEC or [CPSC221](https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=221) if you are in CPEN / CPSC, which are the introductory Data Structures and Algorithms (DS/A) courses offered at UBC. The guide aims to offer insight on applying the theory from the courses to the interviews.

## What is LeetCode?

[LeetCode](https://leetcode.com/) (LC) is a website for software interview preparation focusing on DS/A. There are many questions available for practice, as you can run your solution against their test-cases in any programming language. Python, C++, and Java are common languages for tackling interviews, but LC also accepts many other languages. Python is particularly popular for its succinct syntax.

## Motivation

**If you are aiming for large tech companies, you will have to invest time to practice DS/A questions.** LC is [notorious](https://twitter.com/mxcl/status/608682016205344768?lang=en) for being mandatory when interviewing at companies such as Amazon, Microsoft, Google, etc. The technical interviews will almost always consist of questions akin to LC.

**If you are not aiming for large tech companies, you will likely not have to invest as much time practicing DS/A questions.** Local companies may choose to run through your resume or domain-specific knowledge. For instance, a networking company may ask about UDP vs TCP. What you get asked is very dependent on the company, team, and position. Be warned, DS/A questions may still be found at smaller companies.

LC is primarily aimed at Software Engineering roles. Other roles such as Firmware or Systems Engineering may be asked fewer LC questions.

## Preparation Resources

Coming from CPSC259 / CPSC221, you should be acquainted with the concept of time complexity (ie. Big O notation). However, you may not be as familiar with space complexity (especially in the case of CPSC259).

It is important to be familiar with the time / space complexity of common data structures. Asking yourself why `X` data structure has `Y` can help develop the time / space complexity intuition. Time and space complexity are often trade-offs. You may be able to run your solution in O(n^2) time and O(1) space, but the interviewer may want a lower time complexity. In many cases, you'll find the solution can be converted to an O(n) time and O(n) space complexity through using additional data structures such as a hash map.

For a refresher in time / space complexity, I highly recommend this [video](https://www.youtube.com/watch?v=D6xkbGLQesk) and this [guide](https://www.freecodecamp.org/news/10-common-data-structures-explained-with-videos-exercises-aaff6c06fb2b/).

## DS/A Preparation

A common remark among students is which questions should they prioritize. LC is already divided into DS/A categories, so one approach may be to work through your weakest category until you feel comfortable with the questions provided.

For a holistic overview of interview questions, I highly recommend reading this [post](https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions). The questions provided encompass many frequently occuring topics or build to more complex topics. I've also created a [Google Sheet](https://docs.google.com/spreadsheets/d/1O6lu-27mkdEfQAFfMB43vcqZRF57ygtJO2tCDw2ZQaY/edit?usp=sharing) to keep track of progress, which can be downloaded for your own use.

If there is limited time prior to your interview, I would recommend prioritizing Arrays, Strings, Trees, and Linked Lists. These are fairly common topics in software interviews, particularly:

-   Array: [Two Sum](https://leetcode.com/problems/two-sum/), [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/), [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)
-   String: [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/), [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
-   Tree: [Same Tree](https://leetcode.com/problems/same-tree/), [Maximum Depth of a Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/), [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
-   Linked List: [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/), [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/), [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)

Likewise, it's okay to be less familiar with certain question categories. For instance, Dynamic Programming questions will likely show up less than Array questions due to their difficulty. For internships, you will likely not be asked Hard questions.

### Paid Resources

LeetCode Premium is the paid service offered which will provide you with questions sorted by company frequency (eg. Top 50 Questions asked by Facebook). In my experience, the accuracy varies but Premium also unlocks exclusive questions which may be useful in preparation. I've personally found LC Premium useful but not necessary given the subscription price. If you have a group willing to split the cost, it may be worth looking into.

There are paid video services such as InterviewCake to provide explanations alongside problems. Having tried one of these services, I do not think they are worth the subscription for similar reasons as LC Premium. The "Discuss" tab on LC is often sufficient for breaking down questions.

## Approaching Mock Interviews

A common mistake is for the interviewee to immediately start writing code after the question is asked. It is an expectation the interviewee discusses the approach and assumptions before writing anything. I recommend finding friends who are also preparing for interviews to facilitate mock interviews. [CoderPad](https://coderpad.io/) is a great codesharing environment for simulating interviews. It takes time to practice verbalizing your thought process during an interview.

The following approach is what I follow:

1. Read the prompt and ask questions to clarify assumptions. In particular, ask about possible input types. For instance, ask about empty strings, non-positive numbers, and edge-cases such as searching for non-existent keys in a dictionary.
2. Go over sample inputs and outputs. This is a good opportunity to make sure you understand what the interviewer is asking for.
3. Explain your thought process to the interviewer. If you're unsure, it's okay to ask the interviewer for hints on where to start. You can start with a "brute-force" solution and optimize through the interview.
4. Write code. Explain what you are doing as you write. Verbalizing your thought process allows the interviewer to understand and help should you get stuck.
5. Run the interviewer through your code with an example input. This is an opportunity to catch your own mistakes as you run through it.
6. You'll likely be asked to explain time and space complexity at the end. Be conscious of your complexity as you discuss the solution.
7. If the interviewer asks you to optimize the solution, think about the time / space trade-offs. Hash tables are often the first data structure I think about when asked to optimize.

## Building Your Understanding

LC has a Discuss tab featuring solutions from other users. Often, there are esoteric one-liner or uncommented solutions. I recommend attempting each question for a period of time before looking at solutions for hints (eg. 15 min for Easy, 45 min for Medium). This allows you to keep moving forwards in your practice. It is also important to revisit some of the problems you've previously completed after a certain time to keep yourself practiced. I recommend [BackToBackSWE](https://www.youtube.com/c/BackToBackSWE/videos) for LC question walkthroughs.

## Final Words

While I don't enjoy algorithmic interviews, LeetCode has definitely helped improve my problem-solving and communication skills. Although the process may be frustrating, it is something that can be improved with practice.

Special thanks to the upper-year ECE students who helped with proofreading the original document.
