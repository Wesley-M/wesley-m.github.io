---
title: Starting my Leetcode Journey
description: Today I start practicing questions on leetcode! Here are my impressions and
solutions for some questions.
cover: https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png
tags: java, leetcode
---

Hi everyone!

Today, I am going to start to solve interview questions with java. I looked it up, and it
seems leetcode is a good place to start. After some quick research, I've found some people 
recommending "the top 100 liked questions".

Let's start with easy questions that have high acceptance rates.

---

## Invert Binary Tree

We just need to mirror a binary tree here. So, after thinking a little about the problem. I've come up
with the following:

```java
class Solution {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) {
            return null;
        }
        return new TreeNode(root.val, invertTree(root.right), invertTree(root.left));
    }
}
```
    Difficulty: *EASY* | Acceptance: 74.6%

---

## Maximum Depth of Binary Tree

Following a similar logic, it's asked the maximum depth of a binary tree.

```java
class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right));
    }
}
```
    Difficulty: *EASY* | Acceptance: 73.8%

---

## Binary Tree Inorder Traversal

### RECURSIVE

Simple Inorder traversal (LEFT -> ROOT -> RIGHT).

```java
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        if (root == null) {
            return new ArrayList();
        }
        
        List<Integer> merge = new ArrayList();
        merge.addAll(inorderTraversal(root.left));
        merge.addAll(new ArrayList(List.of(root.val)));
        merge.addAll(inorderTraversal(root.right));
        
        return merge;
    }
}
```
    Difficulty: *EASY* | Acceptance: 73.6%


### ITERATIVE

The rust showed itself here. I forgot how to do iterative depth first search (DFS) and traversal. So, 
I searched a bit and stumbled over the following algorithm: 

```java
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List traversal = new ArrayList<>();
        Stack st = new Stack<>();
        TreeNode pointer = root;

        while (pointer != null || !st.isEmpty()) {
            while (pointer != null) {
                st.push(pointer);
                pointer = pointer.left;
            }
            
            TreeNode top = st.pop();
            traversal.add(top.val);
            pointer = top.right;           // (1)
        }
    }
}
```

The idea is to use a stack to traverse the tree. We want to "remember" the last elements that we did 
go over. In a DFS, we are going top to bottom, and working our way back again, so it's helpful.

We first go over just the left nodes from the root. However, we also need a way to go over the right 
ones, starting at the bottom, so we save the leftmost node, forget it (remembering who comes before it), 
and change the pointer to the adjacent right node (1). In the cases that it has left nodes, it goes over 
all of them, and repeats the process.

The trick to the iterative logic is: "Every right node might have left nodes, remember all of them,
save the guy who has no left nodes anymore and remove it from the stack (your memory), and go on to 
the next right".

---

## Valid Parentheses

Given a string 's' containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

```java 
class Solution {
    public boolean isValid(String s) {
        Stack<Character> p = new Stack<Character>();
        
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if ("([{".indexOf(c) != -1) {
                p.push(c);
            } else {
                if (
                    !p.isEmpty() && (
                        (p.peek() == '(' && c == ')') || 
                        (p.peek() == '[' && c == ']') || 
                        (p.peek() == '{' && c == '}')
                    )
                ) {
                    p.pop();
                } else {
                    p.push(c);
                }
            }
        }
        
        return p.size() == 0;
    }
}
```
    Difficulty: *EASY* | Acceptance: 40.3%

Pretty simple logic. I used a stack to remember the last open parentheses. When I find a match
to the last one (and it has to appear sometime to be valid), we just need to pop the stack.
Marking that this open parentheses is closed, and we do not need to remember it anymore. If 
all goes well, the stack is empty at the end.

---

## Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

### BRUTE FORCE

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs[0].equals("")) {
            return "";
        }
        
        String firstWord = strs[0];
        String prefix = "";
           
        int i = 0;
        while (firstWord.length() - i > 0) {
            for (String str : strs) {
                if (str.equals("")) return "";

                if (str.length() <= i || !(str.charAt(i) == firstWord.charAt(i))) {
                    return prefix;
                }
            }
            
            prefix += firstWord.charAt(i);
            i++;
        }
        
        return prefix;
    }
}
```

### OPTIMIZED

One thing that we can leverage is a very clever trick. When we sort the array of strings,
The first and last strings will share the largest common prefix of all words. This is the 
case, because the strings that share a larger prefix will be closer (lexographically speaking)
together. So if even the first and last words in the sorted structure have a common prefix,
it will be the largest common prefix to all strings.

---

That is it for today!