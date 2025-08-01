# Green & Clean Services - React Website

A responsive multi-page React website for a local gardening and domestic cleaning service, built with TypeScript and TailwindCSS.

## Features

- **Homepage**: Hero section with service overview and call-to-action
- **Services Page**: Detailed descriptions of Garden Maintenance and Home Cleaning services with pricing
- **Meet the Team**: Team member profiles and company values
- **Contact Form**: Validated contact form with business information
- **Bookings Calendar**: Interactive calendar with appointment booking system
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Form Validation**: Using react-hook-form for robust form handling

## Technologies Used

- React 18 with TypeScript
- React Router for navigation
- TailwindCSS for styling
- React Hook Form for form validation
- React Calendar for booking system
- Lucide React for icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd gardening-cleaning-service
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

To create a production build:
```bash
npm run build
```

The build files will be in the `build` directory.

## Project Structure

```
src/
├── assets/         # Images and static assets
├── components/     # Reusable components (Navigation, Footer)
├── pages/          # Page components
├── App.tsx         # Main app component with routing
├── index.tsx       # App entry point
└── index.css       # Global styles and Tailwind imports
```

## Key Features

### Navigation
- Responsive mobile menu
- Sticky navigation bar
- Smooth transitions

### Services
- Two main services: Garden Maintenance and Home Cleaning
- Detailed service descriptions
- Pricing information
- Visual service cards with hover effects

### Booking System
- Interactive calendar
- Date selection (excluding Sundays and past dates)
- Time slot selection
- Comprehensive booking form
- Form validation

### Contact Form
- Full validation
- Multiple contact methods displayed
- Success feedback

## Customization

### Colors
The site uses a green and blue color scheme. To change colors, modify the Tailwind classes throughout the components.

### Content
Update the text content directly in the component files:
- Company name in `Navigation.tsx`
- Service descriptions in `ServicesPage.tsx`
- Team members in `TeamPage.tsx`
- Contact information in `ContactPage.tsx` and `Footer.tsx`

### Images
Replace the SVG placeholder images in `src/assets/images/` with your own images.

## Future Enhancements

- Backend integration for form submissions
- Email notifications
- Online payment integration
- Customer portal
- Service history tracking
- Real-time availability checking

## License

This project is created for demonstration purposes.