Opportunity Component Specification (CSD)
Project

Songdew Opportunities Page

Angular 16

1. Objective

The Opportunities page will be developed using small, reusable Angular components.

Each component must have a single responsibility.

The page component will coordinate all child components.

Child components will only display UI and emit events.

This architecture improves:

Maintainability
Readability
Scalability
Code Review
Future API Integration

2. Component Hierarchy
OpportunityListPage
│
├── PageLayoutComponent
│
├── BannerComponent
│
├── PageHeadingComponent
│
├── TabsComponent
│
├── SearchBarComponent
│
├── SortDropdownComponent
│
├── CategoryFilterComponent
│
├── OpportunityListBodyComponent
│      │
│      └── OpportunityCardComponent
│
└── FloatingChatComponent

3. Component Responsibilities
OpportunityListPage
Purpose

Main page.

Owns the route.

Owns page state.

Coordinates every child component.

Owns
selectedTab
selectedCategory
selectedSort
searchQuery
Child Components
PageLayout
Banner
Heading
Tabs
Search
Sort
Category
OpportunityListBody
FloatingChat
Reusable?

No

It represents one page.

PageLayoutComponent
Purpose

Responsible for page layout only.

Responsibilities
Page width
Background
Padding
Height
Scroll Container
Responsive wrapper
Owns Data?

No.

Reusable?

Yes

Any future page can use this layout.

BannerComponent
Purpose

Display promotion banner.

Responsibilities
Banner image
Apply button
Responsive behaviour
Owns Data?

No.

Reusable?

Yes.

PageHeadingComponent
Purpose

Displays

Opportunities

Description

Destination for Artist Opportunities...
Reusable?

Yes.

TabsComponent
Purpose

Display

Open

Upcoming

Responsibilities
Active tab UI
Tab Click
Inputs
selectedTab
Outputs
tabChanged
Owns State?

No.

SearchBarComponent
Purpose

Display search field.

Inputs
searchQuery
Outputs
searchChanged
Owns State?

No.

SortDropdownComponent
Purpose

Display sort dropdown.

Inputs
selectedSort
Outputs
sortChanged
CategoryFilterComponent
Purpose

Display category pills.

Example

All

Playlist

Publication

Contest
Inputs
selectedCategory
Outputs
categoryChanged
OpportunityListBodyComponent
Purpose

Display all cards.

Responsibilities

Spacing

Grid

Responsive Layout

Owns Data?

No.

Receives opportunities.

OpportunityCardComponent
Purpose

Display one opportunity.

Contains

Logo
Category
Title
Days Left
Apply Date
Bookmark
Inputs

Opportunity

Outputs

Bookmark Click

Reusable?

Yes.

FloatingChatComponent
Purpose

Display fixed chat button.

Responsibilities

Floating position

Responsive position

Click event

4. Component Communication
OpportunityListPage
        │
        │
        ▼
Child Components
        │
        │
        ▲
Outputs

Flow

Parent

↓

Input

↓

Child

↓

Output

↓

Parent

Parent always owns the state.

5. Data Flow
Page Loads

↓

Open Tab Active

↓

Banner Displays

↓

Categories Display

↓

Cards Display

↓

Search

↓

Sort

↓

Category

↓

Cards Update

6. Scroll Behaviour

Fixed

Header

Floating Chat

Scrollable

Banner

Heading

Tabs

Search

Sort

Categories

Cards

7. Responsive Behaviour

Desktop

3 cards

↓

Tablet

2 cards

↓

Mobile

1 card

8. Angular Features

We'll use

Standalone Components

Component Inputs

Component Outputs

Property Binding

Event Binding

Structural Directives

Reactive Forms (if search becomes functional)

9. Component Naming

Folders

opportunity-card

Components

OpportunityCardComponent

Selectors

app-opportunity-card

Variables

selectedCategory

selectedTab

searchQuery

10. Future API

Current

Static Data

Future

REST API

↓

Service

↓

Page Component

↓

Child Components

11. Code Review Questions

Why is Banner separate?

Answer

Single Responsibility Principle.

Why does Parent own state?

Answer

Angular follows unidirectional data flow.

Why use Inputs and Outputs?

Answer

To keep components reusable and loosely coupled.

Why is Opportunity Card reusable?

Answer

The same card may be required in multiple pages.

Why separate Layout?

Answer

Layout controls the page structure while content components focus on rendering UI.

12. Project Completion Checklist
Clean architecture
Small components
Reusable code
Responsive design
Easy to review
Angular 16 best practices
Future API ready
No duplicated code


opportunities = [

    {
      image: 'opportunities/bts.jpeg',
      type: 'BTS',
      title: 'BTS: Master Vocal Production With Abril Molina From Ear Candy Technologies',
      daysLeft: '1 day left',
      applyDate: 'Apply by Jul 3, 2026'
    },

    {
      image: 'opportunities/Playlisted.jpg',
      type: 'Playlist',
      title: 'Get Playlisted On "Travel Songs Indie (Hindi)" (2.1K+ Saves On Spotify)',
      daysLeft: '3 days left',
      applyDate: 'Apply by Jul 5, 2026'
    },

    {
      image: 'opportunities/getinterviewed.jpg',
      type: 'Radio Play',
      title: 'Get Interviewed on 91.9 Friends FM By RJ Smriti (Average Weekly Listenership of 301K+)',
      daysLeft: '17 days left',
      applyDate: 'Apply by July 19, 2026'
    },

    {
      image: 'opportunities/playlist.png',
      type: 'PLAYLIST',
      title: 'Top Hindi Playlist Promotion',
      daysLeft: '7 days left',
      applyDate: 'Apply by Jul 9, 2026'
    },

    {
      image: 'opportunities/live-gig.png',
      type: 'LIVE GIG',
      title: 'Live Performance Opportunity',
      daysLeft: '12 days left',
      applyDate: 'Apply by Jul 12, 2026'
    },

    {
      image: 'assets/opportunities/content.png',
      type: 'CONTENT',
      title: 'Music Video Promotion',
      daysLeft: '25 days left',
      applyDate: 'Apply by Jul 28, 2026'
    }

  ];

}