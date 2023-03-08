# [SBS] #1 Hello World
Before looking into the Hello World example, one concept that I have to mention about Spring is that it follows a principle called "Inversion of Control", that is implemented in the form of "Dependency Injection".

What it all means is that, we are going to be coding "pieces of software" which lifecycle will be managed by Spring. To make this even clearer, let's see a real life example. 

If you have ever implemented code that only runs when a certain event is fired, like a button click, you know that you just need to provide a function, that will be <mark>called by an Event Manager when the event is fired</mark>. It is not your job to poll the Operating System for the event.

In Spring, we call this "manager" the **Spring Container**, and the classes that will be managed are called "beans".

But let's see Spring Boot in practice.

```java
// DemoApplication.java

package my.package;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
}
```

This first file is always needed. It bootstraps all the operation. Here, the most important thing to notice is the use of **@SpringBootApplication** . This anotation, among other things, sets up the auto-configuration of Spring and it allows component scanning, which is used to detect all our classes automatically.   

For today, we are going to make a simple Rest API that returns the string "Hello World!" on one of the endpoints:

```java
// HelloController.java

package my.package;
  
import org.springframework.web.bind.annotation.GetMapping;  
import org.springframework.web.bind.annotation.RestController;  
  
@RestController  
public class HelloController {  
    @GetMapping("/hello")  
    String hello() {  
        return "Hello World1";  
    }  
}
```
- **@RestController** refers to a controller that returns data instead of views - it encapsulates the @Controller and @ResponseBody annotations. You can go deeper into Restful APIs and the MVC model, if you want to understand it better. But, for now, you only need to know that this code returns this text when we request this endpoint.
- **@GetMapping** is used to mark this function as an endpoint, where we are going to request a resource to be retrieved. We are also able to specify the endpoint text. 

Notice that we did not specify anywhere that a controller existed, we only annotated a class. The component scanning process will be responsible to find those beans.


## Result

```bash
curl localhost:8080/hello
Hello World!
```