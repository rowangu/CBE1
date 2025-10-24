# CBE School Management System - Design Guidelines

## Design Approach

**Selected Approach**: Design System - Material Design with EdTech Platform Influences

**Justification**: This is a utility-focused, information-dense educational management platform requiring consistent patterns across multiple user roles. Drawing inspiration from Material Design for its robust data visualization patterns, combined with successful EdTech platforms like Google Classroom and Canvas for proven educational workflows.

**Core Principles**:
- Clarity over decoration - every element serves a functional purpose
- Role-based consistency - similar components across different dashboards
- Data legibility - information hierarchy that supports quick scanning
- Scalable patterns - designs that work from 10 to 10,000 students

---

## Typography

**Font Families**:
- Primary (UI/Body): Inter or Roboto via Google Fonts - excellent readability for data-heavy interfaces
- Headings: Same as primary for consistency and performance
- Monospace (Data/Numbers): JetBrains Mono for competency codes, student IDs, and numerical data

**Type Scale**:
- Page Titles (h1): text-4xl font-bold
- Section Headers (h2): text-2xl font-semibold
- Card Headers (h3): text-xl font-semibold
- Subsections (h4): text-lg font-medium
- Body Text: text-base font-normal
- Supporting Text: text-sm font-normal
- Data Labels: text-xs font-medium uppercase tracking-wide
- Small Print: text-xs font-normal

---

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16, 24
- Micro spacing (component internals): p-2, gap-2
- Standard spacing (card padding, gaps): p-4, p-6, gap-4
- Section spacing: p-8, py-12, gap-8
- Page-level spacing: p-16, py-24

**Grid System**:
- Dashboard layouts: 12-column grid with responsive breakpoints
- Main content area: max-w-7xl mx-auto px-6
- Sidebar navigation: Fixed 64 (w-64) or collapsible to icon-only (w-16)
- Card grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

**Responsive Breakpoints**:
- Mobile: base (< 768px) - single column, stacked navigation
- Tablet: md (768px+) - 2-column layouts, sidebar toggles
- Desktop: lg (1024px+) - full 3-column grids, persistent sidebar
- Wide: xl (1280px+) - maximum content width, enhanced data tables

---

## Component Library

### Navigation Components

**Top Navigation Bar**:
- Height: h-16
- Layout: Flex with space-between, items-center
- Elements: School logo (h-8), role indicator badge, notification bell with count badge, user avatar dropdown
- Sticky positioning on scroll

**Sidebar Navigation** (Desktop):
- Width: w-64 (expanded) or w-16 (collapsed)
- Role-specific menu items with icon + label
- Active state indication with subtle left border (border-l-4)
- Nested submenus with indentation (pl-8)
- Collapse toggle at bottom

**Mobile Navigation**:
- Bottom tab bar (h-16) with 4-5 primary sections
- Icons with labels below (text-xs)
- Hamburger menu for secondary options

### Dashboard Components

**Summary Cards** (KPI/Statistics):
- Padding: p-6
- Layout: Flex column with icon at top-right
- Elements: Large number (text-3xl font-bold), label (text-sm), trend indicator (arrow + percentage in text-xs)
- Border: Subtle rounded-lg with shadow-sm
- Grid: 4 cards across on desktop (grid-cols-4 gap-6)

**Competency Heatmap**:
- Table-based layout with fixed header row
- Cell size: Square with min dimensions (min-w-12 h-12)
- Visual intensity levels represented through opacity variations
- Hover state shows tooltip with competency name, level, and date
- Responsive: Horizontal scroll on mobile with sticky first column

**Progress Visualization**:
- Horizontal bars: h-4 rounded-full with fill animation
- Circular progress: Donut charts at 120x120px for individual competencies
- Student journey timeline: Vertical line with milestone nodes (w-1 left border, circular markers at h-3 w-3)

**Data Tables**:
- Header row: Sticky with font-medium text-sm
- Row height: h-16 with hover state
- Cell padding: px-6 py-4
- Sortable columns with arrow indicators
- Pagination controls: Bottom-aligned with items-per-page selector
- Action buttons in last column (icon buttons at h-8 w-8)

### Content Display Components

**Student/Class Cards**:
- Size: Consistent aspect ratio in grid
- Padding: p-6
- Elements: Avatar/initials (h-12 w-12 rounded-full), name (text-lg font-semibold), role/grade (text-sm), quick stats (grid-cols-2 gap-2), action button
- Hover: Subtle lift effect (shadow-md transition)

**Portfolio Evidence Cards**:
- Aspect ratio: 16:9 for thumbnails
- Layout: Image/preview at top, metadata below (p-4)
- Elements: Thumbnail, competency tags (inline-flex gap-2), upload date, file type icon, view button
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4

**Notification Items**:
- Height: min-h-16
- Layout: Flex with icon (h-10 w-10), content area, timestamp, dismiss button
- Unread indicator: Left border (border-l-4) or dot badge
- Group by date with section headers

### Form Components

**Input Fields**:
- Height: h-12
- Padding: px-4
- Border: Rounded-lg with focus ring (ring-2)
- Labels: text-sm font-medium mb-2
- Helper text: text-xs mt-1
- Error state: Red border with error message below

**Dropdowns/Selects**:
- Height: h-12
- Chevron icon at right
- Menu: Rounded-lg shadow-lg with max-h-60 overflow-auto
- Options: px-4 py-3 hover state

**Checkboxes/Radio Buttons**:
- Size: h-5 w-5
- Label spacing: ml-3
- Group spacing: space-y-3

**File Upload Zone**:
- Dashed border with rounded-lg
- Drag-and-drop area: min-h-32 with centered icon and text
- File list below with remove buttons
- Support for multiple file types (PDFs, images, videos)

### Data Visualization

**Charts** (Using Chart.js or Recharts):
- Container: Responsive with min-h-64 to min-h-96
- Legend: Below chart with horizontal layout
- Grid lines: Subtle for readability
- Tooltips: Shadow-lg with rounded corners

**Competency Level Badges**:
- Size: Inline tags at px-3 py-1
- Rounded: rounded-full
- Text: text-xs font-semibold uppercase
- Levels: E (Emerging), D (Developing), A (Achieving), Ex (Excelling)

### Modal/Overlay Components

**Modal Dialogs**:
- Max width: max-w-2xl (standard) or max-w-4xl (large)
- Padding: p-8
- Header: pb-6 border-b with close button
- Content: py-6
- Footer: pt-6 border-t with action buttons

**Slideover Panels** (for filters, details):
- Width: w-96
- Full height from top
- Padding: p-6
- Close button at top-right

### Communication Components

**Message Thread**:
- Messages: Alternating alignment (left for received, right for sent)
- Bubble: max-w-lg rounded-lg p-4
- Timestamp: text-xs below bubble
- Input: Fixed at bottom with h-12 input and send button

**Announcement Banners**:
- Full-width at top of content area
- Padding: px-6 py-4
- Dismissible with close icon
- Rounded-lg with shadow-sm

---

## Responsive Patterns

**Dashboard Layout**:
- Desktop: Sidebar (w-64) + main content (flex-1)
- Tablet: Collapsible sidebar (overlay) + full-width content
- Mobile: Bottom navigation + full-width content

**Content Reflow**:
- 4-column grids → 2 columns → 1 column
- Side-by-side forms → stacked forms
- Horizontal tabs → dropdown selector
- Data tables → card view with expandable rows

---

## Accessibility Standards

- All interactive elements minimum h-12 w-12 touch target
- Focus states with visible ring-2 outline
- ARIA labels on icon-only buttons
- Keyboard navigation support throughout
- Skip navigation links for screen readers
- Sufficient contrast ratios (minimum WCAG AA)
- Form validation with clear error messaging

---

## Role-Specific Variations

**Teacher Dashboard**: Dense information layout with quick-access toolbars, emphasis on class-wide views and competency tracking grids

**Student Dashboard**: Gamified progress visualizations, larger portfolio previews, motivational language, simpler navigation

**Parent Dashboard**: Clear, jargon-free labels, prominent fee information, child-centric organization, simplified competency explanations

**Administrator Dashboard**: Executive-level KPI cards, school-wide trends, system health indicators, bulk action capabilities

---

## Animation Guidelines

**Use Sparingly**:
- Page transitions: None - instant navigation for productivity
- Component reveals: Subtle fade-in on data load (200ms)
- Interactive feedback: Scale on button press (transform scale-95), progress bar fills
- Loading states: Skeleton screens for data tables and cards

---

## Images

**Not Required**: This is a data-driven enterprise application where functionality trumps visual imagery. Focus on clear data presentation and intuitive navigation rather than decorative hero images.