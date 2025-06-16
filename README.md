# 🥤 Supa Smoothies

A modern React web application for managing smoothie recipes, built with Supabase as the backend database. This project demonstrates full CRUD (Create, Read, Update, Delete) operations with a beautiful, responsive user interface.

## ✨ Features

- **📝 Create Smoothies** - Add new smoothie recipes with title, method, and rating
- **📋 View All Smoothies** - Browse all smoothie recipes in a responsive card grid
- **✏️ Edit Smoothies** - Update existing smoothie recipes
- **🗑️ Delete Smoothies** - Remove smoothie recipes with instant UI updates
- **🔄 Sort & Filter** - Order smoothies by creation date, title, or rating
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **🎨 Modern UI** - Clean design with hover effects and smooth animations

## 🛠️ Tech Stack

- **Frontend:** React 18, React Router DOM
- **Backend:** Supabase (PostgreSQL database)
- **Styling:** Custom CSS with CSS Grid and Flexbox
- **Icons:** Material Icons
- **Deployment:** GitHub

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Nebulaz7/supa-smoothies.git
   cd supa-smoothies
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   REACT_APP_SUPABASE_URL=your_supabase_project_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase database**
   Create a table called `smoothies` with the following structure:

   ```sql
   CREATE TABLE smoothies (
     id SERIAL PRIMARY KEY,
     title TEXT NOT NULL,
     method TEXT NOT NULL,
     rating INTEGER CHECK (rating >= 1 AND rating <= 10),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

5. **Start the development server**

   ```bash
   npm start
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── components/
│   └── smoothieCard.js      # Individual smoothie card component
├── config/
│   └── supabaseClient.js    # Supabase configuration
├── pages/
│   ├── Home.js              # Main page with smoothie grid
│   ├── Create.js            # Create new smoothie form
│   └── Update.js            # Edit existing smoothie form
├── App.js                   # Main app component with routing
├── index.css                # Global styles
└── index.js                 # React entry point
```

## 🎯 Key Functionalities

### Home Page

- Displays all smoothie recipes in a responsive grid
- Sort smoothies by creation date, title, or rating
- Delete smoothies with instant UI feedback
- Navigate to edit page for each smoothie

### Create Page

- Form to add new smoothie recipes
- Input validation for all fields
- Success feedback and error handling

### Update Page

- Pre-populated form with existing smoothie data
- Update any field (title, method, rating)
- Navigate back after successful update

## 🎨 Design Features

- **Modern Card Design** - Clean white cards with subtle shadows
- **Gradient Buttons** - Beautiful gradient backgrounds using CSS custom properties
- **Hover Effects** - Smooth animations on hover for better UX
- **Responsive Layout** - CSS Grid automatically adjusts to screen size
- **Form Styling** - Professional form design with focus states
- **Color Scheme** - Consistent color palette with CSS variables

## 🔗 Database Schema

The application uses a simple `smoothies` table with the following fields:

| Field        | Type      | Description                          |
| ------------ | --------- | ------------------------------------ |
| `id`         | SERIAL    | Primary key, auto-increment          |
| `title`      | TEXT      | Name of the smoothie                 |
| `method`     | TEXT      | Instructions for making the smoothie |
| `rating`     | INTEGER   | Rating from 1-10                     |
| `created_at` | TIMESTAMP | Auto-generated creation timestamp    |

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Supabase** for providing an excellent backend-as-a-service
- **React** team for the amazing frontend framework
- **Material Design** for the beautiful icons

---

**Built with ❤️ using React and Supabase**
