# Acacia Camp Component Library

This document provides an overview of the reusable UI components available in the Acacia Camp website.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Layout Components](#layout-components)
- [Form Components](#form-components)
- [Display Components](#display-components)
- [Navigation Components](#navigation-components)
- [Feedback Components](#feedback-components)
- [Developer Dashboard Components](#developer-dashboard-components)
- [Admin Dashboard Components](#admin-dashboard-components)
- [Animation Guidelines](#animation-guidelines)

## Introduction

The Acacia Camp component library is built with React, TypeScript, and Tailwind CSS. It follows the principles of shadcn/ui, providing a set of accessible, reusable, and composable components for building the website interface.

## Getting Started

### Prerequisites

- React 18+
- TypeScript 4.9+
- Tailwind CSS 3.3+
- Node.js 16+

### Installation

All components are included in the project in the `src/components` directory. No additional installation is required.

### Usage

Import components from their respective locations:

```tsx
// Example: Importing a button component
import { Button } from '@/components/ui/button';

// Using the component
function MyComponent() {
  return (
    <Button variant="primary" size="lg">
      Click Me
    </Button>
  );
}
```

## Layout Components

### Container

A wrapper component for consistent page layouts.

```tsx
import { Container } from '@/components/layout/Container';

<Container>
  <h1>Page content here</h1>
</Container>
```

**Props:**

| Prop        | Type     | Default      | Description                           |
|-------------|----------|--------------|---------------------------------------|
| children    | ReactNode| required     | Content to display                    |
| className   | string   | ''           | Additional CSS classes                |
| maxWidth    | string   | '7xl'        | Max width: sm, md, lg, xl, 2xl, etc.  |

### Card

A versatile card component for displaying content.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Room Booking</CardTitle>
    <CardDescription>Book your stay at Acacia Camp</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content here</p>
  </CardContent>
  <CardFooter>
    <Button>Book Now</Button>
  </CardFooter>
</Card>
```

### Grid

A responsive grid layout component.

```tsx
import { Grid } from '@/components/layout/Grid';

<Grid cols={3} gap={6}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

**Props:**

| Prop        | Type     | Default      | Description                           |
|-------------|----------|--------------|---------------------------------------|
| children    | ReactNode| required     | Content to display                    |
| cols        | number   | 1            | Number of columns                     |
| gap         | number   | 4            | Gap size (Tailwind spacing)           |
| className   | string   | ''           | Additional CSS classes                |

## Form Components

### Input

Standard text input component.

```tsx
import { Input } from '@/components/ui/input';

<Input
  type="text"
  placeholder="Enter your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

**Props:**

| Prop        | Type     | Default      | Description                           |
|-------------|----------|--------------|---------------------------------------|
| type        | string   | 'text'       | Input type (text, email, password)    |
| placeholder | string   | ''           | Placeholder text                      |
| value       | string   | ''           | Input value                           |
| onChange    | function | () => {}     | Change handler                        |
| disabled    | boolean  | false        | Disabled state                        |
| className   | string   | ''           | Additional CSS classes                |

### Select

Dropdown selection component.

```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

<Select value={value} onValueChange={(value) => setValue(value)}>
  <SelectTrigger>
    <SelectValue placeholder="Select a room type" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="standard">Standard Room</SelectItem>
    <SelectItem value="deluxe">Deluxe Suite</SelectItem>
    <SelectItem value="premium">Premium Suite</SelectItem>
  </SelectContent>
</Select>
```

### Checkbox

Checkbox input component.

```tsx
import { Checkbox } from '@/components/ui/checkbox';

<Checkbox
  id="terms"
  checked={checked}
  onCheckedChange={(checked) => setChecked(checked)}
/>
<label htmlFor="terms">I agree to the terms and conditions</label>
```

### DatePicker

Date selection component.

```tsx
import { DatePicker } from '@/components/ui/date-picker';

<DatePicker
  selected={date}
  onSelect={(date) => setDate(date)}
  minDate={new Date()}
  placeholder="Select a date"
/>
```

### Button

Versatile button component with multiple variants.

```tsx
import { Button } from '@/components/ui/button';

<Button variant="primary" size="default">
  Primary Button
</Button>

<Button variant="outline" size="sm">
  Outline Button
</Button>

<Button variant="destructive" size="lg" disabled>
  Destructive Button
</Button>
```

**Props:**

| Prop        | Type     | Default      | Description                           |
|-------------|----------|--------------|---------------------------------------|
| variant     | string   | 'default'    | Button style variant                  |
| size        | string   | 'default'    | Button size                           |
| disabled    | boolean  | false        | Disabled state                        |
| className   | string   | ''           | Additional CSS classes                |
| children    | ReactNode| required     | Button content                        |
| onClick     | function | () => {}     | Click handler                         |

## Display Components

### RoomCard

Component for displaying room information.

```tsx
import { RoomCard } from '@/components/RoomCard';

<RoomCard
  id="123"
  name="Deluxe Suite"
  description="Spacious suite with mountain view"
  price={299.99}
  capacity={4}
  type="suite"
  imageUrl="/images/rooms/deluxe-suite.jpg"
/>
```

**Props:**

| Prop        | Type     | Default      | Description                           |
|-------------|----------|--------------|---------------------------------------|
| id          | string   | required     | Room ID                               |
| name        | string   | required     | Room name                             |
| description | string   | ''           | Room description                      |
| price       | number   | required     | Price per night                       |
| capacity    | number   | required     | Maximum occupancy                     |
| type        | string   | required     | Room type                             |
| imageUrl    | string   | required     | Room image URL                        |

### Badge

Small status indicator component.

```tsx
import { Badge } from '@/components/ui/badge';

<Badge variant="success">Available</Badge>
<Badge variant="warning">Almost Full</Badge>
<Badge variant="danger">Sold Out</Badge>
```

### Separator

Horizontal or vertical line separator.

```tsx
import { Separator } from '@/components/ui/separator';

<div className="flex flex-col space-y-4">
  <h2>Section 1</h2>
  <Separator />
  <h2>Section 2</h2>
</div>
```

### Avatar

User avatar component.

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

<Avatar>
  <AvatarImage src="/images/avatars/user.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

## Navigation Components

### Navbar

Main navigation component.

```tsx
import Navbar from '@/components/Navbar';

<Navbar />
```

### Footer

Site footer component.

```tsx
import Footer from '@/components/Footer';

<Footer />
```

### Tabs

Tabbed interface component.

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="amenities">Amenities</TabsTrigger>
    <TabsTrigger value="reviews">Reviews</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="amenities">Amenities content</TabsContent>
  <TabsContent value="reviews">Reviews content</TabsContent>
</Tabs>
```

### Breadcrumb

Navigation breadcrumb component.

```tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';

<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href="/">Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href="/rooms">Rooms</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink>Deluxe Suite</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
```

## Feedback Components

### Alert

Informational alert component.

```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

<Alert variant="info">
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>Your booking has been confirmed.</AlertDescription>
</Alert>
```

### Toast

Temporary notification component.

```tsx
import { useToast } from '@/components/ui/use-toast';

function MyComponent() {
  const { toast } = useToast();
  
  const showToast = () => {
    toast({
      title: "Booking Confirmed",
      description: "Your room has been successfully booked.",
      variant: "success"
    });
  };
  
  return (
    <Button onClick={showToast}>Book Room</Button>
  );
}
```

### Dialog

Modal dialog component.

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm Booking</DialogTitle>
      <DialogDescription>
        Are you sure you want to book this room?
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Progress

Progress indicator component.

```tsx
import { Progress } from '@/components/ui/progress';

<Progress value={60} max={100} />
```

## Developer Dashboard Components

### ThemeEditor

Component for editing website themes.

```tsx
import { ThemeEditor } from '@/components/developer/ThemeEditor';

<ThemeEditor
  theme={{
    id: '123',
    name: 'Default Theme',
    primaryColor: '#4F46E5',
    secondaryColor: '#10B981',
    backgroundColor: '#FFFFFF',
    headingFont: 'Inter',
    bodyFont: 'Inter',
    baseFontSize: '16px'
  }}
  onSave={(theme) => saveTheme(theme)}
/>
```

### ComponentEditor

Component for editing UI components.

```tsx
import { ComponentEditor } from '@/components/developer/ComponentEditor';

<ComponentEditor
  component={{
    id: '123',
    name: 'Button',
    template: '<Button>Click Me</Button>'
  }}
  onSave={(component) => saveComponent(component)}
/>
```

## Admin Dashboard Components

### UserTable

Component for displaying and managing users.

```tsx
import { UserTable } from '@/components/admin/UserTable';

<UserTable
  users={users}
  onEdit={(user) => editUser(user)}
  onDelete={(userId) => deleteUser(userId)}
/>
```

### BookingTable

Component for displaying and managing bookings.

```tsx
import { BookingTable } from '@/components/admin/BookingTable';

<BookingTable
  bookings={bookings}
  onStatusChange={(bookingId, status) => updateBookingStatus(bookingId, status)}
/>
```

### StatsCard

Component for displaying statistics.

```tsx
import { StatsCard } from '@/components/admin/StatsCard';

<StatsCard
  title="Total Bookings"
  value={153}
  icon={<CalendarIcon />}
  trend={12}
  trendLabel="Increase from last month"
/>
```

## Animation Guidelines

Acacia Camp uses Framer Motion for animations. Follow these guidelines for consistent animations:

### Page Transitions

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
  Page content
</motion.div>
```

### Element Animations

```tsx
import { motion } from 'framer-motion';

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  Animated Button
</motion.button>
```

### Staggered List Animations

```tsx
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

<motion.ul
  variants={container}
  initial="hidden"
  animate="show"
>
  {items.map((item) => (
    <motion.li key={item.id} variants={item}>
      {item.name}
    </motion.li>
  ))}
</motion.ul>
``` 