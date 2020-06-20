# T2A1 - Workbook
##### By Simon Curran
![GitHub followers](https://img.shields.io/github/followers/SimoSultan?style=social)  
![Twitter Follow](https://img.shields.io/twitter/follow/simo_sultan?style=social)

#### Navigation:
- [**Q1**](#Q1) - 
- [**Q2**](#Q2) - 
- [**Q3**](#Q3) -
- [**Q4**](#Q4) -
- [**Q5**](#Q5) - 
- [**Q6**](#Q6) - 
- [**Q7**](#Q7) - 
- [**Q8**](#Q8) - 
- [**Q9**](#Q9) - 
- [**Q10**](#Q10) - 
- [**Q11**](#Q11) - 
- [**Q12**](#Q12) - 
- [**Q13**](#Q13) - 
- [**Q14**](#Q14) - 


***

## Q1:
<!-- Describe the architecture of a typical Rails application	200-300
 -->
Model-View-Controller Pattern
Ruby on Rails uses the Model-View-Controller (MVC) architectural pattern in order to improve the maintainability of the application. The Model centralizes the business logic, the View manages the display logic, while the Controller deals with the application flow. The MVC allows a clean separation of concerns, in the way that it keeps the business logic separated from HTML views. Additionally, it improves decoupling and testing.

Model

The Model layer carries the business logic of the application and the rules to manipulate the data. In Ruby on Rails, the models are used to manage the interaction with their corresponding elements in the database. The Models represent the information in the database and do the appropriate validations.

View

The view is the front-end of the application, representing the user interface. In Ruby on Rails, views are HTML files with embedded Ruby code. The embedded Ruby code in the HTMLs is fairly simple (loops and conditionals). It is only used to display data to the user in the form of views. Views are used to provide the data to the browsers that requested the web pages. Views can server content in several formats, such as HTML, PDF, XML, RSS and more.

RESTful Architecture

REST stands for Representational State Transfer. REST is an alternative to web services, such as SOAP and WSDL. It relies in the HTTP protocol for all the CRUD operations: create, read, update and delete. RESTful web services are appropriated when the web services are completely stateless, limited bandwidth (it’s very useful for mobile devices since it doesn’t the the overhead of other protocols like SOAP), when the data is not generated dynamically so it could be cached to improve performance and when there is a mutual understanding between the service producer and the consumer.

Controller

Controllers interact with models and views. The incoming requests from the browsers are processed by the controllers, which process the data from the models and pass it to the views for presentation.

 Ruby on Rails architecture has the following features:

Model-View-Controller architecture.
Representational State Transfer (REST) for web services.
Supports the major databases (MySQL, Oracle, MS SQL Server, PostgreSQL, IBM DB2, and more).
Open-source server side scripting language.
Convention over configuration
Scripts generators to automate tasks.
Use of YAML machine, which is a human-readable data serialization format.
The above-described features are distributed in the following Rails’ components and the Fig. 2 shows the interaction between some of these components:

Action Mailer
Action Pack
Action Controller
Action Dispatcher
Action View
Active Model
Active Record
Active Resource
Active Support
Railties

Since Rails is built on the Ruby language it inherits the goodness and weakness of that language. Ruby is a dynamic scripting language with an elegant syntax and fully object-oriented. Because it is an interpreted language it is slower than other languages that are compiled like Java or C++. In most cases, this difference in speed is not a problem but when the web application needs to scale to millions of concurrent users this performance starts to degrade. The Ruby language is not suited for high concurrency applications, because it is not optimized for speed computing. It was designed to be elegant, simply and for rapid development. Ruby doesn’t have good thread support yet and, like many other scripting languages, Ruby has trouble dealing with long-lived processes. But other languages, like Java, are really good at that because they have been optimized for year to handle threads efficiently. Another weakness is the Ruby’s garbage collector is not as good as Java’s in that each process requires much more memory. In terms of deployment, a web application on Ruby on Rails could be harder to deploy than sites that are using more common technologies, such as PHP. That’s because not all the hosting providers support Rails, but in time the support of Rails is increasing.

![Overall Framework Architecture](./img/rails_arch.png)
Reference model depicting the overall framework architecture 
***note: original source of image on webpage has a broken link***

***Resources Used:***  
[1] [Adrien Mejia ](https://adrianmejia.com/ruby-on-rails-architectural-design/#:~:text=Model%2DView%2DController%20Pattern,deals%20with%20the%20application%20flow.)  
<!-- BLATANT COPYING HERE -->

<!-- checkout links below for more info -->
[2] [Sitepoint](https://www.sitepoint.com/model-view-controller-mvc-architecture-rails/)  
[3] [Medium](https://medium.com/the-renaissance-developer/ruby-on-rails-http-mvc-and-routes-f02215a46a84)  



***


## Q2:
<!-- Identify a database commonly used in web applications (including Rails) and discuss the pros and cons of this database	150-250 -->



***Resources Used:***  
[1] [HowStuffWorks](https://computer.howstuffworks.com/internet/basics/what-is-an-ip-address.htm)  
[2] [MakeUseOf](https://www.makeuseof.com/tag/technology-explained-how-does-a-router-work/)  
[3] [Cloudfare](https://www.cloudflare.com/learning/dns/what-is-dns/)
***



## Q3:
<!-- Discuss the implementation of Agile project management methodology	200-300 -->


***Resources Used:***  
[1] [SearchNetworking](https://searchnetworking.techtarget.com/definition/packet)  
[2] [GlobalSign](https://www.globalsign.com/en/blog/the-difference-between-http-and-https)  
[3] [Khan Academy](https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/http-html/a/hypertext-transfer-protocol-http)

*** 


## Q4:
<!-- Provide an overview and description of a standard source control workflow -->

***Resources Used:*** [Quora](https://www.quora.com/What-are-some-real-world-applications-of-a-queue-data-structure-1)



***


## Q5: 
<!-- Provide an overview and description of a standard software testing process (e.g. manual testing)	100-200 -->
#### 1. 


***Resources Used:***  
[1] [Guru99](https://www.guru99.com/difference-compiler-vs-interpreter.html)    
[2] [Programiz](https://www.programiz.com/article/difference-compiler-interpreter)  
[3] [Webopedia](https://www.techopedia.com/definition/7793/interpreter)  
[4] [StackExchange](https://softwareengineering.stackexchange.com/questions/118586/how-does-a-compiler-work).


***



## Q6:
<!-- Discuss and analyse requirements related to information system security and how they relate to the project 100-200 -->

### 1.


***Resources Used:***  
[1] [freeCodeCamp](https://www.freecodecamp.org/news/the-advantages-and-disadvantages-of-javascript/)  
[2] [TechVidian](https://techvidvan.com/tutorials/python-advantages-and-disadvantages/)


*** 


## Q7:
<!-- Discuss common methods of protecting information and data and how you would apply them to the project 100-200 -->


***Resources Used:***  
[1] [Wired](https://www.wired.com/story/capital-one-paige-thompson-case-hacking-spree/)
[2] [SmartCompany](https://www.smartcompany.com.au/startupsmart/news/clearview-ai-data-breach/)
[3] [CPO Magazine](https://www.cpomagazine.com/cyber-security/clearview-ai-data-breach-exposes-facial-recognition-firms-client-list/)

*** 


## Q8:
<!-- Research what your legal obligations are in relation to handling user data and how they can be met for the project	100-200 -->
***No Resources Used***


***

## Q9:
<!-- Describe the structural aspects of the relational database model. Your description should include information about the structure in which data is stored and how relations are represented in that structure.	100-200 -->


***Resources Used:*** 
[freeCodeCamp](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/).

***


## Q10:
<!-- Describe the integrity aspects of the relational database model. Your description should include information about the types of data integrity and how they can be enforced in a relational database.	100-200 -->


***Resources Used:***   
[GeeksforGeeks](https://www.geeksforgeeks.org/ruby-data-types/)


***


## Q11:
<!-- Describe the manipulative aspects of the relational database model. Your description should include information about the ways in which data is manipulated (added, removed, changed, and retrieved) in a relational database.	100-200 -->



*** 


## Q12:
<!-- Identify and explain the workings of TWO sorting algorithms and discuss and compare their performance/efficiency (i.e. Big O)	300-500 -->



***


## Q13:
<!-- Identify and explain the workings of TWO search algorithms and discuss and compare their performance/efficiency (i.e. Big O)	300-500 -->

***



## Q14:
<!-- Conduct research into a marketplace website (app) and answer the following parts:  a. List and describe the software used by the app.
  b. Describe the hardware used to host the app.
  c. Describe the interaction of technologies within the app
  d. Describe the way data is structured within the app
  e. Identify entities which must be tracked by the app
  f. Identify the relationships and associations between the entities you have identified in part (e)
  g. Design a schema using an Entity Relationship Diagram (ERD) appropriate for the database of this website (assuming a relational database model)	50-100 per part -->


***


[Go to Navigation at Top](#Navigation).


***

## Author
Simon Curran