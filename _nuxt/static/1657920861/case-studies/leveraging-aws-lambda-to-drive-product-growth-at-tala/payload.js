__NUXT_JSONP__("/case-studies/leveraging-aws-lambda-to-drive-product-growth-at-tala", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z){C[0]={id:B,depth:d,text:z};C[1]={id:y,depth:d,text:x};C[2]={id:Y,depth:d,text:G};C[3]={id:J,depth:d,text:E};return {data:[{}],fetch:[{page:{cta_header:"Have any questions about Technology Product Growth?",tags:["serverless","aws","lambda","sqs","cassandra"],related_content:[],title:Z,short_title:A,header_one:v,header_two:O,header_three:N,image_url:L,hero_image:D,toc:C,body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:k,props:{alt:"Rachel Brown and Alex Tamoykin",src:"https:\u002F\u002Fimages.rightbalance.io\u002Fuploads\u002Frachel-alex.png"},children:[]}]},{type:a,tag:F,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Authors: Rachel Brown (Product Manager) and Alex Tamoykin (Tech Lead), originally posted on "},{type:a,tag:j,props:{href:"https:\u002F\u002Ftala.co\u002Fblog\u002F2020\u002F01\u002F14\u002Fleveraging-aws-lambda-to-drive-product-growth\u002F",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:b,value:"Tala Blog"}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"In 2019, Tala’s Product and Engineering teams partnered with Right Balance to solve a number of complex problems for our business and our customers in emerging markets. In this article, we share how a new architectural design helped us drive sustainable growth for the company as well as solve one of our customers’ top pain points."}]},{type:a,tag:m,props:{id:B},children:[{type:a,tag:j,props:{href:"#architectural-design",ariaHidden:l,tabIndex:r},children:[{type:a,tag:n,props:{className:[p,o]},children:[]}]},{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:b,value:"The new architectural design we built involves SQS queues and AWS lambda functions. We decided to use this design because of several factors:"}]},{type:a,tag:"ol",props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:s,props:{},children:[{type:b,value:"Resiliency."}]},{type:b,value:" Each event has business value, so we wanted to ensure that no events are dropped under heavy traffic. Placing events on a durable SQS queue as they occur allows us to retain them as well as retry delivering them in case of a processing failure."}]},{type:a,tag:f,props:{},children:[{type:a,tag:s,props:{},children:[{type:b,value:"Elasticity."}]},{type:b,value:" One of the main advantages of serverless technology is the ability to use resources on demand. AWS lambdas are only billed at the times when they are invoked."}]},{type:a,tag:f,props:{},children:[{type:a,tag:s,props:{},children:[{type:b,value:"Flexibility."}]},{type:b,value:" Managing events in a queue and lambdas allows us to swap out each component easily, which opens up more possibilities for future use cases."}]}]},{type:a,tag:m,props:{id:y},children:[{type:a,tag:j,props:{href:"#case-study-1-sending-post-install-data",ariaHidden:l,tabIndex:r},children:[{type:a,tag:n,props:{className:[p,o]},children:[]}]},{type:b,value:x}]},{type:a,tag:t,props:{style:u},children:[{type:a,tag:k,props:{alt:"Tala mobile app",src:"https:\u002F\u002Fimages.rightbalance.io\u002Fuploads\u002Fdevice-home-screen.png"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Like many businesses, Tala’s marketing team uses digital advertising channels to introduce our product to new audiences. Early last year, the effectiveness of Tala’s Facebook and Google ads were being primarily measured by install events (i.e., users who download the app). We quickly identified an opportunity to improve the effectiveness of campaigns by optimizing ads for post-install events rather than downloads."}]},{type:a,tag:c,props:{},children:[{type:a,tag:k,props:{alt:H,src:"https:\u002F\u002Fimages.rightbalance.io\u002Fuploads\u002Fideation.png"},children:[]}]},{type:a,tag:F,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:H}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"The marketing team identified several high-priority post-install events, which we set up triggers for on backend services. When an event is triggered, a file is sent to an SQS queue. The lambda function then retrieves this information from the queue and passes it to our marketing platform API. This architecture is much more resilient and accurate than the team’s previous client-side event tracking solution."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tala’s engineering team designed, built, and tested the new framework over several sprints. Our marketing team then ran a scaled Facebook campaign and realized a significantly higher return on ad spend when optimizing for post-install events compared to install events, in addition to maintaining 100% uptime and data accuracy."}]},{type:a,tag:m,props:{id:Y},children:[{type:a,tag:j,props:{href:"#case-study-2-preventing-fraud",ariaHidden:l,tabIndex:r},children:[{type:a,tag:n,props:{className:[p,o]},children:[]}]},{type:b,value:G}]},{type:a,tag:t,props:{style:u},children:[{type:a,tag:k,props:{alt:"Device issue screen",src:"https:\u002F\u002Fimages.rightbalance.io\u002Fuploads\u002Fdevice-issue.png"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"In emerging markets such as Kenya, the second-hand phone market is massive. Consumers are also sensitive to download and storage size due to device and data constraints. Because Tala uses device data (with user permission) to underwrite personal loans, the following is a common scenario:"}]},{type:a,tag:"ul",props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"Person A installs app on phone and signs up for Tala"}]},{type:a,tag:f,props:{},children:[{type:b,value:"Person A sells phone to Person B"}]},{type:a,tag:f,props:{},children:[{type:b,value:"Person B cannot sign up for Tala on phone"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tala’s legacy device management rules, used to prevent fraud, were blocking tens of thousands of new users per month from signing up and were one of the largest drivers of customer support tickets globally. In addition, this problem had grown 3x in volume over the past 2 years and was expected to continue increasing exponentially the longer the company operated in a given market."}]},{type:a,tag:c,props:{},children:[{type:b,value:"In this situation, we launched a set of new device management rules and a lambda function. The lambda stored a large amount of event data in a predefined format in a Cassandra database. Doing some pre-processing of the data upfront allowed us to achieve constant database lookups to identify the device ownership instantly. We enabled new users to more seamlessly sign up for the app while decreasing customer support tickets related to device issues by 91%."}]},{type:a,tag:t,props:{style:u},children:[{type:a,tag:k,props:{alt:"Loan approval success screen",src:"https:\u002F\u002Fimages.rightbalance.io\u002Fuploads\u002Fdevice-approved.png"},children:[]}]},{type:a,tag:m,props:{id:J},children:[{type:a,tag:j,props:{href:"#conclusion",ariaHidden:l,tabIndex:r},children:[{type:a,tag:n,props:{className:[p,o]},children:[]}]},{type:b,value:E}]},{type:a,tag:c,props:{},children:[{type:b,value:"As thought workers and entrepreneurs, we solve challenging problems every day. As you scale your business, which used to work in the past needs to be challenged and rethought. Using the right technology the right way helps you break through the limits and take your product to the next level."}]}]},dir:"\u002Fcase-studies",path:I,extension:".md",slug:w,createdAt:new Date(1657920737133),updatedAt:new Date(1657920737133)},ctaHref:"https:\u002F\u002Fairtable.com\u002Fshr9h6C35G3nLuwoQ",contentPages:[{draft:K,headerOne:"10+ high",headerTwo:"caliber engineers from Latin America and Eastern Europe hired in less than 5 months",headerThree:g,imageUrl:g,icon:g,icons:[],shortTitle:M,slug:"10-high-caliber-engineers-from-latin-america-and-eastern-europe-hired-in-less-than-5-months",tablesOfContent:[],isOpen:h,title:M,heroImage:g,to:"\u002Fcase-studies\u002F10-high-caliber-engineers-from-latin-america-and-eastern-europe-hired-in-less-than-5-months",cta:q},{draft:h,headerOne:"20+ Engineers",headerTwo:" from Latin America hired on a very aggressive timeline.",headerThree:g,imageUrl:"https:\u002F\u002Fs3.amazonaws.com\u002Frightbalance-images-prd\u002Fuploads\u002Ffat-tail.png",icon:g,icons:[],shortTitle:P,slug:"20-engineers-from-latin-america-hired-on-a-very-aggressive-timeline",tablesOfContent:[{id:Q,depth:d,text:R},{id:S,depth:d,text:T},{id:U,depth:d,text:V},{id:W,depth:d,text:X}],isOpen:h,title:P,heroImage:"https:\u002F\u002Fimages.rightbalance.io\u002Fuploads\u002Fgerry-bg2c.jpg",to:"\u002Fcase-studies\u002F20-engineers-from-latin-america-hired-on-a-very-aggressive-timeline",cta:q},{draft:h,headerOne:v,headerTwo:O,headerThree:N,imageUrl:L,icon:i,icons:i,shortTitle:A,slug:w,tablesOfContent:C,isOpen:K,title:Z,heroImage:D,to:I,cta:q},{draft:h,headerOne:"$ Millions",headerTwo:"of student loan debt served each month with new system",headerThree:v,imageUrl:"https:\u002F\u002Fs3.amazonaws.com\u002Frightbalance-images-prd\u002Fuploads\u002Ftuition-logo-white.png",icon:i,icons:i,shortTitle:"Tuition.io - Serverless",slug:"from-monolith-to-serverless-microservices-how-tuition-io-disrupts-one-trillion-dollar-student-debt-industry-with-new-technology",tablesOfContent:[{id:Q,depth:d,text:R},{id:"outdated-monilithic-architecture",depth:e,text:"Outdated Monolithic Architecture"},{id:"low-visibility",depth:e,text:"Low Visibility Into The System"},{id:"no-streamlined-process",depth:e,text:"No Streamlined Process"},{id:S,depth:d,text:T},{id:U,depth:d,text:V},{id:"componentized-front-end",depth:e,text:"Componentized Front End"},{id:"serverless-microservices-on-backend",depth:e,text:"Serverless Microservices on the Backend"},{id:"cicd",depth:e,text:"Continuous Integration and Continuous Delivery"},{id:"data-migration",depth:e,text:"Data Migration"},{id:"mobile",depth:e,text:"Mobile"},{id:W,depth:d,text:X}],isOpen:h,title:"From Monolith to Serverless Microservices: How Tuition.io Disrupts $1.52 Trillion Student Debt Industry with New Technology",heroImage:"https:\u002F\u002Fs3.amazonaws.com\u002Frightbalance-images-prd\u002Fuploads\u002Fbob-2.jpeg",to:"\u002Fcase-studies\u002Ffrom-monolith-to-serverless-microservices-how-tuition-io-disrupts-one-trillion-dollar-student-debt-industry-with-new-technology",cta:q}]}],mutations:i}}("element","text","p",2,3,"li","",false,void 0,"a","img","true","h2","span","icon-link","icon","case_study_read",-1,"strong","div","text-align: center",null,"leveraging-aws-lambda-to-drive-product-growth-at-tala","Case Study 1: Sending post-install data","case-study-1-sending-post-install-data","Architectural Design","Tala - AWS Lambda","architectural-design",Array(4),"https:\u002F\u002Fs3.amazonaws.com\u002Frightbalance-images-prd\u002Fuploads\u002F1615325432662.jpg","Conclusion","blockquote","Case Study 2: Preventing fraud","Alex and Rachel at Tala’s HQ in Santa Monica, CA.","\u002Fcase-studies\u002Fleveraging-aws-lambda-to-drive-product-growth-at-tala","conclusion",true,"https:\u002F\u002Fs3.amazonaws.com\u002Frightbalance-images-prd\u002Fuploads\u002Ftala-logo-white.png","10+ high caliber engineers from Latin America and Eastern Europe hired in less than 5 months","91%","Decreased device management issues by","20+ engineers from Latin America hired on a very aggressive timeline.","challenge","Challenge","solution","Solution","execution","Execution","results","Results","case-study-2-preventing-fraud","Leveraging AWS Lambda to Drive Product Growth at Tala")));