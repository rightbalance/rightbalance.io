__NUXT_JSONP__("/solutions/api-development-scale-to-millions-of-users-with-a-robust-backend", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa){D[0]={id:E,depth:d,text:G};D[1]={id:H,depth:d,text:I};D[2]={id:J,depth:c,text:L};D[3]={id:M,depth:c,text:N};D[4]={id:O,depth:d,text:P};D[5]={id:Q,depth:c,text:T};D[6]={id:X,depth:c,text:Y};D[7]={id:Z,depth:c,text:y};D[8]={id:p,depth:d,text:u};return {data:[{}],fetch:[{page:{tags:["backend","api",F],related_content:[],title:B,short_title:K,header_one:z,header_two:A,icon:C,cta_header:"Have any questions about Backend API?",toc:D,body:{type:"root",children:[{type:a,tag:w,props:{id:E},children:[{type:a,tag:f,props:{href:"#what-is-backend-api",ariaHidden:l,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:G}]},{type:a,tag:g,props:{},children:[{type:b,value:"Your backend API is a combination of your application servers, databases, and your infrastructure powering your client-side applications or your API consumers. A properly implemented backend API allows you to drink your IPA while your entire system works for you."}]},{type:a,tag:w,props:{id:H},children:[{type:a,tag:f,props:{href:"#api-anatomy",ariaHidden:l,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:I}]},{type:a,tag:g,props:{},children:[{type:b,value:"Here is what a typical API looks like:"}]},{type:a,tag:o,props:{id:J},children:[{type:a,tag:f,props:{href:"#api-gateway",ariaHidden:l,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:L}]},{type:a,tag:g,props:{},children:[{type:b,value:"When a client request comes from a web browser, mobile app, or a third party, the first place it goes to is an API Gateway. The goal of API Gateway is to route the request to a specific destination, which is a microservice most of the time. Depending on the API Gateway implementation, it can also handle user authentication and some request transformation before handing it off to the microservice. Last but not least, API Gateway handles the first level of security by routing a request coming from the public Internet to a private resource. Important to note that all resources behind the API Gateway like your microservices and database should remain private and not being exposed to the Internet. Only API Gateway should have the ability to route the right request from the public to the private territory."}]},{type:a,tag:o,props:{id:M},children:[{type:a,tag:f,props:{href:"#service-layer",ariaHidden:l,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:N}]},{type:a,tag:g,props:{},children:[{type:b,value:"That’s where the magic happens. Most of your business logic is contained at this level. If you have microservices architecture, different requests will go to different microservices. Depending on your use-case, your service can do any number of things like making a database query, calling another microservice or a 3rd party API, caching some data for future use, writing into a queue, or performing some computation."}]},{type:a,tag:w,props:{id:O},children:[{type:a,tag:f,props:{href:"#how-to-build-apis-right",ariaHidden:l,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:P}]},{type:a,tag:o,props:{id:Q},children:[{type:a,tag:f,props:{href:"#architecture",ariaHidden:l,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:T}]},{type:a,tag:g,props:{},children:[{type:b,value:"A properly architected system is at the core of a robust and scalable API. If your API is architected well, everything else comes together naturally. Your product will be able to support your level of traffic and you’ll have a lot of happy customers."}]},{type:a,tag:g,props:{},children:[{type:b,value:"When designing your API, you’ll need to minimize the following:"}]},{type:a,tag:"ol",props:{},children:[{type:a,tag:x,props:{},children:[{type:b,value:"A number of single points of failure (which is a database in most cases)."}]},{type:a,tag:x,props:{},children:[{type:b,value:"A number of internal calls between services."}]},{type:a,tag:x,props:{},children:[{type:b,value:"Timing of each individual call."}]}]},{type:a,tag:g,props:{},children:[{type:b,value:"The main thing to realize is that each call results in a chain of events. While the work is happening the user is waiting for a response. Time and time again we’ve seen a seemingly quick API call taking a long time or sometimes taking the system down. Everyone on the team needs to have a clear idea of which calls are made for each operation and which resources are used during each call. There are a lot of tools out there like "},{type:a,tag:f,props:{href:"https:\u002F\u002Fnewrelic.com\u002F",rel:[q,r,s],target:t,title:"NewRelic website"},children:[{type:b,value:"NewRelic"}]},{type:b,value:R},{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.datadoghq.com\u002F",rel:[q,r,s],target:t,title:"DataDog page"},children:[{type:b,value:"DataDog"}]},{type:b,value:" that help you measure the timing of each individual call between services. You’ll be able to fix the issues before the software gets pushed to prod by instrumenting your app and running some "},{type:a,tag:S,props:{to:"\u002Fsolutions\u002Fautomated-tests-get-dividends-with-every-test-run#load-tests"},children:[{type:b,value:"load tests"}]},{type:b,value:" against it in your testing environment."}]},{type:a,tag:o,props:{id:X},children:[{type:a,tag:f,props:{href:"#scalability",ariaHidden:l,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:Y}]},{type:a,tag:g,props:{},children:[{type:b,value:"Once the system is architected for scale, supporting more traffic or less traffic should be as simple as a configuration change. Here are the main things to consider:"}]},{type:a,tag:n,props:{id:"scaling-automatically"},children:[{type:a,tag:f,props:{href:"#scaling-automatically",ariaHidden:l,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:"Scaling Automatically"}]},{type:a,tag:g,props:{},children:[{type:b,value:"Most of the cloud providers have auto-scaling capabilities based on certain rules you can specify. In addition to it, we recommend looking into "},{type:a,tag:S,props:{to:U},children:[{type:b,value:"Serverless tech"}]},{type:b,value:" allowing for scaling automatically with the increase or decrease in traffic. If your server provisioning is manual at the moment, it’s worth thinking about automating it. This way you can spend your engineering resources on developing new features or improving the strength of the overall system instead of manually provisioning servers."}]},{type:a,tag:n,props:{id:"minimize-service-chaining"},children:[{type:a,tag:f,props:{href:"#minimize-service-chaining",ariaHidden:l,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:"Minimize Service Chaining"}]},{type:a,tag:g,props:{},children:[{type:b,value:"Especially with microservices, it’s easy to fall into a trap of ‘nano services’. Making your services too granular can lead to an increase in the number of inner service calls. It’s a good idea to avoid making one service call another service and so on and so forth. The longer the call chain, the greater the possibility of a failure at each step, and the overall call length increases too. In addition to it, debugging a call spanning across multiple services is much harder than debugging a single call to a single service."}]},{type:a,tag:n,props:{id:"alerting-and-monitoring"},children:[{type:a,tag:f,props:{href:"#alerting-and-monitoring",ariaHidden:l,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:"Alerting and Monitoring"}]},{type:a,tag:g,props:{},children:[{type:b,value:"Alerting and monitoring is your best friend. It should be a part of the requirement for every feature. When your alerting and monitoring are properly set up you sleep better at night. It allows you to be more proactive about fixing the issues before they become problems. If something goes wrong, you’ll get notified and you’ll stay ahead of the game. This also increases the accountability of your team. The systems need to be developed so they always work without human intervention."}]},{type:a,tag:g,props:{},children:[{type:b,value:"A great book on a subject is "},{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.amazon.com\u002Fgp\u002Fproduct\u002F0134032802\u002Fref=as_li_qf_asin_il_tl?ie=UTF8&tag=howtoprogramb-20&creative=9325&linkCode=as2&creativeASIN=0134032802&linkId=55bea73bd8158a7441b84e4d4921bbb3",rel:[q,r,s],target:t,title:"The art of scalability book"},children:[{type:b,value:"Art of Scalability"}]},{type:b,value:"."}]},{type:a,tag:o,props:{id:Z},children:[{type:a,tag:f,props:{href:"#cost-efficiency",ariaHidden:l,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:y}]},{type:a,tag:g,props:{},children:[{type:b,value:"Your backend API is what makes your system scale to support a large number of users. With the increase in traffic comes the increase in cost. Therefore, when building your backend, you should be aware of the cost implications of your implementation decisions. We recommend focusing on the following areas:"}]},{type:a,tag:n,props:{id:"keeping-your-operational-database-slim"},children:[{type:a,tag:f,props:{href:"#keeping-your-operational-database-slim",ariaHidden:l,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:"Keeping your operational database slim"}]},{type:a,tag:g,props:{},children:[{type:b,value:"The main purpose of your operational database is to serve the immediate API requests. Anything else adds to the database size, decreases the database availability, and makes scaling the database harder, especially for SQL databases."}]},{type:a,tag:n,props:{id:"keeping-your-non-production-environments-small"},children:[{type:a,tag:f,props:{href:"#keeping-your-non-production-environments-small",ariaHidden:l,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:"Keeping your non-production environments small"}]},{type:a,tag:g,props:{},children:[{type:b,value:"Depending on your use-case, you’ll need a number of different environments. For a simple scenario having just 3 environments works just fine (development, staging, and production). As your organization grows, you’ll have more use cases you need to support and the number of environments will grow too. The key here is to have all production and pre-production environments with the same configuration. And all the rest of the systems with a scaled-down version of your resources to keep the cost down. In addition to it, using Serverless or Containers helps to minimize idle server time."}]},{type:a,tag:n,props:{id:"using-the-right-tool-for-the-job"},children:[{type:a,tag:f,props:{href:"#using-the-right-tool-for-the-job",ariaHidden:l,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:"Using the right tool for the job"}]},{type:a,tag:g,props:{},children:[{type:b,value:"We’ve seen many cases where a SQL database stores all application logs, acts as a search index for different kinds of queries, and even acts as a data warehouse while providing data for the API requests. There are solutions made specifically for each type of problem to solve. Logs can be archived into some flat files and processed offline. There are plenty of search solutions like "},{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.elastic.co\u002F",rel:[q,r,s],target:t,title:"Elastic Search page"},children:[{type:b,value:"Elastic Search"}]},{type:b,value:R},{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.algolia.com\u002F",rel:[q,r,s],target:t,title:"Algolia Website"},children:[{type:b,value:"Algolia"}]},{type:b,value:". A data warehouse needs to be separate from your runtime operational database so your data analyst doesn’t bring your runtime system down. Plus data warehouse users need the data in a different format. When using the right solution for each type of problem, you’ll be able to provide a better experience for the users. You’ll also have better control over your system cost."}]},{type:a,tag:w,props:{id:p},children:[{type:a,tag:f,props:{href:"#conclusion",ariaHidden:l,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:u}]},{type:a,tag:g,props:{},children:[{type:b,value:"Your backend infrastructure is the heart of your system. It supports your client applications at scale. Architecting your backend system right makes everything else easier. Using the right tool for the job is key. There are specialized solutions for each type of problem. The goal is to build it so it always works with some comprehensive alerting and monitoring in place notifying you about the issues in advance. If you need some help with building a robust backend API, don’t hesitate to reach out."}]}]},dir:"\u002Fsolutions",path:V,extension:".md",slug:W,createdAt:new Date(1659116726288),updatedAt:new Date(1659116726288)},ctaHref:"https:\u002F\u002Fairtable.com\u002Fshr9h6C35G3nLuwoQ",contentPages:[{draft:m,headerOne:z,headerTwo:A,headerThree:e,imageUrl:e,icon:C,icons:e,shortTitle:K,slug:W,tablesOfContent:D,isOpen:true,title:B,heroImage:e,to:V,cta:v},{draft:m,headerOne:_,headerTwo:"",headerThree:e,imageUrl:e,icon:"flask-outline",icons:e,shortTitle:_,slug:"automated-tests-get-dividends-with-every-test-run",tablesOfContent:[{id:"what-is-automated-testing",depth:d,text:"What Is Automated Testing"},{id:"advantages-of-automated-testing",depth:d,text:"Advantages of Automated Testing"},{id:"write-robust-and-modular-code",depth:c,text:"Write Robust and Modular Code"},{id:"refactor",depth:c,text:"Refactor"},{id:"minimize-bugs",depth:c,text:"Minimize Bugs"},{id:"tests-are-your-documentation",depth:c,text:"Tests are Your Documentation"},{id:"tests-prove-that-your-system-works",depth:c,text:"Tests Prove That Your System Works"},{id:"get-dividends-with-each-test-run",depth:c,text:"Get Dividends With Each Test Run"},{id:"disadvantages-of-automated-testing",depth:d,text:"Disadvantages of Automated Testing"},{id:"efficient-testing-strategy",depth:d,text:"Efficient Testing Strategy"},{id:"anatomy-of-automated-testing",depth:d,text:"Anatomy of Automated Testing"},{id:"unit-tests",depth:c,text:"Unit Tests"},{id:"integration-tests",depth:c,text:"Integration Tests"},{id:"ui--api-tests",depth:c,text:"UI \u002F API Tests"},{id:"test-suite",depth:c,text:"Test Suite"},{id:"load-tests",depth:c,text:"Load Tests"},{id:"how-to-start-with-automated-testing",depth:d,text:"How To Start With Automated Testing"},{id:"advanced-topics",depth:d,text:"Advanced Topics"},{id:"book-references",depth:d,text:"Book References"},{id:p,depth:d,text:u}],isOpen:m,title:"Automated Tests: Get Dividends With Every Test Run",heroImage:e,to:"\u002Fsolutions\u002Fautomated-tests-get-dividends-with-every-test-run",cta:v},{draft:m,headerOne:$,headerTwo:"Pipelines",headerThree:e,imageUrl:e,icon:"pipe-disconnected",icons:e,shortTitle:$,slug:"ci-cd-like-ac-dc-rock-n-roll-with-continuous-integration-and-continuous-delivery",tablesOfContent:[{id:"what-is-cicd",depth:d,text:"What is CI\u002FCD"},{id:"continuous-integration",depth:c,text:"Continuous Integration"},{id:"continuous-delivery",depth:c,text:"Continuous Delivery"},{id:"advantages-of-using-cicd",depth:d,text:"Advantages of using CI\u002FCD"},{id:"speed",depth:c,text:"Speed"},{id:"quality",depth:c,text:"Quality"},{id:"consistency",depth:c,text:"Consistency"},{id:"anatomy-of-a-cicd-pipeline",depth:d,text:"Anatomy of a CI\u002FCD Pipeline"},{id:"build",depth:c,text:"Build"},{id:"test",depth:c,text:"Test"},{id:"deploy",depth:c,text:"Deploy"},{id:"verify",depth:c,text:"Verify"},{id:"notify",depth:c,text:"Notify"},{id:"how-you-can-implement-cicd",depth:d,text:"How You Can Implement CI\u002FCD"},{id:"lock-in-your-branching-strategy",depth:c,text:"Lock in Your Branching Strategy"},{id:"build-test-deploy",depth:c,text:"Build, Test, Deploy"},{id:"pipeline-it",depth:c,text:"Pipeline it"},{id:p,depth:d,text:u}],isOpen:m,title:"CI\u002FCD like AC⚡️DC: Rock’n’Roll with Continuous Integration and Continuous Delivery",heroImage:e,to:"\u002Fsolutions\u002Fci-cd-like-ac-dc-rock-n-roll-with-continuous-integration-and-continuous-delivery",cta:v},{draft:m,headerOne:"Client-Side",headerTwo:aa,headerThree:e,imageUrl:e,icon:"devices",icons:e,shortTitle:"Client-Side Development",slug:"client-side-development-enlighten-your-users-with-the-best-user-experience",tablesOfContent:[{id:"what-is-client-side",depth:d,text:"What is Client-Side"},{id:"client-side-application-architecture",depth:d,text:"Client-Side Application Architecture"},{id:"user-interface",depth:c,text:"User Interface"},{id:"networking-layer",depth:c,text:"Networking Layer"},{id:"data-store",depth:c,text:"Data Store"},{id:"focus-areas",depth:d,text:"Focus areas"},{id:"look-and-feel",depth:c,text:"Look and Feel"},{id:"performance",depth:c,text:"Performance"},{id:"resiliency",depth:c,text:"Resiliency"},{id:"automated-testing-and-cicd",depth:d,text:"Automated Testing and CI\u002FCD"},{id:p,depth:d,text:u}],isOpen:m,title:"Client-Side Development: Enlighten Your Users With the Best User Experience",heroImage:e,to:"\u002Fsolutions\u002Fclient-side-development-enlighten-your-users-with-the-best-user-experience",cta:v},{draft:m,headerOne:"Serverless",headerTwo:aa,headerThree:e,imageUrl:e,icon:"lambda",icons:e,shortTitle:"Serverless Software Development",slug:"serverless-software-development-focus-on-features-instead-of-the-infrastructure",tablesOfContent:[{id:"what-is-serverless",depth:d,text:"What is Serverless"},{id:"why-serverless-matters",depth:d,text:"Why Serverless Matters"},{id:"pay-per-use",depth:c,text:"Pay per use"},{id:"all-major-cloud-providers-support-serverless",depth:c,text:"All major cloud providers support Serverless"},{id:"infinitely-scalable",depth:c,text:"Infinitely Scalable"},{id:"be-at-the-forefront-of-technology",depth:c,text:"Be At the Forefront of Technology"},{id:"business-problems-serverless-solves",depth:d,text:"Business Problems Serverless Solves"},{id:"power-your-websites-mobile-apps-and-iot-devices",depth:c,text:"Power your Websites, Mobile Apps, and IoT Devices"},{id:"deliver-relevant-data-to-stakeholders",depth:c,text:"Deliver relevant data to stakeholders"},{id:"reduce-infrastructure-cost",depth:c,text:"Reduce Infrastructure Cost"},{id:"increase-development-velocity",depth:c,text:"Increase Development Velocity"},{id:"handle-traffic-spikes-seamlessly",depth:c,text:"Handle Traffic Spikes Seamlessly"},{id:F,depth:d,text:"Solution"},{id:"strong-architecture",depth:c,text:"Strong Architecture"},{id:"efficient-monitoring-and-alerting",depth:c,text:"Efficient Monitoring and Alerting"},{id:"automated-testing",depth:c,text:"Automated Testing"},{id:"execution",depth:d,text:"Execution"},{id:"gradual-integration",depth:c,text:"Gradual Integration"},{id:"system-rewrite",depth:c,text:"System Rewrite"}],isOpen:m,title:"Serverless Software Development: Focus on Features, instead of the Infrastructure",heroImage:e,to:U,cta:v}]}],mutations:e}}("element","text",3,2,void 0,"a","p",-1,"span","icon","icon-link","true",false,"h4","h3","conclusion","nofollow","noopener","noreferrer","_blank","Conclusion","solution_read","h2","li","Cost Efficiency","Backend","API","API Development: Scale to Millions of Users With a Robust Backend","cloud-tags",Array(9),"what-is-backend-api","solution","What is Backend API","api-anatomy","API Anatomy","api-gateway","Backend API Development","API Gateway","service-layer","Service Layer","how-to-build-apis-right","How to Build APIs Right","architecture"," or ","nuxt-link","Architecture","\u002Fsolutions\u002Fserverless-software-development-focus-on-features-instead-of-the-infrastructure","\u002Fsolutions\u002Fapi-development-scale-to-millions-of-users-with-a-robust-backend","api-development-scale-to-millions-of-users-with-a-robust-backend","scalability","Scalability","cost-efficiency","Automated Tests","CI \u002F CD","Development")));