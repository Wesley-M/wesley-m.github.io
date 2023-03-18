# Java Streams
Today, I decided to look into Java Streams at more depth. I've to confess that
I never tried to really understand it until now. But the conciseness and clarity 
of code snippets that I've seen using that API called my attention :smile: So let's explore it
together.

First, after some research, **streams** were a concept introduced on Java 8. 
And with **lambda functions**, mark a move from java towards **functional programming**. 
I am not going to dig deep into the principles of functional programming here, 
but keep in mind this paradigm is all about function composition.

With that out of the way, the documentation defines them as:

> _"A sequence of elements supporting sequential and parallel aggregate operations."_

What it actually means is that <mark>streams are a way of defining
a pipeline of functions that will process our data collection in some way (in parallel or following a sequence).</mark>

The syntax is really simple:

```java 
// You just need to call stream() to start using the API 
<your collection>.stream()
    // Some intermediate operation over the data
    .<intermediate operation>()
    // Some other operation over the data
    .<other intermediate operation>()
    ...
    // Here we collect the data, after processing, into an 
    // actual collection (List, Set, ...) or we produce a
    // side-effect, like a forEach.
    .<terminal operation>()
```

In practice, as you can imagine, there are a lot of functions to learn and
use. But to avoid boring you down too much, let's follow a code-oriented
approach, where we will see how streams compare with the imperative way
of doing things.

## Filtering elements

Task: Filter out negative numbers.

#### Imperative Approach

```java
List<Integer> list = List.of(1, 2, -3, 4, -5, 6, 7);

List<Integer> result = new ArrayList();
for (Integer n : list) {
    if (n >= 0) {
        result.add(n);
    }
}
```

#### Streams

```java 
List<Integer> list = List.of(1, 2, -3, 4, -5, 6, 7);

List<Integer> result = list.stream()
        .filter(n -> n >= 0)
        .collect(Collectors.toList());
```

## Mapping elements

Task: Square all numbers.

#### Imperative Approach

```java
List<Integer> list = List.of(1, 2, -3, 4, -5, 6, 7);

List<Integer> result = new ArrayList();
for (Integer n : list) {
   result.add(n * n);
}
```

#### Streams

```java 
List<Integer> list = List.of(1, 2, -3, 4, -5, 6, 7);

List<Integer> result = list.stream()
        .map(n -> n * n)
        .collect(Collectors.toList());
```

When trying to map primitive values (int, double, long, ...) you can use a special
map function, like mapToInt, mapToDouble and mapToLong. The advantage here is that
you can use some special terminal operators, like average and sum. And the performance
is better, because java doesn't need to auto-box the primitive values into Integer, 
Double and Long.

## Mapping nested elements

Task: Square all nested numbers.

#### Imperative Approach

```java
List<List<Integer>> list = List.of(
    List.of(1, 2),
    List.of(-3, 4),
    List.of(-5, 6),
    List.of(7)
);

List<Integer> result = new ArrayList();
for (List<Integer> nestedList : list) {
    for (Integer n : nestedList) {
        result.add(n * n);
    }
}
```

#### Streams

```java 
List<List<Integer>> list = List.of(
    List.of(1, 2),
    List.of(-3, 4),
    List.of(-5, 6),
    List.of(7)
);

List<Integer> result = list.stream()
        .flatMap(l -> l.stream())
        .map(n -> n*n)
        .collect(Collectors.toList());
```

I stumbled when I first saw flatMap, I didn't really understand the logic
behind it. Even after reading the documentation, but now it is more clear.

> "<mark>It returns a stream</mark> consisting of the results of 
> <mark>replacing each element</mark> of this stream <mark>with 
> the contents of a mapped stream</mark> produced by applying the 
> provided mapping function to each element. Each mapped stream is 
> closed after its contents have been placed into this stream. 
> (If a mapped stream is null an empty stream is used, instead.)" 
> **(Java Doc)**

I highlighted the keywords we **need** to pay attention. What flatMap 
really does is <mark>flatten a Stream<Stream\<Something\>> into a 
Stream\<Something\></mark>, by simply unpacking that nested 
Stream\<Something\>, given that we started with, let's say, 
Stream<List\<Something\>>. The function that it takes, it is to transform 
the List\<Something\> into a Stream\<Something\>.

And it's goal, naturally, is to flatten down multidimensional structures, 
like set of sets, list of lists of ... of lists and so on.

## Removing duplicates

Now, things get juicy, because efficient duplicate removal is not trivial. 
There are some ways of implementing it, but one of the most performant 
ones is to use a LinkedHashSet, to preserve order and avoid duplication 
in O(n).

Task: Remove all duplicates from list.

#### Imperative Approach

```java 
List<Integer> list = List.of(1, 2, -3, -3);

List<Integer> result = new ArrayList();
Set<T> set = new LinkedHashSet<>();
set.addAll(list);
result.addAll(set);
```

#### Streams

```java 
List<Integer> list = List.of(1, 2, -3, -3);

List<Integer> result = list.stream()
        .distinct()
        .collect(Collectors.toList())
```

Wow, so much easier and cleaner!

## Reducing values

Let's say we want to produce some result based on the processing of the collection,
it could be a summation, product, average, count, or anything that would need to
look into every element of the collection. In those cases, you want the reduce function.

_PS: several of those specialized reduce cases (e.g. sum, average, count) have their own
shorthands/functions._

Task: Sum all values from a list.

#### Imperative Approach

```java 
List<Integer> list = List.of(1, 2, -3, -3);

Integer result = 0;
for (Integer n : list) {
    result += n;
}
```

#### Streams

```java 
List<Integer> list = List.of(1, 2, -3, -3);

Integer result = list.stream()
        .reduce(0, (subtotal, n) -> subtotal + n);
        
// OR

int result = list.stream()
        .mapToInt(x -> x)
        .sum();
```

The first parameter is the **identity value** of the reduction. 
What it usually means is that it is the initial value for the 
reduction. In math, identity refers to a value which doesn't
interfere with the operation's result (**1** * 5 = 5, **0** + 1 = 1). 

The second is a function that receives the subtotal of the reduction
and the current element, and combines them.

## Checking the existence of some property on collection elements

Task: Check if there is some age under 18

#### Imperative Approach

```java 
List<Integer> ages = List.of(24, 18, 16, 37);

Boolean hasUnderage = false;
for (Integer a : ages) {
    if (a < 18) {
        hasUnderage = true;
        break;
    }
}
```

#### Streams

```java 
List<Integer> ages = List.of(24, 18, 16, 37);

Boolean hasUnderage = ages.stream()
        .anyMatch(a -> a < 18);
```

Some complimentary functions to validate some property on the
elements are **allMatch** (property on all elements) and **noneMatch**
(no element with the property).

---

## More realistic example

Well, I am not going to list every function there is in the docs :sweat:, only 
the most useful ones. But I hope the examples until now were enough for you to have
a feel of what to expect from the API. 

It's clear to me now, how much easier and cleaner is the code that follows this approach. 
Furthermore, these functions are battle tested and play nicely with each other.

But, let's see a more complete example, where the API will hopefully shine.

For the following case, we will imagine that we are on a social network context, 
where you have users and friendships.

Task: <mark>Among the friends of Michael with an active account, we want the top 3 
that share more friends with him. We are only interested on their names.</mark>

### Skeleton

```java 
// -----------------------------------------------

// Simple user class

class User {
    String name;
    String email;
    String password;
    Boolean active;
    Set<User> friends;
    
    // Constructors, getters, setters, hashcode, equals, ...
}

// -----------------------------------------------

// Users

User michael = new User("Michael", "michael@random.com", "123456");
User michelle = new User("Michelle", "michelle@random.com", "123456");
User gabriel = new User("Gabriel", "gabriel@random.com", "123456");
// ...

// -----------------------------------------------

// Friendships

michael.addFriendByEmail("michelle@random.com");
michael.addFriendByEmail("gabriel@random.com");
// ...
gabriel.addFriendByEmail("michael@random.com");
// ...

// -----------------------------------------------

// All users in one place

List<User> users = List.of(
    michael,
    michelle,
    gabriel,
    ...
);

// -----------------------------------------------

// Shared friends with Michael

private User getMichael() {
    String michaelsEmail = "michael@random.com";

    // Finds michael's user
    return users.stream()
        .filter(u -> u.getEmail().equals(michaelsEmail))
        .findFirst();
}

private Integer getSharedFriends(User user) {
    return getMichael().getFriends().retainAll(user.getFriends()).size();
}
```

_PS: We should not get too bogged down by this code, we are only
interested in the logic behind it._


### Imperative solution

```java
Set<Friends> sortedFriends = Collections.sort(
    getMichael().getFriends(),
    (u1, u2) -> getSharedFriends(u2).compareTo(getSharedFriends(u1))
);

int limit = 3;
int count = 0;
List<String> top3 = new ArrayList();

for (Friend friend : sortedFriends) {
    if (friend.getActive()) {
        top3.add(friend.getName());
        count += 1;
        if (count >= limit) {
            break;
        }
    }
}
```

### Streams solution

```java
List<String> top3 = getMichael().getFriends().stream()
    .filter(u -> u.getActive())
    .sorted((u1, u2) -> getSharedFriends(u2).compareTo(getSharedFriends(u1)))
    .limit(3)
    .map(u -> u.getName())
    .collect(Collectors.toList())
```

As you can see, the code on the streams side, it is much more readable,
and we don't need to care about how each little function was implemented. 
Nor with what temporary variables might have being created somewhere. 

We just declare what we want, and Java takes care of the rest.

I hope that post cleared your mind on how to implement streams, and showed you
how elegant they can be.

That's all for now! Bye!