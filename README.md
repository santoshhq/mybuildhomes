# My Build Homes Website

A professional, responsive website for My Build Homes construction company, built with HTML, CSS, and JavaScript.

## 📋 Project Overview

This website showcases My Build Homes' construction services, portfolio, and provides an easy way for customers to get in touch. The site is fully responsive and optimized for mobile, tablet, and desktop devices.

## 🚀 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Contact Form**: Fully validated contact form with real-time error handling
- **Portfolio Gallery**: Showcase of completed projects with hover effects
- **About Us Page**: Dedicated page featuring the founder and company values
- **Service Sections**: Clear presentation of construction services offered
- **Smooth Navigation**: Sticky navigation bar with smooth scrolling
- **Mobile Menu**: Hamburger menu for mobile devices

## 📁 Project Structure

```
mybuildshomes/
│
├── index.html              # Main homepage
├── about.html              # About Us page
│
├── css/
│   └── styles.css          # All styling and responsive design
│
├── js/
│   └── script.js           # JavaScript for interactions and validation
│
├── images/                 # Folder for images (optional)
│
├── mybuildhomes_logo.png   # Company logo (place your logo here)
├── ownerimage.png          # Owner photo (place owner image here)
│
└── README.md               # This file
```

## 🛠️ Installation & Setup

1. **Download or Clone** this project to your local machine

2. **Add Required Images**:
   - Place your company logo as `mybuildhomes_logo.png` in the root directory
   - Place the owner's image as `ownerimage.png` in the root directory

3. **Open in Browser**:
   - Simply open `index.html` in any modern web browser
   - No build process or server required!

## 📱 Pages & Sections

### Homepage (index.html)

1. **Hero Section**: Eye-catching banner with call-to-action
2. **Services Section**: Four main service offerings
3. **Portfolio Section**: Gallery of completed projects
4. **Contact Section**: Contact form and company information
5. **Footer**: Quick links and social media

### About Us Page (about.html)

1. **Page Hero**: Introduction banner
2. **Company Story**: Background and mission
3. **Owner Section**: Founder profile with image and biography
4. **Core Values**: Company values and principles
5. **Statistics**: Key achievements and numbers
6. **Why Choose Us**: Competitive advantages

## 📝 Contact Form Fields

The contact form includes the following fields with validation:

- **First Name** (required, min 2 characters, letters only)
- **Last Name** (required, min 2 characters, letters only)
- **Contact Number** (required, min 10 digits)
- **Message** (required, min 10 characters, max 1000 characters)

### Form Validation Rules:

- Real-time validation on field blur
- Error messages displayed below each field
- Success message shown after submission
- Form prevents submission if validation fails

## 🎨 Customization Guide

### Changing Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #ff6b35;      /* Orange accent color */
    --secondary-color: #004e89;    /* Blue primary color */
    --dark-color: #1a1a2e;         /* Dark text color */
    --light-color: #f7f7f7;        /* Light background */
}
```

### Updating Content

1. **Company Information**: Edit text content directly in HTML files
2. **Images**: Replace portfolio images by changing URLs in HTML
3. **Contact Details**: Update address, phone, and email in the contact section

### Adding More Portfolio Items

In `index.html`, add more items to the portfolio grid:

```html
<div class="portfolio-item">
    <img src="YOUR_IMAGE_URL" alt="Project Name">
    <div class="portfolio-overlay">
        <h3>Project Name</h3>
        <p>Project Description</p>
    </div>
</div>
```

## 🌐 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Form validation and interactions
- **Font Awesome 6.4.0**: Icons
- **Unsplash**: Placeholder images for portfolio

## ⚙️ JavaScript Features

### Navigation
- Mobile hamburger menu toggle
- Smooth scrolling to sections
- Active section highlighting
- Sticky navbar on scroll

### Form Validation
- Real-time field validation
- Custom error messages
- Success message display
- Form data console logging (ready for backend integration)

### User Experience
- Scroll animations
- Image lazy loading effects
- Newsletter subscription handler

## 🚀 Deployment

### Option 1: Simple Hosting
Upload all files to any web hosting service via FTP.

### Option 2: GitHub Pages
1. Create a GitHub repository
2. Push your code
3. Enable GitHub Pages in repository settings

### Option 3: Netlify/Vercel
1. Connect your repository
2. Deploy automatically with every push

## 🔒 Form Backend Integration

The contact form is currently set up for frontend validation only. To connect it to a backend:

1. **Using PHP** (example):
```javascript
fetch('contact.php', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
})
```

2. **Using FormSpree** or **Netlify Forms** for easy integration

3. **Using Email Services** like EmailJS or SendGrid

## 📞 Support & Updates

### To Update Content:
- Edit HTML files directly in any text editor
- No technical knowledge required for content changes
- Comments in code explain each section

### Need Help?
- All code is well-commented for easy understanding
- Each section is clearly labeled
- Modular structure makes updates simple

## 📄 License

This project is created for My Build Homes. All rights reserved.

## 🎯 Future Enhancements (Optional)

- [ ] Blog section for company updates
- [ ] Client testimonials slider
- [ ] Project filtering in portfolio
- [ ] Interactive map for location
- [ ] Live chat integration
- [ ] Multilingual support
- [ ] Dark mode toggle

## 👤 About

**Company**: My Build Homes  
**Founder**: Adithya  
**Purpose**: Professional construction company website

---

**Built with ❤️ for My Build Homes**

For any questions or modifications, refer to the code comments in each file.
