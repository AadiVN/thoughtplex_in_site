# ThoughtPlex India Website

A modern, responsive website for ThoughtPlex India - a premium software consultancy and architecture firm built with React, Vite, and Tailwind CSS.

## Features

- ✅ Modern React application with Vite
- ✅ Responsive design with Tailwind CSS
- ✅ React Router for navigation
- ✅ Font Awesome icons
- ✅ SEO optimized with meta tags and structured data
- ✅ Multiple pages (Home, Privacy Policy, Terms, Sitemap)
- ✅ Contact form with validation
- ✅ Mobile-friendly navigation
- ✅ Smooth scrolling
- ✅ Custom animations

## Project Structure

```
thoughtplex_uk_site/
├── public/
│   ├── robots.txt          # SEO robots file
│   └── sitemap.xml         # XML sitemap
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Services.jsx    # Services section
│   │   ├── WhyUs.jsx       # Why choose us section
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer component
│   ├── pages/              # Page components
│   │   ├── HomePage.jsx    # Main landing page
│   │   ├── PrivacyPolicy.jsx
│   │   ├── Terms.jsx
│   │   └── Sitemap.jsx
│   ├── App.jsx             # Main App with routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Tailwind CSS + custom styles
├── refs/                   # Reference HTML files
├── index.html              # HTML template with SEO meta tags
├── package.json
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── vite.config.js          # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. The project is already set up in:
```bash
cd d:\React\Apps\thoughtplex_uk_site
```

2. Dependencies are already installed. If needed, run:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icon library
- **PostCSS** - CSS processing

## Pages

### Home Page (/)
- Hero section with call-to-action
- About section
- Services showcase
- Why choose us
- Contact form

### Legal Pages
- `/privacy-policy` - Privacy policy
- `/terms` - Terms of service
- `/sitemap` - HTML sitemap

## Customization

### Updating Content

1. **Company Information**: Update contact details in `src/components/Contact.jsx` and `src/components/Footer.jsx`
2. **Services**: Modify the services array in `src/components/Services.jsx`
3. **Colors**: Update the Tailwind theme in `tailwind.config.js`
4. **SEO**: Update meta tags in `index.html`

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update the sitemap in `public/sitemap.xml`

## SEO Optimization

The site includes:
- Meta tags for search engines
- Open Graph tags for social media
- Twitter Card tags
- Structured data (JSON-LD)
- XML sitemap
- Robots.txt
- Canonical URLs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2025 ThoughtPlex UK. All rights reserved.

## Contact

For questions or support, please contact:
- Email: info@thoughtplex.co.uk
- Phone: +44 20 1234 5678
- Website: https://thoughtplex.co.uk

## Development Notes

This project was converted from static HTML files (available in `refs/` directory) to a modern React application while maintaining all the original design and functionality.
# thoughtplex-uk
# thoughtplex-uk
