Songdew Opportunities Page (Angular 16) - Technical Design Document

1. Project Objective
Goal
Recreate the Songdew Opportunities page using Angular 16 while following production-level development practices.
The objective is not only to match the UI but also to create a maintainable, reusable, scalable, and code-review-friendly Angular application.
The implementation should resemble the quality expected in a professional software company.

2. Project Requirements
Angular 16 only
No external UI libraries unless already included in the project
Clean folder structure
Component-based architecture
Reusable code
Responsive design
Maintainable CSS
Proper HTML, CSS and TypeScript separation
Easy future API integration
Easy code review

3. High-Level Understanding
The Opportunities page is a feature page.
It is not a standalone application.
The page contains multiple independent UI sections that together form one complete screen.
Each section has a single responsibility.
The page should be designed in such a way that every section can evolve independently without affecting the rest of the page.

4. Development Philosophy
This project follows the following principles:
Single Responsibility Principle
Every component should do one job only.
Examples:
Banner Component
↓
Displays banner only.
Search Component
↓
Handles search UI only.
Tabs Component
↓
Handles tab UI only.
Opportunity Card
↓
Displays one opportunity.

Separation of Concerns
Business logic
↓
TypeScript
Presentation
↓
HTML
Styling
↓
CSS
No mixing responsibilities.

Reusability
If a UI section can be reused later,
it should become its own Angular component.

Scalability
The architecture should support future enhancements such as
API Integration
Pagination
Lazy Loading
Authentication
Filters
Additional Categories
without major refactoring.

5. Page Architecture
The Opportunities page consists of two layers.
Layer 1
Fixed Layout Wrapper
Responsible for
Overall width
Height
Background
Page spacing
Scroll behavior
Layer 2
Scrollable Content
Contains
Banner
Heading
Tabs
Search
Sort
Categories
Opportunity Cards
Only this layer scrolls.

6. Scroll Behaviour
The page layout remains fixed.
Only the content section scrolls vertically.
The Header remains fixed.
The Chat button remains fixed.
The Banner scrolls with the content.
This matches the behavior of the original Songdew page.

7. Component Architecture
The page will be divided into small reusable Angular components.
Each component should contain only the code necessary for its responsibility.
No component should become unnecessarily large.

Proposed Component Tree
OpportunityListPage
│
├── Page Layout
│
├── Banner
│
├── Page Heading
│
├── Opportunity Tabs
│
├── Search Bar
│
├── Sort Dropdown
│
├── Category Filter
│
├── Opportunity List
│      │
│      └── Opportunity Card
│
└── Floating Chat Button

8. Data Ownership
The page component will own all UI state.
Examples
Selected Tab
Search Text
Selected Category
Selected Sort
Child components will receive data using Inputs.
Child components will notify changes using Outputs.
This keeps the application predictable and maintainable.

9. CSS Strategy
The project will use
Flexbox
for most layouts.
CSS Grid
only where multiple cards need to be arranged.
No inline styles.
No duplicated CSS.
Each component owns its own CSS.

10. Responsive Strategy
Desktop
Tablet
Mobile
will be designed separately.
The layout should adapt naturally without duplicating components.

11. Angular Features
The project will use
Standalone Components (Angular 16)
Component Communication
Input
Output
Property Binding
Event Binding
Structural Directives
Attribute Directives (if required)
Angular Routing (if required)
Reactive Forms (if required)

12. Future API Readiness
Although the initial page may use static data,
the architecture should allow easy integration of REST APIs later.
No component should tightly couple UI with data.

13. Folder Structure (Planned)
features
└── opportunity-list
   │
   ├── pages
   │
   ├── components
   │
   ├── interfaces
   │
   ├── models
   │
   ├── services
   │
   └── constants

14. Development Workflow
The project will be developed incrementally.
Architecture
↓
Folder Structure
↓
Routing
↓
Layout
↓
Banner
↓
Heading
↓
Tabs
↓
Search
↓
Sort
↓
Categories
↓
Opportunity Cards
↓
Responsive Design
↓
Code Review
↓
Refactoring

15. Coding Standards
Meaningful variable names
Small reusable components
No duplicate code
No unnecessary comments
No inline styling
Consistent formatting
Proper Angular naming conventions

16. Code Review Readiness
Every implementation should answer
What does this component do?
Why is this component separate?
Why is this Angular feature used?
Can this component be reused?
Can future developers understand this easily?

17. Project Success Criteria
The project will be considered successful when
The UI closely matches the Songdew Opportunities page.
The project follows Angular 16 best practices.
The architecture is modular.
The code is maintainable.
The application is responsive.
The implementation is easy to explain during code review.

This is our foundation
This document is our blueprint. Every decision we make later should align with it.

Our Complete Development Roadmap
Here's how we'll build the project, one step at a time:
phase
Goal
Status
1
Technical Design Document (TDD)
Current
2
Design the complete folder structure
Next
3
Define component hierarchy and responsibilities


4
Design data flow and component communication


5
Write the production-ready Codex prompt


6
Generate the project skeleton


7
Review and refine the generated structure


8
Build the layout wrapper


9
Build individual UI sections one by one


10
Responsive design


11
Final refactoring and code review preparation



Structure:

features/
└── opportunity-list/
    ├── pages/
    │   └── opportunity-list/
    │       ├── opportunity-list.component.ts
    │       ├── opportunity-list.component.html
    │       ├── opportunity-list.component.css
    ├── components/
    │   ├── page-layout/
    │   ├── opportunity-banner/
    │   ├── page-heading/
    │   ├── opportunity-tabs/
    │   ├── search-bar/
    │   ├── sort-dropdown/
    │   ├── category-filter/
    │   ├── opportunity-list-body/
    │   ├── opportunity-card/
    │   └── floating-chat/
    │
    ├── interfaces/
    │
    ├── models/
    │
    ├── services/
    │
    ├── constants/
    │
    └── assets/