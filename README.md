# Personal Website

A modern, responsive personal website built with HTML, CSS, and JavaScript. Features a clean design with smooth animations and mobile-friendly navigation.

## Features

- ✨ **Modern Design**: Clean and professional layout with gradient backgrounds
- 📱 **Responsive**: Fully responsive design that works on all devices
- 🎨 **Smooth Animations**: CSS animations and JavaScript interactions
- 🧭 **Navigation**: Fixed header with smooth scrolling navigation
- 📝 **Contact Form**: Functional contact form with validation
- 🎯 **SEO Friendly**: Semantic HTML structure
- ⚡ **Fast Loading**: Optimized for performance

## File Structure

```
personal website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Customize content**: Edit the HTML file to update your personal information
3. **Modify styling**: Adjust colors, fonts, and layout in `styles.css`
4. **Add functionality**: Enhance interactivity in `script.js`

## Customization Guide

### Personal Information

Update the following sections in `index.html`:

- **Name**: Change "Your Name" in the header and footer
- **Hero Section**: Update the title and subtitle
- **About Section**: Modify the description and skills
- **Projects**: Add your own projects with descriptions and links
- **Contact Information**: Update email, phone, and location

### Styling

The website uses a modern color scheme with blue accents. You can customize colors in `styles.css`:

```css
/* Primary color */
--primary-color: #2563eb;

/* Gradient backgrounds */
--hero-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adding Projects

To add a new project, copy this structure in the projects section:

```html
<div class="project-card">
    <div class="project-image">
        <div class="placeholder-image">
            <span>🚀</span> <!-- Change emoji or add image -->
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description goes here.</p>
        <div class="project-links">
            <a href="#" class="project-link">Live Demo</a>
            <a href="#" class="project-link">GitHub</a>
        </div>
    </div>
</div>
```

### Contact Form

The contact form includes basic validation and simulates form submission. To make it functional:

1. Replace the JavaScript form handling in `script.js`
2. Add your preferred form submission method (email service, API, etc.)
3. Update the success message and error handling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- **Optimized Images**: Uses CSS gradients and emojis instead of heavy images
- **Minimal Dependencies**: Only uses Google Fonts (Inter)
- **Efficient CSS**: Uses modern CSS features like Grid and Flexbox
- **Smooth Animations**: Hardware-accelerated CSS transitions

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- High contrast colors
- Screen reader friendly

## Deployment

You can deploy this website to any static hosting service:

- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **Netlify**: Drag and drop the folder to Netlify
- **Vercel**: Connect your repository to Vercel
- **Firebase Hosting**: Use Firebase CLI to deploy

## Customization Tips

1. **Add Real Images**: Replace placeholder emojis with actual project screenshots
2. **Include Social Links**: Add your actual social media profiles
3. **Add Analytics**: Include Google Analytics or other tracking
4. **SEO Optimization**: Add meta tags and Open Graph data
5. **Custom Domain**: Point your domain to the hosting service

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing this website or have questions, feel free to reach out!

---

**Built with ❤️ for the web** 