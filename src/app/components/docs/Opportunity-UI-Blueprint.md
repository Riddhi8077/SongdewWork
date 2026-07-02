Songdew Opportunities Page - UI Blueprint
Project

Songdew Opportunities Page

Angular 16

1. Objective

The objective of this blueprint is to define the visual structure of the Opportunities page before implementation.

The blueprint describes the hierarchy of UI blocks, layout behavior, spacing, scrolling, responsiveness, and component relationships.

It serves as the bridge between the Technical Design Document and the Angular implementation.

2. Page Layout Overview
Browser Window
│
├── Fixed Header
│
└── Opportunity Page
      │
      ├── Fixed Layout Wrapper
      │
      └── Scrollable Content

Only the content area scrolls.

Header remains fixed.

Chat button remains fixed.

Banner scrolls with content.

3. Complete Page Skeleton
Opportunity Page
│
├── Page Layout Wrapper
│
├── Banner Section
│
├── Page Heading
│
├── Tabs Section
│
├── Search & Sort Section
│
├── Category Filter Section
│
├── Opportunity Cards Section
│
└── Floating Chat Button

4. Visual Hierarchy
Level 1

Header

Highest priority

Always visible

Level 2

Banner

First visible content

Large visual element

Level 3

Heading

Introduces the page

Level 4

Tabs

Primary navigation

Level 5

Search + Sort

Filtering controls

Level 6

Category Pills

Secondary filtering

Level 7

Opportunity Cards

Primary content

Level 8

Floating Chat

Overlay element

Always visible

5. Section Details
A. Layout Wrapper

Purpose

Acts as the root container.

Responsibilities

Width
Height
Background
Overflow
Responsive spacing

Owns

Scroll container
B. Banner

Contains

Banner image

Apply button

Behavior

Scrollable

Full width

C. Page Heading

Contains

Title

Subtitle

Alignment

Left aligned

D. Tabs

Contains

Open

Upcoming

Behavior

One active at a time

E. Search & Sort

Left

Search

Right

Sort Dropdown

Desktop

Horizontal

Mobile

Stacked / Responsive

F. Categories

Horizontal pills

Scrollable on smaller screens if needed

One active category

G. Opportunity Cards

Desktop

Three columns

Tablet

Two columns

Mobile

One column

Each card contains

Logo

Category

Title

Days Left

Apply Date

Bookmark

H. Floating Chat

Position

Bottom Right

Fixed

Always visible

6. Layout Strategy

Page Layout

↓

Flex Column

Cards

↓

CSS Grid

Search Row

↓

Flex Row

Card Footer

↓

Flex Row

Everything else

↓

Flexbox

7. Spacing System

Outer Page Padding

Consistent

Section Gap

Consistent

Card Padding

Consistent

Button Spacing

Consistent

No random margins.

Spacing should follow one system throughout the page.

8. Responsive Strategy

Desktop

1200px+

Three card layout

Tablet

768px–1199px

Two card layout

Mobile

Below 768px

Single card layout

Navigation simplified

Search resized

Categories scroll horizontally if required

9. Scrolling Behaviour

Fixed

Header

Chat Button

Scrollable

Banner

Heading

Tabs

Search

Sort

Categories

Cards

Wrapper itself does not scroll.

10. CSS Layout Decisions

Flexbox

Header
Tabs
Search Row
Card Footer
Category Pills

Grid

Opportunity Cards

Position Fixed

Chat Button

Overflow

Main Content
Category Pills (Mobile)

11. Component Relationships
OpportunityListPage
│
├── PageLayout
│
├── Banner
│
├── Heading
│
├── Tabs
│
├── SearchSort
│      ├── Search
│      └── Sort
│
├── Categories
│
├── OpportunityListBody
│      │
│      ├── OpportunityCard
│      ├── OpportunityCard
│      └── OpportunityCard
│
└── FloatingChat

12. UI Development Order
Layout Wrapper
Page Skeleton
Banner
Heading
Tabs
Search & Sort
Categories
Card Layout
Card Design
Floating Chat
Responsive Design
Final Polish

13. UI Rules

Every section must have a single responsibility.

Every component should be independently testable.

Avoid duplicate HTML.

Avoid duplicate CSS.

Maintain consistent spacing.

Use semantic HTML.

Keep layouts responsive from the beginning.

14. Final UI Goal

The final implementation should closely match the original Songdew Opportunities page while following Angular 16 best practices, clean architecture, and reusable component design.

