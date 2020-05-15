# T1A1 - Workbook
##### By Simon Curran
![GitHub followers](https://img.shields.io/github/followers/SimoSultan?style=social)  
![Twitter Follow](https://img.shields.io/twitter/follow/simo_sultan?style=social)

#### Navigation:
- [**Q1**](#Q1) - History of the internet
- [**Q2**](#Q2) - Internet Technologies: Part 1
- [**Q3**](#Q3) - Internet Technologies: Part 2
- [**Q4**](#Q4) - Data Structures
- [**Q5**](#Q5) - Interpreters vs Compilers
- [**Q6**](#Q6) - Advantages and Disadvantages of JS and Python
- [**Q7**](#Q7) - Ethical Issues for an IT Professional
- [**Q8**](#Q8) - Control Flow in Ruby
- [**Q9**](#Q9) - Type Coercion
- [**Q10**](#Q10) - Data Types and their Classes
- [**Q11**](#Q11) - Restaurant App Classes
- [**Q12**](#Q12) - Type Coercion Error in Code
- [**Q13**](#Q13) - Bug in Array Code
- [**Q14**](#Q14) - Flowcharts and Pseudocode
- [**Q15**](#Q15) - Ruby Code Weather Program
- [**Q16**](#Q16) - Simo_Sultan's Allergy Program

***

## Q1:

#### 1. 1989/1990/1991: Proposal and Creation of the World Wide Web (www) & HTML  
Before the web, 
>"*there was different information on different computers, but you had to log on to different computers to get at it. Also, sometimes you had to learn a different program on each computer. Often it was just easier to go and ask people when they were having coffee…*” Sir Tim Berners-Lee.

Often confused with the internet itself, the web is actually just the most common means of accessing data online in the form of websites and hyperlinks [1]. Marking an important part of the internet's history by allowing the world to easily view it.

#### 2. 1994: Yahoo! is created
Yahoo! began as a student hobby and evolved from there. Jerry Yang and David Filo were looking for a single place to find useful web sites and for a way to keep track of their personal interests on the Internet [2]. In one year, Yahoo! grew to 10,000 website links and over 1 million views per day [3]. Yahoo! proved, before Google, the need to have a centralized location to access all websites on the web.

#### 3. 1995: JavaScript is created
In 1995, a Netscape programmer named Brandan Eich developed a new scripting language in just 10 days [4]. The reason I  included JavaScript is due its importance as a web technology, which can be determined from the fact that it is currently used by 94.5% of all websites [5].

#### 4. 1998: Napster went live (and Google)
Napster was specifically designed for sharing digital music files (in MP3 format) across a web-connected network. The service was extremely popular, approximately 80 million at its height [6]. This software application launched the world of P2P file-sharing, causing record-labels and movie studios a world of grief. But it shows how quickly ideas take place on the internet, quicker than they can become regulated. 

#### 5. 2007: iPhone and Mobile Web 
A history of the internet can't be complete without the historic event of 
the late Apple CEO, Steve Jobs, presenting what we now know as a smartphone.
How could such a device change the the internet?! In 2009, mobile web made up 0.7% of total web traffic [7]. At 2020, it now sits at 62% [8].

#### 6. 2016: Google Assistant
Once the realm of pure science fiction, voice-based artificial intelligence is now a reality.  
One of the oldest parts of Google Assistant is Google Voice Search, making its debut on Android smartphones in 2011, and while its functionality was basic by today’s standards, being able to give your phone voice commands marked a serious change in the way we were starting to interact with technology.


### Extra points of Notice - Pre 1980
#### 1900s: Tesla toyed with ideas of "world wireless system"
How cool is Nikola Tesla?! He proposed ideas to use Earth and its atmosphere as electrical conductors. He claimed this system would allow for point-to-point wireless telecommunications and broadcasting on a global scale [10].
.  
That cool.

#### 1958: Creation of the Modem
Short for (MOdulator—DEModulator) heralded a new age of communications and played a major role in the explosion of the internet. These nifty little devices turn a digital signal into an electrical signal and back again. No point having all these fancy websites if there is nothing to send and receive that data.

***Resources Used:***  
[1] [History](https://www.history.com/news/who-invented-the-internet)  
[2] [History-Computer](https://history-computer.com/Internet/Conquering/Yahoo.html)  
[3] [Medium](https://medium.com/greatepicurean/the-history-of-yahoo-edf6ebfc725)  
[4] [Springboard](https://www.springboard.com/blog/history-of-javascript/)  
[5] [Medium](https://medium.com/@mindfiresolutions.usa/how-important-is-javascript-for-modern-web-developers-2854309b9f52)  
[6] [Lifewire](https://www.lifewire.com/history-of-napster-2438592)  
[7] [Oberlo](https://au.oberlo.com/statistics/mobile-internet-traffic)  
[8] [Quoracreative](https://quoracreative.com/article/mobile-marketing-statistics)  
[9] [Yahoo! Finance](https://finance.yahoo.com/news/everything-know-google-assistant-203743219.html)  
[10] [Wikipedia](https://en.wikipedia.org/wiki/World_Wireless_System)

***


## Q2:
<!-- Define the features of the following technologies that are essential in terms of the development of the internet:
Explain how each technology has contributed to the development of the internet. 50 - 100 words per dot point -->
For the purpose of the next few questions, a parcel-delivery-service will be used as an example to best describe each features' purposes.

#### 1. Packets
On the Internet, a packet is a unit of data that is routed between an origin and a destination, and are passed over TCP/IP networks. Their goal is to send information reliably and efficiently in a small format, so data is not sent as a large file.

> *These (network) packets we will refer to as the parcel in our parcel-delivery-service metaphor.*

#### 2. IP addresses (IPv4 and IPv6)

Computers use a unique identifier to send that data pack to another computer. This is through TCP/IP protocol, which common for most networks used today, being a standard for communication. In the TCP/IP protocol, the unique identifier for a computer is called its IP address.

There are two standards for IP addresses: (IPv4) and (IPv6). All computers have an IPv4 address, and many are starting to use the new IPv6.

- **IPv4** uses 32 binary bits to create a single unique address on the network. 
For e.g. '216.27.61.137'
- **IPv6** uses 128 binary bits to create a single unique address on the network. For e.g. '2001:cdba:0000:0000:0000:0000:3257:9652'. [1]


> *When we want to send a parcel to another person, we need an address of where we want the parcel to be sent. We sometimes write our own address on the parcel as well, incase the parcel is needed to be returned to us. These addresses are equivalent to a computer's IP address.*

#### 3. Routers and Routing

A router assigns a local IP address to each device on a network. When a device requests information/data, the router is the middle person that connects the device to the Modem which is then sent out to the Internet. When the data is received, the router is responsible in routing that data back to the correct device again by using the local IP address that was assigned to it. Otherwise the data would be lost within the network with nowhere to go. [2] 

> *So let's say we are sending a parcel to someone who works in a big office, and that office has a mailman. We know the street address of the building, and we know the name of the person, but we don't know the route from the entrance of the building to the recipient. The router is like the mailman of the office, helping our parcel get to the correct person.*


#### 4. Domains and DNS

A domain is a user friendly alias of an IP address. Rather than having to remember a long, random, string of characters to visit a website, you can simply find the website you're looking for by searching (most of the time), the company name you are looking for.
However, web browsers only recognize IP address, so the Domain Name System (DNS) translates the domain names back to an IP address so the browser can load the Internet resources. [3]


> *When sending a parcel, it's easier for us to remember a street address than it is to remember GPS coordinates. The street address is the domain and the IP address is the GPS coordinate.*

***Resources Used:***  
[1] [HowStuffWorks](https://computer.howstuffworks.com/internet/basics/what-is-an-ip-address.htm)  
[2] [MakeUseOf](https://www.makeuseof.com/tag/technology-explained-how-does-a-router-work/)  
[3] [Cloudfare](https://www.cloudflare.com/learning/dns/what-is-dns/)
***



## Q3:

#### 1. TCP

When any file (such as an email, HTML file, GIF or URL request) is sent from one place to another on the Internet, the Transmission Control Protocol (TCP) layer divides the packet into "chunks" for routing. When they have all arrived, they are reassembled into the original file by the TCP layer at the receiving end [1].


The TCP/IP protocol was a major milestone for Internet, as it, more or less, gave the Internet its name due to the nature of its job. Before TCP/IP there was the Network Control Protocol (NCP) which allowed hosts of a single network to communicate. TCP/IP replaced NCP as it was designed to interconnect multiple networks to form a type of 'inter-net'.

#### 2. HTTP and HTTPS

The Hypertext Transfer Protocol was developed by Sir Tim Berners-Lee back in 1990's. HTTP, “a stateless system”, allowed web browsers and servers to communicate through the exchange of data, and only enables connection on demand.

HTTPS protocol is a progression and extension of HTTP. The 'S' in the abbreviation comes from the word 'Secure', and it is powered by Transport Layer Security (TLS). Without that 'S', any data you enter into the site is sent as plaintext, therefore, susceptible to interception or eavesdropping [2].  And the next natural progression from HTTPS is HTTP/2.

#### 3. Web Browsers (requests, rendering and developer tools)

What a web browser does, is best described by the process that happens when someone wants to find a particular website. 

1. User types in URL into browser
2. Browser converts URL into IP address through DNS Lookup
3. Browser sends a HTTP request for the HTML to the IP address obtained from above
3. Server responds and sends back the requested HTML file, or an error, or a redirect (this sends a new GET request for the HTML)
4. Browser renders the HTML
   1. Processes HTML and CSS into a render tree.
   2. Runs the layout on the render tree to compute the geometry of each node.
   3. Paints the individual nodes to the screen.
5. Browser sends additional requests for objects embedded in the HTML file (CSS files, images, javascript, etc.)

As explained, there is a great deal happening when a user requests a website, and, we can actually monitor a HTTP Requests and Responses with DevTools. A developer can use this to find ways to reduce load times or find an error that causes their site to load slowly. DevTools is also used to look at the code behind a website, this can be a source of learning, developing, debugging and altering the code. DevTools is a powerful tool for a developer in web design.

***Resources Used:***  
[1] [SearchNetworking](https://searchnetworking.techtarget.com/definition/packet)  
[2] [GlobalSign](https://www.globalsign.com/en/blog/the-difference-between-http-and-https)  
[3]

*** 


## Q4:

There were many interesting articles on Data Structures for Ruby. What I took away from those articles was the relationship between each structure and Big O notation. With Arrays/Lists and Hashes being some of the most common data structures, I had to pick them due to the fundamental difference between them. (i.e. their scalability). The descriptions below are a basic explanation of the pro's and cons of each structure. 

#### 1. Arrays/Lists

A small data set, like a shopping list, is great example of when using an Array would be appropriate. Since the data set is small, running a loop over this list is so quick it is of negligible time to find an item. However, if were to have a grocery lists for each of 10 000 people, it suddenly becomes a very long list. 

As an example, finding Bob's groceries in that list, we need to look at every person's list that comes before his. This is the shortcoming of an array, and can be explained as O(N) notation. That is, the amount of time/work it takes to find what we want, grows linearly with the length of the list. If only there was a way to store Bob's list so that we can type in his name and have his list be returned instantly. What is that noise you hear?....That's our friend Hash jumping up and down telling us they know the solution to our problem.

#### 2. Hashes

The beauty of the Hash is that it is the solution to a large data set problem. Hash's allow us type in 'Bob' and retrieve his list near instantly. We also don't need to look at everyone's list to find his. The big O notation from before is now O(1). Meaning, no matter how big the list gets, it will always take the same amount of time to find Bob's list, as it will Shirley's , or Trevor's, or Jane's. Hash's work by a key, value pair. You type in a key, and you get the value. This is because the way Hash's are created in computer memory. The key points to a specific part of memory and returns what's there. An Array does also work like this when we pass an index into the Array. E.g. array[2] will point to the 3rd element in that array, thi is O(1) as well. The issue with this though, is that we have no idea who the 3rd person in our list of 10 000 is. This is why Hash's are better suited.

Additionally, an Array will only take up as much memory in the computer as it needs (the size of the list), but it can take a long time to find something. A Hash will sacrifice memory (as it stores an empty group of values alongside ours, even though our Hash might be small, but it will find you something extremely quickly as it knows where the our data has been stored). So to decide which data structure to use, one must think about the data set we have. 

#### 3. Stacks/Queues

I cheated and picked 2 topics for this category due to how they complement each other. Stacks and Queues are both part of the Array class, and the best way to differentiate them, is LIFO and FIFO, respectively. A Stack represents Last In First Out (LIFO), think of a stack of plates, and a Queue is First in First out (FIFO). Like any queue in the real world ever. When Googling for use cases of each, I came across a simple explanation for a Stack use case. Ctrl + Z. No I am not asking you to press it, but we want to undo the last thing we did, so we need to retrieve the last process we just put on top of our list of processes we have done so far. A cool Queue example on the other hand, Google uses this in their "Zero Shutter Lag" feature for their cameras on their Pixel phone line. They do this by storing the last few (hundred or so) frames in a circular queue, and when you click the button, it selects the best frame from the most recent frames. 

***Resources Used:*** [Quora](https://www.quora.com/What-are-some-real-world-applications-of-a-queue-data-structure-1)



***


## Q5: 

#### 1. Interpreters

In a nutshell, Compilers and Interpreters do the same job, which is converting higher level programming languages to machine code. A high level language for example are languages like Ruby and JavaScript etc, that humans use to instruct the computer what to do. However, computer processors only understand binary, 1s and 0s, which is machine code. This is where interpreters and compilers come in to help us out.  
Languages like Ruby and Python use this program. An Interpreter translates one statement at a time and it will continue translating until the first error is met, which makes debugging a lot easier as the program stops when it runs into a bug in the code. The drawback however, is that interpreted code runs slower. Luckily for us web developers though, interpreters are more efficient due to their nature of being quick at debugging small regular changes. Also making interpreters a great tool for students in a learning environment as it allows them to program interactively.  

***Resources Used:***
[Guru99](https://www.guru99.com/difference-compiler-vs-interpreter.html), 
[Programiz](https://www.programiz.com/article/difference-compiler-interpreter), 
[Webopedia](https://www.techopedia.com/definition/7793/interpreter)

#### 2. Compilers

On the other hand, a compiler works by converting human written code into machine code before running. This can obviously take some time to process, however, the program runs faster as it has already read the code by the time of operation. But unfortunately, this also makes debugging quite difficult as it will display all errors at the same time after compilation. Compilers are used by languages such as C, C++, C# and Java to name a few.

To explain how a compiler works is difficult because they are quite complicated. This is a very brief overview of the main stages in the process, thanks to Dima at [StackExchange](https://softwareengineering.stackexchange.com/questions/118586/how-does-a-compiler-work).
> 1. **Lexing** - break up the text of the program into "tokens". These tokens are the "words" of the programming language, such as identifiers (keywords, variable names, function names, etc.) or operators (=, *, &, etc.).
> 2. **Parsing** - convert the sequence of tokens into a parse tree, which is a data structure representing various language constructs: type declarations, variable declarations, function definitions, loops, conditionals, expressions, etc.
> 3. **Optimization** - evaluate constant expressions, optimize away unused variables or unreachable code, unroll loops if possible, etc.
> 4. **Translate** the parse tree into machine instructions (or JVM byte code).


***
## Q6:

### **1. Javascript**

#### Advantages

- **Speed**  
JavaScript tends to be very fast because it is often run immediately within the client's browser. So long as it doesn't require outside resources, JavaScript isn't slowed down by calls to a backend server. Also, major browsers all support JIT (just-in-time) compilation for JavaScript, meaning that there's no need to compile the code before running it.  

- **Simplicity**  
JavaScript's syntax was inspired by Java's and is relatively easy to learn compared to other popular languages like C++.  

- **Popularity**  
JavaScript is everywhere on the web, and with the advent of Node.js, is increasingly used on the backend. There are countless resources to learn JavaScript. Both StackOverflow and GitHub show an increasing amount of projects that use JavaScript, and the traction it's gained in recent years is only expected to increase.  

- **Interoperability**  
Unlike PHP or other scripting languages, JavaScript can be inserted into any web page. JavaScript can be used in many different kinds of applications because of support in other languages like Pearl and PHP.
Server Load - JavaScript is client-side, so it reduces the demand on servers overall, and simple applications may not need a server at all.
Rich interfaces - JavaScript can be used to create features like drag and drop and components such as sliders, all of which greatly enhance the user interface and experience of a site.

- **Versatility**  
There are many ways to use JavaScript through Node.js servers. If you were to bootstrap Node.js with Express, use a document database like MongoDB, and use JavaScript on the frontend for clients, it is possible to develop an entire JavaScript app from front to back using only JavaScript.
Updates - Since the advent of ECMAScript 5 (the scripting specification that JavaScript relies on), ECMA International has been dedicated to updating JavaScript annually.

#### Disadvantages

- **Client-Side Security**  
Since JavaScript code is executed on the client-side, bugs and oversights can sometimes be exploited for malicious purposes. Because of this, some people choose to disable JavaScript entirely.  

- **Browser Support**  
While server-side scripts always produce the same output, different browsers sometimes interpret JavaScript code differently. These days the differences are minimal, and you shouldn't have to worry about it as long as you test your script in all major browsers. [1]


### **Python**

#### Advantages
- **Easy to Read, Learn and Write**  
Python is a high-level programming language that has English-like syntax. This makes it easier to read and understand the code. Python is really easy to pick up and learn, that is why a lot of people recommend Python to beginners. You need less lines of code to perform the same task as compared to other major languages like C/C++ and Java.

- **Improved Productivity**  
Python is a very productive language. Due to the simplicity of Python, developers can focus on solving the problem. They don’t need to spend too much time in understanding the syntax or behaviour of the programming language. You write less code and get more things done.

- **Interpreted Language**  
Python is an interpreted language which means that Python directly executes the code line by line. In case of any error, it stops further execution and reports back the error which has occurred. Python shows only one error even if the program has multiple errors. This makes debugging easier.

- **Dynamically Typed**  
Python doesn’t know the type of variable until we run the code. It automatically assigns the data type during execution. The programmer doesn’t need to worry about declaring variables and their data types.

- **Free and Open-Source**  
Python comes under the OSI approved open-source license. This makes it free to use and distribute. You can download the source code, modify it and even distribute your version of Python. This is useful for organizations that want to modify some specific behaviour and use their version for development.


#### Disadvantages

- **Slow Speed**  
We discussed above that Python is an interpreted language and dynamically-typed language. The line by line execution of code often leads to slow execution. The dynamic nature of Python is also responsible for the slow speed of Python because it has to do the extra work while executing code. So, Python is not used for purposes where speed is an important aspect of the project.

- **Not Memory Efficient**  
To provide simplicity to the developer, Python has to do a little tradeoff. The Python programming language uses a large amount of memory. This can be a disadvantage while building applications when we prefer memory optimization. Any doubts in Python advantages and disadvantages till now? Mention in the comment section. We will be happy to help you!!

- **Weak in Mobile Computing**  
Python is generally used in server-side programming. We don’t get to see Python on the client-side or mobile applications because of the following reasons. Python is not memory efficient and it has slow processing power as compared to other languages.

- **Database Access**  
Programming in Python is easy and stress-free. But when we are interacting with the database, it lacks behind. The Python’s database access layer is primitive and underdeveloped in comparison to the popular technologies like JDBC and ODBC. Huge enterprises need smooth interaction of complex legacy data and Python is thus rarely used in enterprises.

- **Runtime Errors**  
As we know Python is a dynamically typed language so the data type of a variable can change anytime. A variable containing integer number may hold a string in the future, which can lead to Runtime Errors. Therefore Python programmers need to perform thorough testing of the applications. Python is a simple, versatile and a complete programming language. It is a great choice for beginners up to professionals. Although it has some disadvantages, we can observe that the advantages exceed the disadvantages. Even Google has made Python one of its primary programming languages. [2]

***Resources Used:***  
[1] [freeCodeCamp](https://www.freecodecamp.org/news/the-advantages-and-disadvantages-of-javascript/)  
[2] [TechVidian](https://techvidvan.com/tutorials/python-advantages-and-disadvantages/)


*** 


## Q7:

"With great power, comes great responsibility." Uncle Ben. He was dead on the money. Because in the land of Software and IT, professionals in these areas have access to a great deal of data, and the skills to cause damage with it. Unfortunately, some people do use this power to cross that ethical line, however, a large amount, don't. Some typical ethical issues facing IT professionals are;
- Access to a User’s Personal Information
  - ie. medical, family, financial and personal attributes such as sexuality, religion, or beliefs.
- Criminal Acts

Where:
1. **Personal Information**  
    One way to approach this topic is discuss the responsibility due to respecting another person's information. Meaning, to talk about this topic, means to talk about Edward Snowden. An American whistleblower who copied and leaked highly classified information from the National Security Agency when he was an employee and subcontractor for the CIA. Here is someone who found his employer to be doing something ethically wrong with personal information, and wanting to share it with the world, he himself breaking laws and disrespecting the privacy of the company.

    In the process, violating the Espionage Act of 1917 and theft of government property. I want to leave the reader with an open ended questions here. Does a law, written in 1917, extend to protect someone 90+ years later, in a world that never existed back when it was written. Are all our laws updated to respect the privacy (i.e. digital and physical) for the person's whose information it is, and the person who has access to that person's information?!

    As an IT professional, do we have a moral obligation to turn the employer in, or are we ethically bound to respect our employer's privacy?! Does it make a difference if we sign a non-disclosure agreement when accepting the job?! There is no extent to this topic, as it is best left up to the reader, or the person who unfortunately may experience this.

2. **Criminality**   
    On the other hand, a developer with sinister inhibitions, can use this information and/or skills for personal gain through events such as theft, fraud, trafficking and distribution of prohibited substances or terrorism. In August last year, this exact situation happened. Capitol One Bank in America suffered a massive data breach, where the personal and financial data of more than 100 million customers was exposed. The hacker responsible, worked at Amazon, and wrote a program to scan for customers with a firewall misconfiguration who use Amazon Web Services. It was noted that Amazon didn't lend her any insider access, however working for Amazon would provide the hacker with a specific skillset that closely relate to those services. The hacker was charged with two criminal counts, wire fraud and computer fraud and abuse [1].   
    These 2 laws in America help a developer to act ethically by discouraging the developer to act unlawfully for personal gain. 

    Also, one does not talk about ethics and software without mentioning the GDPR. The General Data Protection Regulation is a modernisation of laws across Europe to help protect the personal information of individuals. This is a framework for companies and developers to implement into their business to help protect its customer base. This assists professionals to act ethically by ensuring the mindset of privacy first when developing software that collects data. This data is pseudonymized from the beginning so that it generally is an indirect connection between the data and an individual.


  3. **Case Study**  
  This is the case study


<!-- We found company A doesn't adhere to ethical issue B because of actions/evidence C, my recommendation to prevent that from happening again is D.  -->

<!-- You can & should lean on existing sources of info or evidence about an ethical breach rather than just make up your own assumptions of a company's ethical breach. Find articles, news, etc. As an example, most companies release their own blog post if their user data or passwords get stolen - that's a perfect source as it would usually cover why their data was vulnerable & how they're going to prevent theft in future. 

Your case study would be discussing what the ethical breach was in that scenario, how it happened, if the company's recommendations (if they exist) to prevent it in future are valid, and provide your own recommendations to prevent that ethical breach in future as well. -->


***Resources Used:***  
[1] [Wired](https://www.wired.com/story/capital-one-paige-thompson-case-hacking-spree/)

*** 


## Q8:
Control flow is a fundamental part of programming languages. It is also fundamental to our human nature as well. Let me explain. Control flow can best be described in a programming language as an if/else block of code. For e.g.
```ruby
if youre_hungry
  "go eat"
else
  "don't eat"
end
```
As we can see, this block of code can also represent our decisions throughout our day to day life. And by using this in our program, we can control the flow of execution. For a user, it can be clearly seen in programs where you are required to log in. If you are logged in, you get to use the program/website, if not, then display the log in page. We can express this control flow a few different ways, and for this explanation, we will use Ruby as our guide for keywords. In addition to if/else, we can also include if/elsif/else, or a case/when statement, and if our control flow block of code is fairly short, we can express it as a ternary operator. These methods are all variations to the original if/else, and can each be used, but sometimes a specific variation may be better for code readability in that situation. Examples can be seen below.

```ruby
# our code above can be expressed in a ternary operator for something cleaner
youre_hungry ? "go eat" : "don't eat"

# if you have more conditions we can use a nested ternary, otherwise the old...
# if elsif else code block
if youre_tired
  "go sleep"
elsif youre_exhausted
  "lie down and rest"
else   
  "carry on"
end

# which can also be written using a case when statement
# where tiredness is the variable we are looking at, which can be either youre_tired or youre_exhausted
case tiredness
when youre_tired
  "go sleep"
when youre_exhausted
  "lie down and rest"
else
  # this is our default situation when no condition above is met
  "carry on"
end

```
***No Resources Used***


***

## Q9:

Type coercion is the process of converting a value from one type to another (such as a string to number or an object to boolean, and so on). Any type, be it primitive or an object, is a valid subject for type coercion, which there are 2 different types of. 
- Implicit coercion &
- Explicit coercion  


A developer can call explicit coercion by writing:
```ruby
Number("4")
```
They are explicitly converting the string "4" to the number/integer, 4. However, in JavaScript, values can be converted between different types automatically. This is called implicit type coercion. And can be seen in situations like this:
```ruby
5 * "4"
```
In Ruby, this would result in a string of numbers. (i.e. "44444") Where we have 5, 4's. Which is of the same class as "hello". However, as JS is a weakly-typed language, this above piece of code results in the number/integer, 20. Which is most likely what the developer was initially after.

***Resources Used:*** [freeCodeCamp](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/).

***


## Q10:

As Ruby is an Object-Oriented language, all data types are based on classes. The different data types are as follows:

- Numbers
- Strings
- Symbols
- Hashes
- Arrays
- Booleans

**Numbers:** of class'Numeric'   
The different kinds of numbers are that are generally used are; Integers and Floats (floating point, which uses a dot for a decimal mark). Additionally, there are two types of Integers, one is Bignum and second is Fixnum. We also have Complex, Rational and BigDecimal numbers as well.
```ruby
# A Fixnum, which inherits from Integer, which in turn inherits from Numeric.
4

# A Bignum, which inherits from Integer, which in turn inherits from Numeric.
400000000000

# A floating point number
4.0
```

**Strings:** of class 'String'  
A string is a group of letters that represent a sentence or a word. Strings are defined by enclosing text within single (' ') or double (“ ”) quotes. Strings are objects of class String and are represented by:
```ruby
"Hello how are you"
``` 

**Symbols:** of class 'Symbol'  
Symbols are light-weight strings. A symbol is preceded by a colon (:). They are used instead of strings because they can take up much less memory and have better performance. An example of a symbol:
```ruby
:symbol
```

**Hashes:**  
A hash are represented by a key-value pair, enclosed between curly braces and separated by a comma, can be written in Ruby different ways, and are similar in nature to an Array. A hash in Ruby is like an object literal in JavaScript, a dictionary in Python, or an associative array in PHP. A hash in Ruby can be seen as:
```ruby
{key1: value1, key2: value2}
# OR AS
{"key3" => value3, "key4" => value4}
```

**Booleans:**  
Boolean data type represents only one bit of information either true or false.

```ruby
true
# OR
false
```

**Arrays:**  
 An array can best be described as a list of data. It can contain all types of data mentioned above. Data in arrays are separated by comma, and are enclosed between square brackets. The position of elements in an array starts with 0. For example:
 ```ruby
 array = ["I am string", true, 4.0, {key: 1, key: 2}]
 # where an array is indexed as so  [0, 1, 2, 3]. 4 items, but the index of the last item is 3
 # to access the 3rd item, we would write 'array[2]' 
 ```

***Resources Used:***   [GeeksforGeeks](https://www.geeksforgeeks.org/ruby-data-types/)


***


## Q11:

We would need an app where the user can see all our available food and prices, be able to select an item from the menu, add the quantity of the item, see their selected items in a cart, and be able to checkout. This would cover the basis of our app to make an MVP. Which means the classes we would need are; Menu, Food, Drink, \*Item\*, Cart, Business, User and View.
- Menu class will display what the restaurant has to offer.
- Food class, which will also have a quantity method
- Drink class, to cover our menu of drinks
- \*Item\* will be a sub-class which inherits from Food and Drink
- User class to store user information
- Cart class will be a sub-class of User and will store the user's selection
- Business class will store information about the business
- and a View (module) will hold methods to display the all our information



*** 


## Q12:

The reason this code does not work is due to the first or second line. In Ruby, the 'gets' method returns a string, even if a number is inputted by the user, it will be returned as a string. Then on line 2, we multiply the string 9 times, then try to divide a string by 5. Which is why the NoMethodError error occurs, as there is not String method matching '/'. To fix the error, we need to convert the string to an integer (using to_i after 'gets' on line 1 or after celsius on line 2) which will allow the code to run. Additionally, I have corrected and cleaned the code up [here](https://github.com/SimoSultan/ca-assignments/blob/master/t1a1/docs/q12_code.rb). 


***


## Q13:

The reason this code was not working correctly was due to the assigning the arr[i+1] variable into arr[i]. Then assigning arr[i], the one that was just overwritten, into arr[i+1]. Which results in the original arr[i+1] variable being assigned into both arr[i] and arr[i+1]. So to fix this, assigning each of the 2 variables into an external variable, then place the external variable back into the original arr. This corrected code in full can be seen [here](https://github.com/SimoSultan/ca-assignments/blob/master/t1a1/docs/q13_code.rb). Here is a small snippet of the code that will correct the bug in the original.
```
x = arr[i]
y = arr[i+1]
arr[i] = y
arr[i+1] = x
```
An additional method has been supplied in my code provided above that sorts the entire array using recursion.


***



## Q14:

- i  
For this part, my flowchart can be found [here](https://github.com/SimoSultan/ca-assignments/blob/master/t1a1/docs/q14_flowchart.jpg). 

- ii  
```ruby
# create a function to determine if a number is prime or not
  # if number is 2, return true, 2 id special as it is even and prime
  # if number is even return false, even numbers aren't prime
  # if number is less than or equal to 1, special case not prime
  # find the square root of the number and floor it
  # test all odd numbers between 3 and the square to see if it is passed in number is divisible by that number
  # if the modulo of those numbers are 0, then the number is not a prime
# end

# run loop from 1 to 100
  # test if each number is prime, if it is, print the number
# end
```
My code that demonstrates this flow can be found [here](https://github.com/SimoSultan/ca-assignments/blob/master/t1a1/docs/q14_test_code.rb).


***


## Q15:

My Ruby code that solves the problem can be found [here](https://github.com/SimoSultan/ca-classwork/blob/master/assignments/t1a1/docs/q15_code.rb).


***


## Q16:

My Ruby program that solves the problem can be found [here](https://github.com/SimoSultan/ca-assignments/blob/master/t1a1/docs/q16_tests.rb). Additionally, I have used 'test/unit' gem to test the code. Which is found [here](). 

***


[Go to Navigation at Top](#Navigation).


