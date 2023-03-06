---
title: Partition Labels
description: Let's study an interesting problem.
tags: java, leetcode
---

---

## Problem definition

You are given a string **s**. We want to partition the string into as many parts
as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order,
the resultant string should be s.

Return a list of integers representing the size of these parts.

---

## Example

#### Input: "ababcbacadefegdehijhklij"
#### Output: ["ababcbaca", "defegde", "hijhklij"]

---

## Studying a possible solution

To develop our solution, we first need to understand that:
- No partition should share even a single character;
- We want as many partitions as possible.

### But, how do we get there ?

First, to assert that no partition share characters, it's natural that
we should know where each letter lives. Because we do not want to drive
them apart.

So, intervals of occurrence come in handy:

| Letter | Interval |
| :- | :-       |
| a  | [0, 8]   |
| b  | [1, 5]   |
| c  | [4, 7]   |
| d  | [9, 14]  |
| e  | [10, 15] |
| f  | [11, 11] |
| g  | [13, 13] |
| h  | [16, 19] |
| i  | [17, 22] |
| j  | [18, 23] |
| k  | [20, 20] |
| l  | [21, 21] |

We can conclude that **each of those intervals can not be separated 
into smaller ones**, because it would separate the letters.

### But, how do we know which letters make up each partition ?

Let's start by inspecting some letters.

- 'a' lives inside the interval [0, 8]. So, we know that we can not
divide this interval up.

- 'b' lives inside the interval [1, 5]. So, we know that we can not
divide this interval as well.

Wait a minute... The interval of 'b' is inside 'a'!

So they must be part of the same label. Because, **if we can not separate [0, 8],
this is also true to every interval inside of it**.

And what happens if the interval of one letter is not perfectly inside the other ? 
Let's look at 'i' [17, 22] and 'j' [18, 23], for example. Part of 'j' occurs outside 
the zone of influence of 'i'.

We also can not separate those intervals in two labels. Because we established that:
1. The intersection between [17, 22] and [18, 23] is part of the same label [18, 22].
2. Those intervals can not be separated into smaller ones, because the letters live inside them.

### Wrapping up

Now we know that: letters that share any occurrence interval intersecting with one another are
part of the same label.

In other words, each label is the union of all intervals that intersect!

This results in:

| Letter | Interval |
| :- | :-       |
| a  | [0, 8]   |
| b  | [1, 5]   |
| c  | [4, 7]   |

[0, 8] U [1, 5] U [4, 7] = [0, 8] = "ababcbaca"

| Letter | Interval |
| :- | :-       |
| d  | [9, 14]  |
| e  | [10, 15] |
| f  | [11, 11] |
| g  | [13, 13] |

[9, 14] U [10, 15] U [11, 11] U [13, 13] = [9, 15] = "defegde"

| Letter | Interval |
| :- | :-       |
| h  | [16, 19] |
| i  | [17, 22] |
| j  | [18, 23] |
| k  | [20, 20] |
| l  | [21, 21] |

[16, 19] U [17, 22] U [18, 23] U [20, 20] U [21, 21] = "hijhklij"

### Implementing

```java 
class Solution {
    public List<Integer> partitionLabels(String s) {
        Map<Character, Integer[]> intervals = getOccurrenceIntervals(s);
        List<Integer> partitions = new ArrayList<>();

        Integer[] lastInterval = null;
        Integer lastPartitionSize = 0;

        for (Integer i = 0; i < s.length(); i++) {
            Character ch = s.charAt(i);
            if (lastInterval == null) {
                lastInterval = intervals.get(ch);
                lastPartitionSize += 1;
            } else {
                if (intersect(intervals.get(ch), lastInterval)) {
                    lastPartitionSize += 1;
                    lastInterval = union(lastInterval, intervals.get(ch));
                } else {
                    partitions.add(lastPartitionSize);
                    lastPartitionSize = 1;
                    lastInterval = intervals.get(ch);
                }
            }
        }

        partitions.add(lastPartitionSize);

        return partitions;
    }

    public Map<Character, Integer[]> getOccurrenceIntervals(String s) {
        Map<Character, Integer[]> occur = new HashMap<>();
        for (Integer i = 0; i < s.length(); i++) {
            Character ch = s.charAt(i);
            if (!occur.containsKey(ch)) {
                occur.put(ch, new Integer[]{i, i});
            } else {
                occur.put(ch, new Integer[]{occur.get(ch)[0], i});
            }
        }
        return occur;
    }

    public boolean intersect(Integer[] fst, Integer[] sec) {
        return !(fst[0] > sec[1] || sec[0] > fst[1]);
    }

    public Integer[] union(Integer[] fst, Integer[] sec) {
        return new Integer[]{Math.min(fst[0], sec[0]), Math.max(fst[1], sec[1])};
    }
}
```