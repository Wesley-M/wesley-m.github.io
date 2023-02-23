---
title: Revisiting Java
description: Hello! In this post I am going to revisit Java. From simple to more advanced concepts
cover: https://upload.wikimedia.org/wikipedia/commons/5/5d/Duke_%28Java_mascot%29_waving.svg
tags: java
---

# Revisiting Java

Hello :smile: ! Nice to see you again.

After thinking for a while on what I should write about, I came to 
the conclusion that we need to start with good foundations. And I have to 
confess that I am a little rusty in Java at the moment, so it would be very
convenient if we started there.

I am not going to show everything that you should know, and I going to assume
that we both know about basic concepts in Java, like Classes, Objects, Interfaces, 
and so on. When applicable, I will add simple comments as reminders of definitions.
Other thing that I've to say is that I will be code-oriented, as we are just 
oiling our gears :car:.

But enough with the talking, let's get into it.


Simple Hello World:

```java
/* 
Every class in java has packages.

At the end of the day, they are just folders where you put a set of classes, interfaces, ...
But it's good to remember that they have special semantics as well - e.g. Controlled access 
of data between classes.
*/

package first.package;

// Mostly boilerplate code
public class HelloWorld {
 public static void main(String[] args) {
    
    // With System.out we access the 'default output' of the program
    System.out.println("Hello, World!");
 }
}
```
Data Types:

