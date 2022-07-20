__NUXT_JSONP__("/case-studies/leveraging-aws-lambda-to-drive-product-growth-at-tala", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z){U[0]={id:T,depth:c,text:R};U[1]={id:Q,depth:c,text:P};U[2]={id:O,depth:c,text:G};U[3]={id:J,depth:c,text:F};return {data:[{}],fetch:[{page:{cta_header:"Have any questions about Technology Product Growth?",tags:["serverless","aws","lambda","sqs","cassandra"],related_content:[],title:Z,short_title:S,header_one:t,header_two:W,header_three:M,image_url:Y,hero_image:V,draft:f,toc:U,body:{type:"root",children:[{type:a,tag:d,props:{},children:[{type:a,tag:j,props:{alt:"Rachel Brown and Alex Tamoykin",src:"https:\u002F\u002Fimages.rightbalance.io\u002Fuploads\u002Frachel-alex.png"},children:[]}]},{type:a,tag:H,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Authors: Rachel Brown (Product Manager) and Alex Tamoykin (Tech Lead), originally posted on "},{type:a,tag:i,props:{href:"https:\u002F\u002Ftala.co\u002Fblog\u002F2020\u002F01\u002F14\u002Fleveraging-aws-lambda-to-drive-product-growth\u002F",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:b,value:"Tala Blog"}]}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"In 2019, Tala’s Product and Engineering teams partnered with Right Balance to solve a number of complex problems for our business and our customers in emerging markets. In this article, we share how a new architectural design helped us drive sustainable growth for the company as well as solve one of our customers’ top pain points."}]},{type:a,tag:m,props:{id:T},children:[{type:a,tag:i,props:{href:"#architectural-design",ariaHidden:l,tabIndex:n},children:[{type:a,tag:r,props:{className:[q,o]},children:[]}]},{type:b,value:R}]},{type:a,tag:d,props:{},children:[{type:b,value:"The new architectural design we built involves SQS queues and AWS lambda functions. We decided to use this design because of several factors:"}]},{type:a,tag:"ol",props:{},children:[{type:a,tag:g,props:{},children:[{type:a,tag:y,props:{},children:[{type:b,value:"Resiliency."}]},{type:b,value:" Each event has business value, so we wanted to ensure that no events are dropped under heavy traffic. Placing events on a durable SQS queue as they occur allows us to retain them as well as retry delivering them in case of a processing failure."}]},{type:a,tag:g,props:{},children:[{type:a,tag:y,props:{},children:[{type:b,value:"Elasticity."}]},{type:b,value:" One of the main advantages of serverless technology is the ability to use resources on demand. AWS lambdas are only billed at the times when they are invoked."}]},{type:a,tag:g,props:{},children:[{type:a,tag:y,props:{},children:[{type:b,value:"Flexibility."}]},{type:b,value:" Managing events in a queue and lambdas allows us to swap out each component easily, which opens up more possibilities for future use cases."}]}]},{type:a,tag:m,props:{id:Q},children:[{type:a,tag:i,props:{href:"#case-study-1-sending-post-install-data",ariaHidden:l,tabIndex:n},children:[{type:a,tag:r,props:{className:[q,o]},children:[]}]},{type:b,value:P}]},{type:a,tag:u,props:{style:v},children:[{type:a,tag:j,props:{alt:"Tala mobile app",src:"https:\u002F\u002Fimages.rightbalance.io\u002Fuploads\u002Fdevice-home-screen.png"},children:[]}]},{type:a,tag:d,props:{},children:[{type:b,value:"Like many businesses, Tala’s marketing team uses digital advertising channels to introduce our product to new audiences. Early last year, the effectiveness of Tala’s Facebook and Google ads were being primarily measured by install events (i.e., users who download the app). We quickly identified an opportunity to improve the effectiveness of campaigns by optimizing ads for post-install events rather than downloads."}]},{type:a,tag:d,props:{},children:[{type:a,tag:j,props:{alt:I,src:"https:\u002F\u002Fimages.rightbalance.io\u002Fuploads\u002Fideation.png"},children:[]}]},{type:a,tag:H,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:I}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"The marketing team identified several high-priority post-install events, which we set up triggers for on backend services. When an event is triggered, a file is sent to an SQS queue. The lambda function then retrieves this information from the queue and passes it to our marketing platform API. This architecture is much more resilient and accurate than the team’s previous client-side event tracking solution."}]},{type:a,tag:d,props:{},children:[{type:b,value:"Tala’s engineering team designed, built, and tested the new framework over several sprints. Our marketing team then ran a scaled Facebook campaign and realized a significantly higher return on ad spend when optimizing for post-install events compared to install events, in addition to maintaining 100% uptime and data accuracy."}]},{type:a,tag:m,props:{id:O},children:[{type:a,tag:i,props:{href:"#case-study-2-preventing-fraud",ariaHidden:l,tabIndex:n},children:[{type:a,tag:r,props:{className:[q,o]},children:[]}]},{type:b,value:G}]},{type:a,tag:u,props:{style:v},children:[{type:a,tag:j,props:{alt:"Device issue screen",src:"https:\u002F\u002Fimages.rightbalance.io\u002Fuploads\u002Fdevice-issue.png"},children:[]}]},{type:a,tag:d,props:{},children:[{type:b,value:"In emerging markets such as Kenya, the second-hand phone market is massive. Consumers are also sensitive to download and storage size due to device and data constraints. Because Tala uses device data (with user permission) to underwrite personal loans, the following is a common scenario:"}]},{type:a,tag:"ul",props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:"Person A installs app on phone and signs up for Tala"}]},{type:a,tag:g,props:{},children:[{type:b,value:"Person A sells phone to Person B"}]},{type:a,tag:g,props:{},children:[{type:b,value:"Person B cannot sign up for Tala on phone"}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"Tala’s legacy device management rules, used to prevent fraud, were blocking tens of thousands of new users per month from signing up and were one of the largest drivers of customer support tickets globally. In addition, this problem had grown 3x in volume over the past 2 years and was expected to continue increasing exponentially the longer the company operated in a given market."}]},{type:a,tag:d,props:{},children:[{type:b,value:"In this situation, we launched a set of new device management rules and a lambda function. The lambda stored a large amount of event data in a predefined format in a Cassandra database. Doing some pre-processing of the data upfront allowed us to achieve constant database lookups to identify the device ownership instantly. We enabled new users to more seamlessly sign up for the app while decreasing customer support tickets related to device issues by 91%."}]},{type:a,tag:u,props:{style:v},children:[{type:a,tag:j,props:{alt:"Loan approval success screen",src:"https:\u002F\u002Fimages.rightbalance.io\u002Fuploads\u002Fdevice-approved.png"},children:[]}]},{type:a,tag:m,props:{id:J},children:[{type:a,tag:i,props:{href:"#conclusion",ariaHidden:l,tabIndex:n},children:[{type:a,tag:r,props:{className:[q,o]},children:[]}]},{type:b,value:F}]},{type:a,tag:d,props:{},children:[{type:b,value:"As thought workers and entrepreneurs, we solve challenging problems every day. As you scale your business, which used to work in the past needs to be challenged and rethought. Using the right technology the right way helps you break through the limits and take your product to the next level."}]}]},dir:"\u002Fcase-studies",path:E,extension:".md",slug:K,createdAt:new Date(1658348438771),updatedAt:new Date(1658348438771)},ctaHref:"https:\u002F\u002Fairtable.com\u002Fshr9h6C35G3nLuwoQ",contentPages:[{draft:L,headerOne:"10+ high caliber engineers",headerTwo:"from Latin America and Eastern Europe hired in less than 5 months",headerThree:k,imageUrl:"https:\u002F\u002Fs3.amazonaws.com\u002Frightbalance-images-prd\u002Fuploads\u002Femotive-logo.png",icon:k,icons:[],shortTitle:N,slug:"10-high-caliber-engineers-from-latin-america-and-eastern-europe-hired-in-less-than-5-months",tablesOfContent:[{id:w,depth:c,text:x},{id:s,depth:c,text:z},{id:A,depth:c,text:B},{id:C,depth:c,text:D}],isOpen:f,title:N,heroImage:"https:\u002F\u002Fimages.rightbalance.io\u002Fuploads\u002Foleg.jpg",to:"\u002Fcase-studies\u002F10-high-caliber-engineers-from-latin-america-and-eastern-europe-hired-in-less-than-5-months",cta:p},{draft:f,headerOne:"20+ Engineers",headerTwo:" from Latin America hired on a very aggressive timeline.",headerThree:k,imageUrl:"https:\u002F\u002Fs3.amazonaws.com\u002Frightbalance-images-prd\u002Fuploads\u002Ffat-tail.png",icon:k,icons:[],shortTitle:X,slug:"20-engineers-from-latin-america-hired-on-a-very-aggressive-timeline",tablesOfContent:[{id:w,depth:c,text:x},{id:s,depth:c,text:z},{id:A,depth:c,text:B},{id:C,depth:c,text:D}],isOpen:f,title:X,heroImage:"https:\u002F\u002Fimages.rightbalance.io\u002Fuploads\u002Fgerry-bg2c.jpg",to:"\u002Fcase-studies\u002F20-engineers-from-latin-america-hired-on-a-very-aggressive-timeline",cta:p},{draft:f,headerOne:"$ Millions",headerTwo:"of student loan debt served each month with new system",headerThree:t,imageUrl:"https:\u002F\u002Fs3.amazonaws.com\u002Frightbalance-images-prd\u002Fuploads\u002Ftuition-logo-white.png",icon:h,icons:h,shortTitle:"Tuition.io - Serverless",slug:"from-monolith-to-serverless-microservices-how-tuition-io-disrupts-one-trillion-dollar-student-debt-industry-with-new-technology",tablesOfContent:[{id:w,depth:c,text:x},{id:"outdated-monilithic-architecture",depth:e,text:"Outdated Monolithic Architecture"},{id:"low-visibility",depth:e,text:"Low Visibility Into The System"},{id:"no-streamlined-process",depth:e,text:"No Streamlined Process"},{id:s,depth:c,text:z},{id:A,depth:c,text:B},{id:"componentized-front-end",depth:e,text:"Componentized Front End"},{id:"serverless-microservices-on-backend",depth:e,text:"Serverless Microservices on the Backend"},{id:"cicd",depth:e,text:"Continuous Integration and Continuous Delivery"},{id:"data-migration",depth:e,text:"Data Migration"},{id:"mobile",depth:e,text:"Mobile"},{id:C,depth:c,text:D}],isOpen:f,title:"From Monolith to Serverless Microservices: How Tuition.io Disrupts $1.52 Trillion Student Debt Industry with New Technology",heroImage:"https:\u002F\u002Fs3.amazonaws.com\u002Frightbalance-images-prd\u002Fuploads\u002Fbob-2.jpeg",to:"\u002Fcase-studies\u002Ffrom-monolith-to-serverless-microservices-how-tuition-io-disrupts-one-trillion-dollar-student-debt-industry-with-new-technology",cta:p},{draft:f,headerOne:t,headerTwo:W,headerThree:M,imageUrl:Y,icon:h,icons:h,shortTitle:S,slug:K,tablesOfContent:U,isOpen:L,title:Z,heroImage:V,to:E,cta:p}]}],mutations:h}}("element","text",2,"p",3,false,"li",void 0,"a","img","","true","h2",-1,"icon-link","case_study_read","icon","span","solution",null,"div","text-align: center","challenge","Challenge","strong","Solution","execution","Execution","results","Results","\u002Fcase-studies\u002Fleveraging-aws-lambda-to-drive-product-growth-at-tala","Conclusion","Case Study 2: Preventing fraud","blockquote","Alex and Rachel at Tala’s HQ in Santa Monica, CA.","conclusion","leveraging-aws-lambda-to-drive-product-growth-at-tala",true,"91%","10+ high caliber engineers from Latin America and Eastern Europe hired in less than 5 months","case-study-2-preventing-fraud","Case Study 1: Sending post-install data","case-study-1-sending-post-install-data","Architectural Design","Tala - AWS Lambda","architectural-design",Array(4),"https:\u002F\u002Fs3.amazonaws.com\u002Frightbalance-images-prd\u002Fuploads\u002F1615325432662.jpg","Decreased device management issues by","20+ engineers from Latin America hired on a very aggressive timeline.","https:\u002F\u002Fs3.amazonaws.com\u002Frightbalance-images-prd\u002Fuploads\u002Ftala-logo-white.png","Leveraging AWS Lambda to Drive Product Growth at Tala")));