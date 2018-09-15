import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IEvent, ISession } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class TechConfEventsDataService {

  constructor() { }

  getTechConfEvents():Observable<IEvent[]>{
    let subject = new Subject<IEvent[]>();
    setTimeout(() => {
      subject.next(TECH_CONF_EVENTS);
      subject.complete();
    }, 100);
    return subject;
  }

  getTechConfEvent(id: number):IEvent{
    return TECH_CONF_EVENTS.find(techConfEvent => techConfEvent.id === id);
  }

  saveTechConfEvent(techConfEvent){
    techConfEvent.id = 999
    techConfEvent.session = [];
    TECH_CONF_EVENTS.push(techConfEvent);
  }

  updateTechConfEvent(techConfEvent){
    let index = TECH_CONF_EVENTS.findIndex(x => x.id = techConfEvent.id)
    TECH_CONF_EVENTS[index] = techConfEvent;
  }

  searchSessions(searchTerm: string){
    var term = searchTerm.toLocaleLowerCase();
    var results: ISession[] = [];
    TECH_CONF_EVENTS.forEach(techConfEvent => {
      var matchingSessions = techConfEvent.sessions.filter(session => session.name.toLocaleLowerCase().indexOf(term) > -1);
      matchingSessions = matchingSessions.map((session:any) => {
        session.techConfEventId = techConfEvent.id;
        return session;
      });
      results = results.concat(matchingSessions);
    });
    var emitter = new EventEmitter(true);
    setTimeout(() => {
      emitter.emit(results);
    }, 100);
    return emitter;
  }
}

// https://angularmix.com
// https://vslive.com/events/san-diego-2018/home.aspx
// https://www.reactathon.com/
// https://vuetoronto.com
// http://www.nodesummit.com/
// http://2018.ng-conf.org/
const TECH_CONF_EVENTS:IEvent[] = [
  {
    id: 1,
    name: 'Angular Mix',
    date: new Date('10/10/2018'),
    time: '10:00 am',
    price: 2799.00,
    imageUrl: '/assets/images/angularmix.png',
    location: {
      address: '6300 Hollywood Way,',
      city: 'Orlando',
      country: 'USA'
    },
    sessions: [
      {
        id: 1,
        name: "A Boy, A Sugar Glider and the TSA",
        presenter: "Brian Clark",
        duration: 1,
        level: "Intermediate",
        abstract: `You're probably thinking "what are you talking about?!" and that's fair. You'd be surprised what's possible even against a well established and secure system. Learn techniques that help prevent creative attacks from hackers and find out how all these things go together with Angular.`,
        voters: ['bradgreen', 'igorminar', 'martinfowler']
      },
      {
        id: 2,
        name: "A higher level of reusability: Angular-style Node.js development with Nest",
        presenter: "Kamil Mysliwiec",
        duration: 1,
        level: "Intermediate",
        abstract: `Angular gives us a strong platform that simplifies creating scalable and demanding applications. Nowadays, rapidly changing technologies force us to constantly learn new things. But, what if we could reuse our existing knowledge? Share language, design patterns, and main concepts? In this talk you'll learn why NestJS could increase your productivity and how to unlock your full potential as a JavaScript/TypeScript developer.`,
        voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
      },
      {
        id: 3,
        name: "Angular Architecture and Best Practices",
        presenter: "Dan Wahlin",
        duration: 2,
        level: "Advanced",
        abstract: `The Angular Architecture and Best Practices session will provide guidance to help you think through the process of building a solid Angular application architecture that is easy to refactor and maintain.`,
        voters: []
      },
      {
        id: 4,
        name: "Angular Blast: Rapid Fire ngUpgrade",
        presenter: "Sam Julien",
        duration: 2,
        level: "Advanced",
        abstract: ` Planning Your Upgrade: There are lots of resources out there on how to upgrade from AngularJS to Angular, but no one ever talks about how to approach such a monumental task - and if you even should. In this section, you'll learn 5 keys to building your upgrade roadmap that could save you hundreds of hours of work and thousands of dollars.`,
        voters: []
      },
      {
        id: 5,
        name: "Angular Prototyping Tool",
        presenter: "Blair Metcalf,Tim Sawyer",
        duration: 2,
        level: "Beginner",
        abstract: `Google Cloud and Angular have partnered to build a design tool that reuses your team's components to prototype, study, and export new features without writing code. We have been stress-testing use cases internally so that your team can use Google’s best practices on your next feature. The live demo includes importing components, designing complex workflows with real data, and sharing reusable components and prototypes all without writing code. Our mission is to help bridge the gap between design’s vision and engineering’s reality.`,
        voters: ['bradgreen', 'igorminar']
      }
    ]
  },
  {
    id: 2,
    name: 'Visual Studio Live',
    date: new Date('10/07/2018'),
    time: '7:00 am',
    price: 2595.00,
    imageUrl: '/assets/images/ng-nl.png',
    location: {
      address: '1775 East Mission Bay Drive,',
      city: 'San Diego',
      country: 'USA'
    },
    sessions: [
      {
        id: 1,
        name: "Xamarin and Azure: Build the Mobile Apps of Tomorrow",
        presenter: "Laurent Bugnion & Matthew Soucoup",
        duration: 4,
        level: "Beginner",
        abstract: `This hands-on workshop will take you from 0 to a fully working, cloud connected, AI powered mobile app. We'll get you setup with Visual Studio and the Xamarin tooling on either Windows or Mac, and connect up to emulators, your iPhone or your Android device ready to run an app. Once you are set-up, we'll cover the basics of Xamarin and Xamarin.Forms, then it's heads down writing a cross-platform app - using one code base for a fully-native app that runs on both iOS and Android.`,
        voters: ['bradgreen', 'igorminar']
      },
      {
        id: 2,
        name: "Building a Modern DevOps Pipeline with ASP.NET and Visual Studio Team Services",
        presenter: "Brian Randell",
        duration: 3,
        level: "Intermediate",
        abstract: `It this all-day, hands-on workshop, Brian will break the day down into five parts where we'll start with nothing and end with an ASP.NET Core app and a SQL Server Database running in Azure with a full continuous integration / continuous deployment (CI/CD) pipeline managed by Visual Studio Team Services (VSTS).`,
        voters: ['bradgreen', 'igorminar', 'johnpapa']
      },
      {
        id: 3,
        name: "Modern Security Architecture for ASP.NET Core",
        presenter: "Brock Allen",
        duration: 2,
        level: "Intermediate",
        abstract: `ASP.NET Core brings many modern approaches to building web applications. Given its importance, updates to the security architecture are also included in this modern framework. This workshop will bring you up to speed on the main components in ASP.NET Core for securing your web applications and web APIs. This includes authenticating users with middleware, implementing policy-based authorization, and proper security architecture with protocols such as OpenID Connect and OAuth2. We will also see how to use OpenID Connect and OAuth2 to secure browser-based JavaScript applications and native/mobile applications. As part of our exploration into OpenID Connect and OAuth2, we will use the popular open source framework IdentityServer. Come and learn how ASP.NET Core and IdentityServer can be used to design for a modern security architecture.`,
        voters: ['martinfowler']
      },
      {
        id: 4,
        name: "SQL Server for Developers",
        presenter: "Andrew Brust & Leonard Lobel",
        duration: 1,
        level: "Beginner",
        abstract: `Join us for this full-day workshop, and get up to speed on powerful SQL Server features for developers. This intensive demo-packed tour begins with the latest features added in the relational engine, including new security features such as dynamic data masking, row-level security, and always encrypted. Other innovative capabilities include "stretch" database (which lets you transparently relocate select tables in an on-premises database to an Azure SQL Database), temporal data (which allows for "time travel" to access data as it existed at any point in time), and integrated JSON support.`, 
        voters: ['bradgreen']
      },
    ]
  },
  {
    id: 3,
    name: 'Reactathon',
    date: new Date('09/07/2018'),
    time: '9:00 am',
    price: 759.00,
    imageUrl: '/assets/images/ng-conf.png',
    location: {
      address: '88 Colin P Kelly Jr St,',
      city: 'San Francisco',
      country: 'USA'
    },
    sessions: [
      {
        id: 1,
        name: "A11Y & Accessibility",
        presenter: "Jen Luker",
        duration: 2,
        level: "Intermediate",
        abstract: `Accessibility in React has been a hot topic in the last few years, but in this talk, we'll be going beyond the basics. We'll explore a data-driven perspective to convince the business to invest in accessibility, then dive into the details of accessibility testing. We'll use lighthouse to audit applications, educate ourselves with the axe browser extensions, incorporate eslint-plugin-jsx-a11y into our lint process, and add axe-core to our automated testing suite. You'll leave prepared to add accessibility features to your application.`,
        voters: ['bradgreen', 'martinfowler', 'igorminar']
      },
      {
        id: 2,
        name: "Testing into a Better User Experience",
        presenter: "Ryan Burgess",
        duration: 2,
        level: "Intermediate",
        abstract: `We are all talented designers and engineers that strive to create the best user experience. Unfortunately, we don’t always know what the best user experience is until a new feature is in production and used by our customers. That’s where the power of A/B testing comes into play! At Netflix, we are constantly running A/B tests to improve our user experience. Find out how to handle A/B testing at scale, what it takes to build the optimal test, and how to start implementing A/B tests within your company.`,
        voters: ['bradgreen', 'martinfowler']
      },
      {
        id: 3,
        name: "Repl.it plugins in React & Redux",
        presenter: "Amjad Masad",
        duration: 1,
        level: "Intermediate",
        abstract: `Building an extensible web IDE in React presents a unique set of challenges around sandboxing and API design. In this talk, we’ll explore the unique challenges we faced, lessons learned, and takeaways that can be applied to the challenge of building any large React application.`,
        voters: ['bradgreen', 'martinfowler', 'johnpapa']
      },
      {
        id: 4,
        name: "A sleek view transition recipe for web apps",
        presenter: "Jeremias Menichelli",
        duration: 1,
        level: "Beginner",
        abstract: `Have you ever wondered why good performance around animated transitions on views is so hard to achieve in web projects? Animations and performance are one of the top point of discussion when comparing web application to their native counterparts. I’m going to share my learnings on how to safely kick off route based animations, performance tricks and modern workflows to build reliable transitions for web applications.`,
        voters: ['bradgreen', 'martinfowler', 'igorminar', 'johnpapa']
      },
      {
        id: 5,
        name: "Functional Lenses with Shades.js",
        presenter: "James McNamara",
        duration: 2,
        level: "Beginner",
        abstract: `One frustrating thing for many people coming to functional programming is the clunkiness of updating a single field in an object. What used to be user.likes += 1 becomes const user2 = {...user, likes: user.likes + 1}. This syntactic overhead may be fine for this example, but as your objects becomes more complex, these updates become more and more verbose. The solution to this is lenses. Lenses are a functional construct which allow you to update immutable object as easily as mod('likes')(likes => likes + 1)(user) (This pattern may be familiar to users of Immutable's setIn or updateIn functions). However what makes lenses interesting is not when they act like object references, but when they allow us to do things that normal object mutation does not support: updating many elements of a collection at once, or only objects that fit a criterion. Shades.js provides lens functions for native JS objects, and provides a rich library of utility functions that make transforming and updating data declarative. Time permitting, we can discuss how these patterns can fit into a Redux architecture.`,
        voters: ['bradgreen', 'martinfowler']
      },
      {
        id: 6,
        name: "Swipe Left, Uncaught TypeError: Learning to Love Type Systems",
        presenter: "Lauren Tan",
        duration: 2,
        level: "Intermediate",
        abstract: `Sometimes, undefined is not a function. As mortal programmers, we ship bugs to production everyday. Bugs slow us down, frustrate our users, and cause us to have crises of confidence. Don't go alone–type systems in TypeScript, Flow, and GraphQL can improve your confidence and help you ship less bugs. We'll start with why: a practical look at what you'll get from embracing types. Then, a gentle introduction to the ideas behind them. Finally, we'll explore the possibilities of a type system over the network.`,
        voters: ['bradgreen', 'martinfowler']
      },
    ]
  },
  {
    id: 4,
    name: 'VueConf TO',
    date: new Date('11/14/2018'),
    time: '8:00 am',
    price: 799.00,
    imageUrl: '/assets/images/basic-shield.png',
    location: {
      address: '100 Front St W,',
      city: 'Toronto Ontario',
      country: 'Canada'
    },
    sessions: [
      {
        id: 1,
        name: "Visualizations using SVG, Canvas, and WebGL in Vue",
        presenter: "Chris Fritz",
        duration: 2,
        level: "Beginner",
        abstract: `It might not be obvious how to use Vue's reactive data with non-HTML web technologies, but it's easier than you might think. See how it's done, learn the tradeoffs of each technology, and gain tips to optimize performance. You'll be building stunning visualizations to impress clients and colleagues in less time than you think!`,
        voters: ['bradgreen', 'igorminar']
      },
      {
        id: 2,
        name: "Vuex in Action",
        presenter: "Jacob Schatz",
        duration: 2,
        level: "Beginner",
        abstract: `I will talk about why Vuex is an amazing framework for large applications, as well as how we use it at GitLab in completely new and novel ways. Things like creating an IDE`,
        voters: ['bradgreen', 'igorminar', 'johnpapa']
      },
      {
        id: 3,
        name: "Why Vue CLI needed a UI and what you can do with it",
        presenter: "Guillaume Chau",
        duration: 3,
        level: "Advanced",
        abstract: `Vue CLI 3 is a completely new tool that allows you to create, build, evolve and even deploy Vue applications. It's based on an entirely new plugin system. A full Graphical User Interface in bundled with it so you can easily explore all the new features and have neat things like a webpack dashboard and a plugin search. All of this is extendable with a powerful API that allows you to write new plugins!`,
        voters: ['igorminar', 'johnpapa']
      },
    ]
  },
  {
    id: 5,
    name: 'Node Summit 2018',
    date: new Date('07/24/2018'),
    time: '8:00 am',
    price: 400.00,
    imageUrl: '/assets/images/ng-vegas.png',
    location: {
      address: '1675 Owens Street,',
      city: 'San Francisco',
      country: 'USA'
    },
    sessions: [
      {
        id: 1,
        name: "My Node.js Process is on Fire",
        presenter: "Matteo Collina",
        duration: 1,
        level: "Intermediate",
        abstract: `Your phone rings: the new JS application you deployed came under too much load, and the site has gone down! But you don’t lose your cool, and you tweak the autoscaling setting to handle the load spike increasing the number of servers. The next day, you try to analyze what happened and begin to optimize your application to prepare for future spikes. This talk is a journey into the rabbit hole of Node.js performance, taking a look at the available tools and optimization techniques inspired by insight gained from glimpsing under the hood of Node and V8.`,
        voters: ['bradgreen', 'igorminar']
      },
      {
        id: 2,
        name: "The Next Generation Node API is ready!",
        presenter: "Arunesh Chandra",
        duration: 2,
        level: "Beginner",
        abstract: `The Native module ecosystem for Node.js is an important factor in the rapid growth of Node.js. The N-API is now a supported feature and is designed to provide ABI stability across Node.js releases. This will reduce friction in upgrading to newer Node.js versions in production deployments. In addition, it will reduce the maintenance cost that module maintainers previously had to take on due to the fast pace of changes in the v8 APIs. This talk will provide a progress update on this community project, the roadmap, and why now is the right time to get involved.`,
        voters: ['bradgreen', 'igorminar', 'johnpapa']
      }
    ]
  },
  {
    id: 6,
    name: 'Trees and Graphs In-Depth',
    date: new Date('10/02/2018'),
    time: '9:30 am',
    price: 400.00,
    imageUrl: 'https://frontendmasters.com/static/frontendmasters.0e71088726.svg',
    onlineUrl: 'https://frontendmasters.com/workshops/algorithms-data-structures-3/',
    sessions:[
      {
        id: 1,
        name: "Trees and Graphs In-Depth",
        presenter: "Bianca Gandolfo",
        duration: 8,
        level: "Intermediate",
        abstract: `Get the context and practice you need to succeed with some of the toughest interview topics — graph theory. This workshop will cover the implementation details of trees and graphs, typical interview questions, and the algorithms that solve them. These are the types of questions you can expect in some of the toughest technical interviews at companies like Google, Microsoft, Apple, and Amazon.`,
        voters: ['bradgreen', 'igorminar']
      }
    ]
  },
  {
    id: 7,
    name: 'ng-conf',
    date: new Date('04/18/2019'),
    time: '7:00 am',
    price: 1000.00,
    imageUrl: 'http://2018.ng-conf.org/wp-content/uploads/2016/09/logo.png',
    location:{
      address: '555 South Main Street',
      city: 'Salt Lake City',
      country: 'USA'
    },
    sessions:[
      {
        id: 1,
        name: "Authentication with NgRx",
        presenter: "Brandon Roberts",
        duration: 2,
        level: "Advanced",
        abstract: `As the lead developers of NgRx, the number one question we get asked is how to implement authentication with a reactive store. In this talk, I set out to answer this question by building an auth-based app with NgRx Store, Router, and Effects`,
        voters: ['bradgreen', 'igorminar', 'martinfowler']
      },
      {
        id: 2,
        name: "How to hack an Angular app?",
        presenter: "Asim Hussain",
        duration: 3,
        level: "Beginner",
        abstract: `Thought hacking was hard? It’s not, it’s easy and I’m going to show you how! In this episode of CSI Salt Lake City, we’ll investigate a series of hacking stories and break them down step-by-step to see exactly how they did it. By the end, you’ll walk away a little bit more scared and a lot more prepared with some great practices you can apply immediately to your own applications.`,
        voters: ['bradgreen', 'igorminar', 'martinfowler']
      },
      {
        id: 3,
        name: "Reusable Animations",
        presenter: "Sam Brennan",
        duration: 2,
        level: "Intermediate",
        abstract: `In this lightning talk we will go over how to take your animations to the next level. By using reusable animations, your project will not only be more efficient but more manageable than it was before learning these best practices. (and of course, this will be 80’s themed!)`,
        voters: ['bradgreen', 'igorminar', 'martinfowler']
      },
    ]

  }
];