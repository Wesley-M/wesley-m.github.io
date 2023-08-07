---
title: [SBS] Spring Boot Series
description: in this post I am going to introduce the first series on the blog, about Spring Boot.
tags: java, spring boot's series
---

My focus with this series will be to challenge myself to understand more about
spring boot. Here you are going to find notes and discussions on everything that
I find interesting along the way. So, let's start with some clarifications.

## Why ?

Spring Boot is one of the most used java modules to develop web applications
(e.g. mainly, but not restricted to, app backends and microservices).

## What is Spring Boot ?

As we've said before, _spring boot_ is a spring module. Which in turn, it is an
application framework widely used for building applications with java. Its main
selling points are:

- It makes the job of using Spring less exhaustive. That is the case, because it
  <mark>auto-configures</mark> all that it can. Leaving you the option to add
  java-based configurations or XML (discouraged);
- It provides 'starter' dependencies, which are simply bundles of other
  dependencies used for a specific purpose. For example, the _web starter_ has
  an application server dependency inside (e.g. Tomcat);
- It has simple and effective tools to initialize new projects.
